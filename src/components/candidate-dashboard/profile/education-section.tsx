/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  useDeleteEducationMutation,
  useGetAllEducationQuery,
} from "@/redux/api/candidate/candidateApi";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import SectionTitle from "../section-title";
import EducationAddModal from "./education-add-modal";
import EducationUpdateModal from "./education-update-modal"; // Import the update modal

type TEducation = {
  id: string;
  degree: string;
  instituteName: string;
  currentlyStudying?: boolean | null | undefined;
  fieldOfStudy: string;
  description?: string;
  grade: number;
  startDate: Date;
  endDate?: Date;
};

const EducationSection = () => {
  const { data, isLoading } = useGetAllEducationQuery("");
  const [deleteEducation] = useDeleteEducationMutation();
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<TEducation | null>(
    null
  );

  const handleUpdate = (edu: any) => {
    setSelectedEducation(edu);
    setOpenUpdateModal(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const data = await deleteEducation(id).unwrap();
        console.log(data);
        if (data?.data?.id) {
          Swal.fire({
            title: "Success",
            text: "Education record has been deleted successfully",
            icon: "success",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong while deleting.",
        icon: "error",
      });
    }
  };

  return (
    <div id="education" className="section-design">
      <SectionTitle label="Education" component={<EducationAddModal />} />
      <div className="p-4">
        {!isLoading &&
          data?.data?.map((edu: TEducation) => (
            <div
              key={edu.id}
              className="border-b py-5 flex justify-between items-center"
            >
              <div>
                <div className="mb-5">
                  <h4 className="text-lg text-primary font-semibold">
                    {edu?.degree}
                  </h4>
                </div>
                <div className="space-y-3">
                  <p className="font-semibold">{edu?.instituteName}</p>
                  <p className="text-sm">
                    <span>{convertIntoDateString(edu?.startDate)}</span> -
                    <span>
                      {edu?.currentlyStudying
                        ? "Running"
                        : convertIntoDateString(edu?.endDate as Date)}
                    </span>
                    | Result: {edu?.grade}
                  </p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => handleUpdate(edu)}
                  className="px-4 py-2 text-sm font-medium  bg-[#E5F4FF] rounded text-blue-500"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => handleDelete(edu.id)}
                  className="px-4 py-2 text-sm font-medium text-red-500 bg-[#FEEFEE] rounded "
                >
                  <FiDelete />
                </button>
              </div>
            </div>
          ))}
      </div>
      {selectedEducation && (
        <EducationUpdateModal
          educationData={selectedEducation}
          open={openUpdateModal}
          setOpen={setOpenUpdateModal}
        />
      )}
    </div>
  );
};

export default EducationSection;
