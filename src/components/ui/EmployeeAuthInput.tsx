import { TInput } from "@/type";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const EmployeeAuthInput: React.FC<TInput> = ({
  label,
  type = "text",
  placeholder,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className="relative">
      <label className="text-sm font-medium text-[#424447]">
        {label} <span className="text-red-500 ml-1">*</span>
      </label>
      <input
        type={type}
        className="w-full rounded-sm border-2 border-gray-300 focus:outline-none focus:border-primary p-2 mt-1"
        placeholder={placeholder}
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
    </div>
  );
};

export default EmployeeAuthInput;
