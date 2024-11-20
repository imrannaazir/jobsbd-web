/* eslint-disable react/no-unescaped-entities */
"use client";
import FloatingLabelInput from "@/components/ui/CustomInput";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import SocialLogin from "@/components/ui/SocialLogin";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState("email");
  const [phone, setPhone] = useState("");
  return (
    // main section container
    <section>
      {/*a blank div for background image*/}
      <div className="bg-candidate-background"></div>
      <div className="bg-white relative -top-[300px] mx-4 lg:mx-auto lg:w-[800px] rounded-3xl shadow-2xl">
        {/* login form container */}
        <form className="w-full lg:w-[600px] lg:mx-auto pt-14 space-y-5 p-4">
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
            <FloatingLabelInput label="Enter Your Email Address *" />
          ) : (
            <PhoneNumberInput phone={phone} setPhone={setPhone} />
          )}
          <FloatingLabelInput label="Enter Your Password *" type="password" />
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
        <p className="font-semibold text-center mt-20 pb-10">
          Don't have an account yet?
          <Link href="/register" className="text-primary">
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
