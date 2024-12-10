"use client";

import { TCompanySearchParams } from "@/type";
import { useRouter, useSearchParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import { MdTune } from "react-icons/md";
import { Button } from "../ui/button";
import FloatingLabelInput from "../ui/CustomInput";

const FilterCompanies = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize the React Hook Form methods
  const methods = useForm({
    defaultValues: {
      companyName: searchParams.get("companyName") || "",
      address: searchParams.get("address") || "",
    },
  });

  // Define the form submission handler
  const onSubmit = (data: TCompanySearchParams) => {
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
    router.push(`/company?${newParams.toString()}`, { scroll: false });
  };

  const handleClearFilter = () => {
    router.replace(`/company`);

    methods.reset({
      companyName: "",
      address: "",
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
              <h2 className="font-bold">All Filters</h2>
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
              name="companyName"
              label="Company Name"
              type="text"
            />

            <FloatingLabelInput name="address" label="Address" type="text" />

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

export default FilterCompanies;
