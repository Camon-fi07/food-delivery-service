import axios from "axios";
import { DishPagedListDto } from "../types/Dish";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { dish } from "utils/consts/apiUrls";

export const useMenuList = () => {
  const [params, setParams] = useSearchParams();
  const [menu, setMenu] = useState<DishPagedListDto>();

  const setParamsByName = (name: string, value: string) => {
    params.set(name, value);
    setParams(params);
  };

  useEffect(() => {
    const configParams = {
      categories: params.get("categories"),
      vegetarian: params.get("vegetarian"),
      sorting: params.get("sorting"),
      page: params.get("page"),
    };
    axios
      .get<DishPagedListDto>(dish, { params: configParams })
      .then((res) => {
        console.log(res.data);
        setMenu(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  return { menu, params, setParamsByName };
};
