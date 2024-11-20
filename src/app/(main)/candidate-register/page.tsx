"use client";

import CandidateAuthContainer from "@/components/ui/CandidateAuthContainer";
/* eslint-disable react/no-unescaped-entities */

import FloatingLabelInput from "@/components/ui/CustomInput";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import SocialLogin from "@/components/ui/SocialLogin";
import { Button, Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
const CandidateRegisterPage = () => {
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
          <div className="w-[198px] mx-auto mt-16 mb-8">
            <SocialLogin />
          </div>
          <ORDivider />
        </div>
        {/* register form */}
        <form className="space-y-5">
          <FloatingLabelInput label="Enter Your full Name *" />
          <PhoneNumberInput phone={phone} setPhone={setPhone} />
          <FloatingLabelInput label="Enter Your Email Address *" />
          <FloatingLabelInput label="Enter Your Password *" type="password" />
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
        <p className="font-semibold text-center mt-20 pb-10">
          Already have an account?
          <Link href="/login" className="text-primary">
            Login In
          </Link>
        </p>
      </div>
    </CandidateAuthContainer>
  );
};

export default CandidateRegisterPage;
