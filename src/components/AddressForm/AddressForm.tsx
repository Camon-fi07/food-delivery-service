import { FormValue } from "components/formValue/Formvalue";
import { useEffect, useState } from "react";
import { getAddress } from "utils/helpers/getAddress";
import { Address, AddressChoice } from "utils/types/Address";
import style from "./style.module.scss";
export const AddressForm = (props: AddressChoice) => {
  const [availableAddresses, setAvailableAddresses] = useState<Address[][]>([]);
  const [selectedAddresses, setSelectedAddresses] = useState<{ id: number; index: number }[]>([{ id: 0, index: -1 }]);
  const [changeIndex, setChangeIndex] = useState(0);
  useEffect(() => {
    if (
      changeIndex !== selectedAddresses.length - 1 ||
      (selectedAddresses[changeIndex].id === 0 && availableAddresses.length !== 0)
    ) {
      setSelectedAddresses((prevValue) => {
        prevValue.length = changeIndex + 1;
        return [...prevValue];
      });
      setAvailableAddresses((prevValue) => {
        prevValue.length = changeIndex + 1;
        return [...prevValue];
      });
      if (selectedAddresses[changeIndex].id === 0 && availableAddresses.length !== 0) return;
    }
    getAddress(selectedAddresses[changeIndex].id).then((res) => {
      if (res.data.length) {
        setAvailableAddresses((prevValue) => {
          prevValue[prevValue.length ? changeIndex + 1 : 0] = res.data;
          return [...prevValue];
        });
      } else {
        const id = availableAddresses[changeIndex][selectedAddresses[changeIndex].index].objectGuid;
        props.handleChange(id);
      }
    });
  }, [changeIndex, selectedAddresses[changeIndex]]);
  return (
    <div className={style.addressSelect}>
      <h1 className={style.title}>Адрес проживания</h1>
      {availableAddresses.map((item, index) => (
        <FormValue
          handleChange={(e) => {
            setChangeIndex(index);
            setSelectedAddresses((prevValue) => {
              if (e.target.value)
                prevValue[index] = { id: item[Number(e.target.value)].objectId, index: Number(e.target.value) };
              else prevValue[index] = { id: 0, index: -1 };

              return [...prevValue];
            });
          }}
          label={
            selectedAddresses[index] && selectedAddresses[index].index !== -1
              ? item[selectedAddresses[index].index].objectLevelText
              : "Следующий элемент"
          }
          name={
            selectedAddresses[index] && selectedAddresses[index].index !== -1
              ? item[selectedAddresses[index].index].objectLevelText
              : "nextAddress"
          }
          type="select"
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
