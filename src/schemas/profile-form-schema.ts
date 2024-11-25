import { z } from "zod"

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
})

export const defaultValues = {
  totalExperience: 0,
  currentSalary: "",
  expectedSalary: "",
  email: "",
  phone: "",
}

export const educationFormSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institute: z.string().min(1, "Institute is required"),
  startDate: z.date({
    required_error: "Please select a date",
  }),
  endDate: z.date({
    required_error: "Please select a date",
  }),
  grade: z.string().min(1,  "Grade is required"),
  field: z.string().min(1,  "Field of study is required"),
  description: z.string().min(1,  "Description is required"),
})



export type FormValues = z.infer<typeof formSchema>
export type EducationFormValues = z.infer<typeof educationFormSchema>

