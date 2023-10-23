import { MenuList } from "components/menuList/MenuList";
import style from "./style.module.scss";
import { useMenuList } from "utils/hooks/useMenuList";

export const Menu = () => {
  const { menu, setParamsByName, params } = useMenuList();
  return <div className={style.menu}>{menu ? <MenuList dishes={menu.dishes} /> : ""}</div>;
};
