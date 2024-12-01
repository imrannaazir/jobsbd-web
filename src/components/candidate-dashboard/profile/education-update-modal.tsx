/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import RichTextEditor from "@/components/rich-text-editor/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DateField, InputField } from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";

import CustomModal from "@/components/ui/custom-modal";
import { useUpdateEducationMutation } from "@/redux/api/candidate/candidateApi";
import {
  educationFormSchema,
  EducationFormValues,
} from "@/schemas/profile-form-schema";

type EducationUpdateModalProps = {
  educationData: any;
  open: boolean;
  setOpen: (value: boolean) => void;
};

const EducationUpdateModal = ({
  educationData,
  open,
  setOpen,
}: EducationUpdateModalProps) => {
  const [isCurrentlyStudying, setIsCurrentlyStudying] = useState<boolean>(
    educationData.currentlyStudying || false
  );
  const [updateEducation] = useUpdateEducationMutation();

  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationFormSchema),
    defaultValues: educationData,
  });

  // Convert string dates to Date objects when receiving education data
  useEffect(() => {
    if (educationData) {
      const updatedData = {
        ...educationData,
        startDate: educationData.startDate
          ? new Date(educationData.startDate)
          : null,
        endDate: educationData.endDate ? new Date(educationData.endDate) : null,
      };
      form.reset(updatedData);
    }
  }, [educationData, form]);

  const onSubmit = async (data: any) => {
    try {
      const response = await updateEducation({
        id: educationData.id,
        updatedData: data,
      }).unwrap();
      if (response.data) {
        Swal.fire({
          title: "Success",
          text: "Education Information updated successfully",
          icon: "success",
        });
        setOpen(false);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to update Education Information",
        icon: "error",
      });
    }
  };

  return (
    <CustomModal
      title="Update Education"
      open={open}
      setOpen={setOpen}
      buttonType={null}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <InputField
              name="degree"
              label="Degree"
              type="text"
              required
              placeholder="Enter Your Degree"
            />
            <InputField
              name="instituteName"
              label="Institute Name"
              type="text"
              placeholder="Your Institute Name"
            />

            <DateField name="startDate" label="Start Date" />
            <div>
              <DateField
                name="endDate"
                label="End Date"
                disabled={isCurrentlyStudying}
              />
              <div className="flex items-center space-x-2 mt-2">
                <FormField
                  name="currentlyStudying"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          id="currentlyStudying"
                          checked={isCurrentlyStudying}
                          onCheckedChange={(checked) => {
                            setIsCurrentlyStudying(checked as boolean);
                            field.onChange(checked);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <label
                  htmlFor="currentlyStudying"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Currently Studying
                </label>
              </div>
            </div>
            <InputField name="grade" label="Grade" placeholder="3, 3.5, ..." />
            <InputField
              name="fieldOfStudy"
              label="Field of Study"
              type="text"
              placeholder="e.g., Mathematics"
            />
          </div>
          <div>
            <Label>Description</Label>
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RichTextEditor
                      initialContent={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-end">
            <Button type="submit" className="uppercase">
              Update
            </Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default EducationUpdateModal;
