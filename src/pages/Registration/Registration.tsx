import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getToken } from "store/reducers/UserAsyncActions";
import { registration } from "utils/consts/apiUrls";
import { User } from "utils/types/User";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.userReducer);
  const onSubmit = (values: User) => {
    dispatch(getToken({ path: registration, value: values })).then(() => {
      navigate("/");
    });
  };
  return (
    <div className={style.registration}>
      {error ? <span>{error}</span> : ""}
      <h1 className={style.title}>Регистрация</h1>
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  );
};
