import { FormValue } from "components/formValue/Formvalue";
import { useEffect, useState } from "react";
import { getAddress } from "utils/helpers/getAddress";
import { Address, AddressChoice } from "utils/types/Address";
import style from "./style.module.scss";
export const AddressForm = (props: AddressChoice) => {
  const [availableAddresses, setAvailableAddresses] = useState<Address[][]>([]);
  const [selectedAddresses, setSelectedAddresses] = useState<Address[]>([]);
  const [queryAddress, setQueryAddress] = useState<{ index: number; query: string[] }>({ index: -1, query: [] });
  const [changeIndex, setChangeIndex] = useState(-1);
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
        props.handleChange(selectedAddresses[changeIndex].objectGuid);
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

  return (
    <div className={style.addressSelect}>
      <h1 className={style.title}>Адрес проживания</h1>
      {availableAddresses.map((item, index) => (
        <FormValue
          handleChange={(e) => {
            setChangeIndex(index);
            setSelectedAddresses((prevValue) => {
              prevValue[index] = item[Number(e.target.value)];
              return [...prevValue];
            });
          }}
          onInputChange={(value) => {
            setQueryAddress((prevValue) => {
              prevValue.index = index;
              prevValue.query[index] = value;
              return { ...prevValue };
            });
          }}
          label={selectedAddresses[index] ? selectedAddresses[index].objectLevelText : "Следующий элемент"}
          name={selectedAddresses[index] ? selectedAddresses[index].objectLevel : "nextAddress"}
          type="selectInput"
          options={item.map((addressItem, itemIndex) => ({
            value: itemIndex,
            name: addressItem.text,
          }))}
          isError={props.isError && index === availableAddresses.length - 1}
          errorName={props.errorName}
        />
      ))}
    </div>
  );
};
