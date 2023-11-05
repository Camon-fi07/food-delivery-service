import style from "./style.module.scss";
import { CartItem } from "components/cartItem/CartItem";
import { deleteDish } from "utils/helpers/changeDishCount";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getCart } from "store/reducers/cart/cartAsyncActions";
import { DishListInfo } from "utils/types/CartInfo";

export const DishesList = ({ dishes, canChange }: DishListInfo) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  return (
    <ul className={style.dishes_list}>
      {dishes.map((dish, index) => (
        <li>
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
            canChange={canChange}
          />
        </li>
      ))}
    </ul>
  );
};
