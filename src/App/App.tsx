import { Head } from "components/Head/Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getUser } from "store/reducers/UserAsyncActions";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import "./styles/app.scss";

const App = () => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user.isAuth) dispatch(getUser(user.data.token));
  }, []);

  return (
    <div className="app">
      <Head />
      <Outlet />
    </div>
  );
};

export default App;
