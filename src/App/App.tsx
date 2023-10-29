import { Head } from "components/Head/Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getUser } from "store/reducers/user/UserAsyncActions";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import "./styles/app.scss";
import { getCart } from "store/reducers/cart/cartAsyncActions";
import { userSlice } from "store/reducers/user/userSlice";

const App = () => {
  const user = useAppSelector((state) => state.userReducer);
  const { deleteError } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user.isAuth) {
      dispatch(getUser(user.data.token)).then((res) => {
        if (user.error) dispatch(deleteError());
        if (res.type === "getUser/fulfilled") {
          dispatch(getCart(user.data.token));
        }
      });
    }
  }, []);

  return (
    <div className="app">
      <Head />
      <Outlet />
    </div>
  );
};

export default App;
