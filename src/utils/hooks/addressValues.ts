import { useEffect, useState } from "react";
import { getAddress, getAddressChain } from "utils/helpers/getAddress";
import { Address } from "utils/types/Address";

export const useAddress = (handleChange: (value: string) => void, objectGuid?: string) => {
  const [availableAddresses, setAvailableAddresses] = useState<Address[][]>([]);
  const [selectedAddresses, setSelectedAddresses] = useState<Address[]>([]);
  const [queryAddress, setQueryAddress] = useState<{ index: number; query: string[] }>({ index: -1, query: [] });
  const [changeIndex, setChangeIndex] = useState(-1);

  useEffect(() => {
    if (objectGuid) {
      getAddressChain(objectGuid).then((res) => {
        setChangeIndex(res.data.length - 1);
        setSelectedAddresses([...res.data]);
        getAddress(0).then((res) => {
          if (res.data.length) {
            setAvailableAddresses((prevValue) => {
              prevValue[0] = res.data;
              return [...prevValue];
            });
          }
        });
        for (let i = 0; i < res.data.length - 1; i++) {
          getAddress(res.data[i].objectId).then((res) => {
            if (res.data.length) {
              setAvailableAddresses((prevValue) => {
                prevValue[i + 1] = res.data;
                return [...prevValue];
              });
            }
          });
        }
      });
    }
  }, []);

  useEffect(() => {
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
    const id = queryAddress.index > 0 ? selectedAddresses[queryAddress.index - 1].objectId : 0;
    getAddress(id, queryAddress.query[queryAddress.index]).then((res) => {
      setAvailableAddresses((prevValue) => {
        prevValue[queryAddress.index] = res.data;
        return [...prevValue];
      });
    });
  }, [queryAddress]);

  return { availableAddresses, setChangeIndex, setSelectedAddresses, setQueryAddress, selectedAddresses };
};
