/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { InputHTMLAttributes, useState, useEffect } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface FloatingLabelInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  rules?: RegisterOptions;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  name,
  label,
  type = "text",
  rules,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const [elevated, setElevated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const inputValue = watch(name);
  const inputType = type === "password" && isVisible ? "text" : type;
  const error = errors[name]?.message as string | undefined;

  useEffect(() => {
    setElevated(!!inputValue);
  }, [inputValue]);

  const handleFocus = () => setElevated(true);
  const handleBlur = () => setElevated(!!inputValue);

  return (
    <>
      <div className="relative w-full mb-4">
        <input
          id={name}
          type={inputType}
          className={`peer w-full border rounded-md px-[14px] py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-primary focus:bg-transparent
          ${error ? "border-red-500" : "border-gray-300"}
        `}
          onFocus={handleFocus}
          // @ts-ignore
          onBlur={handleBlur}
          {...register(name, rules)}
          {...props}
        />

        {type === "password" && (
          <button
            className="absolute top-4 right-3"
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            aria-label={isVisible ? "Hide password" : "Show password"}
          >
            {isVisible ? (
              <FaEye className="text-2xl text-gray-400" />
            ) : (
              <FaEyeSlash className="text-2xl text-gray-400" />
            )}
          </button>
        )}

        <label
          htmlFor={name}
          className={`absolute left-3 transform transition-all duration-200 
          ${
            elevated
              ? "top-0 translate-y-[-50%] text-primary bg-white px-2 text-sm"
              : "top-2/4 -translate-y-1/2 text-gray-500 text-lg"
          }
          pointer-events-none
        `}
        >
          {label}
        </label>
      </div>
      {error && <p className=" text-xs text-red-500">{error}</p>}
    </>
  );
};

export default FloatingLabelInput;
