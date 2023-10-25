import { useDish } from "utils/hooks/getDish";
import style from "./style.module.scss";
import { useParams } from "react-router-dom";

export const Dish = () => {
  const { id } = useParams();

  const { dish, error } = useDish(id!);
  if (error) return <span>{error}</span>;
  return (
    <div className={style.dish}>
      <div className={style.image}>
        <img src={dish.image} />
      </div>
      <h1 className={style.title}>{dish.name}</h1>
      <p className={style.category}>
        <span>Категория блюда</span> - {dish.category}
      </p>
      <p className={style.rating}>{dish.rating}</p>
      <p className={style.description}>
        <span>Описание: </span>
        {dish.description}
      </p>
      <p className={style.cost}>Цена: {dish.price}₽</p>
    </div>
  );
};
