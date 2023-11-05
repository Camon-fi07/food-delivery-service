import { useState } from "react";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { Link } from "react-router-dom";
import { userSlice } from "store/reducers/user/userSlice";
import { logout } from "utils/helpers/logout";
import burgerMenuIcon from "assets/burger_menu_icon.svg.png";
import { useWidth } from "utils/hooks/useWidth";
import style from "./style.module.scss";
import { ThemeToggle } from "components/themeToggle/ThemeToggle";

export const Head = () => {
  const userInfo = useAppSelector((state) => state.userReducer);
  const cart = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const { clear } = userSlice.actions;
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useWidth((value) => {
    if (value >= 768) {
      setIsProfileVisible(false);
      setIsVisibleMenu(true);
    } else if (value < 768) setIsVisibleMenu(false);
    setWidth(value);
  });
  const close = (closeProfile: boolean = false) => {
    if (closeProfile) setIsProfileVisible(false);
    if (width < 768) setIsVisibleMenu(false);
  };
  return (
    <header className={style.head}>
      <h1 className={style.logo}>
        <Link to={"/"}>HITs delivery</Link>
      </h1>
      <div className={style.menu}>
        <button
          onClick={() => {
            setIsVisibleMenu(!isVisibleMenu);
          }}
          className={style.burger_menu}
        >
          <img src={burgerMenuIcon} />
        </button>
        <ul className={`${!isVisibleMenu ? style.hidden : ""} ${style.user_info}`}>
          {userInfo.isAuth ? (
            <>
              <li className={style.profile}>
                <button
                  onClick={() => {
                    setIsProfileVisible(!isProfileVisible);
                  }}
                >
                  Профиль
                </button>
                <ul onClick={() => close(true)} className={`${!isProfileVisible ? style.hidden : ""} ${style.profile}`}>
                  <li>
                    <Link to={"profile"}>Настройки профиля</Link>
                  </li>
                  <li>
                    <Link to={"orders"}>Заказы</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        logout(userInfo.data.token, () => {
                          dispatch(clear());
                        });
                      }}
                    >
                      Выйти из аккаунта
                    </button>
                  </li>
                </ul>
              </li>
              <li onClick={() => close()}>
                <Link to={"cart"}>Корзина{cart.dishes.length ? `(${cart.dishes.length})` : ""}</Link>
              </li>
            </>
          ) : (
            <>
              <li onClick={() => close()}>
                <Link to={"login"}>Вход</Link>
              </li>
              <li onClick={() => close()}>
                <Link to={"registration"}>Регистрация</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={style.theme}>
        <ThemeToggle />
      </div>
    </header>
  );
};
