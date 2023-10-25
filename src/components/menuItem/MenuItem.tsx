import { MenuItemInfo } from "utils/types/MenuItemInfo";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const MenuItem = (props: MenuItemInfo) => {
  return (
    <article className={style.menu_item}>
      <Link to={`item/${props.dish.id}`}>
        <div className={style.image}>
          <img src={props.dish.image} />
        </div>
      </Link>
      <Link to={`item/${props.dish.id}`}>
        <h2 className={style.title}>{props.dish.name}</h2>
      </Link>

      <p className={style.categories}>
        <span>Категория блюда</span> - {props.dish.category}
      </p>
      <p className={style.rating}>{props.dish.rating}</p>
      <p className={style.description}>{props.dish.description}</p>
      <p className={style.cost}>{props.dish.price} ₽</p>
      <div className={style.buy_menu}>
        {props.isUserAuth ? (
          props.amount ? (
            <div className={style.change_menu}>
              <button onClick={props.delete}>-</button>
              <span>{props.amount}</span>
              <button onClick={props.add}>+</button>
            </div>
          ) : (
            <button onClick={props.add}>Купить</button>
          )
        ) : (
          <span>Необходимо авторизоваться</span>
        )}
      </div>
    </article>
  );
};
