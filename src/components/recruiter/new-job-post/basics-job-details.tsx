"use client";

import { useEffect, useState } from "react";
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
import SkillsComponent from "./SkillsComponent";
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
import { Checkbox } from "@/components/ui/checkbox";

interface Skill {
  skill: string;
  duration: number;
}

type TItem = {
  id: string;
  name: string;
};

const BasicsJobDetails = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const { data: departmentOption, isLoading } = useGetDepartmentQuery("");
  const { data: industryOption, isLoading: isLoading2 } =
    useGetIndustryQuery("");
  const [isNegotiable, setIsNegotiable] = useState<boolean>(false);
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

  const handleSkillsChange = (updatedSkills: Skill[]) => {
    setSkills(updatedSkills);
  };

  const form = useForm<JobPostFormValues>({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      title: "",
      vacancy: 1,
      deadline: "",
      minSalary: 1,
      maxSalary: 2,
      experienceInMonths: 0,
      jobType: "",
      minAge: 0,
      jobDescription: "",
      jobRequirements: "",
      degreeName: "",
      degreeTitle: "",
      compensationBenefits: "",
      negotiable: false,
      district: "",
      addressLine: "",
      industryId: "",
      departmentId: "",
      skills: [],
    },
  });

  useEffect(() => {
    form.setValue("skills", skills);
  }, [form, skills]);

  const onSubmit = async (data: JobPostFormValues) => {
    if (
      skills?.some(
        (skill) => skill?.skill?.trim() === "" || skill?.duration === 0
      )
    ) {
      Swal.fire({
        title: "Error",
        text: "Please complete all skill entries before submitting.",
        icon: "error",
      });
      return;
    }

    try {
      const info = {
        title: data.title,
        vacancy: data.vacancy,
        deadline: data.deadline,
        minSalary: data.minSalary,
        maxSalary: data.maxSalary,
        experienceInMonths: data.experienceInMonths,
        jobType: data.jobType,
        minAge: data.minAge,
        jobDescription: data.jobDescription,
        jobRequirements: data.jobRequirements,
        degreeName: data.degreeName,
        degreeTitle: data.degreeTitle,
        compensationBenefits: data.compensationBenefits,
        negotiable: isNegotiable,
        district: data.district,
        addressLine: data.addressLine,
        industryId: data.industryId,
        departmentId: data.departmentId,
        skills: skills,
      };
      console.log("On submit", info);

      const response = await createJobPost(info);
      console.log("On submit res", info);
      if (response) {
        Swal.fire({
          title: "Success",
          text: "Job Post has been added successfully",
          icon: "success",
        });
      }
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

  const handleNegotiableChange = (value: boolean) => {
    setIsNegotiable(value);
  };

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

                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={isNegotiable}
                    onCheckedChange={handleNegotiableChange}
                    id="negotiable"
                  />
                  <label
                    htmlFor="negotiable"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Negotiable
                  </label>
                </div>
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
                <SkillsComponent
                  onSkillsChange={handleSkillsChange}
                  initialSkills={skills}
                />
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
          </form>
        </Form>
      </div>
    </section>
  );
};

export default BasicsJobDetails;
