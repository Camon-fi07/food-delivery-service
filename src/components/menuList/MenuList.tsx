import { DishDto } from "utils/types/Dish";
import style from "./style.module.scss";
import { MenuItem } from "components/menuItem/MenuItem";

export const MenuList = ({ dishes }: { dishes: DishDto[] }) => {
  return (
    <div className={style.menu_list}>
      {dishes.map((dish) => (
        <MenuItem {...dish} />
      ))}
    </div>
  );
};
