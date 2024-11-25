"use client";

import RichTextEditor from "@/components/rich-text-editor/rich-text-editor";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  educationFormSchema,
  EducationFormValues,
} from "@/schemas/profile-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";

const EducationAddModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<EducationFormValues>({
    resolver: zodResolver(educationFormSchema),
  });

  const onSubmit = (data: EducationFormValues) => {
    console.log(data)
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-bgColour hover:bg-bgColour hover:text-primary font-semibold text-primary"
        >
          Add
          <FaPlus className="text-2xl" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b pb-4">
          <DialogTitle>New Education</DialogTitle>
        </DialogHeader>
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
                name="institute"
                label="Field of Study"
                type="text"
                readOnly
                placeholder="Your Institute Name"
              />

              <DateField name="startDate" label="Start Date" />
              <DateField name="endDate" label="Start Date" />
              <InputField name="grade" label="Grade" placeholder="A, A+, ..." />
              <InputField
                name="field"
                label="Field of Study"
                type="text"
                readOnly
                placeholder="e.h., Mathematics"
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

            <DialogFooter>
              <Button type="submit" className="uppercase">
                submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EducationAddModal;
