import { DishBasketDto } from "utils/types/Dish";

export const getCountOfDish = (cart: DishBasketDto[], id: string) => {
  
  const item = cart.find((item) => item.id === id);
  return item ? item.amount : 0;
};
