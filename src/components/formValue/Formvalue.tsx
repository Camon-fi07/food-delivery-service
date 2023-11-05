import { InputInfo } from "utils/types/FormInfo";
import style from "./style.module.scss";
import { DropDown } from "components/dropDown/DropDown";

export const FormValue = (props: InputInfo) => {
  return (
    <div className={`${style.form_value} ${props.classNames}`}>
      <label htmlFor={props.name}>{props.label}</label>
      {props.isError && <span className={style.error}>{props.errorName}</span>}
      {props.disabled ? (
        <span className={style.value}>{props.defaultValueName}</span>
      ) : props.type == "select" || props.type == "selectInput" ? (
        <DropDown
          handleChange={props.handleChange}
          name={props.name}
          type={props.type}
          options={props.options!}
          onInputChange={props.onInputChange}
          defaultValueName={props.defaultValueName}
        />
      ) : (
        <input
          className={`${style.field} ${props.isError ? style.field_error : ""}`}
          type={props.type}
          name={props.name}
          onChange={props.handleChange}
          onBlur={props.onBlur}
          defaultValue={props.defaultValueName}
        />
      )}
    </div>
  );
};
