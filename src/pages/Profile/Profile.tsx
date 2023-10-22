import { CustomForm } from "components/customForm/CustomForm";
import style from "./style.module.scss";
import { useAppSelector } from "utils/hooks/redux";
import { UserEditModel } from "utils/types/User";
import { profileInitValues } from "utils/consts/formsInitValues";

export const Profile = () => {
  const user = useAppSelector((state) => state.userReducer);
  const onSubmit = (values: UserEditModel) => {
    console.log(values);
    // dispatch(getToken({ path: userLogin, value: values })).then(() => {
    //   navigate("/");
    // });
  };

  const initValues = profileInitValues(user.data.user, onSubmit);
  return (
    <div className={style.profile}>
      <h1 className={style.title}>Профиль</h1>
      {user.error ? <span>{user.error}</span> : ""}
      <CustomForm<UserEditModel> {...initValues} />
    </div>
  );
};
