import { useContext, useEffect } from "react";
import { ThemeContext } from "utils/context/theme";
import moon from "assets/moon.svg";
import sun from "assets/sun.svg";
import style from "./style.module.scss";

export const ThemeToggle = () => {
  const theme = useContext(ThemeContext)!;
  const { isDark, toggleTheme } = theme!;
  useEffect(() => {
    localStorage.setItem("theme", String(isDark));
  }, [isDark]);
  return (
    <button onClick={toggleTheme} className={style.theme_toggle}>
      <img src={isDark ? sun : moon} />
    </button>
  );
};
