import { useEffect } from "react";

export const useWidth = (setWidth: (value: number) => void) => {
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
