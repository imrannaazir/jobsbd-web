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
import { InputField } from "@/components/ui/form-fields";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import { formSchema, FormValues } from "@/schemas/profile-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactInformationModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [phone, setPhone] = useState("");
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    if (data) {
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
          <DialogTitle>Update Company Information</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PhoneNumberInput phone={phone} setPhone={setPhone} />
              <InputField
                name="address"
                label="Address"
                type="text"
                placeholder="Enter Address"
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

export default ContactInformationModal;
