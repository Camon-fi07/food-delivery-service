import axios from "axios";
import { useEffect, useState } from "react";

export const useGetRequest = <T>(url: string, onError: (value: string) => void, token?: string) => {
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
      .catch((error: Error) => onError(error.message));
  };
  useEffect(() => {
    getData();
  }, []);

  return { getData, data, setData };
};
