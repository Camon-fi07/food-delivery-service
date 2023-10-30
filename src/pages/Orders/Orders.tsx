import { useAppSelector } from "utils/hooks/redux";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const Orders = () => {
  const cart = useAppSelector((state) => state.cartReducer);
  return (
    <div className={style.orders}>
      {cart.dishes.length ? (
        <div className={style.purchase_alert}>
          <span>В корзине есть блюда, можно оформить заказ</span>
          <Link className={style.link} to={"/purchase"}>
            Оформить
          </Link>
        </div>
      ) : (
        ""
      )}
      <h2 className={style.title}>Последние заказы</h2>
    </div>
  );
};
