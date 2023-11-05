import { OrderListOnfo } from "utils/types/Order";
import { OrderItem } from "components/orderItem/OrderItem";
import { useAppSelector } from "utils/hooks/redux";
import { confirmOrder } from "utils/helpers/confirmOrder";
import style from "./style.module.scss";
export const OrdersList = ({ orders, getOrders }: OrderListOnfo) => {
  const user = useAppSelector((state) => state.userReducer);
  return (
    <ul className={style.orders_list}>
      {orders.map((order) => (
        <li>
          <OrderItem
            onConfirm={() => {
              confirmOrder(order.id, user.data.token, getOrders);
            }}
            order={order}
          />
        </li>
      ))}
    </ul>
  );
};
