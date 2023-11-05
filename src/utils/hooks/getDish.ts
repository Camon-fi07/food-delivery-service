import axios from "axios";
import { useEffect, useState } from "react";
import { checkRating, specificDish } from "utils/consts/apiUrls";
import { DishDto } from "utils/types/Dish";
import { useGetRequest } from "./useGetRequest";

export const useDish = (id: string, token: string, onError: (error: string) => void) => {
  const { data, getData } = useGetRequest<DishDto>(specificDish(id), onError);
  const [canChange, setCanChange] = useState(false);

  useEffect(() => {
    getData();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get<boolean>(checkRating(id), config).then((res) => {
      setCanChange(res.data);
    });
  }, [canChange]);

  return { data, canChange, setCanChange };
};
