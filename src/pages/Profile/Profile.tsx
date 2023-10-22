import { CustomForm } from "components/customForm/CustomForm";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { UserEditModel } from "utils/types/User";
import { profileInitValues } from "utils/consts/formsInitValues";
import axios from "axios";
import { userProfile } from "utils/consts/apiUrls";
import { getUser } from "store/reducers/UserAsyncActions";
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
    axios.put(userProfile, values, config).then(() => {
      dispatch(getUser(user.data.token));
    });
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
