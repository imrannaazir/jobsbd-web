import { ReactNode } from "react";

export type TContainerProps = {
  children: ReactNode;
  className?: string;
};

type ToggleMenuFunction = () => void;

export interface MenuManager {
  toggleMenu: ToggleMenuFunction;
}
