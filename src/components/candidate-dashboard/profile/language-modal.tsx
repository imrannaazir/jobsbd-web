"use client";
import { Button } from "@/components/ui/button";
import CustomModal from "@/components/ui/custom-modal";

import { Form } from "@/components/ui/form";
import { InputField, SelectField } from "@/components/ui/form-fields";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the Zod schema
const languageFormSchema = z.object({
  name: z.string().min(1, "Institution is required"),
  proficiency: z.string().min(1, "Degree is required"),
});

// Infer the TypeScript type from the schema
type LanguageFormValues = z.infer<typeof languageFormSchema>;

const LanguageModal = () => {
  const form = useForm<LanguageFormValues>({
    resolver: zodResolver(languageFormSchema),
  });

  const onSubmit = (data: LanguageFormValues) => {
    
  };
  return (
    <CustomModal buttonType="add" title="Language">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className=" grid grid-cols-2 items-center gap-5">
            <InputField
              name="degree"
              label="Degree"
              type="text"
              required
              placeholder="Enter Your Degree"
            />
            <SelectField
              name="proficiency"
              label="Proficiency"
              options={[
                { value: "beginner", label: "beginner" },
                { value: "intermediate", label: "intermediate" },
                { value: "advanced", label: "advanced" },
              ]}
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

export default LanguageModal;
