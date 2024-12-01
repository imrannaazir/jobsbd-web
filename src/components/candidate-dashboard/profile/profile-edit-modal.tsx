/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditButton from "@/components/ui/edit-button-with-icon";
import { Form } from "@/components/ui/form";
import { InputField, SelectField } from "@/components/ui/form-fields";
import {
  bangladeshDistricts,
  EmploymentType,
  jobLevel,
} from "@/constant/constant-variable";
import { useUpdateCandidateInfoMutation } from "@/redux/api/candidate/candidateApi";

import { formSchema, FormValues } from "@/schemas/profile-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ProfileEditModal = () => {
  const [updateUserInfo] = useUpdateCandidateInfoMutation();
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    const res = await updateUserInfo(data);

    if (res.data) {
      Swal.fire({
        title: "Success",
        text: "Profile updated successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to update profile",
        icon: "error",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <EditButton asChild />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField
                name="totalExperience"
                label="Total Year Of Experience"
                type="number"
                min={1}
              />

              <InputField
                name="currentSalary"
                label="Current Salary"
                placeholder="Enter Present Salary"
              />
              <InputField
                name="expectedSalary"
                label="Expected Salary"
                placeholder="Enter Expected Salary"
              />
              <SelectField
                name="employmentType"
                label="Employment Type"
                options={EmploymentType}
              />
              <SelectField
                name="jobLevel"
                label="Job Level"
                options={jobLevel}
              />

              <SelectField
                name="district"
                label="District"
                options={bangladeshDistricts}
              />

              <InputField
                name="addressLine"
                label="Address Line"
                placeholder="Your Address Line"
              />
              <InputField name="phone" label="Phone No:" readOnly />
              <InputField
                name="email"
                label="Email Address"
                type="email"
                readOnly
              />
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                onClick={() => setOpen(!open)}
              >
                CANCEL
              </Button>
              <Button type="submit">SUBMIT</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditModal;
