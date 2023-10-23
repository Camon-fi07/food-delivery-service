import { MenuList } from "components/menuList/MenuList";
import style from "./style.module.scss";
import { useMenuList } from "utils/hooks/useMenuList";
import { MenuSelector } from "components/menuSelector/MenuSelector";

export const Menu = () => {
  const { menu, setParamsByName, params } = useMenuList();
  return (
    <div className={style.menu}>
      <MenuSelector />
      {menu ? <MenuList dishes={menu.dishes} /> : ""}
      <div className={style.page_change}>
        <button>☚</button>
        <span>{params.get("page") || 1}</span>
        <button>☛</button>
      </div>
    </div>
  );
};
