import { MenuList } from "components/menuList/MenuList";
import style from "./style.module.scss";
import { useMenuList } from "utils/hooks/useMenuList";
import { MenuSelector } from "components/menuSelector/MenuSelector";

export const Menu = () => {
  const { menu, setParamsByName, params, nextPage, previousPage } = useMenuList();
  return (
    <div className={style.menu}>
      <MenuSelector
        toggleCategory={(value) => setParamsByName("categories", value)}
        setSorting={(value) => setParamsByName("sorting", value)}
        setVegetarian={(value) => setParamsByName("vegetarian", value)}
      />
      {menu ? <MenuList dishes={menu.dishes} /> : ""}
      <div className={style.page_change}>
        <button onClick={() => previousPage()}>☚</button>
        <span>{params.get("page") || 1}</span>
        <button onClick={() => nextPage()}>☛</button>
      </div>
    </div>
  );
};
