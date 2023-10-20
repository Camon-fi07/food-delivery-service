import axios, { AxiosError } from "axios";
import { registration } from "utils/consts/apiUrls";
import { User } from "utils/types/User";

export const createUser = (setError: (value: string) => void, values: User, setToken: (value: string) => void) => {
  axios
    .post<string>(registration, values)
    .then((res) => {
      setToken(res.data);
    })
    .catch((err: AxiosError<{ message: string }>) => {
      setError(err.response?.data ? err.response.data.message : err.message);
    });
};
