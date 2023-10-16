import { FormValue } from "components/formValue/Formvalue";
import { useEffect, useState } from "react";
import { getAddress } from "utils/helpers/getAddress";
import { AddressLevel, AvailableAddress } from "utils/types/Address";

export const AddressForm = (props: {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [availableAddress, setAvailabeAddress] = useState<AvailableAddress>({} as AvailableAddress);
  const [selectedId, setSelectedId] = useState<number[]>([0]);
  const [changeIndex, setChangeIndex] = useState(0);
  useEffect(() => {
    for (let i = changeIndex; i < selectedId.length; i++) {
      getAddress(selectedId[i]).then((res) => {
        if (res.data.length) {
          setAvailabeAddress((prevValue) => {
            prevValue[res.data[0].objectLevel] = res.data;
            return { ...prevValue };
          });
        }
      });
    }
  }, [changeIndex, selectedId]);
  return (
    <div>
      {Object.values(availableAddress).map((item, index) =>
        item[0].objectLevel === AddressLevel.Building ? (
          <FormValue
            handleChange={props.handleChange}
            name="address"
            label={item[0].objectLevelText}
            type="select"
            options={item.map((addressItem) => ({
              value: addressItem.objectGuid,
              name: addressItem.text,
            }))}
          />
        ) : (
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
          />
        ),
      )}
    </div>
  );
};
