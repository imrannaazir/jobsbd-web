"use client";

import { saveTokenInCookies } from "@/action/auth-action";
import GoogleSignUp from "@/components/login/GoogleSignUp";
import { Button } from "@/components/ui/button";
import CandidateAuthContainer from "@/components/ui/CandidateAuthContainer";
import FloatingLabelInput from "@/components/ui/CustomInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import ORDivider from "@/components/ui/ORDivider";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { userRole } from "@/constant/constant-variable";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { LuLoader, LuUserCircle } from "react-icons/lu";
import Swal from "sweetalert2";
import { ForgotPasswordModal } from "./ForgotPasswordModal";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [loginMethod, setLoginMethod] = useState("email");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const methods = useForm<{
    email: string;
    password: string;
  }>();

  const handleFillCredentials = (role: "Admin" | "Candidate") => {
    const email = role === "Admin" ? "admin@jobsbd.com" : "candidate@gmail.com";
    const password = "@Password123";

    methods.setValue("email", email);
    methods.setValue("password", password);
    setOpen(false);
  };

  const onSubmit = async (data: FieldValues) => {
    if (!phone) {
      const response = await login(data);
      if (response.data) {
        const user = verifyToken(response.data.data.accessToken) as TUser;
        dispatch(
          setUser({
            user: user,
            token: response.data.data.accessToken,
            phoneNumber: response.data.data.phoneNumber,
          })
        );
        await saveTokenInCookies(response.data.data.accessToken);
        Swal.fire({
          title: "Success",
          text: "You have been logged in successfully",
          icon: "success",
        });
        if (user?.role === userRole.CANDIDATE) {
          router.push("/candidate-dashboard");
        } else if (user?.role === userRole.EMPLOYER) {
          router.push("/recruiter/dashboard");
        } else if (user.role === userRole.ADMIN) {
          router.push("/admin-dashboard");
        }
        methods.reset();
      } else {
        Swal.fire({
          title: "Error",
          text: "Login failed",
          icon: "error",
        });
      }
    } else {
      const response = await login({ phone: phone, password: data.password });
      if (response.data) {
        const user = verifyToken(response.data.accessToken) as TUser;
        dispatch(setUser({ user: user, token: response.data.accessToken }));
        Swal.fire({
          title: "Success",
          text: "You have been logged in successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Login failed",
          icon: "error",
        });
      }
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
    <CandidateAuthContainer>
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
                onClick={() => handleFillCredentials("Candidate")}
                className="w-full bg-secondary text-white"
              >
                Candidate
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full lg:w-[600px] lg:mx-auto pt-14 space-y-5 p-4"
        >
          <div className="text-center">
            <h3 className="font-medium mb-2">Welcome Back!</h3>
            <p className="text-primary text-lg font-medium">
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
            rules={{ required: "Password is required" }}
          />
          <div className="text-end">
            <ForgotPasswordModal onSubmit={handleForgotPassword} />
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            className="uppercase w-full bg-primary text-white shadow rounded-md"
          >
            {isLoading ? (
              <span className="flex items-center gap-1">
                Signing in{" "}
                <LuLoader className="animate-spin h-4 w-4 mt-[2px]" />
              </span>
            ) : (
              <span>Sign in</span>
            )}
          </Button>
          <ORDivider />
        </form>
      </FormProvider>
      <GoogleSignUp />

      <p className="font-semibold text-center mt-20 pb-10">
        Don&apos;t have an account yet?
        <Link href="/candidate-register" className="text-primary ml-1">
          Register here
        </Link>
      </p>
    </CandidateAuthContainer>
  );
};

export default LoginPage;
