import { useOrders } from "utils/hooks/useOrders";
import { useAppSelector } from "utils/hooks/redux";
import { OrdersList } from "components/ordersList/OrdersList";
import style from "./style.module.scss";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Orders = () => {
  const user = useAppSelector((state) => state.userReducer);
  const { orders, getOrders } = useOrders(user.data.token, () =>
    toast.error("Произошла ошибка при загрузке", { theme: "dark", autoClose: 1000 }),
  );
  const cart = useAppSelector((state) => state.cartReducer);
  return (
    <div className={style.orders}>
      <ToastContainer />
      {cart.dishes.length ? (
        <div className={style.purchase_alert}>
          <span>В корзине есть блюда, можно оформить заказ</span>
          <Link className={style.link} to={"/purchase"}>
            Оформить
          </Link>
        </div>
      ) : (
        ""
      )}
      <h2 className={style.title}>Последние заказы</h2>
      <OrdersList orders={orders} getOrders={getOrders} />
    </div>
  );
};
