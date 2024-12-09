/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  useDeleteExperienceMutation,
  // useDeleteExperienceMutation,
  useGetAllExperienceQuery,
} from "@/redux/api/candidate/candidateApi";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import SectionTitle from "../section-title";
import WorkExperienceModel from "./work-experience-model";
import ExperienceUpdateModal from "./work-update-experience-modal";

type TExperience = {
  id: string;
  designation: string;
  companyName: string;
  startDate: Date;
  endDate?: Date;
  isWorking?: boolean;
  district: string;
  addressLine: string;
  industryId: string;
  jobResponsibilities: string;
  departmentId: string;
  employmentType: string;
};

const WorkExperienceSection = () => {
  const { data: experiences, isLoading } = useGetAllExperienceQuery("");
  const [deleteExperience] = useDeleteExperienceMutation();
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<TExperience | null>(null);

  const handleUpdate = (experience: TExperience) => {
    setSelectedExperience(experience);
    setUpdateModalOpen(true);
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
        const data = await deleteExperience(id).unwrap();
        console.log(data);
        if (data?.data?.id) {
          Swal.fire({
            title: "Success",
            text: "Skill record has been deleted successfully",
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
    <div className="section-design">
      <SectionTitle
        label="Work Experience"
        component={<WorkExperienceModel />}
      />
      {!isLoading &&
        experiences?.data?.map((experience: TExperience) => (
          <div className="p-4 border-b relative" key={experience.id}>
            {/* Action Buttons - Top of the Card */}
            <div className="flex justify-end items-center gap-2 absolute right-4 top-4">
              <button
                className="p-2 text-sm font-medium bg-[#E5F4FF] rounded text-blue-500"
                title="Edit"
                onClick={() => handleUpdate(experience)}
              >
                <FiEdit />
              </button>
              <button
                className="p-2 text-sm font-medium text-red-500 bg-[#FEEFEE] rounded"
                title="Delete"
                onClick={() => handleDelete(experience.id)}
              >
                <FiDelete />
              </button>
            </div>
            {/* Card Content */}
            <p className="text-primary font-bold mb-5">
              {experience?.designation}
            </p>
            <div className="pb-4 mb-6 border-b">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-bold">{experience?.companyName} |</p>
                <p className="text-sm text-primary px-2 py-1 bg-bgColour rounded-full">
                  {experience?.employmentType}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p>{convertIntoDateString(experience?.startDate)}</p> -
                <p>
                  {experience?.isWorking
                    ? "Running"
                    : convertIntoDateString(experience?.endDate as Date)}
                </p>{" "}
                | <p>{experience?.district}</p>
              </div>
            </div>
            {/* Job Responsibilities */}
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-primary">
                Job Responsibilities
              </h4>
              {!isLoading && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: experience?.jobResponsibilities,
                  }}
                ></div>
              )}
              {!isLoading && !experience?.jobResponsibilities && (
                <p className="text-gray-600 text-sm p-4">
                  No job Responsibilities yet.
                </p>
              )}
            </div>
          </div>
        ))}

      {selectedExperience && (
        <ExperienceUpdateModal
          isOpen={isUpdateModalOpen}
          setIsOpen={setUpdateModalOpen}
          experience={selectedExperience}
        />
      )}
    </div>
  );
};

export default WorkExperienceSection;
