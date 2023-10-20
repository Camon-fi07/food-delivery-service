import { LoginForm } from "components/LoginForm/LoginForm";
import { Authorization } from "utils/types/User";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getToken } from "store/reducers/UserAsyncActions";
import { userLogin } from "utils/consts/apiUrls";
import style from "./style.module.scss";

export const Login = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.persistedReducer);
  const onSubmit = (values: Authorization) => {
    dispatch(getToken({ path: userLogin, value: values }));
  };

  return (
    <div className={style.login}>
      {error ? <span>{error}</span> : ""}
      <h1 className={style.title}>Логин</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
