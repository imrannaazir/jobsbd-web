"use client";

import React, { InputHTMLAttributes, useState } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface EmployeeAuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  rules?: RegisterOptions;
}

const EmployeeAuthInput: React.FC<EmployeeAuthInputProps & { placeholder?: string }> = ({
  name,
  label,
  type = "text",
  placeholder,
  rules,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const formContext = useFormContext();
  
  if (!formContext) {
    return null; // or a loading state
  }

  const {
    register,
    formState: { errors },
  } = formContext;
  
  const error = errors[name]?.message as string | undefined;

  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm font-medium text-[#424447]">
        {label} <span className="text-red-500 ml-1">*</span>
      </label>
      <input
        id={name}
        type={type === "password" && isVisible ? "text" : type}
        className={`w-full rounded-sm border-2 ${error ? "border-red-500" : "border-gray-300"} focus:outline-none focus:border-primary p-2 mt-1`}
        placeholder={placeholder}
        {...register(name, rules)}
      />
      {type === "password" && (
        <button
          className="absolute top-9 right-3"
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
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default EmployeeAuthInput;

