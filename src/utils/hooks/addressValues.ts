import { useEffect, useState } from "react";
import { getAddress, getAddressChain, getAddressOfChain } from "utils/helpers/getAddress";
import { Address } from "utils/types/Address";

export const useAddress = (handleChange: (value: string) => void, objectGuid?: string) => {
  const [availableAddresses, setAvailableAddresses] = useState<Address[][]>([]);
  const [selectedAddresses, setSelectedAddresses] = useState<Address[]>([]);
  const [queryAddress, setQueryAddress] = useState<{ index: number; query: string[] }>({ index: -1, query: [] });
  const [changeIndex, setChangeIndex] = useState(-1);

  useEffect(() => {
    if (objectGuid) {
      getAddressChain(objectGuid).then((res) => {
        setSelectedAddresses([...res.data]);
        getAddressOfChain(0, res.data, [], 0).then((res) => setAvailableAddresses([...res]));
        setChangeIndex(res.data.length - 1);
      });
    }
  }, []);

  useEffect(() => {
    if (objectGuid && changeIndex === -1) return;
    if (changeIndex < selectedAddresses.length - 1) {
      setSelectedAddresses((prevValue) => {
        prevValue.length = changeIndex + 1;
        return [...prevValue];
      });
      setAvailableAddresses((prevValue) => {
        prevValue.length = changeIndex + 1;
        return [...prevValue];
      });
      setQueryAddress((prevValue) => {
        prevValue.query.length = changeIndex + 1;
        return { index: prevValue.query.length - 1, query: [...prevValue.query] };
      });
    }
    const id = changeIndex !== -1 ? selectedAddresses[changeIndex].objectId : 0;
    getAddress(id).then((res) => {
      if (res.data.length) {
        setAvailableAddresses((prevValue) => {
          prevValue[prevValue.length ? changeIndex + 1 : 0] = res.data;
          return [...prevValue];
        });
      } else {
        handleChange(selectedAddresses[changeIndex].objectGuid);
      }
    });
  }, [selectedAddresses[changeIndex]]);

  useEffect(() => {
    if (objectGuid && queryAddress.index === -1) return;
    const id = queryAddress.index > 0 ? selectedAddresses[queryAddress.index - 1].objectId : 0;
    getAddress(id, queryAddress.query[queryAddress.index]).then((res) => {
      setAvailableAddresses((prevValue) => {
        prevValue[queryAddress.index > 0 ? queryAddress.index : 0] = res.data;
        return [...prevValue];
      });
    });
  }, [queryAddress]);

  return { availableAddresses, setChangeIndex, setSelectedAddresses, setQueryAddress, selectedAddresses };
};
