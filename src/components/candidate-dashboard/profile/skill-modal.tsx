"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";

const SkillModal = () => {
  const form = useForm({
    defaultValues: {
      skill: "",
      yearOfExperience: 0,
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Dialog>
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
        <DialogHeader>
          <DialogTitle>Profile Summary</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className=" grid grid-cols-2 items-center gap-5">
              <InputField
                name="skill"
                label="Skill"
                placeholder="Enter Your Skill"
                type="text"
              />
              <InputField
                name="yearOfExperience"
                label="Number of Years"
                placeholder="Number of Years"
                type="number"
              />
            </div>

            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SkillModal;
