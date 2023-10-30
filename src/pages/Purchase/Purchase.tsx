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
        initialValues={{ email: user.email, phone: user.phoneNumber, address: user.address }}
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
                type="texy"
              />
            </div>
            <AddressForm
              isError={errors["address"] && touched["address"]}
              errorName={errors["address"]}
              handleChange={(value) => {
                setFieldValue("address", value);
              }}
              objectGuid={values.address}
              label={"Адрес доставки"}
            />
            <button className={style.button}>Подтвердить заказ</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
