import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { useEffect, useState } from "react";
import burgerMenuIcon from "assets/burger_menu_icon.svg.png";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { userSlice } from "store/reducers/userSlice";
import { logout } from "utils/helpers/logout";
export const Head = () => {
  const userInfo = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const { clear } = userSlice.actions;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsVisibleMenu(false);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) setIsVisibleMenu(false);
      else setIsVisibleMenu(true);
    });
  }, []);
  return (
    <header className={style.head}>
      <h1 className={style.logo}>
        <Link to={"/"}>HITs delivery</Link>
      </h1>
      <div className={style.menu}>
        {windowWidth < 768 ? (
          <button
            onClick={() => {
              setIsVisibleMenu(!isVisibleMenu);
            }}
            className={style.burger_menu}
          >
            <img src={burgerMenuIcon} />
          </button>
        ) : (
          ""
        )}
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
                <ul className={`${!isProfileVisible ? style.hidden : ""} ${style.profile}`}>
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
              <li>
                <Link to={"cart"}>Корзина</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"login"}>Вход</Link>
              </li>
              <li>
                <Link to={"registration"}>Регистрация</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};
