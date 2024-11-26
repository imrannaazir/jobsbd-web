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
  formSchema,
  FormValues,
  defaultValues,
} from "@/schemas/profile-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";


const ProfileEditModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <EditButton asChild/>
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
                required
              />
              <SelectField
                name="currency"
                label="Currency"
                options={[
                  { value: "usd", label: "USD" },
                  { value: "bdt", label: "BDT" },
                  { value: "eur", label: "EUR" },
                ]}
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
                options={[
                  { value: "full-time", label: "Full Time" },
                  { value: "part-time", label: "Part Time" },
                  { value: "contract", label: "Contract" },
                ]}
              />
              <SelectField
                name="salaryType"
                label="Salary Type"
                options={[
                  { value: "monthly", label: "Monthly" },
                  { value: "yearly", label: "Yearly" },
                ]}
              />
              <SelectField
                name="jobLevel"
                label="Job Level"
                options={[
                  { value: "entry", label: "Entry Level" },
                  { value: "mid", label: "Mid Level" },
                  { value: "senior", label: "Senior Level" },
                ]}
              />

              <SelectField
                name="currentLocation"
                label="Current Location"
                options={[
                  { value: "dhaka", label: "Dhaka" },
                  { value: "chittagong", label: "Chittagong" },
                  { value: "sylhet", label: "Sylhet" },
                ]}
              />

              <InputField
                name="address"
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
