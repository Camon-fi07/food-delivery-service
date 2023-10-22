import axios from "axios";
import { userLogout } from "utils/consts/apiUrls";

export const logout = (token: string, action: () => void) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios.post(userLogout, null, config).then(() => action());
};
