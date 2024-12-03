/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { Button } from "@/components/ui/button";
import CustomModal from "@/components/ui/custom-modal";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields";

import { useUpdateSkillMutation } from "@/redux/api/candidate/candidateApi";
import { z } from "zod";

// Schema for skill update form validation
const updateSkillFormSchema = z.object({
  id: z.string(),
  skill: z.string().min(1, "Skill name is required").optional(),
  duration: z
    .union([z.string(), z.number()])
    .transform((value) => Number(value))
    .optional(),
});

type UpdateSkillFormValues = z.infer<typeof updateSkillFormSchema>;

type SkillUpdateModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  skill: UpdateSkillFormValues;
};

const SkillUpdateModal = ({
  isOpen,
  setIsOpen,
  skill,
}: SkillUpdateModalProps) => {
  const [updateSkill] = useUpdateSkillMutation();

  const form = useForm<UpdateSkillFormValues>({
    resolver: zodResolver(updateSkillFormSchema),
    defaultValues: { ...skill, duration: Number(skill.duration) },
  });

  useEffect(() => {
    if (skill) {
      form.reset(skill);
    }
  }, [skill, form]);

  const onSubmit = async (data: UpdateSkillFormValues) => {
    try {
      const parsedData = {
        skill: data.skill,
        duration: Number(data.duration),
      };
      console.log(data.skill);
      const response = await updateSkill({
        id: skill.id,
        updatedData: parsedData,
        
      }).unwrap();

      if (response?.data) {
        Swal.fire({
          title: "Skill Updated",
          text: "Skill has been updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setIsOpen(false);
      }
    } catch (error: any) {
      Swal.fire(
        "Error",
        "Failed to update the skill. Please try again.",
        "error"
      );
    }
  };

  return (
    <CustomModal
      title="Update Skill"
      open={isOpen}
      setOpen={setIsOpen}
      buttonType={null}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField name="skill" label="Skill" type="text" required />
            <InputField name="duration" label="Number of Years" type="number" />
          </div>

          <div className="flex items-center justify-end mt-4">
            <Button type="submit">Update</Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default SkillUpdateModal;
