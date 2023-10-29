import { DishBasketDto } from "./Dish";

export interface CartItemInfo {
  dish: DishBasketDto;
  index: number;
  delete: () => void;
}
