import { DishBasketDto } from "./Dish";

export interface PurchaseDto {
  phone: string;
  addressId: string;
  deliveryTime: string;
  email: string;
}

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
