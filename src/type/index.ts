import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TFloatingLabelInput = {
  label: string;
  type?: string;
  props?: {
    [key: string]: any;
  };
};

export type TContainerProps = {
  children: ReactNode;
  className?: string;
};

export type ToggleMenuFunction = () => void;

export interface MenuManager {
  toggleMenu: ToggleMenuFunction;
}
