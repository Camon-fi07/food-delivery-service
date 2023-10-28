import style from "./style.module.scss";
import { DishCountPanel } from "components/dishCountPanel/DIshCountPanel";
import { CartItemInfo } from "utils/types/CartItemInfo";

export const CartItem = (props: CartItemInfo) => {
  return (
    <article className={style.cart_item}>
      <span>{props.index}</span>
      <div className={style.image}>
        <img src={props.dish.image} />
      </div>
      <h2 className={style.title}>{props.dish.name}</h2>
      <p className={style.cost}>{props.dish.price}</p>
      <DishCountPanel dishId={props.dish.id} />
      <button onClick={props.delete} className={style.delete_btn}></button>
    </article>
  );
};
