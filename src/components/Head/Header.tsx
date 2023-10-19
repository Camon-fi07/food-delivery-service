import { useAppSelector } from "utils/hooks/redux";
import { useEffect, useState } from "react";
import burgerMenuIcon from "assets/burger_menu_icon.svg.png";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
export const Head = () => {
  const userInfo = useAppSelector((state) => state.persistedReducer);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 768) setIsVisible(false);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) setIsVisible(false);
      else setIsVisible(true);
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
              setIsVisible(!isVisible);
            }}
            className={style.burger_menu}
          >
            <img src={burgerMenuIcon} />
          </button>
        ) : (
          ""
        )}
        <ul className={`${!isVisible ? style.hidden : ""} ${style.user_info}`}>
          {userInfo.isAuth ? (
            <>
              <li>
                <Link to={"profile"}>Профиль</Link>
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
