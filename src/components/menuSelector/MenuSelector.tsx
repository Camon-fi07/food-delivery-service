import { useState } from "react";
import { DishCategory, DishSorting } from "utils/types/Dish";
import style from "./style.module.scss";
import arrowUp from "assets/arrowUp.svg";
import arrowDown from "assets/arrowDown.svg";
import { MenuSelectorInfo } from "utils/types/MenuSelectorInfo";

export const MenuSelector = (props: MenuSelectorInfo) => {
  const [isCategories, setIsCategories] = useState(false);
  const [isSorting, setIsSorting] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  return (
    <div className={style.menu_selector}>
      <div className={`${style.parameter} ${style.categories}`}>
        <button
          onClick={() => {
            setIsCategories(!isCategories);
          }}
        >
          <span>Категории</span>
          <img src={isCategories ? arrowDown : arrowUp} />
        </button>
        {isCategories ? (
          <ul>
            {Object.keys(DishCategory).map((key) => (
              <li>
                <input
                  checked={props.categories.includes(key)}
                  onChange={(e) => props.toggleCategory(e.target.value)}
                  type="checkbox"
                  name="category"
                  value={key}
                />
                <label htmlFor="category">{DishCategory[key as keyof typeof DishCategory]}</label>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
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
      <div className={`${style.parameter} ${style.sorting}`}>
        <button
          onClick={() => {
            setIsSorting(!isSorting);
          }}
        >
          <span>Сортировка</span>
          <img src={isSorting ? arrowDown : arrowUp} />
        </button>
        {isSorting ? (
          <ul>
            {Object.keys(DishSorting).map((key) => (
              <li>
                <input
                  checked={props.sorting.includes(key)}
                  onChange={(e) => {
                    props.setSorting(e.target.value);
                  }}
                  type="radio"
                  name="sorting"
                  value={key}
                />
                <label htmlFor="sorting">{DishSorting[key as keyof typeof DishSorting]}</label>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
