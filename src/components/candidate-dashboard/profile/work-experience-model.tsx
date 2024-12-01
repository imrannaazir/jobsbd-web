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
import { bangladeshDistricts } from "@/constant/constant-variable";
import {
  workExperienceFormSchema,
  WorkExperienceFormValues,
} from "@/schemas/profile-form-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { useForm } from "react-hook-form";

const WorkExperienceModel = () => {
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<WorkExperienceFormValues>({
    resolver: zodResolver(workExperienceFormSchema),
  });

  const onSubmit = (data: WorkExperienceFormValues) => {
    console.log(data);
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
              options={[
                { value: "usd", label: "USD" },
                { value: "bdt", label: "BDT" },
                { value: "eur", label: "EUR" },
              ]}
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
              options={[
                { value: "usd", label: "USD" },
                { value: "bdt", label: "BDT" },
                { value: "eur", label: "EUR" },
              ]}
            />
            <SelectField
              name="industryId"
              label="Industry"
              options={[
                { value: "usd", label: "USD" },
                { value: "bdt", label: "BDT" },
                { value: "eur", label: "EUR" },
              ]}
            />
            <div className="flex items-center gap-6 w-full">
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
                    htmlFor="currentlyStudying"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Currently Studying
                  </label>
                </div>
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
              readOnly
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
