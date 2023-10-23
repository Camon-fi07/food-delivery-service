import { DishDto } from "utils/types/Dish";
import style from "./style.module.scss";

export const MenuItem = (props: DishDto) => {
  return (
    <article className={style.menu_item}>
      <div className={style.image}>
        <img src={props.image} />
      </div>
      <h2 className={style.title}>{props.name}</h2>
      <p className={style.categories}>
        <span>Категория блюда</span> - {props.category}
      </p>
      <p className={style.rating}>{props.rating}</p>
      <p className={style.description}>{props.description}</p>
      <p className={style.cost}>{props.price} ₽</p>
      <div className={style.buy_menu}>
        <button>Купить</button>
      </div>
    </article>
  );
};
