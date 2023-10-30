import { ToastContainer } from "react-toastify";
import { useOrders } from "utils/hooks/useOrders";
import { useAppSelector } from "utils/hooks/redux";
import { OrdersList } from "components/ordersList/OrdersList";
import style from "./style.module.scss";

export const Orders = () => {
  const user = useAppSelector((state) => state.userReducer);
  const { orders, getOrders } = useOrders(user.data.token);
  return (
    <div className={style.orders}>
      <ToastContainer />
      <h2 className={style.title}>Последние заказы</h2>
      <OrdersList orders={orders} getOrders={getOrders} />
    </div>
  );
};
