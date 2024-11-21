/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { TInput } from "@/type";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FloatingLabelInput: React.FC<TInput> = ({
  label,
  type = "text",
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className="relative w-full">
      <input
        type={
          (type === "password" && isVisible === true ? "text" : type) 
        }
        className={`peer w-full border rounded-md px-[14px]  py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-primary
        `}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(e.target.value !== "")}
        {...props}
      />

      {type === "password" && (
        <button
          className="absolute top-4 right-3"
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <FaEye className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      )}

      <label
        className={`absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-500 text-lg transition-all duration-200 
          peer-placeholder-shown:top-2/4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400
          peer-focus:top-0 peer-focus:translate-y-[-50%] peer-focus:text-primary
          peer-focus:bg-white
          peer-focus:px-2
          peer-focus:text-sm
          pointer-events-none
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
