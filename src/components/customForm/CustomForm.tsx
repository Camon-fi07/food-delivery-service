import { FormInfo } from "utils/types/FormInfo";
import { useFormik } from "formik";
import { FormValue } from "components/formValue/Formvalue";
import { AddressForm } from "components/AddressForm/AddressForm";
import style from "./style.module.scss";

export const CustomForm = <T,>(props: FormInfo<T>) => {
  const formik = useFormik({
    initialValues: props.values.reduce((obj, item) => {
      obj[item.name] = item.defaultValue || "";
      return obj;
    }, {} as Record<string, string | number>),
    validationSchema: props.vaidation,
    onSubmit: (values) => {
      props.onSubmit(values as T);
    },
  });
  const { errors, touched, handleChange, handleSubmit, handleBlur } = formik;
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {props.values.map((item) =>
        item.type === "address" ? (
          <AddressForm
            isError={errors[item.name] && touched[item.name]}
            errorName={errors[item.name]}
            handleChange={(value) => {
              formik.setFieldValue(item.name, value);
            }}
          />
        ) : (
          <FormValue
            isError={errors[item.name] && touched[item.name]}
            errorName={errors[item.name]}
            handleChange={handleChange}
            onBlur={handleBlur}
            {...item}
          />
        ),
      )}
      <button className={style.button} type="submit">
        {props.actionName}
      </button>
    </form>
  );
};
