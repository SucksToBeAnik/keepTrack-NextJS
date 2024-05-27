"use client";

import { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { themeChange } from "theme-change";
import { ThemeVariation } from "@/utils/types";

const ToggleThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariation>();
  function handleChangeTheme() {
    if (currentTheme === "COFFEE") {
      setCurrentTheme("RETRO");
      localStorage.setItem("theme", "RETRO");
    } else {
      setCurrentTheme("COFFEE");
      localStorage.setItem("theme", "COFFEE");
    }
  }

  useEffect(() => {
    const existingTheme = localStorage.getItem("theme");
    if (existingTheme && ["RETRO", "COFFEE"].includes(existingTheme)) {
      setCurrentTheme(existingTheme as ThemeVariation);
    }
    themeChange(false);
  }, []);

  return (
    <div className="btn btn-circle bg-secondary" onClick={handleChangeTheme}>
      {currentTheme === "COFFEE" ? (
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
