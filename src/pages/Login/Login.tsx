import { Authorization } from "utils/types/User";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { getToken } from "store/reducers/user/UserAsyncActions";
import { useNavigate } from "react-router-dom";
import { loginInitValues } from "utils/consts/formsInitValues";
import { CustomForm } from "components/customForm/CustomForm";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { userLogin } from "utils/consts/apiUrls";
import style from "./style.module.scss";

export const Login = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const onSubmit = (values: Authorization) => {
    dispatch(getToken({ path: userLogin, value: values })).then(() => {
      if (!error) navigate("/");
    });
  };

  useEffect(() => {
    toast.dismiss("loading");
    if (error) toast.error(error, { theme: "dark", autoClose: 1500 });
    else if (isLoading) toast.warning("Подожите", { theme: "dark", autoClose: 1500, toastId: "loading" });
  }, [error, isLoading]);

  const initValues = loginInitValues(onSubmit);

  return (
    <div className={style.login}>
      <ToastContainer />
      <h1 className={style.title}>Логин</h1>
      <CustomForm<Authorization> {...initValues} />
    </div>
  );
};
