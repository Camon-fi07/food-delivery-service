import axios from "axios";
import { ratingDish } from "utils/consts/apiUrls";

export const setRating = (id: string, token: string, ratingScore: number, onSuccess: () => void) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      ratingScore,
    },
  };
  axios.post(ratingDish(id), null, config).then((res) => {
    onSuccess();
  });
};
