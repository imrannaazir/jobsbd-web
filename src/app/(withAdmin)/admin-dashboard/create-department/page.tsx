/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateDepartmentMutation } from "@/redux/api/department/deapartmentApi";

import {
  FieldValues,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import Swal from "sweetalert2";

const DepartmentNameInput = ({
  label,
  name,
  rules,
}: {
  label: string;
  name: string;
  rules?: any;
}) => {
  const { register } = useFormContext();

  return (
    <div className="relative space-y-1">
      <label htmlFor={name} className="block text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={name}
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        {...register(name, rules)}
        placeholder={label}
      />
    </div>
  );
};
const CreateDepartment = () => {
  const methods = useForm();
  const [createDepartment] = useCreateDepartmentMutation();

  const onSubmit = async (data: FieldValues) => {
    const formData = {
      ...data,
    };

    try {
      const response: any = await createDepartment(formData);

      console.log("API Response:", response);

      if (response?.data) {
        Swal.fire({
          title: "Success",
          text: "Department created successfully!",
          icon: "success",
        });
        await methods.reset();
      } else {
        throw new Error(response?.error?.data?.message || "Creation failed");
      }
    } catch (error) {
      console.error("API Error:", error);
      Swal.fire({
        title: "Error",
        text: "Department creation failed",
        icon: "error",
      });
    }
  };

  return (
    <div className="w-full mt-5 bg-white rounded-lg">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)} // Handle form submission
          className="max-w-md space-y-5 p-4 bg-white shadow-md rounded-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Create Department
          </h2>

          <DepartmentNameInput
            label="Department Name"
            name="name"
            rules={{ required: "Department Name is required" }}
          />

          <button
            type="submit"
            className="nav-link bg-[#1876D1] uppercase text-white hover:bg-primary py-3 px-6 cursor-pointer text-sm"
          >
            SUBMIT
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateDepartment;
