import style from "./style.module.scss";
import { DishCountPanel } from "components/dishCountPanel/DIshCountPanel";
import { CartItemInfo } from "utils/types/CartInfo";

export const CartItem = (props: CartItemInfo) => {
  return (
    <article className={`${style.cart_item} ${!props.canChange ? style.order_item : ""}`}>
      <span className={style.index}>{props.index}.</span>
      <div className={style.image}>
        <img src={props.dish.image} />
      </div>
      <div className={style.description}>
        <h2 className={style.title}>{props.dish.name}</h2>
        <p className={style.cost}>Цена/шт: {props.dish.price} ₽</p>
        {!props.canChange ? <span>Количество: {props.dish.amount}шт</span> : ""}
      </div>
      {props.canChange ? <DishCountPanel dishId={props.dish.id} /> : ""}
      {props.canChange ? (
        <button onClick={props.delete} className={style.delete_btn}>
          Удалить
        </button>
      ) : (
        <span className={style.total_price}>
          <b>Стоимость:</b> {props.dish.totalPrice} ₽
        </span>
      )}
    </article>
  );
};
