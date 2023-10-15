import { Formik, Form, Field } from "formik";
import style from "./style.module.scss";
export const Registration = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        gender: "Мужской",
        phone: "",
        birth: "",
        region: "",
        city: "",
        street: "",
        house: "",
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={style.registration}>
          <h1 className={style.title}>Регистрация</h1>
          <div className={style.value}>
            <label htmlFor="name">ФИО</label>
            {errors["name"] && touched["name"] && <span className={style.error}>{errors["name"]}</span>}
            <Field
              className={`${style.field} ${errors["name"] && touched["name"] ? style.field_error : ""}`}
              type="text"
              name="name"
            />
          </div>
          <div className={style.value}>
            <label htmlFor="gender">Пол</label>
            <Field as="select" className={style.field} name="gender">
              <option value="Мужской">Мужской</option>
              <option value="Женский">Женский</option>
            </Field>
          </div>
          <div className={style.value}>
            <label htmlFor="phone">Телефон</label>
            {errors["phone"] && touched["phone"] && <span className={style.error}>{errors["phone"]}</span>}
            <Field
              className={`${style.field} ${errors["phone"] && touched["phone"] ? style.field_error : ""}`}
              type="tel"
              name="phone"
            />
          </div>
          <div className={style.value}>
            <label htmlFor="birth">Дата рождения</label>
            <Field className={style.field} type="date" name="birth" />
          </div>
          <button className={style.button} type="submit">
            Зарегистрироваться
          </button>
        </Form>
      )}
    </Formik>
  );
};
