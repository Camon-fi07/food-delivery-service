import { PurchaseForm } from "components/purchaseForm/PurchaseForm";
import style from "./style.module.scss";
import { useAppSelector } from "utils/hooks/redux";

export const Purchase = () => {
  const { dishes } = useAppSelector((state) => state.cartReducer);
  return (
    <div className={style.purchase}>
      <h2 className={style.title}>Оформление заказа</h2>
      <PurchaseForm dishes={dishes} onSubmit={(values) => console.log(values)} />
    </div>
  );
};
