import { User } from "utils/types/User";
import style from "./style.module.scss";
import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { useAppDispatch } from "utils/hooks/redux";
import { userSlice } from "store/reducers/userSlice";
import { createUser } from "utils/helpers/createUser";
import { useState } from "react";
export const Registration = () => {
  const dispatch = useAppDispatch();
  const userActions = userSlice.actions;
  const [isErr, setIsErr] = useState(false);
  const onSubmit = (values: User) => {
    createUser(
      () => setIsErr(true),
      values,
      (value) => dispatch(userActions.setToken(value)),
    );
  };
  return (
    <div className={style.registration}>
      <h1 className={style.title}>Регистрация</h1>
      {isErr ? <span>Произошла ошибка при регистрации</span> : ""}
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  );
};
