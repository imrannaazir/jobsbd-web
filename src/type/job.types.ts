import { TDepartment } from "./department.types";
import { TIndustry } from "./industry.types";
export type TEmploymentType = "FULL_TIME" | "PART_TIME" | "INTERNSHIP";
export type TJob = {
  companyId: string;
  compensationBenefits: string;
  createdAt: string;
  deadline: string;
  degreeName: string;
  degreeTitle: string;
  department: TDepartment;
  departmentId: string;
  experienceInMonths: number;
  id: string;
  industry: TIndustry;
  industryId: string;
  jobDescription: string;
  jobRequirements: string;
  jobType: TEmploymentType;
  maxSalary: number;
  minAge: number;
  minSalary: number;
  negotiable: boolean;
  title: string;
  updatedAt: string;
  vacancy: number;
};

export type TSavedJob = {
  id: string;
  job?: TJob;
  jobId: string;
  candidateId: string;
  createdAt: string;
  updatedAt: string;
};

