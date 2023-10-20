import { LoginForm } from "components/LoginForm/LoginForm";
import { Authorization } from "utils/types/User";
import { useState } from "react";
import { useAppDispatch } from "utils/hooks/redux";
import { login } from "utils/helpers/login";
import { userSlice } from "store/reducers/userSlice";
import style from "./style.module.scss";

export const Login = () => {
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const userActions = userSlice.actions;
  const onSubmit = (values: Authorization) => {
    setError("");
    login(setError, values, (value) => dispatch(userActions.setToken(value)));
  };

  return (
    <div className={style.login}>
      {error ? <span>{error}</span> : ""}
      <h1 className={style.title}>Логин</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
