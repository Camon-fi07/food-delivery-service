import axios from "axios";
import { registration } from "utils/consts/apiUrls";
import { UserInfo } from "utils/types/User";

export const postRegistration = async (body: UserInfo) => {
  try {
    const res = await axios.post<string>(registration, body);
    return Promise.resolve(res);
  } catch (e) {
    return Promise.reject(e);
  }
};
