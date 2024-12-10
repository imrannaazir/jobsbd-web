"use client";

import Swal from "sweetalert2";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgotPasswordMutation } from "@/redux/api/auth/authApi";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { LuLoader } from "react-icons/lu";

interface ForgotPasswordModalProps {
  onSubmit: (email: string) => Promise<void>;
}

export function ForgotPasswordModal({ onSubmit }: ForgotPasswordModalProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();

  const handleSubmit = async (values: FieldValues) => {
    setIsLoading(true);
    try {
      const res = await forgotPassword({ data: email });
      console.log(res);

      if (res.data.statusCode === 200) {
        Swal.fire({
          title: "Success",
          text: "Check your email for further instructions.",
          icon: "success",
          timer: 5000, 
          showConfirmButton: true, 
        }).then(() => setOpen(false));
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          timer: 5000, 
          showConfirmButton: true, 
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "An unexpected error occurred.",
        icon: "error",
        timer: 5000, 
        showConfirmButton: true, 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-sm text-gray-500">
          Forgot Password?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Forgot Password</DialogTitle>
          <DialogDescription className="">
            Kindly provide your registered email address to reset your password
            and follow the instructions provided in the email.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="space-y-4 pt-4"
        >
          <div className="space-y-2">
            <Label htmlFor="forgot-password-email">Email Address</Label>
            <Input
              id="forgot-password-email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                Submitting <LuLoader className="animate-spin h-4 w-4" />
              </span>
            ) : (
              "Continue"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
