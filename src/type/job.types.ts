import { TCompany } from "./company.types";
import { TCandidate } from "./candidate.types";
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
  company: TCompany;
  address: {
    district: string;
  };
};

export type TSavedJob = {
  id: string;
  job?: TJob;
  jobId: string;
  candidateId: string;
  createdAt: string;
  updatedAt: string;
};

export type TAppliedStatus =
  | "APPLIED"
  | "SHORT_LISTED"
  | "REJECTED"
  | "ACCEPTED"
  | "HIRED";

export type TAppliedJob = {
  id: string;
  status: TAppliedStatus;
  candidateId: string;
  candidate: TCandidate;
  companyId: string;
  jobId: string;
  resumeId: string;
  createdAt: string;
  updatedAt: string;
};
