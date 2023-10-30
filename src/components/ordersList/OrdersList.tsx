import { OrderInfoDto } from "utils/types/Order";
import style from "./style.module.scss";
import { OrderItem } from "components/orderItem/OrderItem";
export const OrdersList = ({ orders }: { orders: OrderInfoDto[] }) => {
  return (
    <section className={style.orders_list}>
      {orders.map((order) => (
        <OrderItem order={order} />
      ))}
    </section>
  );
};
