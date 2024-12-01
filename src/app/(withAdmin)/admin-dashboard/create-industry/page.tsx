/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCreateIndustryMutation } from "@/redux/api/industry/industryApi";

import {
  FieldValues,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import Swal from "sweetalert2";

const IndustryNameInput = ({
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
const CreateIndustry = () => {
  const methods = useForm();
  const [createIndustry] = useCreateIndustryMutation();

  const onSubmit = async (data: FieldValues) => {
    const formData = {
      ...data,
    };

    try {
      const response: any = await createIndustry(formData);

      console.log("API Response:", response); // Debug response

      if (response?.data) {
        Swal.fire({
          title: "Success",
          text: "Industry created successfully!",
          icon: "success",
        });
        await methods.reset(); // Ensures form resets correctly
      } else {
        throw new Error(response?.error?.data?.message || "Creation failed");
      }
    } catch (error) {
      console.error("API Error:", error); // Logs detailed error
      Swal.fire({
        title: "Error",
        text: "Industry creation failed",
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
            Create Industry
          </h2>

          <IndustryNameInput
            label="Industry Name"
            name="name"
            rules={{ required: "Industry Name is required" }}
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

export default CreateIndustry;
