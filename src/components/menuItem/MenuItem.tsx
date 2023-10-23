import { DishDto } from "utils/types/Dish";
import style from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { addDish, deleteDish } from "utils/helpers/changeDishCount";
import { getCart } from "store/reducers/cart/cartAsyncActions";
import { getCountOfDish } from "utils/helpers/getCoundOfDish";
import { date } from "yup";

export const MenuItem = (props: DishDto) => {
  const user = useAppSelector((state) => state.userReducer);
  const cart = useAppSelector((state) => state.cartReducer);
  const amount = getCountOfDish(cart.dishes, props.id);
  const dispatch = useAppDispatch();
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
        {user.isAuth ? (
          amount ? (
            <div className={style.change_menu}>
              <button onClick={() => deleteDish(user.data.token, props.id, () => dispatch(getCart(user.data.token)))}>
                -
              </button>
              <span>{amount}</span>
              <button
                onClick={() => {
                  addDish(user.data.token, props.id, () => dispatch(getCart(user.data.token)));
                }}
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                addDish(user.data.token, props.id, () => dispatch(getCart(user.data.token)));
              }}
            >
              Купить
            </button>
          )
        ) : (
          <span>Необходимо авторизоваться</span>
        )}
      </div>
    </article>
  );
};
