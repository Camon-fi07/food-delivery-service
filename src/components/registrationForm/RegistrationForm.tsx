import { useFormik } from "formik";
import style from "./style.module.scss";
import { FormValue } from "components/formValue/Formvalue";
import { AddressForm } from "components/AddressForm/AddressForm";
export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      phone: "",
      birth: "",
      address: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { errors, touched, handleChange, handleSubmit } = formik;

  return (
    <form className={style.registration_form} onSubmit={handleSubmit}>
      <FormValue
        handleChange={handleChange}
        label="ФИО"
        name="name"
        type="text"
        isError={errors["name"] && touched["name"]}
        errorName={errors["name"]}
      />
      <FormValue
        handleChange={handleChange}
        label="Пол"
        name="gender"
        type="select"
        options={[
          { value: "Мужской", name: "Мужской" },
          { value: "Женский", name: "Женский" },
        ]}
      />
      <FormValue
        handleChange={handleChange}
        label="Телефон"
        name="phone"
        type="tel"
        isError={errors["phone"] && touched["phone"]}
        errorName={errors["phone"]}
      />
      <FormValue handleChange={handleChange} label="Дата рождения" name="birth" type="date" />
      <FormValue
        handleChange={handleChange}
        label="Телефон"
        name="phone"
        type="tel"
        isError={errors["phone"] && touched["phone"]}
        errorName={errors["phone"]}
      />
      <AddressForm
        handleChange={(value) => {
          formik.setFieldValue("address", value);
        }}
      />
      <button className={style.button} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};
