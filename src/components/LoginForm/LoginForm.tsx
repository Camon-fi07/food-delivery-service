import { useFormik } from "formik";
import { FormValue } from "components/formValue/Formvalue";
import { Authorization } from "utils/types/User";
import style from "./style.module.scss";

export const LoginForm = (props: { onSubmit: (value: Authorization) => void }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });
  const { errors, touched, handleChange, handleSubmit, handleBlur } = formik;
  return (
    <form onSubmit={handleSubmit} className={style.login_form}>
      <FormValue
        name="email"
        type="text"
        onBlur={handleBlur}
        isError={errors["email"] && touched["email"]}
        label="Email"
        handleChange={handleChange}
        errorName={errors["email"]}
      />
      <FormValue
        name="password"
        type="password"
        onBlur={handleBlur}
        isError={errors["password"] && touched["password"]}
        label="Пароль"
        handleChange={handleChange}
        errorName={errors["password"]}
      />
      <button className={style.button}>Логин</button>
    </form>
  );
};
