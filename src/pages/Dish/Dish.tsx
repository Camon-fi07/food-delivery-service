import { useDish } from "utils/hooks/getDish";
import style from "./style.module.scss";
import { useParams } from "react-router-dom";
import { Rating } from "components/rating/Rating";
import { useAppSelector } from "utils/hooks/redux";
import { setRating } from "utils/helpers/setRating";

export const Dish = () => {
  const { id } = useParams();
  const { token } = useAppSelector((state) => state.userReducer).data;
  const { dish, error, canChange, setCanChange } = useDish(id!, token);

  if (error) return <span>{error}</span>;

  return (
    <div className={style.dish}>
      <div className={style.image}>
        <img src={dish.image} />
      </div>
      <h1 className={style.title}>{dish.name}</h1>
      <Rating canChange={false} rating={dish.rating} />
      <p className={style.category}>
        <span>Категория блюда</span> - {dish.category}
      </p>
      <p className={style.description}>
        <span>Описание: </span>
        {dish.description}
      </p>
      {canChange ? (
        <>
          <p>Оставьте свой отзыв</p>
          <Rating
            canChange={canChange}
            rating={0}
            onCLick={(value) => {
              setRating(id!, token, value, () => {
                setCanChange(false);
              });
            }}
          />
        </>
      ) : (
        ""
      )}
      <p className={style.cost}>Цена: {dish.price}₽</p>
    </div>
  );
};
