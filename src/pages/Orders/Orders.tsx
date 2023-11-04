import { useAppSelector } from "utils/hooks/redux";
import { OrdersList } from "components/ordersList/OrdersList";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useGetRequest } from "utils/hooks/useGetRequest";
import { order } from "utils/consts/apiUrls";
import { OrderInfoDto } from "utils/types/Order";
import style from "./style.module.scss";

export const Orders = () => {
  const user = useAppSelector((state) => state.userReducer);
  const { data, getData } = useGetRequest<OrderInfoDto[]>(
    order,
    () => toast.error("Произошла ошибка при загрузке", { theme: "dark", autoClose: 1000 }),
    user.data.token,
  );
  const cart = useAppSelector((state) => state.cartReducer);
  return (
    <div className={style.orders}>
      <ToastContainer />
      {data ? (
        <>
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
          <OrdersList orders={data} getOrders={getData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
