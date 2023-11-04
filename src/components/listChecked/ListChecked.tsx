import { ListCheckedInfo } from "utils/types/DropDownInfo";
import { useState } from "react";
import arrowUp from "assets/arrowUp.svg";
import arrowDown from "assets/arrowDown.svg";
import style from "./style.module.scss";
export const ListChecked = (props: ListCheckedInfo) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={`${style.checked_list} ${props.classNames}`}>
      <button type="button" className={style.button} onClick={() => setIsVisible(!isVisible)}>
        <span>{props.name}</span>
        <img src={isVisible ? arrowDown : arrowUp} />
      </button>
      {isVisible && (
        <ul className={`${style.values} ${props.listClassNames}`}>
          {props.options.map((item) => (
            <li>
              <input
                checked={item.checked}
                onChange={props.handleChange}
                type="checkbox"
                name={item.name}
                value={item.value}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
