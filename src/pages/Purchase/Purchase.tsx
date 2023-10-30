import { PurchaseForm } from "components/purchaseForm/PurchaseForm";
import style from "./style.module.scss";

export const Purchase = () => {
  return (
    <div className={style.purchase}>
      <h2 className={style.title}>Оформление заказа</h2>
      <PurchaseForm />
    </div>
  );
};
