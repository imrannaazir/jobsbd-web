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

export const companyDetailsFormSchema = z.object({
  companyName: z.string().optional(),
  companyDetails: z.string().optional(),
  websiteLink: z.string().url().optional(),
  foundedDate: z.date().optional(),
  businessType: z.string().optional(),
  numberOfEmployees: z.number().optional(),
  numberOfOffices: z.number().optional(),
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
export const updateWorkExperienceFormSchema = z.object({
  id: z.string(),
  designation: z.string().optional(),
  employmentType: z.string().optional(),
  departmentId: z.string().optional(),
  industryId: z.string().optional(),
  companyName: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  district: z.string().optional(),
  addressLine: z.string().optional(),
  jobResponsibilities: z.string().optional(),
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
  endDate: z
    .date({
      required_error: "Please select a date",
    })
    .optional(),

  description: z.string().min(1, "Description is required"),
  isWorking: z.boolean().optional().default(false),
});
export const updateProjectFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Project Title is required").optional(),
  companyName: z.string().min(1, "Project Name is required").optional(),
  projectLink: z.string().min(1, "Project Name is required").optional(),
  startDate: z
    .date({
      required_error: "Please select a date",
    })
    .optional(),
  endDate: z
    .date({
      required_error: "Please select a date",
    })
    .optional()
    .optional(),

  description: z.string().min(1, "Description is required").optional(),
  isWorking: z.boolean().default(false),
});

// project schema
export const certificateFormSchema = z.object({
  id: z.string().optional(),
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

export const updateCertificateFormSchema = z.object({
  id: z.string().optional(),
  certificateName: z.string().min(1, "Name is required"),
  institution: z.string().min(1, "Institute is required"),
  startDate: z
    .date({
      required_error: "Please select a start date",
    })
    .nullable() // This will allow `null` as well
    .optional(), // Also allow `undefined`
  endDate: z
    .date({
      required_error: "Please select an end date",
    })
    .nullable() // This will allow `null` as well
    .optional(), // Also allow `undefined`
  duration: z.string().min(1, "Duration is required"),
  certificateUrl: z.string().min(1, "Certificate URL is required"),
  description: z.string().min(1, "Description is required"),
});
export type TBasicCompanyDetailsValues = z.infer<
  typeof companyDetailsFormSchema
>;
export type FormValues = z.infer<typeof formSchema>;

// Education type
export type EducationFormValues = z.infer<typeof educationFormSchema>;
// work experience type
export type WorkExperienceFormValues = z.infer<typeof workExperienceFormSchema>;
export type UpdateWorkExperienceFormValues = z.infer<
  typeof updateWorkExperienceFormSchema
>;

// work experience type
export type ProjectFormValues = z.infer<typeof projectFormSchema>;
export type UpdateProjectFormValues = z.infer<typeof updateProjectFormSchema>;

// work experience type
export type CertificateFormValues = z.infer<typeof certificateFormSchema>;
