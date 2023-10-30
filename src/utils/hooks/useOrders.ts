import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { order } from "utils/consts/apiUrls";
import { OrderInfoDto } from "utils/types/Order";

export const useOrders = (token: string) => {
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
      .catch((err) => toast.error(err));
  };
  useEffect(() => {
    getOrders();
  }, []);

  return { orders, getOrders };
};
