import axios from "axios";
import { useEffect, useState } from "react";

export const useGetRequest = <T>(url: string, onError: () => void, token?: string) => {
  const [data, setData] = useState<T>();
  const getData = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get<T>(url, config)
      .then((res) => setData(res.data))
      .catch(() => onError());
  };
  useEffect(() => {
    getData();
  }, []);

  return { getData, data };
};
