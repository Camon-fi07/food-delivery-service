import { MenuItemInfo } from "utils/types/MenuItemInfo";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import leaf from "assets/leaf.png";
import { Rating } from "components/rating/Rating";
import { DishCountPanel } from "components/dishCountPanel/DIshCountPanel";
export const MenuItem = (props: MenuItemInfo) => {
  return (
    <div className={style.menu_item}>
      <Link to={`item/${props.dish.id}`}>
        <div className={style.image}>
          {props.dish.vegetarian ? <img className={style.leaf} src={leaf} /> : ""}
          <img src={props.dish.image} />
        </div>
      </Link>
      <Link to={`item/${props.dish.id}`}>
        <h2 className={style.title}>{props.dish.name}</h2>
      </Link>
      <p className={style.categories}>
        <span>Категория блюда</span> - {props.dish.category}
      </p>
      <Rating rating={props.dish.rating} canChange={false} />
      <p className={style.description}>{props.dish.description}</p>
      <p className={style.cost}>{props.dish.price} ₽</p>
      <div className={style.buy_menu}>
        {props.isUserAuth ? (
          props.amount ? (
            <DishCountPanel dishId={props.dish.id} />
          ) : (
            <button onClick={props.add}>Купить</button>
          )
        ) : (
          <span>Для покупки необходимо авторизоваться</span>
        )}
      </div>
    </div>
  );
};
