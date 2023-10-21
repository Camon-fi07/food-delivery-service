import axios from "axios";
import { addressSearch } from "utils/consts/apiUrls";
import { Address } from "utils/types/Address";

export const getAddress = async (parentObjectId?: number, query?: string) => {
  try {
    const res = await axios.get<Address[]>(addressSearch, { params: { parentObjectId, query } });
    return Promise.resolve(res);
  } catch (e) {
    return Promise.reject(e);
  }
};
