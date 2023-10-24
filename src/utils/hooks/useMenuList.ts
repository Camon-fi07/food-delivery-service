import axios from "axios";
import { DishPagedListDto } from "../types/Dish";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { dish } from "utils/consts/apiUrls";
import { Pagination } from "utils/types/Pagination";

export const useMenuList = () => {
  const [values, setValues] = useState<Pagination>({} as Pagination);
  const [params, setParams] = useSearchParams();
  const [menu, setMenu] = useState<DishPagedListDto>();

  const setParamsByName = (name: string, value: string) => {
    if (name === "categories") params.set(name, [...params.getAll(name), value].toString());
    else params.set(name, value);
    setParams(params);
  };

  useEffect(() => {
    params.set("page", "1");
    setParams(params);
    const configParams = {
      vegetarian: params.get("vegetarian"),
      sorting: params.get("sorting"),
      page: params.get("pages"),
    };
    const categories = params.getAll("categories");
    let categoriesQueryString = "";
    categories.forEach((item) => {
      categoriesQueryString += `categories=${item}&`;
    });
    axios
      .get<DishPagedListDto>(`${dish}/?${categoriesQueryString}`, { params: configParams })
      .then((res) => {
        setMenu(res.data);
        setValues({ categories: categories, ...configParams });
      })
      .catch((e) => {
        if (values.page) params.set("page", values.page);
        if (values.vegetarian) params.set("vegetarian", values.vegetarian);
        if (values.sorting) params.set("sorting", values.sorting);
        if (values.categories) params.set("categories", String(values.categories));
        setParams(params);
      });
  }, [params]);

  return { menu, params, setParamsByName };
};
