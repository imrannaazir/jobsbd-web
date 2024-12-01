"use client";
import AddIconButton from "@/components/ui/add-icon-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import EditButton from "./edit-button-with-icon";

const CustomModal = ({
  children,
  buttonType,
  title,
  open,
  setOpen,
}: {
  children: ReactNode;
  buttonType: "add" | "edit" | null;
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {buttonType && (
        <DialogTrigger>
          {buttonType === "add" ? (
            <AddIconButton asChild />
          ) : (
            <EditButton asChild />
          )}
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader className="border-b pb-4">
          <DialogTitle>New {title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
