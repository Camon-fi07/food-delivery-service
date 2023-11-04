import { CustomForm } from "components/customForm/CustomForm";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { UserEditModel } from "utils/types/User";
import { profileInitValues } from "utils/consts/formsInitValues";
import { userProfile } from "utils/consts/apiUrls";
import { getUser } from "store/reducers/user/UserAsyncActions";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import style from "./style.module.scss";

export const Profile = () => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const onSubmit = (values: UserEditModel) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.data.token}`,
      },
    };
    toast.promise(
      axios.put(userProfile, values, config).then(() => {
        dispatch(getUser(user.data.token));
      }),
      {
        pending: "Происходит изменение",
        success: "Профиль успешно обновлён",
        error: "Произошла ошибка",
      },
      { theme: "dark", autoClose: 1000 },
    );
  };

  const initValues = profileInitValues(user.data.user, onSubmit);
  return (
    <div className={style.profile}>
      <ToastContainer />
      <h1 className={style.title}>Профиль</h1>
      {user.error ? <span>{user.error}</span> : ""}
      <CustomForm<UserEditModel> {...initValues} />
    </div>
  );
};
