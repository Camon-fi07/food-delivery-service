import axios from "axios";
import { registration } from "utils/consts/apiUrls";
import { User } from "utils/types/User";

export const createUser = (setErr: () => void, values: User, setToken: (value: string) => void) => {
  axios
    .post<string>(registration, values)
    .then((res) => {
      setToken(res.data);
    })
    .catch((err) => {
      console.log(err);
      setErr();
    });
};
