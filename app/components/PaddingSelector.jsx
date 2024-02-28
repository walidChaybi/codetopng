"use client";
import React from "react";
import { backgrounds, paddings } from "../utils/utils";

function PaddingSelector({ padding, setPadding }) {
  const handlePaddingChange = (newPadding) => {
    setPadding(newPadding);
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown">
      <p className="text-center font-bold text-gray-100 mb-2">Padding</p>

      <div
        tabIndex={0}
        role="button"
        className="btn m-1 w-[150px] justify-center"
      >
        <a>{padding}</a>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {paddings.map((padding) => {
          return (
            <li onClick={() => handlePaddingChange(padding)} key={padding}>
              <a>{padding}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PaddingSelector;
