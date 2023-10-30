import { useAppSelector } from "utils/hooks/redux";
import style from "./style.module.scss";

export const Purchase = () => {
  const cart = useAppSelector((state) => state.cartReducer);
  return (
    <div className={style.purchase}>
      <h2 className={style.title}>Оформление заказа</h2>
    </div>
  );
};
