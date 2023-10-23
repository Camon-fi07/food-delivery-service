import axios from "axios";
import { basketDish } from "utils/consts/apiUrls";

export const addDish = (token: string, id: string, action: () => void) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  axios.post(basketDish(id), null, config).then(() => {
    action();
  });
};

export const deleteDish = (token: string, id: string, action: () => void, increase = true) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      increase,
    },
  };
  axios.delete(basketDish(id), config).then(() => {
    action();
  });
};
