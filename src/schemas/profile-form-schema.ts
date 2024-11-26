import { z } from "zod";

// basic Details
export const formSchema = z.object({
  totalExperience: z.coerce.number().min(0),
  currency: z.string().min(1, "Please select a currency"),
  currentSalary: z.string().min(1, "Current salary is required"),
  expectedSalary: z.string().min(1, "Expected salary is required"),
  employmentType: z.string().min(1, "Please select employment type"),
  salaryType: z.string().min(1, "Please select salary type"),
  jobLevel: z.string().min(1, "Please select job level"),
  availableFrom: z.date({
    required_error: "Please select a date",
  }),
  currentLocation: z.string().min(1, "Please select current location"),
  upazilla: z.string().min(1, "Please select upazilla"),
  area: z.string().min(1, "Please select area"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
});

// basic details Default values
export const defaultValues = {
  totalExperience: 0,
  currentSalary: "",
  expectedSalary: "",
  email: "",
  phone: "",
};

// Education Schema
export const educationFormSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institute: z.string().min(1, "Institute is required"),
  startDate: z.date({
    required_error: "Please select a date",
  }),
  endDate: z.date({
    required_error: "Please select a date",
  }),
  grade: z.string().min(1, "Grade is required"),
  field: z.string().min(1, "Field of study is required"),
  description: z.string().min(1, "Description is required"),
});

// work Experience Schema
export const workExperienceFormSchema = z.object({
  designation: z.string().min(1, "Designation is required"),
  employmentType: z.string().min(1, "Employment Type is required"),
  department: z.string().min(1, "Department is required"),
  companyName: z.string().min(1, "Company is required"),
  startDate: z.date({
    required_error: "Please select a date",
  }),
  endDate: z.date({
    required_error: "Please select a date",
  }),
  companyLocation: z.string().min(1, "Company Location is required"),
  candidateWorkType: z.string().min(1, "candidate Work Type is required"),
  responsibilities: z.string().min(1, "Description is required"),
});

// project schema
export const projectFormSchema = z.object({
  projectTitle: z.string().min(1, "Project Title is required"),
  projectName: z.string().min(1, "Project Name is required"),
  startDate: z.date({
    required_error: "Please select a date",
  }),
  endDate: z.date({
    required_error: "Please select a date",
  }),

  description: z.string().min(1, "Description is required"),
});

// project schema
export const certificateFormSchema = z.object({
  name: z.string().min(1, "name is required"),
  instituteName: z.string().min(1, "Institute is required"),
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
