import { RegistrationForm } from "components/registrationForm/RegistrationForm";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getToken } from "store/reducers/UserAsyncActions";
import { registration } from "utils/consts/apiUrls";
import { User, UserRegisterModel } from "utils/types/User";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { FormInfo } from "utils/types/FormInfo";
import { CustomForm } from "components/customForm/CustomForm";
import { registrationInitValues } from "utils/consts/formsInitValues";

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.userReducer);

  const onSubmit = (values: UserRegisterModel) => {
    dispatch(getToken({ path: registration, value: values })).then(() => {
      navigate("/");
    });
  };
  const initValues = registrationInitValues(onSubmit);

  return (
    <div className={style.registration}>
      {error ? <span>{error}</span> : ""}
      <h1 className={style.title}>Регистрация</h1>
      <CustomForm<UserRegisterModel> {...initValues} />
    </div>
  );
};
