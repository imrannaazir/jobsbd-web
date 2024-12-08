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
import { Form } from "@/components/ui/form";
import EditButton from "@/components/ui/edit-button-with-icon";
// import { InputField } from "@/components/ui/form-fields";
import { formSchema, FormValues } from "@/schemas/profile-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";

const CompanyOverviewModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    console.log(image);

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
          <DialogTitle>Company Overview</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 gap-4">
              {/* <InputField name="image" label="Image" type="file" /> */}
              <div className="space-y-4">
                <Label htmlFor="image" className="text-sm font-medium">
                  Image
                </Label>
                <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md hover:border-gray-500 transition">
                  {previewUrl ? (
                    <div className="relative">
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        width={100}
                        height={100}
                        className="w-full h-60 object-cover rounded-md"
                      />
                      <Button
                        variant="destructive"
                        className="absolute top-2 right-2 text-sm"
                        onClick={removeImage}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center justify-center cursor-pointer w-full h-full py-5"
                    >
                      <CiImageOn className="size-32" />
                      <span className="text-sm text-gray-600">
                        Click to upload
                      </span>
                    </label>
                  )}
                </div>
                <Input
                  id="image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="companyDetails">Your message</Label>
                <Textarea
                  name="companyDetails"
                  placeholder="Enter Company Description"
                  className="h-40"
                />
              </div>
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

export default CompanyOverviewModal;
