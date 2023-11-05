import { PurchaseForm } from "components/purchaseForm/PurchaseForm";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { PurchaseDto } from "utils/types/CartInfo";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { order } from "utils/consts/apiUrls";
import style from "./style.module.scss";
import { purchaseInitValues } from "utils/consts/formsInitValues";
import { getCart } from "store/reducers/cart/cartAsyncActions";
import { useContext } from "react";
import { ThemeContext } from "utils/context/theme";

export const Purchase = () => {
  const theme = useContext(ThemeContext);
  const user = useAppSelector((state) => state.userReducer);
  const { dishes } = useAppSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = (values: PurchaseDto) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.data.token}`,
      },
    };
    const data = { deliveryTime: values.deliveryTime, addressId: values.addressId };
    toast.promise(
      axios.post(order, data, config).then(() => {
        dispatch(getCart(user.data.token)).then(() => {
          navigate("/orders");
        });
      }),
      {
        pending: "Происходит изменение",
        success: "Заказ сделан",
        error: "Произошла ошибка",
      },
      { theme: theme?.isDark ? "dark" : "light", autoClose: 1000 },
    );
  };
  const initialValues = purchaseInitValues(user.data.user);
  return (
    <div className={style.purchase}>
      <ToastContainer />
      <h2 className={style.title}>Оформление заказа</h2>
      <PurchaseForm initialValues={initialValues} dishes={dishes} onSubmit={onSubmit} />
    </div>
  );
};
