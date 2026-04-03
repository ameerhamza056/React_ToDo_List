import { useEffect, useState } from "react";
import logo from "../assets/react.svg";

export default function Header() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "gTwo"
  );

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
          <span>TaskApp</span>
        </div>

        <div className="themeSelector">
          <span
            className={theme === "light" ? "light activeTheme" : "light"}
            onClick={() => setTheme("light")}
          ></span>

          <span
            className={theme === "medium" ? "medium activeTheme" : "medium"}
            onClick={() => setTheme("medium")}
          ></span>

          <span
            className={theme === "dark" ? "dark activeTheme" : "dark"}
            onClick={() => setTheme("dark")}
          ></span>

          <span
            className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
            onClick={() => setTheme("gOne")}
          ></span>

          <span
            className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
            onClick={() => setTheme("gTwo")}
          ></span>

          <span
            className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
            onClick={() => setTheme("gThree")}
          ></span>
        </div>
      </header>
    </>
  );
}