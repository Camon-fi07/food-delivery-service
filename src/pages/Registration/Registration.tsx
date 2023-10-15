import style from "./style.module.scss";
import { RegistrationForm } from "components/registrationForm/RegistrationForm";
export const Registration = () => {
  return (
    <div className={style.registration}>
      <h1 className={style.title}>Регистрация</h1>
      <RegistrationForm />
    </div>
  );
};
