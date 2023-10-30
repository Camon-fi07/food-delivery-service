import { ToastContainer } from "react-toastify";
import style from "./style.module.scss";
import { useOrders } from "utils/hooks/getOrders";
import { useAppSelector } from "utils/hooks/redux";
import { OrdersList } from "components/ordersList/OrdersList";

export const Orders = () => {
  const user = useAppSelector((state) => state.userReducer);
  const orders = useOrders(user.data.token);
  return (
    <div className={style.orders}>
      <ToastContainer />
      <h2 className={style.title}>Последние заказы</h2>
      <OrdersList orders={orders} />
    </div>
  );
};
