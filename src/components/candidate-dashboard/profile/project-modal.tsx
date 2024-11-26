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
import { DateField, InputField } from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";
import {
  projectFormSchema,
  ProjectFormValues,
} from "@/schemas/profile-form-schema";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

const ProjectModal = () => {

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
  });

  const onSubmit = (data: ProjectFormValues) => {
    console.log(data);
  };
  return (
    <CustomModal buttonType="add" title="Project">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <InputField
              name="projectTitle"
              label="project Title"
              type="text"
              required
              placeholder="project Title"
            />
            <InputField
              name="projectName"
              label="Project Name"
              type="text"
              readOnly
              placeholder="Project Name"
            />

            <DateField name="startDate" label="Start Date" />
            <DateField name="endDate" label="Start Date" />
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

export default ProjectModal;
