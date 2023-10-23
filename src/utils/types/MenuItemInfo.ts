import { DishDto } from "./Dish";

export interface MenuItemInfo {
  dish: DishDto;
  amount: number;
  isUserAuth: boolean;
  add: () => void;
  delete: () => void;
}
