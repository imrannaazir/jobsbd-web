"use client";

/* eslint-disable react/no-unescaped-entities */

import FloatingLabelInput from "@/components/ui/CustomInput";
import EmployeeAuthContainer from "@/components/ui/EmployeeAuthContainer";
import EmployeeAuthInput from "@/components/ui/EmployeeAuthInput";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import SocialLogin from "@/components/ui/SocialLogin";
import { Button, Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
const EmployeeRegister = () => {
  const [phone, setPhone] = useState("");
  return (
    <EmployeeAuthContainer>
      {/* main div container */}
      <div className="w-full lg:w-[500px] lg:mx-auto  p-4">
        {/* text social login and divider container */}
        <div className="text-center pt-1 mb-9 space-y-2">
          {/* text container */}

          <p className="font-medium">Post your jobs easily</p>
          <h3 className="text-lg font-bold text-primary">
            Create an Employer Account
          </h3>
        </div>
        {/* register form */}
        <form className="space-y-5 mb-10">
          <EmployeeAuthInput
            type="text"
            label="Company Name"
            placeholder="Enter Company Name"
          />
          <div>
            <label className="text-sm font-medium text-[#424447]">
              Phone Number <span className="text-red-500 ml-1">*</span>
            </label>
            <PhoneNumberInput phone={phone} setPhone={setPhone} />
          </div>
          <EmployeeAuthInput
            type="email"
            label="Email Address"
            placeholder="Enter Your Email Address"
          />
          <EmployeeAuthInput
            type="password"
            label="Password"
            placeholder="Enter Your Password"
          />
          <div className="flex">
            <Checkbox radius="none" />
            <p className="text-sm">
              By clicking "Create an account", you confirm that you agree to ATB
              Jobs Terms and Conditions and Privacy Policy.
            </p>
          </div>

          <Button
            type="submit"
            className="uppercase w-full bg-primary text-white shadow rounded-md"
          >
            Create an account
          </Button>
        </form>

        <ORDivider />
        <div className="lg:w-[180px] lg:mx-auto mt-5">
          <SocialLogin />
        </div>

        <p className="font-semibold text-center mt-8 pb-10">
          Already have an account?
          <Link href="/login" className="text-primary ml-1">
            Login In
          </Link>
        </p>
      </div>
    </EmployeeAuthContainer>
  );
};

export default EmployeeRegister;
