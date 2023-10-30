import { useOrders } from "utils/hooks/useOrders";
import { useAppSelector } from "utils/hooks/redux";
import { OrdersList } from "components/ordersList/OrdersList";
import style from "./style.module.scss";
import { ToastContainer, toast } from "react-toastify";

export const Orders = () => {
  const user = useAppSelector((state) => state.userReducer);
  const { orders, getOrders } = useOrders(user.data.token, () =>
    toast.error("Произошла ошибка при загрузке", { theme: "dark", autoClose: 1000 }),
  );
  return (
    <div className={style.orders}>
      <ToastContainer />
      <h2 className={style.title}>Последние заказы</h2>
      <OrdersList orders={orders} getOrders={getOrders} />
    </div>
  );
};
