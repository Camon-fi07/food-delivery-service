import axios from "axios";
import { registration } from "utils/consts/apiUrls";
import { RegistrationUser } from "utils/types/RegistrationUser";

export const postRegistration = async (body: RegistrationUser) => {
  try {
    const res = await axios.post<string>(registration, body);
    return Promise.resolve(res);
  } catch (e) {
    return Promise.reject(e);
  }
};
