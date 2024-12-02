import { z } from "zod";

export const jobPostSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    vacancy: z.coerce
      .number()
      .positive("Vacancy must be a positive number")
      .int("Vacancy must be an integer"),
    deadline: z.coerce.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid deadline date",
    }),
    minSalary: z.coerce.number().positive("Minimum salary must be positive"),
    maxSalary: z.coerce
      .number()
      .positive("Maximum salary must be positive")
      .int("Maximum salary must be an integer"),
    experienceInMonths: z.coerce
      .number()
      .nonnegative("Experience in months must be non-negative")
      .int("Experience must be an integer"),
    jobType: z.string().min(1, "Employment Type is required"),
    minAge: z.coerce
      .number()
      .positive("Minimum age must be positive")
      .int("Age must be an integer"),
    jobDescription: z.string().min(1, "Job description is required"),
    jobRequirements: z.string().min(1, "Job requirements are required"),
    degreeName: z.string().min(1, "Degree name is required"),
    degreeTitle: z.string().min(1, "Degree title is required"),
    compensationBenefits: z.string().min(1, "Job Benefits is required"),
    // negotiable: z.boolean(),
    district: z.string().min(1, "District is required"),
    addressLine: z.string().min(1, "Address line is required"),
    industryId: z.string().min(1,"Industry ID must be a valid UUID"),
    departmentId: z.string().min(1,"Department ID must be a valid UUID"),
  //   skills: z
  //     .array(
  //       z.object({
  //         skill: z.string().min(1, "Skill is required"),
  //         duration: z.coerce
  //           .number()
  //           .positive("Duration must be a positive number")
  //           .int("Duration must be an integer"),
  //       })
  //     )
  //     .nonempty("At least one skill is required"),
  })
  .refine((data) => data.maxSalary >= data.minSalary, {
    message: "Max salary must be greater than or equal to min salary",
    path: ["maxSalary"], 
  });

// Inferred Type for the Schema
export type JobPostFormValues = z.infer<typeof jobPostSchema>;
