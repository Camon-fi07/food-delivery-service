import { DishBasketDto } from "utils/types/Dish";

export const getTotalPrice = (dishes: DishBasketDto[]) => {
  return dishes.reduce((prev, curr) => prev + curr.totalPrice, 0);
};
