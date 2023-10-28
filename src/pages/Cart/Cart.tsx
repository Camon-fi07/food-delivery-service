import { useAppSelector } from "utils/hooks/redux";
import style from "./style.module.scss";
import { DishesList } from "components/dishesList/DishesList";

export const Cart = () => {
  const { dishes, error, isLoading } = useAppSelector((state) => state.cartReducer);
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Wait...</p>;

  return (
    <div className={style.cart}>
      <h2>Товары в корзине</h2>
      <DishesList dishes={dishes} />
    </div>
  );
};
