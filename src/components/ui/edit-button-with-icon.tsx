"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FiEdit3 } from "react-icons/fi";
import { Button } from "@/components/ui/button";
const EditButton = ({asChild}: {asChild: boolean}) => {
    return (
        <Button variant="outline" className="bg-bgColour hover:bg-bgColour hover:text-primary font-semibold text-primary">
        Edit
        <FiEdit3 className='text-2xl'/>
      </Button>
    );
};

export default EditButton;