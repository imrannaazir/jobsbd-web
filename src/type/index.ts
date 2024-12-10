import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TInput = {
  label: string;
  type?: string;
  props?: {
    [key: string]: any;
  };
  placeholder?: string;
};

export type TContainerProps = {
  children: ReactNode;
  className?: string;
};

export type ToggleMenuFunction = () => void;

export interface MenuManager {
  toggleMenu: ToggleMenuFunction;
}

export type TAuthInfo = {
  fullName?: string;
  companyName?: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type TLoginInfo = {
  email?: string;
  phoneNumber?: string;
  password: string;
};

export type TResume = {
  id: string;
  file_name: string;
  url: string;
  isDefault: boolean;
  createdAt: Date;
};

export type TSearchParams = {
  query?: string;
  location?: string;
  industry?: string;
  department?: string;
  minExperience?: string;
  minSalary?: string;
  maxSalary?: string;
  negotiable?: string;
};

export type TCompanySearchParams = {
  comapnyName?: string;
  address?: string;
};

export type TItem = {
  id: string;
  name: string;
};
