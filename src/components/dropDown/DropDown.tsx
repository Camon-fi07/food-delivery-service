import { DropDownInfo } from "utils/types/DropDownInfo";
import { useState } from "react";
import arrowUp from "assets/arrowUp.svg";
import arrowDown from "assets/arrowDown.svg";
import style from "./style.module.scss";

export const DropDown = (props: DropDownInfo) => {
  const [chosenElement, setChosenElement] = useState(props.defaultValue || "");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={style.drop_down}>
      {props.type === "selectInput" ? (
        <input
          onFocus={() => setIsVisible(true)}
          className={style.input}
          type="text"
          value={chosenElement}
          onChange={(e) => {
            setChosenElement(e.target.value);
            if (props.onInputChange) props.onInputChange(e.target.value);
          }}
        />
      ) : (
        <button type="button" className={style.button} onClick={() => setIsVisible(!isVisible)}>
          <span>{chosenElement ? chosenElement : "-- Выбор --"}</span>
          <img src={isVisible ? arrowDown : arrowUp} />
        </button>
      )}
      {isVisible && (
        <ul className={style.values}>
          {props.options.map((item) => (
            <li>
              <option
                id={props.name}
                value={item.value}
                onClick={(e) => {
                  props.handleChange(e);
                  setChosenElement(item.name);
                  setIsVisible(!isVisible);
                }}
              >
                {item.name}
              </option>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
