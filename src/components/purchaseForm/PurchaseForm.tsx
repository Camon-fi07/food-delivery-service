import { Form, Formik } from "formik";
import { FormValue } from "components/formValue/Formvalue";
import { purchaseValidateScheme } from "utils/consts/validation";
import { AddressForm } from "components/AddressForm/AddressForm";
import { DishesList } from "components/dishesList/DishesList";
import { getTotalPrice } from "utils/helpers/getTotalPrice";
import { PurchaseFormInfo } from "utils/types/FormInfo";
import style from "./style.module.scss";

export const PurchaseForm = (props: PurchaseFormInfo) => {
  return (
    <Formik initialValues={props.initialValues} validationSchema={purchaseValidateScheme} onSubmit={props.onSubmit}>
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
            label="Время доставки"
            name="deliveryTime"
            type="datetime-local"
          />
          <AddressForm
            isError={errors["addressId"] && touched["addressId"]}
            errorName={errors["addressId"]}
            handleChange={(value) => {
              setFieldValue("addressId", value);
            }}
            objectGuid={values.addressId}
            label={"Адрес доставки"}
          />
          <DishesList dishes={props.dishes} canChange={false} />
          <span className={style.price}>
            <b>Стоимость заказа: </b> {getTotalPrice(props.dishes)}
          </span>
          <button type="submit" className={style.button}>
            Подтвердить заказ
          </button>
        </Form>
      )}
    </Formik>
  );
};
