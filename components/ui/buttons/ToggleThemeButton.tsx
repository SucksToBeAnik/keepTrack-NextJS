"use client";

import { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { themeChange } from "theme-change";
import { ThemeVariation } from "@/utils/types";

const ToggleThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariation>();

  function handleChangeTheme() {
    if (currentTheme === "coffee") {
      setCurrentTheme("retro");
      localStorage.setItem("theme", "retro");
    } else {
      setCurrentTheme("coffee");
      localStorage.setItem("theme", "coffee");
    }
  }

  useEffect(() => {
    const existingTheme = localStorage.getItem("theme");
    if (existingTheme && ["retro", "coffee"].includes(existingTheme)) {
      setCurrentTheme(existingTheme as ThemeVariation);
    }else{
      setCurrentTheme("coffee")
      localStorage.setItem("theme","coffee")
    }
    themeChange(false);
  }, []);

  return (
    <div className="btn btn-circle bg-secondary" onClick={handleChangeTheme}>
      {currentTheme === "coffee" ? (
        <button
          data-set-theme="retro"
          data-act-class="ACTIVECLASS"
        >
          <CiLight className="w-6 h-6" />
        </button>
      ) : (
        <button
          data-set-theme="coffee"
          data-act-class="ACTIVECLASS"
        >
          <CiDark className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ToggleThemeButton;
