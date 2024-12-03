"use client";

import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../ui/button";
import FloatingLabelInput from "../ui/CustomInput";
import { MdTune } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { useAppDispatch } from "@/redux/hooks";
import { clearFilter, setFilter } from "@/redux/features/jobSlice";


const JobSidebar = () => {
  
  
  const dispatch = useAppDispatch();
  // Initialize the React Hook Form methods
  const methods = useForm({
    defaultValues: {},
  });

  // Define the form submission handler
  const onSubmit = (data: any) => {
    console.log(data, "from 20 line sidebar");
    dispatch(setFilter(data))
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
    methods.reset();
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

            <FloatingLabelInput name="industry" label="Job Title" type="text" />

            <FloatingLabelInput
              name="location"
              label="Work Location"
              type="text"
            />

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
