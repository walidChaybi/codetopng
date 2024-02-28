"use client";
import React from "react";
import { languages } from "../utils/utils";

function LanguageSelector({
  language,
  setLanguage,
  setActiveIcon,
  activeIcon,
}) {
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage.name);
    setActiveIcon(newLanguage.icon);
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown">
      <p className="text-center font-bold text-gray-100 mb-2">Language</p>
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 w-[150px] justify-center"
      >
        {activeIcon}
        {language}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {languages.map((language) => {
          return (
            <li
              onClick={() => handleLanguageChange(language)}
              key={language.name}
            >
              <a>
                {language.icon}
                {language.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LanguageSelector;
