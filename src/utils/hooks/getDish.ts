import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { checkRating, specificDish } from "utils/consts/apiUrls";
import { DishDto } from "utils/types/Dish";

export const useDish = (id: string, token: string) => {
  const [dishState, setDishState] = useState<{ dish: DishDto; error: string }>({ dish: {} as DishDto, error: "" });
  const [canChange, setCanChange] = useState(false);

  useEffect(() => {
    axios
      .get<DishDto>(specificDish(id))
      .then((res) => setDishState({ dish: res.data, error: "" }))
      .catch((e: AxiosError) => setDishState({ error: e.message, dish: dishState.dish }));

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get<boolean>(checkRating(id), config).then((res) => {
      setCanChange(res.data);
    });
  }, [canChange]);

  return { ...dishState, canChange, setCanChange };
};
