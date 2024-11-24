/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/api/auth/authApi";

import EmployeeAuthContainer from "@/components/ui/EmployeeAuthContainer";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import SocialLogin from "@/components/ui/SocialLogin";
import Swal from "sweetalert2";
import EmployeeAuthInput from "@/components/ui/EmployeeAuthInput";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const EmployeeLoginPage = () => {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState("email");
  const [phone, setPhone] = useState("");
  const methods = useForm<FieldValues>();
  // employee register
  const [login] = useLoginMutation();
  // on submit handle
  const onSubmit = async (data: FieldValues) => {
    const response = await login(data);
    if (response.data) {
      Swal.fire({
        title: "Success",
        text: "You have been logged in successfully",
        icon: "success",
      });
      router.push("/candidate-dashboard");
      methods.reset();
      console.log(response.data);
    } else {
      Swal.fire({
        title: "Error",
        text: "Login failed",
        icon: "error",
      });
      console.log(response.error);
    }
  };

  return (
    <EmployeeAuthContainer>
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
          <p className="text-end text-gray-500 text-sm">Forgot Password?</p>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="bg-primary text-white shadow-md rounded-md w-[193px] px-4"
            >
              Sign In
            </Button>
          </div>
          <ORDivider />
          <div className="lg:w-[180px] lg:mx-auto">
            <SocialLogin />
          </div>
        </form>
      </FormProvider>
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
