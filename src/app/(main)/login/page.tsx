/* eslint-disable react/no-unescaped-entities */
"use client";

import CandidateAuthContainer from "@/components/ui/CandidateAuthContainer";
import FloatingLabelInput from "@/components/ui/CustomInput";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import SocialLogin from "@/components/ui/SocialLogin";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/api/auth/authApi";
const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState("email");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  // candidate register
  const [login] = useLoginMutation();
  const methods = useForm<FormData>();

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
    // main section container
    <CandidateAuthContainer>
      {/* login method selection */}

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full lg:w-[600px] lg:mx-auto pt-14 space-y-5 p-4">
          <div className="text-center">
            <h3 className="font-medium mb-2">Welcome Back!</h3>
            <p className="text-primary text-lg font-medium">
              If you already have an account, sign in using your email address
              or mobile number.
            </p>
          </div>
          <div className="flex items-center justify-center py-5">
            <RadioGroup
              onChange={(e) => setLoginMethod(e.target.value)}
              orientation="horizontal"
              defaultValue="email"
            >
              <Radio value="email">Email Address</Radio>
              <Radio value="phone">Mobile Number</Radio>
            </RadioGroup>
          </div>

          {loginMethod === "email" ? (
            <FloatingLabelInput
              name="email"
              label="Enter Your Email Address *"
              type="email"
              rules={{ required: "Full name is required" }}
            />
          ) : (
            <PhoneNumberInput phone={phone} setPhone={setPhone} />
          )}

          <FloatingLabelInput
            name="password"
            label="Enter Your Password *"
            type="password"
            rules={{ required: "Full name is required" }}
          />
          <p className="text-end text-gray-500 text-sm">Forgot Password?</p>
          <Button
            type="submit"
            className="uppercase w-full bg-primary text-white shadow rounded-md"
          >
            Sign in
          </Button>
          <ORDivider />
          <div className="lg:w-[400px] lg:mx-auto">
            <SocialLogin />
          </div>
        </form>
      </FormProvider>

      <p className="font-semibold text-center mt-20 pb-10">
        Don't have an account yet?
        <Link href="/candidate-register" className="text-primary ml-1">
          Register here
        </Link>
      </p>
    </CandidateAuthContainer>
  );
};

export default LoginPage;
