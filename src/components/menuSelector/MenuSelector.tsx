import { useState } from "react";
import { DishCategory, DishSorting } from "utils/types/Dish";
import style from "./style.module.scss";
import arrowUp from "assets/arrowUp.svg";
import arrowDown from "assets/arrowDown.svg";
import { MenuSelectorInfo } from "utils/types/MenuSelectorInfo";
import { DropDown } from "components/dropDown/DropDown";
import { ListChecked } from "components/listChecked/ListChecked";

export const MenuSelector = (props: MenuSelectorInfo) => {
  const [isSorting, setIsSorting] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
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
      />
      <div className={`${style.vegeterian} ${style.parameter}`}>
        <input
          type="checkbox"
          name="category"
          checked={props.vegetarian}
          onClick={() => {
            setIsVegetarian(!isVegetarian);
          }}
          onChange={() => {
            props.setVegetarian(String(!isVegetarian));
          }}
          value={String(isVegetarian)}
        />
        <label htmlFor="category">Показать только вегетерианские</label>
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
        defaultValueName={DishSorting.NameAsc}
        listClassNames={`${style.absolute}`}
        classNames={`${style.parameter}`}
      />
    </div>
  );
};
