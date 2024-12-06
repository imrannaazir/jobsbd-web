"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaPlus } from "react-icons/fa6";

const AddIconButton = ({ asChild }: { asChild: boolean }) => {
  return (
    <div className="flex border-primary py-2 px-4 bg-bgColour hover:bg-bgColour hover:text-primary font-semibold text-primary text-sm items-center border rounded-md gap-2">
      Add
      <FaPlus size={16} />
    </div>
  );
};

export default AddIconButton;
