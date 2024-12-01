"use client";
import React, { ReactNode, } from "react";
import AddIconButton from "@/components/ui/add-icon-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditButton from "./edit-button-with-icon";
const CustomModal = ({
  children,
  buttonType,
  title,
  open,
  setOpen,
}: {
  children: ReactNode;
  buttonType: "add" | "edit";
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        {buttonType === "add" ? (
          <AddIconButton asChild />
        ) : (
          <EditButton asChild />
        )}
      </DialogTrigger>
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
