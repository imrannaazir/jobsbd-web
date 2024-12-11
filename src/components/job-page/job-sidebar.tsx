"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import FloatingLabelInput from "@/components/ui/CustomInput";
import { bangladeshDistricts } from "@/constant/constant-variable";
import { useGetDepartmentQuery } from "@/redux/api/department/deapartmentApi";
import { useGetIndustryQuery } from "@/redux/api/industry/industryApi";
import { TSearchParams } from "@/type";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import { MdTune } from "react-icons/md";
import ComboboxForSelection from "./combo-box-for-selection";

const JobSidebar = () => {
  const { data: departments, isFetching: isDepartmentsLoading } =
    useGetDepartmentQuery("");
  const { data: industries, isFetching: isIndustriesLoading } =
    useGetIndustryQuery("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize the React Hook Form methods
  const methods = useForm<TSearchParams>({
    defaultValues: {
      query: searchParams.get("query") || "",
      location: searchParams.get("location") || "",
      industry: searchParams.get("industry") || "",
      department: searchParams.get("department") || "",
      minExperience: searchParams.get("minExperience") || "",
      minSalary: searchParams.get("minSalary") || "",
      maxSalary: searchParams.get("maxSalary") || "",
    },
  });

  // Define the form submission handler
  const onSubmit = (data: TSearchParams) => {
    const newParams = new URLSearchParams(searchParams.toString());
    // Iterate over the data object and add each key-value pair to newParams
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        newParams.set(key, value.toString());
      } else {
        // Remove the parameter if the value is empty, null, or undefined
        newParams.delete(key);
      }
    });

    // Convert the URLSearchParams object to a string and update the URL
    router.push(`/jobs?${newParams.toString()}`, { scroll: false });
  };

  const handleClearFilter = () => {
    router.replace(`/jobs`);

    methods.reset({
      query: "",
      location: "",
      industry: "",
      department: "",
      minExperience: "",
      minSalary: "",
      maxSalary: "",
    });
  };

  return (
    <div className="bg-white h-full lg:min-h-screen rounded z-10">
      <div className="py-5 px-4">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="w-full space-y-5 p-4"
          >
            <div className="flex flex-wrap justify-between items-center mb-5">
              <h2 className="font-bold">Quick Search</h2>
              <div>
                <Button
                  onClick={handleClearFilter}
                  className="flex items-center justify-between gap-3 bg-white hover:bg-[#E6F3FF] text-primary"
                >
                  Clear Filter <MdTune className="size-5" />
                </Button>
              </div>
            </div>

            <FloatingLabelInput
              name="query"
              label="Keyword, Job Title, Company Name"
              type="text"
            />

            <ComboboxForSelection
              label="Location"
              options={bangladeshDistricts}
              name="location"
            />
            <ComboboxForSelection
              label="Department"
              options={
                !isDepartmentsLoading && departments?.data
                  ? departments.data
                  : []
              }
              name="department"
            />
            <ComboboxForSelection
              label="Industry"
              options={
                !isIndustriesLoading && industries?.data ? industries.data : []
              }
              name="industry"
            />
            <FloatingLabelInput
              name="minExperience"
              label="Minimum Experience"
              type="number"
            />

            <div className="flex items-center justify-center gap-2">
              <FloatingLabelInput
                name="minSalary"
                label="Min Salary"
                type="number"
              />
              <FloatingLabelInput
                name="maxSalary"
                label="Max Salary"
                type="number"
              />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <Controller
                name="negotiable"
                control={methods.control}
                render={({ field }) => (
                  <Checkbox
                    id="negotiable"
                    checked={field.value === "true" ? true : false}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <label
                htmlFor="negotiable"
                className="text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Negotiable
              </label>
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary py-6 text-white shadow rounded-md flex items-center justify-center gap-3"
            >
              <IoSearchSharp className="size-5" />
              Search
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default JobSidebar;
