"use client";
import React from "react";
import { backgrounds } from "../utils/utils";

function BackgroundSelector({ background, setBackground }) {
  const handleBackgroundChange = (newBackground) => {
    setBackground(newBackground);
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown">
      <p className="text-center font-bold text-gray-100 mb-2">
        Background Color
      </p>

      <div
        tabIndex={0}
        role="button"
        className="btn m-1 w-[150px] justify-center"
      >
        <a
          className="background-color"
          style={{
            background: `${background}`,
          }}
        ></a>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {backgrounds.map((background) => {
          return (
            <li
              onClick={() => handleBackgroundChange(background)}
              key={background}
            >
              <a
                className="background-color"
                style={{
                  marginTop: 10,
                  background: `${background}`,
                }}
              ></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BackgroundSelector;
