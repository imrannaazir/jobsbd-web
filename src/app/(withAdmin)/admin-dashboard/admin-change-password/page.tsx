/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({
  label,
  name,
  rules,
}: {
  label: string;
  name: string;
  rules?: any;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useForm();

  return (
    <div className="relative space-y-1">
      <label htmlFor={name} className="block text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={name}
        type={showPassword ? "text" : "password"}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        {...register(name, rules)}
        placeholder={label}
      />
      <div
        className="absolute top-[65%] right-3  -translate-y-[50%] cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? (
          <AiOutlineEyeInvisible size={20} />
        ) : (
          <AiOutlineEye size={20} />
        )}
      </div>
    </div>
  );
};

const AdminChangepassword = () => {
  const methods = useForm();

  const onSubmit = async (data: FieldValues) => {
    
  };

  return (
    <div className="w-full mt-5 bg-white rounded-lg">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="max-w-md space-y-5 p-4 bg-white shadow-md rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Account Settings
          </h2>

          <PasswordInput
            label="Current Password"
            name="currentPassword"
            rules={{ required: "Current Password is required" }}
          />

          <PasswordInput
            label="Create New Password"
            name="newPassword"
            rules={{ required: "New Password is required" }}
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            rules={{
              required: "Confirm Password is required",
            }}
          />

          <button className="nav-link bg-[#1876D1] uppercase text-white hover:bg-primary py-3 px-6 cursor-pointer text-sm">
            submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AdminChangepassword;
