import { FormValue } from "components/formValue/Formvalue";
import { AddressChoice } from "utils/types/Address";
import style from "./style.module.scss";
import { useAddress } from "utils/hooks/addressValues";
export const AddressForm = (props: AddressChoice) => {
  const { availableAddresses, setChangeIndex, setSelectedAddresses, setQueryAddress, selectedAddresses } = useAddress(
    props.handleChange,
  );

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
          defaultValue={selectedAddresses[index] ? selectedAddresses[index].text : ""}
        />
      ))}
    </div>
  );
};
