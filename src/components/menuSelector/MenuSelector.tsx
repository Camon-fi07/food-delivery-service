import { useState } from "react";
import style from "./style.module.scss";
import { DishCategory, DishSorting } from "utils/types/Dish";

export const MenuSelector = () => {
  const [isCategories, setIsCategories] = useState(false);
  const [isSorting, setIsSorting] = useState(false);
  return (
    <div className={style.menu_selector}>
      <div className={style.categories}>
        <button
          onClick={() => {
            setIsCategories(!isCategories);
          }}
        >
          Категории
        </button>
        {isCategories ? (
          <ul>
            {Object.keys(DishCategory).map((key) => (
              <li>
                <input type="checkbox" name="category" value={key} />
                <label htmlFor="category">{DishCategory[key as keyof typeof DishCategory]}</label>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <select onChange={(e) => console.log(e.target.value)}>
        {Object.keys(DishSorting).map((key) => (
          <option>{key as keyof typeof DishSorting}</option>
        ))}
      </select>
    </div>
  );
};
