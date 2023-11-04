import { useDish } from "utils/hooks/getDish";
import { useParams } from "react-router-dom";
import { Rating } from "components/rating/Rating";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { setRating } from "utils/helpers/setRating";
import { getCountOfDish } from "utils/helpers/getCoundOfDish";
import { DishCountPanel } from "components/dishCountPanel/DIshCountPanel";
import { addDish } from "utils/helpers/changeDishCount";
import { getCart } from "store/reducers/cart/cartAsyncActions";
import style from "./style.module.scss";

export const Dish = () => {
  const { id } = useParams();
  const user = useAppSelector((state) => state.userReducer);
  const cart = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const { dish, error, canChange, setCanChange } = useDish(id!, user.data.token);
  const add = () => {
    addDish(user.data.token, id!, () => {
      dispatch(getCart(user.data.token));
    });
  };
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
        <div className={style.dish_rating}>
          <p>Оставьте свой отзыв</p>
          <Rating
            canChange={canChange}
            rating={0}
            onCLick={(value) => {
              setRating(id!, user.data.token, value, () => {
                setCanChange(false);
              });
            }}
          />
        </div>
      ) : (
        ""
      )}
      <p className={style.cost}>Цена: {dish.price}₽</p>
      <div className={style.buy_menu}>
        {user.isAuth ? (
          getCountOfDish(cart.dishes, id!) ? (
            <DishCountPanel dishId={id!} />
          ) : (
            <button onClick={add}>Купить</button>
          )
        ) : (
          <span>Для покупки необходимо авторизоваться</span>
        )}
      </div>
    </div>
  );
};
