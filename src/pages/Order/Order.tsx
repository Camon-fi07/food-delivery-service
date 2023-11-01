import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { specificOrder } from "utils/consts/apiUrls";
import { useGetRequest } from "utils/hooks/useGetRequest";
import { OrderDto, OrderStatus, OrderStatusTranslate } from "utils/types/Order";
import { DishesList } from "components/dishesList/DishesList";
import { useAppSelector } from "utils/hooks/redux";
import style from "./style.module.scss";
import { confirmOrder } from "utils/helpers/confirmOrder";

export const Order = () => {
  const { token } = useAppSelector((state) => state.userReducer).data;
  const { id } = useParams();
  const { data, getData } = useGetRequest<OrderDto>(
    specificOrder(id!),
    () => toast.error("Произошла ошибка при загрузке", { theme: "dark", autoClose: 1000 }),
    token,
  );

  return (
    <div className={style.order}>
      <ToastContainer />
      {data ? (
        <>
          <div className={style.head}>
            <h2 className={style.id}>Заказ {data.id}</h2>
            {data.status === OrderStatus.InProcess ? (
              <button onClick={() => confirmOrder(id!, token, () => getData())} className={style.confirm}>
                Подтвердить доставку
              </button>
            ) : (
              ""
            )}
          </div>
          <p className={style.description}>
            Дата заказа: <span>{data.orderTime}</span>
          </p>
          <p className={style.description}>
            Дата доставки: <span>{data.deliveryTime}</span>
          </p>
          <p className={style.description}>
            Адрес доставки: <span>{data.address}</span>
          </p>
          <p className={style.description}>
            Статус заказа - <span>{OrderStatusTranslate[data.status]}</span>
          </p>
          <span>Список блюд</span>
          <DishesList dishes={data.dishes} canChange={false} />
          <p className={style.price}>
            <b>Стоимость заказа: </b>
            {data.price} руб.
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
