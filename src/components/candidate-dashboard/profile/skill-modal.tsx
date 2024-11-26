"use client";

import { Button } from "@/components/ui/button";
import CustomModal from "@/components/ui/custom-modal";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields";
import React from "react";
import { useForm } from "react-hook-form";

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
    <CustomModal buttonType="add" title="Skill">
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

          <div className="flex items-center justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default SkillModal;
