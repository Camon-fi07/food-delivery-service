import { useAppSelector } from "utils/hooks/redux";
import style from "./style.module.scss";
import { Form, Formik } from "formik";
import { FormValue } from "components/formValue/Formvalue";
import { AddressForm } from "components/AddressForm/AddressForm";
import { purchaseValidateScheme } from "utils/consts/validation";

export const Purchase = () => {
  const cart = useAppSelector((state) => state.cartReducer);
  const {
    data: { user },
  } = useAppSelector((state) => state.userReducer);
  return (
    <div className={style.purchase}>
      <h2 className={style.title}>Оформление заказа</h2>
      <Formik
        initialValues={{ email: user.email, deliveryTime: "", phone: user.phoneNumber, addressId: user.address }}
        validationSchema={purchaseValidateScheme}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors, touched, handleChange, handleBlur, values, setFieldValue }) => (
          <Form className={style.form}>
            <div className={style.user_data}>
              <h2 className={style.title}>Данные покупателя</h2>
              <FormValue
                isError={errors["phone"] && touched["phone"]}
                errorName={errors["phone"]}
                handleChange={handleChange}
                onBlur={handleBlur}
                defaultValueName={values["phone"]}
                label="Телефон"
                name="phone"
                type="tel"
              />
              <FormValue
                isError={errors["email"] && touched["email"]}
                errorName={errors["email"]}
                handleChange={handleChange}
                onBlur={handleBlur}
                defaultValueName={values["email"]}
                label="Email"
                name="email"
                type="text"
              />
            </div>
            <FormValue
              isError={errors["deliveryTime"] && touched["deliveryTime"]}
              errorName={errors["deliveryTime"]}
              handleChange={handleChange}
              onBlur={handleBlur}
              label="Дата и время доставки"
              name="deliveryTime"
              type="datetime-local"
            />
            <AddressForm
              isError={errors["addressId"] && touched["addressId"]}
              errorName={errors["addressId"]}
              handleChange={(value) => {
                setFieldValue("address", value);
              }}
              objectGuid={values.addressId}
              label={"Адрес доставки"}
            />
            <button type="submit" className={style.button}>
              Подтвердить заказ
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
