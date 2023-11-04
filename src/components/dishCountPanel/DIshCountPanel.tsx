import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { addDish, deleteDish } from "utils/helpers/changeDishCount";
import { getCart } from "store/reducers/cart/cartAsyncActions";
import { getCountOfDish } from "utils/helpers/getCoundOfDish";
import style from "./style.module.scss";

export const DishCountPanel = ({ dishId }: { dishId: string }) => {
  const user = useAppSelector((state) => state.userReducer);
  const cart = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  return (
    <div className={style.panel}>
      <button
        onClick={() => {
          deleteDish(user.data.token, dishId, () => {
            dispatch(getCart(user.data.token));
          });
        }}
      >
        -
      </button>
      <span>{getCountOfDish(cart.dishes, dishId)}</span>
      <button
        onClick={() => {
          addDish(user.data.token, dishId, () => {
            dispatch(getCart(user.data.token));
          });
        }}
      >
        +
      </button>
    </div>
  );
};
