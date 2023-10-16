import { FormValue } from "components/formValue/Formvalue";
import { useEffect, useState } from "react";
import { getAddress } from "utils/helpers/getAddress";
import { Address } from "utils/types/Address";
import style from "./style.module.scss";
export const AddressForm = (props: { isError: string | undefined; handleChange: (value: string) => void }) => {
  const [availableAddress, setAvailableAddress] = useState<Address[][]>([]);
  const [selectedId, setSelectedId] = useState<number[]>([0]);
  const [changeIndex, setChangeIndex] = useState(0);
  useEffect(() => {
    if (selectedId[changeIndex] === 0 && availableAddress.length !== 0) {
      setSelectedId((prevValue) => {
        prevValue.length = changeIndex + 1;
        return [...prevValue];
      });
      setAvailableAddress((prevValue) => {
        prevValue.length = changeIndex + 1;
        return [...prevValue];
      });
      props.handleChange("");
      return;
    }
    getAddress(selectedId[changeIndex]).then((res) => {
      if (res.data.length) {
        setAvailableAddress((prevValue) => {
          prevValue[prevValue.length ? changeIndex + 1 : 0] = res.data;
          return [...prevValue];
        });
      } else {
        const id = availableAddress[changeIndex].find((item) => item.objectId === selectedId[changeIndex])!.objectGuid;
        props.handleChange(id);
      }
    });
    if (changeIndex !== selectedId.length - 1) {
      setSelectedId((prevValue) => {
        prevValue.length = changeIndex + 1;
        return [...prevValue];
      });
      setAvailableAddress((prevValue) => {
        prevValue.length = changeIndex + 1;
        return [...prevValue];
      });
    }
  }, [changeIndex, selectedId[changeIndex]]);
  return (
    <div className={style.addressSelect}>
      <h1 className={style.title}>Адрес проживания</h1>
      {availableAddress.map((item, index) => (
        <FormValue
          handleChange={(e) => {
            setChangeIndex(index);
            setSelectedId((prevValue) => {
              prevValue[index] = Number(e.target.value);
              return [...prevValue];
            });
          }}
          label={item[0].objectLevelText}
          name={item[0].objectLevel}
          type="select"
          options={item.map((addressItem) => ({
            value: addressItem.objectId,
            name: addressItem.text,
          }))}
          isError={props.isError && index == availableAddress.length - 1}
          errorName={props.isError}
        />
      ))}
    </div>
  );
};
