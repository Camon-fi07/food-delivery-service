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
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ThemeContext } from "utils/context/theme";

export const Dish = () => {
  const theme = useContext(ThemeContext);
  const { id } = useParams();
  const user = useAppSelector((state) => state.userReducer);
  const cart = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const { data, canChange, setCanChange } = useDish(id!, user.data.token, (error) =>
    toast.error(error, { theme: theme?.isDark ? "dark" : "light", autoClose: 1500 }),
  );
  const add = () => {
    addDish(user.data.token, id!, () => {
      dispatch(getCart(user.data.token));
    });
  };
  return (
    <div className={style.dish}>
      <ToastContainer />
      {data ? (
        <>
          <div className={style.image}>
            <img src={data.image} />
          </div>
          <h1 className={style.title}>{data.name}</h1>
          <Rating canChange={false} rating={data.rating} />
          <p className={style.category}>
            <span>Категория блюда</span> - {data.category}
          </p>
          <p className={style.description}>
            <span>Описание: </span>
            {data.description}
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
          <p className={style.cost}>Цена: {data.price}₽</p>
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
