"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";

import RichTextEditor from "@/components/rich-text-editor/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CustomModal from "@/components/ui/custom-modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DateField, InputField } from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";
import { useAddEducationMutation } from "@/redux/api/candidate/candidateApi";
import {
  educationFormSchema,
  EducationFormValues,
} from "@/schemas/profile-form-schema";

const EducationAddModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isCurrentlyStudying, setIsCurrentlyStudying] = useState<boolean>(false);
  const [addEducation] = useAddEducationMutation();
  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationFormSchema),
  });

  const onSubmit = async (data: EducationFormValues) => {
    console.log(data, 'on submit data');
    const res = await addEducation(data);
    console.log(res, 'response');
    if (res.data) {
      Swal.fire({
        title: "Success",
        text: "Education Information added successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to add Education Information",
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <CustomModal
      buttonType="add"
      title="Education"
      open={open}
      setOpen={setOpen}
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
              submit
            </Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default EducationAddModal;

