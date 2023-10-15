import { InputInfo } from "utils/types/InputInfo";
import style from "./style.module.scss";

export const FormValue = (props: InputInfo) => {
  return (
    <div className={style.form_value}>
      <label htmlFor={props.name}>{props.label}</label>
      {props.isError && <span className={style.error}></span>}
      {props.type == "select" ? (
        <select name={props.name} className={style.field} onChange={props.handleChange}>
          <option value="">Выбор</option>
          {props.options!.map((option) => (
            <option value={option.value}>{option.name}</option>
          ))}
        </select>
      ) : (
        <input
          className={`${style.field} ${props.isError ? style.field_error : ""}`}
          type="text"
          name={props.name}
          onChange={props.handleChange}
        />
      )}
    </div>
  );
};
