import { useAppSelector } from "utils/hooks/redux";
import style from "./style.module.scss";
import { DishesList } from "components/dishesList/DishesList";
import { Link } from "react-router-dom";
import { getTotalPrice } from "utils/helpers/getTotalPrice";

export const Cart = () => {
  const { dishes, error, isLoading } = useAppSelector((state) => state.cartReducer);
  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Wait...</p>;

  return (
    <div className={style.cart}>
      <h2 className={style.title}>Товары в корзине</h2>
      <DishesList canChange={true} dishes={dishes} />
      {dishes.length ? (
        <Link className={style.link} to={"/purchase"}>
          Верно, к оплате
          <span>{getTotalPrice(dishes)} ₽</span>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
