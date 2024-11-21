/* eslint-disable react/no-unescaped-entities */
"use client";

import EmployeeAuthContainer from "@/components/ui/EmployeeAuthContainer";
import EmployeeAuthInput from "@/components/ui/EmployeeAuthInput";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import SocialLogin from "@/components/ui/SocialLogin";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const EmployeeLoginPage = () => {
  const [loginMethod, setLoginMethod] = useState("email");
  const [phone, setPhone] = useState("");
  return (
    // main section container
    <EmployeeAuthContainer>
      {/* login method selection */}
      <form className="w-full lg:w-[500px] lg:mx-auto pt-14 space-y-5 p-4 lg:px-6">
        <div className="text-center">
          <h3 className="font-medium mb-2">Welcome Back!</h3>
          <p className="text-primary text-lg font-semibold">
            If you already have an account, sign in using your email address or
            mobile number.
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
          <EmployeeAuthInput
            label="Email"
            type="email"
            placeholder="Enter Your Email"
          />
        ) : (
          <PhoneNumberInput phone={phone} setPhone={setPhone} />
        )}
        <EmployeeAuthInput
          label="Password"
          type="password"
          placeholder="Enter Your Password"
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
