import { Address } from "utils/types/Address";
import { getAddressChain } from "./getAddress";

const convert = (addresses: Address[]): string => {
  let result = "";
  addresses.forEach((item) => {
    result += `${item.text}, `;
  });
  return result;
};

export const convertAddressChain = async (guid: string) => {
  const { data } = await getAddressChain(guid);
  return Promise.resolve(convert(data));
};
