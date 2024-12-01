"use client";

import { Button } from "@/components/ui/button";
import CustomModal from "@/components/ui/custom-modal";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields";
import { useAddSkillMutation } from "@/redux/api/candidate/candidateApi";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type TSkill = { skill: string; duration: number };

const SkillModal = () => {
  const [addSkill] = useAddSkillMutation();
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm({
    defaultValues: {
      skill: "",
      duration: 0,
    },
  });

  const onSubmit = async (data: TSkill) => {
    const skillData = {
      skill: data.skill,
      duration: Number(data.duration),
    };
    const res = await addSkill(skillData);
    console.log(res);
    if (res.data) {
      Swal.fire({
        title: "Success",
        text: "skill added successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to add skill",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <CustomModal buttonType="add" title="Skill" open={open} setOpen={setOpen}>
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
              name="duration"
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
