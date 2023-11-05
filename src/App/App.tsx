import { Head } from "components/Head/Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUser } from "store/reducers/user/UserAsyncActions";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { userSlice } from "store/reducers/user/userSlice";
import { ThemeContext, getTheme } from "utils/context/theme";
import "./styles/app.scss";
import { Footer } from "components/footer/Footer";

const App = () => {
  const [isDark, setIsDark] = useState(getTheme());
  const user = useAppSelector((state) => state.userReducer);
  const { deleteError } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user.isAuth) dispatch(getUser(user.data.token)).then(() => dispatch(deleteError));
    else dispatch(deleteError());
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark: isDark, toggleTheme: () => setIsDark(!isDark) }}>
      <div className={`app ${!isDark ? "light" : ""}`}>
        <Head />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
