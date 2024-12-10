/* eslint-disable react/no-unescaped-entities */
"use client";

import { useLoginMutation } from "@/redux/api/auth/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

import EmployeeAuthContainer from "@/components/ui/EmployeeAuthContainer";
import EmployeeAuthInput from "@/components/ui/EmployeeAuthInput";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import Swal from "sweetalert2";

import GoogleSignUp from "@/components/login/GoogleSignUp";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TUser } from "@/redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { LuUserCircle } from "react-icons/lu";
import { ForgotPasswordModal } from "../login/ForgotPasswordModal";

const EmployeeLoginPage = () => {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState("email");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);
  const methods = useForm<FieldValues>();

  const [login] = useLoginMutation();

  const handleFillCredentials = (role: "Admin" | "Employer") => {
    const email = role === "Admin" ? "admin@jobsbd.com" : "employer@gmail.com";
    const password = "@Password123";
    methods.setValue("email", email);
    methods.setValue("password", password);
    setOpen(false);
  };

  const onSubmit = async (data: FieldValues) => {
    const response = await login(data);
    const token = response?.data?.data?.accessToken;
    const decodeToken = (await jwtDecode(token)) as TUser;
    if (response.data) {
      Swal.fire({
        title: "Success",
        text: "You have been logged in successfully",
        icon: "success",
      });
      if (decodeToken?.role === "ADMIN") {
        router.push("/admin-dashboard");
      } else {
        router.push("/candidate-dashboard");
      }
      methods.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "Login failed",
        icon: "error",
      });
    }
  };

  const handleForgotPassword = async (email: string) => {
    console.log("Forgot password for email:", email);
    await Swal.fire({
      title: "Password Reset",
      text: "If the email exists in our system, you will receive password reset instructions.",
      icon: "info",
    });
  };

  return (
    <EmployeeAuthContainer>
      <div className="absolute top-5 right-5">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <LuUserCircle className="cursor-pointer text-2xl text-primary" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select Role</DialogTitle>
              <DialogDescription>
                Select a role to autofill credentials.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-4">
              <Button
                onClick={() => handleFillCredentials("Admin")}
                className="w-full bg-primary text-white"
              >
                Admin
              </Button>
              <Button
                onClick={() => handleFillCredentials("Employer")}
                className="w-full bg-secondary text-white"
              >
                Employer
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full lg:w-[500px] lg:mx-auto pt-14 space-y-5 p-4 lg:px-6"
        >
          <div className="text-center">
            <h3 className="font-medium mb-2">Welcome Back!</h3>
            <p className="text-primary text-lg font-semibold">
              If you already have an account, sign in using your email address
              or mobile number.
            </p>
          </div>
          <div className="flex items-center justify-center py-5">
            <RadioGroup
              defaultValue="email"
              onValueChange={(value) => setLoginMethod(value)}
              className="flex flex-row space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email">Email Address</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone" />
                <Label htmlFor="phone">Mobile Number</Label>
              </div>
            </RadioGroup>
          </div>

          {loginMethod === "email" ? (
            <EmployeeAuthInput
              name="email"
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
            />
          ) : (
            <PhoneNumberInput
              phone={phone}
              setPhone={setPhone}
              {...methods.register("phone", {
                required: "Phone number is required",
              })}
            />
          )}
          <EmployeeAuthInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
          />
          <p className="text-end text-gray-500 text-sm">
            <ForgotPasswordModal onSubmit={handleForgotPassword} />
          </p>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="bg-primary text-white shadow-md rounded-md w-[193px] px-4"
            >
              Sign In
            </Button>
          </div>
          <ORDivider />
        </form>
      </FormProvider>
      <div>
        <GoogleSignUp />
      </div>
      <p className="font-semibold text-center mt-8 pb-10">
        Don't have an account yet?
        <Link href="/employee-register" className="text-primary ml-1">
          Register here
        </Link>
      </p>
    </EmployeeAuthContainer>
  );
};

export default EmployeeLoginPage;
