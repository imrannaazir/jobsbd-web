"use client";
import RichTextEditor from "@/components/rich-text-editor/rich-text-editor";
import { Button } from "@/components/ui/button";
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
  workExperienceFormSchema,
  WorkExperienceFormValues,
} from "@/schemas/profile-form-schema";

import { zodResolver } from "@hookform/resolvers/zod";


import { useForm } from "react-hook-form";

const WorkExperienceModel = () => {
  const form = useForm<WorkExperienceFormValues>({
    resolver: zodResolver(workExperienceFormSchema),
  });

  const onSubmit = (data: WorkExperienceFormValues) => {
    console.log(data);
  };
  return (
    <CustomModal buttonType="add" title="Experience">
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
              name="department"
              label="Department"
              options={[
                { value: "usd", label: "USD" },
                { value: "bdt", label: "BDT" },
                { value: "eur", label: "EUR" },
              ]}
            />
            <div className="flex items-center gap-6 w-full">
              <DateField name="startDate" label="Start Date" />
              <DateField name="endDate" label="Start Date" />
            </div>

            <InputField
              name="companyLocation"
              label="Company Location"
              type="text"
              readOnly
              placeholder="Type Location"
            />
          </div>
          <SelectField
            name="candidateWorkType"
            label="Candidate Work Type"
            options={[
              { value: "usd", label: "USD" },
              { value: "bdt", label: "BDT" },
              { value: "eur", label: "EUR" },
            ]}
          />
          <div>
            <Label>Description</Label>
            <FormField
              name="responsibilities"
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
