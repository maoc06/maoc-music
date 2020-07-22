import React, { useState } from "react";
import "./Toggle.css";

const ToogleTheme = () => {
  const [currentTheme, setTheme] = useState("dark");

  function handleToggleTheme() {
    let posX = 0;
    if (currentTheme === "light") {
      posX = 0;
      setTheme("dark");
    } else {
      posX = 25;
      setTheme("light");
    }
    document.getElementById(
      "swithcher"
    ).style.transform = `translateX(${posX}px)`;
    document.documentElement.setAttribute("data-theme", currentTheme);
  }
  return (
    <div className="toggle" onClick={handleToggleTheme}>
      <div id="swithcher"></div>
    </div>
  );
};

export default ToogleTheme;
