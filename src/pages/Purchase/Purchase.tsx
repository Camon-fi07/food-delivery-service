import { PurchaseForm } from "components/purchaseForm/PurchaseForm";
import { useAppSelector } from "utils/hooks/redux";
import { OrderDTo } from "utils/types/CartInfo";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { order } from "utils/consts/apiUrls";
import style from "./style.module.scss";
import { purchaseInitValues } from "utils/consts/formsInitValues";

export const Purchase = () => {
  const user = useAppSelector((state) => state.userReducer);
  const { dishes } = useAppSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const onSubmit = (values: OrderDTo) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.data.token}`,
      },
    };
    const data = { deliveryTime: values.deliveryTime, addressId: values.addressId };
    toast.promise(
      axios.post(order, data, config).then(() => {
        navigate("/orders");
      }),
      {
        pending: "Происходит изменение",
        success: "Заказ сделан",
        error: "Произошла ошибка",
      },
      { theme: "dark", autoClose: 1000 },
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
