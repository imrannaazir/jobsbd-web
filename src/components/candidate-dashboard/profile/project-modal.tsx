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
import { DateField, InputField } from "@/components/ui/form-fields";
import { Label } from "@/components/ui/label";
import { useAddProjectMutation } from "@/redux/api/candidate/candidateApi";
import {
  projectFormSchema,
  ProjectFormValues,
} from "@/schemas/profile-form-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ProjectModal = () => {
  const [addProject] = useAddProjectMutation()
  const [open, setOpen] = useState<boolean>(false);
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
  });

  const onSubmit = async(data: ProjectFormValues) => {
    const response = await addProject(data)
    if(response.data){
      Swal.fire({
        title: 'Project Added',
        text: 'Project has been added successfully',
        icon: 'success',
      })
      setOpen(false)
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Failed to add project',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
        })
    }
  };
  return (
    <CustomModal buttonType="add" title="Project" open={open} setOpen={setOpen}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <InputField
              name="title"
              label="project Title"
              type="text"
              required
              placeholder="project Title"
            />
            <InputField
              name="companyName"
              label="Company Name"
              type="text"
              placeholder="Company Name"
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
                  Currently Working
                </label>
              </div>
            </div>
          </div>
          <InputField
            name="projectLink"
            label="Project Link"
            type="text"
            placeholder="Project Link"
          />
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
