import { DishBasketDto } from "./Dish";

export interface CartState {
  dishes: DishBasketDto[];
  isLoading: boolean;
  error: string;
}

export interface DishListInfo {
  dishes: DishBasketDto[];
  canChange: boolean;
}

export interface CartItemInfo {
  dish: DishBasketDto;
  index: number;
  delete?: () => void;
  canChange: boolean;
}
