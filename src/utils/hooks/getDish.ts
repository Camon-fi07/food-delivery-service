import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { specificDish } from "utils/consts/apiUrls";
import { DishDto } from "utils/types/Dish";

export const useDish = (id: string) => {
  const [dishState, setDishState] = useState<{ dish: DishDto; error: string }>({ dish: {} as DishDto, error: "" });
  useEffect(() => {
    axios
      .get<DishDto>(specificDish(id))
      .then((res) => setDishState({ dish: res.data, error: "" }))
      .catch((e: AxiosError) => setDishState({ error: e.message, dish: dishState.dish }));
  }, []);

  return dishState;
};
