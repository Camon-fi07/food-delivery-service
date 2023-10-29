import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getToken } from "store/reducers/user/UserAsyncActions";
import { registration } from "utils/consts/apiUrls";
import { UserRegisterModel } from "utils/types/User";
import { useNavigate } from "react-router-dom";
import { CustomForm } from "components/customForm/CustomForm";
import { registrationInitValues } from "utils/consts/formsInitValues";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import style from "./style.module.scss";

export const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.userReducer);

  const onSubmit = (values: UserRegisterModel) => {
    dispatch(getToken({ path: registration, value: values })).then(() => {
      if (!error) navigate("/");
    });
  };
  const initValues = registrationInitValues(onSubmit);

  useEffect(() => {
    toast.dismiss("loading");
    if (error) toast.error(error, { theme: "dark", autoClose: 1500 });
    else if (isLoading) toast.warning("Подождите", { theme: "dark", autoClose: 1500, toastId: "loading" });
  }, [error, isLoading]);

  return (
    <div className={style.registration}>
      <ToastContainer />
      <h1 className={style.title}>Регистрация</h1>
      <CustomForm<UserRegisterModel> {...initValues} />
    </div>
  );
};
