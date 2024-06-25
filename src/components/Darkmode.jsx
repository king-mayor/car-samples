import React, { useState, useEffect } from "react";
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import { BsToggle2Off } from "react-icons/bs";
import useLocalStorage from "use-local-storage";
function Darkmode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="">
      {theme == "dark" ? (
        <FaToggleOn
          size={32}
          color="gray"
          className="transition-all duration-1000 cursor-pointer"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        />
      ) : (
        <FaToggleOff
          size={32}
          color="gray"
          className="transition-all duration-1000 cursor-pointer"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        />
      )}
    </div>
  );
}

export default Darkmode;
