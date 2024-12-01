"use client";
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
import {
  DateField,
  InputField,
  SelectField,
} from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";
import {
  bangladeshDistricts,
  EmploymentType,
} from "@/constant/constant-variable";
import {
  useAddExperienceMutation,
  useGetDepartmentsQuery,
  useGetIndustriesQuery,
} from "@/redux/api/candidate/candidateApi";
import {
  workExperienceFormSchema,
  WorkExperienceFormValues,
} from "@/schemas/profile-form-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const WorkExperienceModel = () => {
  // get departments from database
  const { data: departments } = useGetDepartmentsQuery("");
  const { data: industries } = useGetIndustriesQuery("");
  const [addExperience] = useAddExperienceMutation();
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<WorkExperienceFormValues>({
    resolver: zodResolver(workExperienceFormSchema),
  });

  const onSubmit = async (data: WorkExperienceFormValues) => {
    const response = await addExperience(data);
    if (response.data) {
      Swal.fire({
        title: "Experience Added",
        text: "Experience has been added successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to add Experience",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <CustomModal
      buttonType="add"
      title="Experience"
      setOpen={setOpen}
      open={open}
    >
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
              placeholder="Your Institute Name"
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
              <DateField name="endDate" label="End Date" disabled={isWorking} />
              <div className="flex items-center space-x-2 mt-2">
                <FormField
                  name="isWorking"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          id="isWorking"
                          checked={isWorking}
                          onCheckedChange={(checked) => {
                            setIsWorking(checked as boolean);
                            field.onChange(checked);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <label
                  htmlFor="isWorking"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Currently working
                </label>
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

export default WorkExperienceModel;
