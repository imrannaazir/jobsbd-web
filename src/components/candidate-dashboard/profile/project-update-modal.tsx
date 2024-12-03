/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect } from "react";
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
  FormMessage,
} from "@/components/ui/form";
import { DateField, InputField } from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";

import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateProjectMutation } from "@/redux/api/candidate/candidateApi";
import {
  ProjectFormValues,
  updateProjectFormSchema,
  UpdateProjectFormValues,
} from "@/schemas/profile-form-schema";

type ProjectUpdateModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  project: UpdateProjectFormValues;
};

const ProjectUpdateModal = ({
  isOpen,
  setIsOpen,
  project,
}: ProjectUpdateModalProps) => {
  const [updateProject] = useUpdateProjectMutation();

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(updateProjectFormSchema),
    defaultValues: { ...project },
  });

  useEffect(() => {
    if (project) {
      const updatedData = {
        ...project,
        startDate: project.startDate ? new Date(project.startDate) : undefined,
        endDate: project.endDate ? new Date(project.endDate) : undefined,
      };
      form.reset(updatedData);
    }
  }, [project, form]);

  const onSubmit = async (data: ProjectFormValues) => {
    try {
      const response = await updateProject({
        id: project.id,
        data,
      }).unwrap();

      if (response?.data) {
        Swal.fire({
          title: "Project Updated",
          text: "Project has been updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setIsOpen(false);
      }
    } catch (error: any) {
      Swal.fire(
        "Error",
        "Failed to update the project. Please try again.",
        "error"
      );
    }
  };

  return (
    <CustomModal
      title="Update Project"
      open={isOpen}
      setOpen={setIsOpen}
      buttonType={null}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <InputField
              name="title"
              label="Project Title"
              type="text"
              required
            />
            <InputField name="companyName" label="Company Name" type="text" />
            <DateField name="startDate" label="Start Date" />
            <DateField name="endDate" label="End Date" />
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FormField
              name="isWorking"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox
                      id="isWorking"
                      checked={field.value}
                      onCheckedChange={field.onChange}
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
              Currently Working
            </label>
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
            <Button type="submit">Update</Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default ProjectUpdateModal;
