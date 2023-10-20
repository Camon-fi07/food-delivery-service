import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getToken } from "store/reducers/UserAsyncActions";
import { registration } from "utils/consts/apiUrls";
import { User } from "utils/types/User";
import style from "./style.module.scss";

export const Registration = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.persistedReducer);
  const onSubmit = (values: User) => {
    dispatch(getToken({ path: registration, value: values }));
  };
  return (
    <div className={style.registration}>
      {error ? <span>{error}</span> : ""}
      <h1 className={style.title}>Регистрация</h1>
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  );
};
