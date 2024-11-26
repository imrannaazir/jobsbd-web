"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaPlus } from "react-icons/fa6";
import { Button } from "./button";

const AddIconButton = ({asChild}: {asChild: boolean}) => {
  return (
    <Button
      variant="outline"
      className="bg-bgColour hover:bg-bgColour hover:text-primary font-semibold text-primary"
    >
      Add
      <FaPlus className="text-2xl" />
    </Button>
  );
};

export default AddIconButton;
