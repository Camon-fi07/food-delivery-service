import { OrderInfoDto } from "utils/types/Order";
import style from "./style.module.scss";
export const OrdersList = ({ orders }: { orders: OrderInfoDto[] }) => {
  return (
    <section className={style.dishes_list}>
      {orders.map((order, index) => (
        <span>{order.id}</span>
      ))}
    </section>
  );
};
