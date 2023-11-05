import { createContext } from "react";

export const getTheme = () => {
  const isDark = localStorage.getItem("theme");
  return isDark === "false" ? false : true;
};

export const ThemeContext = createContext<{ isDark: boolean; toggleTheme: () => void } | undefined>(undefined);
