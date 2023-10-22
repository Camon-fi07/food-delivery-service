import axios from "axios";
import { addressChain, addressSearch } from "utils/consts/apiUrls";
import { Address } from "utils/types/Address";

export const getAddress = async (parentObjectId?: number, query?: string) => {
  try {
    const res = await axios.get<Address[]>(addressSearch, { params: { parentObjectId, query } });
    return Promise.resolve(res);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getAddressChain = async (objectGuid?: string) => {
  try {
    const res = await axios.get<Address[]>(addressChain, { params: { objectGuid } });
    return Promise.resolve(res);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getAddressOfChain = async (
  parentObjectId: number,
  selectedAddresses: Address[],
  lastAddresses: Address[][],
  indexNow: number,
): Promise<Address[][]> => {
  try {
    const res = await axios.get<Address[]>(addressSearch, { params: { parentObjectId } });
    if (res.data.length) {
      return getAddressOfChain(
        selectedAddresses[indexNow].objectId,
        selectedAddresses,
        [...lastAddresses, res.data],
        indexNow + 1,
      );
    } else {
      return lastAddresses;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
