"use client";
import React from "react";
import { themes } from "../utils/utils";

function ThemeSelector({ theme, setTheme }) {
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme.name);
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown">
      <p className="text-center font-bold text-gray-100 mb-2">Code Theme</p>

      <div
        tabIndex={0}
        role="button"
        className="btn m-1 w-[150px] justify-center"
      >
        {theme}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {themes.map((theme) => {
          return (
            <li onClick={() => handleThemeChange(theme)} key={theme.name}>
              <a>{theme.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ThemeSelector;
