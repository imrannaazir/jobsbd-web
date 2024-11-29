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
