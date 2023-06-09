import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

export default function PageWrapper({ children }) {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const theme = useSelector((state) => state.theme.value);
  theme ? setDarkMode() : setLightMode();

  return (
    <div className={theme ? "bg-dark text-white" : ""}>
      <Header />
      <Navbar theme={theme} />
      {children}
    </div>
  );
}
