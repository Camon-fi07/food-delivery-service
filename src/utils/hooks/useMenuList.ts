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

  const nextPage = () => {
    setParamsByName("page", String(Number(params.get("page") || "1") + 1));
  };

  const previousPage = () => {
    setParamsByName("page", String(Number(params.get("page")!) - 1));
  };

  const setParamsByName = (name: string, value: string) => {
    if (name === "categories") {
      let categories = params.get(name)?.split(",") || [];
      if (categories.includes(value)) {
        categories = categories.filter((item) => item !== value);
      } else categories.push(value);
      if (categories.length) params.set(name, String(categories));
      else params.delete(name);
    } else {
      params.set(name, value);
    }
    setParams(params);
  };

  useEffect(() => {
    const configParams = {
      vegetarian: params.get("vegetarian"),
      sorting: params.get("sorting"),
      page: params.get("page"),
    };
    const categories = params.get("categories")?.split(",");
    let categoriesQueryString = "";
    if (categories) {
      categories.forEach((item) => {
        categoriesQueryString += `categories=${item}&`;
      });
    }
    axios
      .get<DishPagedListDto>(`${dish}/?${categoriesQueryString}`, { params: configParams })
      .then((res) => {
        setMenu(res.data);
        setValues({ categories: categories || null, ...configParams });
      })
      .catch(() => {
        if (values.page) params.set("page", values.page);
        if (values.vegetarian) params.set("vegetarian", values.vegetarian);
        if (values.sorting) params.set("sorting", values.sorting);
        if (values.categories?.length) params.set("categories", String(values.categories));
        setParams(params);
      });
  }, [params]);

  return { menu, params, setParamsByName, nextPage, previousPage };
};
