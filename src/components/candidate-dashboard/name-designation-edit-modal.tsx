"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields";
import {
  useGetCandidateInfoQuery,
  useUpdateCandidateInfoMutation,
} from "@/redux/api/candidate/candidateApi";
import { PenLine } from "lucide-react";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type TInfo = { fullName: string; designation: number };
const NameDesignationEditModal = () => {
  const { data, isFetching } = useGetCandidateInfoQuery("");
  console.log(data);
  const [updateUserInfo] = useUpdateCandidateInfoMutation();
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm({
    defaultValues: {
      fullName: isFetching ? "" : data?.data?.fullName,
      designation: isFetching ? "" : data?.data?.designation,
    },
  });

  const onSubmit = async (data: TInfo) => {
    const res = await updateUserInfo(data);
    console.log(res, "response of update");
    if (res.data) {
      Swal.fire({
        title: "Success",
        text: "User name and Designation updated successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to update information",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="bg-bgColour p-2 rounded-full">
          <PenLine className="text-primary" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Name and Designation</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className=" grid grid-cols-2 items-center gap-5">
              <InputField
                name="fullName"
                label="Full Name"
                placeholder="Enter Your Full Name"
                type="text"
              />
              <InputField
                name="designation"
                label="Designation"
                placeholder="Designation"
                type="text"
              />
            </div>

            <div className="flex items-center justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NameDesignationEditModal;
