"use client";

import { Button } from "@/components/ui/button";
import CustomModal from "@/components/ui/custom-modal";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/form-fields";
import { useAddSkillMutation } from "@/redux/api/candidate/candidateApi";
import { useCreateDepartmentMutation } from "@/redux/api/department/deapartmentApi";
import { useCreateIndustryMutation } from "@/redux/api/industry/industryApi";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type TDepartment = { department: string };

const DepartmentModal = () => {
  const [createDepartment] = useCreateDepartmentMutation();

  const [open, setOpen] = useState<boolean>(false);
  const form = useForm({
    defaultValues: {
      department: "",
    },
  });

  const onSubmit = async (data: TDepartment) => {
    const departmentData = {
      name: data.department,
    };

    const res = await createDepartment(departmentData);
    if (res.data) {
      Swal.fire({
        title: "Success",
        text: "Department added successfully",
        icon: "success",
      });
      setOpen(false);
    } else {
      Swal.fire({
        title: "Error",
        text: "Failed to add department",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <CustomModal
      buttonType="add"
      title="Department"
      open={open}
      setOpen={setOpen}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <InputField
              name="department"
              label="Department"
              placeholder="Enter Department Name"
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

export default DepartmentModal;
