import { z } from "zod";

// basic Details
export const formSchema = z.object({
  totalExperience: z.coerce.number().min(0).optional(),
  currentSalary: z.coerce.number().optional(),
  expectedSalary: z.coerce.number().optional(),
  employmentType: z.string().optional(),
  jobLevel: z.string().optional(),
  district: z.string().optional(),
  addressLine: z.string().optional(),
});

// Education Schema
export const educationFormSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  instituteName: z.string().min(1, "Institute is required"),
  startDate: z.date({
    required_error: "Please select a date",
  }),
  endDate: z
    .date({
      required_error: "Please select a date",
    })
    .optional(),
  grade: z.coerce.number().min(1, "Grade is required"),
  fieldOfStudy: z.string().min(1, "Field of study is required"),
  currentlyStudying: z.boolean().default(false),
  description: z.string().min(1, "Description is required"),
});

// work Experience Schema
export const workExperienceFormSchema = z.object({
  designation: z.string().min(1, "Designation is required"),
  employmentType: z.string().min(1, "Employment Type is required"),
  departmentId: z.string().min(1, "Department is required"),
  industryId: z.string().min(1, "Department is required"),
  companyName: z.string().min(1, "Company is required"),
  startDate: z.date({
    required_error: "Please select a date",
  }),
  endDate: z
    .date({
      required_error: "Please select a date",
    })
    .optional(),
  district: z.string().min(1, "Company Location is required"),
  addressLine: z.string().min(1, "Company Location is required"),
  jobResponsibilities: z.string().min(1, "Description is required"),
  isWorking: z.boolean().optional(),
});

// project schema
export const projectFormSchema = z.object({
  title: z.string().min(1, "Project Title is required"),
  companyName: z.string().min(1, "Project Name is required"),
  projectLink: z.string().min(1, "Project Name is required"),
  startDate: z.date({
    required_error: "Please select a date",
  }),
  endDate: z.date({
    required_error: "Please select a date",
  }).optional(),

  description: z.string().min(1, "Description is required"),
  isWorking: z.boolean().optional().default(false),
});

// project schema
export const certificateFormSchema = z.object({
  certificateName: z.string().min(1, "name is required"),
  institution: z.string().min(1, "Institute is required"),
  startDate: z.date({
    required_error: "Please select a date",
  }),
  endDate: z.date({
    required_error: "Please select a date",
  }),
  duration: z.string().min(1, "duration is required"),
  certificateUrl: z.string().min(1, "Certificate URL is required"),
  description: z.string().min(1, "Description is required"),
});

// basic details type
export type FormValues = z.infer<typeof formSchema>;
// Education type
export type EducationFormValues = z.infer<typeof educationFormSchema>;
// work experience type
export type WorkExperienceFormValues = z.infer<typeof workExperienceFormSchema>;

// work experience type
export type ProjectFormValues = z.infer<typeof projectFormSchema>;

// work experience type
export type CertificateFormValues = z.infer<typeof certificateFormSchema>;
