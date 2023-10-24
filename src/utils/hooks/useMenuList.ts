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
      const categories = params.getAll(name);
      if (categories.includes(value)) {
        categories.filter((item) => {
          item !== value;
        });
      } else categories.push(value);
      params.set(name, String(categories));
    } else params.set(name, value);
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
    categories.forEach((item) => {
      categoriesQueryString += `categories=${item}&`;
    });
    console.log(categoriesQueryString, categories);
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
        if (values.categories?.length) params.set("categories", String(values.categories));
        setParams(params);
      });
  }, [params]);

  return { menu, params, setParamsByName, nextPage, previousPage };
};
