import { useAppSelector } from "utils/hooks/redux";
import style from "./style.module.scss";
import { DishesList } from "components/dishesList/DishesList";

export const Purchase = () => {
  const cart = useAppSelector((state) => state.cartReducer);
  return (
    <div className={style.purchase}>
      <h2 className={style.title}>Оформление заказа</h2>
      <DishesList canChange={false} dishes={cart.dishes} />
    </div>
  );
};
