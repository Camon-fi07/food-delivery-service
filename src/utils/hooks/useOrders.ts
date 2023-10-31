import axios from "axios";
import { useEffect, useState } from "react";
import { order } from "utils/consts/apiUrls";
import { OrderInfoDto } from "utils/types/Order";

export const useOrders = (token: string, onError: () => void) => {
  const [orders, setOrders] = useState<OrderInfoDto[]>([]);
  const getOrders = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get<OrderInfoDto[]>(order, config)
      .then((res) => setOrders(res.data))
      .catch(() => onError());
  };
  useEffect(() => {
    getOrders();
  }, []);

  return { orders, getOrders };
};
