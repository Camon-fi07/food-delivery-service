import { DishBasketDto } from "utils/types/Dish";
export enum DishCategory {
  Wok = "Wok",
  Pizza = "Pizza",
  Soup = "Soup",
  Dessert = "Dessert",
  Drink = "Drink",
}

export enum DishSorting {
  NameAsc = "NameAsc",
  NameDesc = "NameDesc",
  PriceAsc = "PriceAsc",
  PriceDesc = "PriceDesc",
  RatingAsc = "RatingAsc",
  RatingDesc = "RatingDesc ",
}

export interface DishDto {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  vegetarian: boolean;
  rating: number;
  category: DishCategory;
}

export interface DishBasketDto {
  id: string;
  name: string;
  price: number;
  totalPrice: number;
  amount: number;
  image: string;
}

export interface DishPagedListDto {
  dishes: DishDto[];
  pagination: {
    size: number;
    count: number;
    current: number;
  };
}

export interface CartState {
  dishes: DishBasketDto[];
  isLoading: boolean;
  error: string;
}
