import axios, { AxiosError } from "axios";
import { userLogin } from "utils/consts/apiUrls";
import { Authorization } from "utils/types/User";

export const login = (setError: (value: string) => void, value: Authorization, setToken: (value: string) => void) => {
  axios
    .post<string>(userLogin, value)
    .then((res) => {
      setToken(res.data);
    })
    .catch((err: AxiosError<{ message: string }>) => {
      setError(err.response?.data ? err.response.data.message : err.message);
    });
};
