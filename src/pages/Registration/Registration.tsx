import { RegistrationUser } from "utils/types/RegistrationUser";
import style from "./style.module.scss";
import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { postRegistration } from "utils/helpers/postRegistration";
export const Registration = () => {
  const onSubmit = (values: RegistrationUser) => {
    postRegistration(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={style.registration}>
      <h1 className={style.title}>Регистрация</h1>
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  );
};
