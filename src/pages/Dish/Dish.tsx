import { useDish } from "utils/hooks/getDish";
import style from "./style.module.scss";
import { useParams } from "react-router-dom";
import { Rating } from "components/rating/Rating";
import { useAppSelector } from "utils/hooks/redux";

export const Dish = () => {
  const { id } = useParams();
  const { token } = useAppSelector((state) => state.userReducer).data;
  const { dish, error, canChange } = useDish(id!, token);

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
      <Rating id={id!} canChange={canChange} rating={0} onCLick={(value) => console.log(value)} />
      <p className={style.cost}>Цена: {dish.price}₽</p>
    </div>
  );
};
