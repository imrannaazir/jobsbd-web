import { TEmploymentType } from "./job.types";
import { TUser } from "./user.types";

export type TCandidate = {
  id: string;
  userId: string;
  fullName: string;
  image: string;
  designation: string;
  totalExperience: number;
  currentSalary: number;
  expectedSalary: number;
  employmentType: TEmploymentType;
  jobLevel: string;
  bio: string;
  resume: TResume[];
  skills: TSkill[];
  user: TUser;
  educations: TEducation[];
  createdAt: string;
  updatedAt: string;
};

export type TSkill = {
  id: string;
  skill: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
};

export type TEducation = {
  degree: string;
  instituteName: string;
  startDate: Date;
  endDate: Date;
  currentlyStudying: boolean;
  grade: number;
  fieldOfStudy: string;
};

export type TResume = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  candidateId: string;
  url: string;
  file_name: string;
  isDefault: boolean;
};
