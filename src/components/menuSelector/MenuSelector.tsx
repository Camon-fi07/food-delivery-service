import { DishCategory, DishSorting } from "utils/types/Dish";
import { MenuSelectorInfo } from "utils/types/MenuSelectorInfo";
import { DropDown } from "components/dropDown/DropDown";
import { ListChecked } from "components/listChecked/ListChecked";
import style from "./style.module.scss";

export const MenuSelector = (props: MenuSelectorInfo) => {
  return (
    <div className={style.menu_selector}>
      <ListChecked
        handleChange={(e) => props.toggleCategory(e.target.value)}
        name="Категории"
        options={Object.keys(DishCategory).map((key) => ({
          value: key,
          name: DishCategory[key as keyof typeof DishCategory],
          checked: props.categories.includes(key),
        }))}
        listClassNames={style.absolute_list}
        classNames={style.parameter}
      />
      <div className={style.vegeterian}>
        <input
          type="checkbox"
          name="vegetarian"
          checked={props.vegetarian}
          onChange={() => {
            props.setVegetarian(String(!props.vegetarian));
          }}
          value={String(props.vegetarian)}
        />
        <label htmlFor="vegetarian">Показать только вегетерианские</label>
      </div>
      <DropDown
        handleChange={(e) => {
          props.setSorting(e.target.value);
        }}
        name="sorting"
        options={Object.keys(DishSorting).map((key) => ({
          name: DishSorting[key as keyof typeof DishSorting],
          value: key,
        }))}
        type="select"
        defaultValueName={props.sorting}
        listClassNames={`${style.absolute_list}`}
        classNames={`${style.parameter}`}
      />
    </div>
  );
};
