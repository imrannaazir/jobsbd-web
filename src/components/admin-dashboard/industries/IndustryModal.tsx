"use client";

import { Button } from "@/components/ui/button";
import CustomModal from "@/components/ui/custom-modal";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields";
import { useCreateIndustryMutation } from "@/redux/api/industry/industryApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type TIndustry = { industry: string };

const IndustryModal = () => {
  const [createIndustry] = useCreateIndustryMutation();

  const [open, setOpen] = useState<boolean>(false);
  const form = useForm({
    defaultValues: {
      industry: "",
    },
  });

  const onSubmit = async (data: TIndustry) => {
    const industryData = {
      name: data.industry,
    };

    const res = await createIndustry(industryData);
    if (res.data) {
      Swal.fire({
        title: "Success",
        text: "Industry added successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to add industry",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <CustomModal
      buttonType="add"
      title="Industry"
      open={open}
      setOpen={setOpen}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <InputField
              name="industry"
              label="Industry"
              placeholder="Enter Industry Name"
              type="text"
            />
          </div>

          <div className="flex items-center justify-start">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </CustomModal>
  );
};

export default IndustryModal;
