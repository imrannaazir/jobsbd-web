/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

import { removeRefreshToken } from "@/action/auth-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResetPasswordMutation } from "@/redux/api/auth/authApi";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 6 characters")
      .max(50, "Password must not exceed 32 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof passwordSchema>;

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(passwordSchema),
  });

  const searchParams = useSearchParams();
  const id = searchParams.get("userId");
  const router = useRouter();

  const [resetPassword] = useResetPasswordMutation();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) return;
    localStorage.setItem("token", token);
  }, [token]);

  const onSubmit = async (values: FieldValues) => {
    const updatedData = { ...values, id, token };

    try {
      const res = await resetPassword({ data: updatedData }).unwrap();

      if (res?.data?.id) {
        Swal.fire({
          title: "Success",
          text: "Reset password successfully",
          icon: "success",
        });
        removeRefreshToken();
        router.push("/");
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong while deleting.",
        icon: "error",
      });
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Reset Password
        </h1>
        <p className="text-gray-600 mb-6">
          Please set up a new password for your account so that you can log in
          and access all the features
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                <span className="sr-only">
                  {showConfirmPassword ? "Hide password" : "Show password"}
                </span>
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#155EAC] hover:bg-blue-700"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
