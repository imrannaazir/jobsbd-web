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
import { bangladeshDistricts } from "./options";
import RichTextEditor from "@/components/rich-text-editor/rich-text-editor";
import { Button } from "@/components/ui/button";
import {
  JobPostFormValues,
  jobPostSchema,
} from "@/schemas/recruiter-job-details-schema";

interface Skill {
  skill: string;
  duration: string;
}

const BasicsJobDetails = () => {
  const [skills, setSkills] = useState<Skill[]>([{ skill: "", duration: "" }]);

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
        text: "Please fill in all fields before adding a new section.",
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

  const onSubmit = (data: JobPostFormValues) => {
    console.log(data);
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
                  <Button>SAVE</Button>
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
                    options={[
                      { value: "full-time", label: "Full Time" },
                      { value: "part-time", label: "Part Time" },
                      { value: "contract", label: "Contract" },
                    ]}
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
                  <div>
                    <label
                      htmlFor="jobDescription"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-5"
                    >
                      Job Descriptions
                    </label>
                    <RichTextEditor
                      id="jobDescription"
                      // initialContent={field.value}
                      // onChange={field.onChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jobRequirements"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-5"
                    >
                      Job Requirements
                    </label>
                    <RichTextEditor
                      id="jobRequirements"
                      // initialContent={field.value}
                      // onChange={field.onChange}
                    />
                  </div>
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
          </form>
        </Form>
      </div>
    </section>
  );
};

export default BasicsJobDetails;
