"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  InputField,
  SelectField,
  DateField,
} from "@/components/ui/form-fields";
import { Form } from "@/components/ui/form";
import JobTitle from "./job-title";
import RichTextEditor from "@/components/rich-text-editor/rich-text-editor";
import { Button } from "@/components/ui/button";
import {
  JobPostFormValues,
  jobPostSchema,
} from "@/schemas/recruiter-job-details-schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  bangladeshDistricts,
  EmploymentType,
} from "@/constant/constant-variable";
import { useGetDepartmentQuery } from "@/redux/api/department/deapartmentApi";
import { useGetIndustryQuery } from "@/redux/api/industry/industryApi";
import Loading from "@/components/main/Loading";
import { useCreateJobPostMutation } from "@/redux/api/recruiter/recruiterApi";

interface Skill {
  skill: string;
  duration: string;
}

type TItem = {
  id: string;
  name: string;
};

const BasicsJobDetails = () => {
  const [skills, setSkills] = useState<Skill[]>([{ skill: "", duration: "" }]);
  const { data: departmentOption, isLoading } = useGetDepartmentQuery("");
  const { data: industryOption, isLoading: isLoading2 } =
    useGetIndustryQuery("");
  // const [isNegotiable, setIsNegotiable] = useState(false);
  const [createJobPost] = useCreateJobPostMutation();

  const departmentSelectOption = departmentOption?.data?.map((item: TItem) => {
    return {
      id: item.id || "",
      name: item.name || "Unknown",
    };
  });

  const industrySelectOption = industryOption?.data?.map((item: TItem) => {
    return {
      id: item.id || "",
      name: item.name || "Unknown",
    };
  });

  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsNegotiable(event.target.checked);
  // };

  // Handle input changes in the skill form
  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name as keyof Skill] = value;
    setSkills(updatedSkills);
  };

  // Add a new skill input section
  const handleAddSection = () => {
    const hasEmptyFields = skills.some(
      (skill) => skill.skill.trim() === "" || skill.duration.trim() === ""
    );

    if (hasEmptyFields) {
      Swal.fire({
        title: "Error",
        text: "Please enter Job Skill and Job Duration adding a new section.",
        icon: "error",
      });
      return;
    }

    setSkills([...skills, { skill: "", duration: "" }]);
  };

  // Remove a specific skill input section
  const handleRemoveSection = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const form = useForm<JobPostFormValues>({
    resolver: zodResolver(jobPostSchema),
  });

  const onSubmit = async (data: JobPostFormValues) => {
    try {
      // const response = await createJobPost(data).unwrap();
      
      // if (response) {
      //   Swal.fire({
      //     title: "Success",
      //     text: "Job Post has been added successfully",
      //     icon: "success",
      //   });
      // }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to add Job Post",
        icon: "error",
      });
    }
  };

  if (isLoading || isLoading2) {
    return <Loading />;
  }
  return (
    <section>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <div className="flex items-center justify-between">
                <h2 className="text-lg md:text-xl font-semibold">
                  New Job Post
                </h2>
                <div className="flex gap-3">
                  <Button className="bg-orange-500" type="submit">
                    PUBLISH
                  </Button>
                </div>
              </div>
            </div>
            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <JobTitle
                title="Welcome"
                description="Great to meet you! First off, help us with the basics."
              />
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InputField
                    name="title"
                    label="Job Title"
                    type="text"
                    placeholder="Enter Job Title"
                  />
                  <SelectField
                    name="industryId"
                    label="Industry"
                    options={industrySelectOption}
                  />
                  <SelectField
                    name="departmentId"
                    label="Department"
                    options={departmentSelectOption}
                  />
                  <InputField
                    name="vacancy"
                    label="Vacancy"
                    type="number"
                    placeholder="Enter Vacancy"
                  />
                  <DateField name="deadline" label="Job Deadline" />
                  <SelectField
                    name="district"
                    label="District"
                    options={bangladeshDistricts}
                  />

                  <InputField
                    name="addressLine"
                    label="Full Address"
                    placeholder="Enter Full Address"
                  />
                  <SelectField
                    name="jobType"
                    label="Employment Type"
                    options={EmploymentType}
                  />
                </div>
              </div>
            </div>

            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <JobTitle
                title="Job details"
                description="To get ideal candidates, enter Job Descriptions and  Job Requirements."
              />
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    name="jobDescription"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Description</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            initialContent={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="jobRequirements"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Requirements</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            initialContent={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <JobTitle
                title="Salary Range"
                description="To get ideal candidates, enter their academic qualifications."
              />
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InputField
                    name="minSalary"
                    label="Minimum Salary "
                    type="text"
                    placeholder="Enter Number"
                  />

                  <InputField
                    name="maxSalary"
                    label="Maximum Salary "
                    type="text"
                    placeholder="Enter Number"
                  />
                </div>
                {/* <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="negotiable"
                    checked={isNegotiable}
                    onChange={handleCheckboxChange}
                    className="size-5 text-primary rounded-full transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="negotiable"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Negotiable
                  </label>
                </div> */}
              </div>
            </div>

            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <JobTitle
                title="Academic Information"
                description="To get ideal candidates, enter their academic qualifications."
              />
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InputField
                    name="degreeName"
                    label="Degree Name"
                    type="text"
                    placeholder="Computer Science"
                  />

                  <InputField
                    name="degreeTitle"
                    label="Degree Title"
                    type="text"
                    placeholder="Bachelor's Degree"
                  />
                </div>
              </div>
            </div>

            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <JobTitle
                title="Work Experience"
                description="Enter work experience to find the right candidate."
              />
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InputField
                    name="experienceInMonths"
                    label="Minimum Experience In Months"
                    type="number"
                    placeholder="Enter Minimum Experience"
                  />

                  <InputField
                    name="minAge"
                    label="Minimum Age"
                    type="text"
                    placeholder="Enter Minimum Age"
                  />
                </div>
              </div>
            </div>
            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <JobTitle
                title="Skills"
                description="Choose skills to find the right candidate."
              />
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                      <InputField
                        name="skill"
                        label="Job Skill"
                        type="text"
                        placeholder="Enter Job Skill"
                        value={skill?.skill}
                        onChange={(e) => handleInputChange(index, e)}
                      />

                      <InputField
                        name="duration"
                        label="Job Duration"
                        type="text"
                        placeholder="Enter Job Duration"
                        value={skill?.duration}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                      {skills.length > 1 && (
                        <div>
                          <Button
                            type="button"
                            onClick={() => handleRemoveSection(index)}
                            className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded mt-8"
                          >
                            Remove
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  onClick={handleAddSection}
                  className="bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded"
                >
                  Add New
                </Button>
              </div>
            </div>

            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <JobTitle
                title="Job Benefits"
                description="Enter the job benefits your employee would like to receive."
              />
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    name="compensationBenefits"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Benefits</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            initialContent={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="border rounded shadow-lg mt-8 px-4 py-5 bg-white">
              <div className="flex items-center justify-end">
                <div className="flex gap-3">
                  <Button className="bg-orange-500" type="submit">
                    PUBLISH
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default BasicsJobDetails;
