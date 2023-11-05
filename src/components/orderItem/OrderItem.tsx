import { OrderItemOnfo, OrderStatus, OrderStatusTranslate } from "utils/types/Order";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { convertDate } from "utils/helpers/convertDate";

export const OrderItem = ({ order, onConfirm }: OrderItemOnfo) => {
  return (
    <div className={style.order_item}>
      <div className={style.description}>
        <Link to={`/order/${order.id}`}>Заказ от {convertDate(order.orderTime)}</Link>
        <span>Статус заказа - {OrderStatusTranslate[order.status]}</span>
        <span>
          {order.status === OrderStatus.InProcess ? "Доставка ожидается в " : "Доставлен: "}
          {convertDate(order.deliveryTime)}
        </span>
      </div>
      <div className={style.delivery}>
        {order.status === OrderStatus.InProcess ? <button onClick={onConfirm}>Подтвердить доставку</button> : ""}
        <span>
          <b>Стоимость заказа:</b> {order.price} руб.
        </span>
      </div>
    </div>
  );
};
