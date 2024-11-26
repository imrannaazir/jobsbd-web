"use client"
import React, { ReactNode, useState } from "react";
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
}: {
  children: ReactNode;
  buttonType: "add" | "edit";
  title: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);
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
