import { DishBasketDto } from "utils/types/Dish";
import style from "./style.module.scss";
import { CartItem } from "components/cartItem/CartItem";
import { deleteDish } from "utils/helpers/changeDishCount";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getCart } from "store/reducers/cart/cartAsyncActions";

export const DishesList = ({ dishes }: { dishes: DishBasketDto[] }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  return (
    <section className={style.dishes_list}>
      {dishes.map((dish, index) => (
        <CartItem
          delete={() => {
            deleteDish(
              user.data.token,
              dish.id,
              () => {
                dispatch(getCart(user.data.token));
              },
              false,
            );
          }}
          dish={dish}
          index={index + 1}
        />
      ))}
    </section>
  );
};
