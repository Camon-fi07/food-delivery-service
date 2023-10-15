import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { getAddress } from "utils/helpers/getAddress";
import { AvailableAddress } from "utils/types/Address";
import style from "./style.module.scss";
import { FormValue } from "components/formValue/Formvalue";
export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      phone: "",
      birth: "",
      region: 0,
      city: 0,
      street: 0,
      house: 0,
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { errors, values, touched, handleChange, handleSubmit, setFieldTouched } = formik;

  const [availableAddress, setAvailabeAddress] = useState<AvailableAddress>({} as AvailableAddress);
  useEffect(() => {
    getAddress().then((res) => {
      console.log(res);
      setAvailabeAddress((prevValue) => {
        return { ...prevValue, regions: res.data };
      });
    });
  }, []);
  useEffect(() => {
    getAddress(values.region).then((res) => {
      console.log(res);
      setAvailabeAddress((prevValue) => {
        return { ...prevValue, cities: res.data };
      });
    });
  }, [values.region]);
  useEffect(() => {
    getAddress(values.city).then((res) => {
      console.log(res);
      setAvailabeAddress((prevValue) => {
        return { ...prevValue, streets: res.data };
      });
    });
  }, [values.city]);
  useEffect(() => {
    getAddress(values.street).then((res) => {
      console.log(res);
      setAvailabeAddress((prevValue) => {
        return { ...prevValue, houses: res.data };
      });
    });
  }, [values.street]);

  return (
    <form className={style.registration_form} onSubmit={handleSubmit}>
      <FormValue
        handleChange={handleChange}
        label="ФИО"
        name="name"
        type="text"
        isError={errors["name"] && touched["name"]}
        errorName={errors["name"]}
      />
      <FormValue
        handleChange={handleChange}
        label="Пол"
        name="gender"
        type="select"
        options={[
          { value: "Мужской", name: "Мужской" },
          { value: "Женский", name: "Женский" },
        ]}
      />
      <FormValue
        handleChange={handleChange}
        label="Телефон"
        name="phone"
        type="tel"
        isError={errors["phone"] && touched["phone"]}
        errorName={errors["phone"]}
      />
      <FormValue handleChange={handleChange} label="Дата рождения" name="birth" type="date" />
      <FormValue
        handleChange={handleChange}
        label="Телефон"
        name="phone"
        type="tel"
        isError={errors["phone"] && touched["phone"]}
        errorName={errors["phone"]}
      />
      <FormValue
        handleChange={(e) => {
          handleChange(e);
          setFieldTouched("region", true);
        }}
        defaultValue={-1}
        label="Регион"
        name="region"
        type="select"
        options={
          availableAddress.regions
            ? availableAddress.regions.map((region) => {
                return { value: region.objectId, name: region.text };
              })
            : []
        }
      />
      {touched.region && (
        <FormValue
          handleChange={(e) => {
            handleChange(e);
            setFieldTouched("city", true);
          }}
          label="Город"
          name="city"
          type="select"
          options={
            availableAddress.cities
              ? availableAddress.cities.map((city) => {
                  return { value: city.objectId, name: city.text };
                })
              : []
          }
        />
      )}
      {touched.city && (
        <FormValue
          handleChange={(e) => {
            handleChange(e);
            setFieldTouched("street", true);
          }}
          label="Улица"
          name="street"
          type="select"
          options={
            availableAddress.streets
              ? availableAddress.streets.map((street) => {
                  return { value: street.objectId, name: street.text };
                })
              : []
          }
        />
      )}
      {touched.street && (
        <FormValue
          handleChange={(e) => {
            handleChange(e);
            setFieldTouched("house", true);
          }}
          label="Дом"
          name="house"
          type="select"
          options={
            availableAddress.houses
              ? availableAddress.houses.map((house) => {
                  return { value: house.objectId, name: house.text };
                })
              : []
          }
        />
      )}
      <button className={style.button} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};
