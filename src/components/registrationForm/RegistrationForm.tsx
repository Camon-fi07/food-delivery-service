import { useFormik } from "formik";
import style from "./style.module.scss";
import { FormValue } from "components/formValue/Formvalue";
import { AddressForm } from "components/AddressForm/AddressForm";
import { Gender } from "utils/types/Gender";
export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      gender: "",
      phoneNumber: "",
      birthDate: "",
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
        name="fullName"
        type="text"
        isError={errors["fullName"] && touched["fullName"]}
        errorName={errors["fullName"]}
      />
      <FormValue
        handleChange={handleChange}
        label="Пол"
        name="gender"
        type="select"
        options={[
          { value: Gender.Male, name: "Мужской" },
          { value: Gender.Female, name: "Женский" },
        ]}
      />
      <FormValue
        handleChange={handleChange}
        label="Телефон"
        name="phoneNumber"
        type="tel"
        isError={errors["phoneNumber"] && touched["phoneNumber"]}
        errorName={errors["phoneNumber"]}
      />
      <FormValue
        handleChange={handleChange}
        label="Email"
        name="email"
        type="text"
        isError={errors["email"] && touched["email"]}
        errorName={errors["email"]}
      />
      <FormValue handleChange={handleChange} label="Дата рождения" name="birthDate" type="date" />
      <AddressForm
        handleChange={(value) => {
          formik.setFieldValue("address", value);
        }}
      />
      <FormValue
        handleChange={handleChange}
        label="Пароль"
        name="password"
        type="password"
        isError={errors["password"] && touched["password"]}
        errorName={errors["password"]}
      />
      <button className={style.button} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};
