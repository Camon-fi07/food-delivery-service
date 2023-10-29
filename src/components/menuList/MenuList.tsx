import { DishDto } from "utils/types/Dish";
import style from "./style.module.scss";
import { MenuItem } from "components/menuItem/MenuItem";
import { addDish, deleteDish } from "utils/helpers/changeDishCount";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getCart } from "store/reducers/cart/cartAsyncActions";
import { getCountOfDish } from "utils/helpers/getCoundOfDish";

export const MenuList = ({ dishes }: { dishes: DishDto[] }) => {
  const user = useAppSelector((state) => state.userReducer);
  const cart = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();

  return (
    <div className={style.menu_list}>
      {dishes.map((dish) => (
        <MenuItem
          dish={dish}
          add={() => {
            addDish(user.data.token, dish.id, () => {
              dispatch(getCart(user.data.token));
            });
          }}
          amount={getCountOfDish(cart.dishes, dish.id)}
          isUserAuth={user.isAuth}
        />
      ))}
    </div>
  );
};
