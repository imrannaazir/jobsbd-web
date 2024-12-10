/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import RichTextEditor from "@/components/rich-text-editor/rich-text-editor";
import { Button } from "@/components/ui/button";
import CustomModal from "@/components/ui/custom-modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DateField,
  InputField,
  SelectField,
} from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";

import { Checkbox } from "@/components/ui/checkbox";
import {
  bangladeshDistricts,
  EmploymentType,
} from "@/constant/constant-variable";
import {
  useGetDepartmentsQuery,
  useGetIndustriesQuery,
  useUpdateExperienceMutation,
} from "@/redux/api/candidate/candidateApi";
import {
  updateWorkExperienceFormSchema,
  UpdateWorkExperienceFormValues,
} from "@/schemas/profile-form-schema";

type ExperienceUpdateModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  experience: UpdateWorkExperienceFormValues;
};

const ExperienceUpdateModal = ({
  isOpen,
  setIsOpen,
  experience,
}: ExperienceUpdateModalProps) => {
  const [updateExperience] = useUpdateExperienceMutation();
  const { data: departments } = useGetDepartmentsQuery("");
  const { data: industries } = useGetIndustriesQuery("");
  const [isWorking, setIsWorking] = useState<boolean>(
    experience?.isWorking || false
  );

  const form = useForm<UpdateWorkExperienceFormValues>({
    resolver: zodResolver(updateWorkExperienceFormSchema),
    defaultValues: {
      ...experience,
      startDate: experience.startDate
        ? new Date(experience.startDate)
        : undefined,
      endDate: experience.endDate ? new Date(experience.endDate) : undefined,
    },
  });

  useEffect(() => {
    if (experience) {
      const updatedData = {
        ...experience,
        startDate: experience.startDate
          ? new Date(experience.startDate)
          : undefined,
        endDate: experience.endDate ? new Date(experience.endDate) : undefined,
      };
      form.reset(updatedData);
      setIsWorking(experience.isWorking || false);
    }
  }, [experience, form]);

  const onSubmit = async (data: UpdateWorkExperienceFormValues) => {
    console.log("Submitting data:", data);
    try {
      const response = await updateExperience({
        id: experience.id,
        data,
      }).unwrap();

      if (response?.data) {
        Swal.fire({
          title: "Experience Updated",
          text: "Experience has been updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setIsOpen(false);
      }
    } catch (error: any) {
      console.error("Update error:", error);
      Swal.fire(
        "Error",
        "Failed to update the experience. Please try again.",
        "error"
      );
    }
  };

  return (
    <CustomModal
      buttonType={null}
      title="Update Experience"
      setOpen={setIsOpen}
      open={isOpen}
    >
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <InputField
                name="designation"
                label="Designation"
                type="text"
                required
                placeholder="Type Your Designation"
              />
              <SelectField
                name="employmentType"
                label="Employment Type"
                options={EmploymentType}
              />
              <InputField
                name="companyName"
                label="Company Name"
                type="text"
                placeholder="Your Company Name"
              />
              <SelectField
                name="departmentId"
                label="Department"
                options={departments?.data}
              />
              <SelectField
                name="industryId"
                label="Industry"
                options={industries?.data}
              />
              <DateField name="startDate" label="Start Date" />
              <div>
                <DateField
                  name="endDate"
                  label="End Date"
                  disabled={isWorking}
                />
                <div className="flex items-center space-x-2 mt-2">
                  <FormField
                    name="isWorking"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) => {
                              setIsWorking(checked as boolean);
                              field.onChange(checked);
                              if (checked) {
                                form.setValue("endDate", undefined);
                              }
                            }}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Currently working</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <SelectField
                name="district"
                label="District"
                options={bangladeshDistricts}
              />
              <InputField
                name="addressLine"
                label="Address Line"
                type="text"
                placeholder="Type Location"
              />
            </div>
            <div>
              <Label>Job Responsibilities</Label>
              <FormField
                name="jobResponsibilities"
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
            <div className="mt-6 flex items-center justify-end">
              <Button type="submit" className="uppercase">
                Update Experience
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </CustomModal>
  );
};

export default ExperienceUpdateModal;
