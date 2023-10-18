import { useFormik } from "formik";
import style from "./style.module.scss";
import { FormValue } from "components/formValue/Formvalue";
import { AddressForm } from "components/AddressForm/AddressForm";
import { Gender } from "utils/types/Gender";
import { registrationValidateScheme } from "utils/consts/validation";
import { User } from "utils/types/User";
import { phoneMask } from "utils/helpers/phoneMask";
export const RegistrationForm = (props: { onSubmit: (value: User) => void }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      gender: "",
      phoneNumber: "",
      birthDate: "",
      addressId: "",
      email: "",
      password: "",
    },
    validationSchema: registrationValidateScheme,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });
  const { errors, touched, handleChange, handleSubmit, handleBlur } = formik;
  return (
    <form
      className={style.registration_form}
      onError={() => {
        console.log(errors);
      }}
      onSubmit={handleSubmit}
    >
      <FormValue
        handleChange={handleChange}
        label="ФИО"
        name="fullName"
        type="text"
        isError={errors["fullName"] && touched["fullName"]}
        errorName={errors["fullName"]}
        onBlur={handleBlur}
      />
      <FormValue
        handleChange={handleChange}
        label="Пол"
        name="gender"
        type="select"
        isError={errors["gender"] && touched["gender"]}
        errorName={errors["gender"]}
        options={[
          { value: Gender.Male, name: "Мужской" },
          { value: Gender.Female, name: "Женский" },
        ]}
      />
      <FormValue
        handleChange={(e) => handleChange(phoneMask(formik.values.phoneNumber, e))}
        label="Телефон"
        name="phoneNumber"
        type="tel"
        isError={errors["phoneNumber"] && touched["phoneNumber"]}
        errorName={errors["phoneNumber"]}
        onBlur={handleBlur}
      />
      <FormValue
        handleChange={handleChange}
        label="Email"
        name="email"
        type="text"
        isError={errors["email"] && touched["email"]}
        errorName={errors["email"]}
        onBlur={handleBlur}
      />
      <FormValue onBlur={handleBlur} handleChange={handleChange} label="Дата рождения" name="birthDate" type="date" />
      <FormValue
        handleChange={handleChange}
        label="Пароль"
        name="password"
        type="password"
        isError={errors["password"] && touched["password"]}
        errorName={errors["password"]}
        onBlur={handleBlur}
      />
      <AddressForm
        isError={errors["addressId"] && touched["addressId"]}
        errorName={errors["addressId"]}
        handleChange={(value) => {
          formik.setFieldValue("addressId", value);
        }}
      />
      <button
        onClick={() => {
          console.log(errors);
        }}
        className={style.button}
        type="submit"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};
