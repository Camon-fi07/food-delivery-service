import { OrderInfoDto, OrderStatus, OrderStatusTranslate } from "utils/types/Order";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const OrderItem = ({ order }: { order: OrderInfoDto }) => {
  return (
    <article className={style.order_item}>
      <div className={style.description}>
        <Link to={`/order/:${order.id}`}>Заказ от {order.orderTime}</Link>
        <span>Статус заказа - {OrderStatusTranslate[order.status]}</span>
        <span>
          {order.status === OrderStatus.InProcess ? "Доставка ожидается в " : "Доставлен: "}
          {order.deliveryTime}
        </span>
      </div>
      <div className={style.delivery}>
        {order.status === OrderStatus.InProcess ? <button>Подтвердить доставку</button> : ""}
        <span>
          <b>Стоимость заказа:</b> {order.price} руб.
        </span>
      </div>
    </article>
  );
};
