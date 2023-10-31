import axios from "axios";
import { statusOrder } from "utils/consts/apiUrls";

export const confirmOrder = (id: string, token: string, onSuccess: () => void) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios.post(statusOrder(id), null, config).then(() => onSuccess());
};
