import { User } from "utils/types/User";
import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { useAppDispatch } from "utils/hooks/redux";
import { userSlice } from "store/reducers/userSlice";
import { createUser } from "utils/helpers/createUser";
import { useState } from "react";
import style from "./style.module.scss";

export const Registration = () => {
  const dispatch = useAppDispatch();
  const userActions = userSlice.actions;
  const [error, setError] = useState("");
  const onSubmit = (values: User) => {
    setError("");
    createUser(setError, values, (value) => dispatch(userActions.setToken(value)));
  };
  return (
    <div className={style.registration}>
      {error ? <span>{error}</span> : ""}
      <h1 className={style.title}>Регистрация</h1>
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  );
};
