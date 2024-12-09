/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { saveTokenInCookies } from "@/action/auth-action";
import { useChangePasswordMutation } from "@/redux/api/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="relative space-y-1">
      <label htmlFor={name} className="block text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={name}
        type={showPassword ? "text" : "password"}
        className={`w-full p-2 border ${
          errorMessage
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-primary"
        } rounded-md focus:outline-none focus:ring-2`}
        {...register(name, rules)}
        placeholder={label}
      />
      <div
        className="absolute top-[65%] right-3 -translate-y-[50%] cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? (
          <AiOutlineEyeInvisible size={20} />
        ) : (
          <AiOutlineEye size={20} />
        )}
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

const CandidateChangePassword = () => {
  const dispatch = useAppDispatch();
  const [changePassword] = useChangePasswordMutation();
  const methods = useForm();

  const onSubmit = async (data: FieldValues) => {
    const response = await changePassword(data);

    if (response.data) {
      const user = verifyToken(response.data.data.accessToken) as TUser;
      console.log(user?.role, "from line 41");
      dispatch(
        setUser({
          user: user,
          token: response.data.data.accessToken,
          phoneNumber: response.data.data.phoneNumber,
        })
      );
      saveTokenInCookies(response.data.data.accessToken);
      Swal.fire({
        title: "Success",
        text: "You have successfully changed your password.",
        icon: "success",
      });

      methods.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "Password change failed.",
        icon: "error",
      });
    }
  };

  return (
    <div className="w-full bg-white rounded-lg">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="max-w-md space-y-5 p-2 bg-white shadow-md rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Account Settings
          </h2>

          {/* Password Inputs */}
          <PasswordInput
            label="Current Password"
            name="oldPassword"
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
              validate: (value: string) =>
                value === methods.getValues("newPassword") ||
                "Passwords do not match",
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="nav-link bg-[#1876D1] uppercase text-white hover:bg-primary py-3 px-6 cursor-pointer text-sm"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CandidateChangePassword;
