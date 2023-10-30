import { DishBasketDto } from "./Dish";

export enum OrderStatus {
  InProcess = "InProcess",
  Delivered = "Delivered",
}

export const OrderStatusTranslate = {
  InProcess: "В обработке",
  Delivered: "Доставлен",
};

export interface OrderDto {
  id: string;
  deliveryTime: string;
  orderTime: string;
  status: OrderStatus;
  price: number;
  dishes: DishBasketDto[];
  address: string;
}

export interface OrderInfoDto {
  id: string;
  deliveryTime: string;
  orderTime: string;
  status: OrderStatus;
  price: number;
}

export interface OrderItemOnfo {
  order: OrderInfoDto;
  onConfirm: () => void;
}

export interface OrderListOnfo {
  orders: OrderInfoDto[];
  getOrders: () => void;
}
