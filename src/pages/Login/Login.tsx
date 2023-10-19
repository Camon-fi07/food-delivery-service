import { LoginForm } from "components/LoginForm/LoginForm";
import style from "./style.module.scss";
import { Authorization } from "utils/types/User";

export const Login = () => {
  const onSubmit = (values: Authorization) => {
    console.log(values);
  };

  return (
    <div className={style.login}>
      <h1 className={style.title}>Логин</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
