"use client";

import CandidateAuthContainer from "@/components/ui/CandidateAuthContainer";
/* eslint-disable react/no-unescaped-entities */

import FloatingLabelInput from "@/components/ui/CustomInput";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import SocialLogin from "@/components/ui/SocialLogin";
import { useSignUpMutation } from "@/redux/api/auth/authApi";

import Link from "next/link";
import React, { useState } from "react";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import GoogleSignUp from "@/components/login/GoogleSignUp";

const CandidateRegisterPage = () => {
  const router = useRouter();

  // candidate register
  const [signUp] = useSignUpMutation();
  const methods = useForm<FormData>();

  // on submit handle
  const onSubmit = async (data: FieldValues) => {
    const formData = {
      ...data,
      phoneNumber: phone,
      role: "CANDIDATE",
    };
    const response = await signUp(formData);
    if (response.data) {
      Swal.fire({
        title: "Success",
        text: "You have been registered successfully",
        icon: "success",
      });
      router.push("/login");
      methods.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "Registration failed",
        icon: "error",
      });
    }
  };

  const [phone, setPhone] = useState("");
  return (
    <CandidateAuthContainer>
      {/* main div container */}
      <div className="w-full lg:w-[600px] lg:mx-auto  p-4">
        {/* text social login and divider container */}
        <div className="text-center pt-14 mb-9">
          {/* text container */}
          <div className="space-y-4">
            <p className="text-sm font-medium">
              Create your account & find your dream job today!
            </p>
            <h3 className="text-lg font-semibold text-primary">
              Access 1000's of new jobs - apply in minutes.
            </h3>
            <p className="text-lg font-semibold">New member registration</p>
          </div>
          <div className="mt-10 mb-8">
            <GoogleSignUp />
          </div>
          <ORDivider />
        </div>
        {/* register form */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
            <FloatingLabelInput
              name="fullName"
              label="Enter Your full Name *"
              rules={{ required: "Full name is required" }}
            />
            {/* <FloatingLabelInput label="Enter Your full Name *" /> */}
            <PhoneNumberInput phone={phone} setPhone={setPhone} />
            <FloatingLabelInput
              name="email"
              label="Enter Your Email Address *"
              type="email"
              rules={{ required: "Full name is required" }}
            />
            <FloatingLabelInput
              name="password"
              label="Enter Your Password *"
              type="password"
              rules={{ required: "Full name is required" }}
            />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm  text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                By clicking "Create an account", you confirm that you agree to
                ATB Jobs Terms and Conditions and Privacy Policy.
              </label>
            </div>

            <Button
              type="submit"
              className="uppercase w-full bg-primary text-white shadow rounded-md"
            >
              Create an account
            </Button>
          </form>
        </FormProvider>

        <p className="font-semibold text-center mt-20 pb-10">
          Already have an account?
          <Link href="/login" className="text-primary ml-1">
            Login In
          </Link>
        </p>
      </div>
    </CandidateAuthContainer>
  );
};

export default CandidateRegisterPage;
