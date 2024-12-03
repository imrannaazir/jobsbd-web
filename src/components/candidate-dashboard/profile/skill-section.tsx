/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  useDeleteSkillMutation,
  useGetAllSkillQuery,
} from "@/redux/api/candidate/candidateApi";
import { useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import SectionTitle from "../section-title";
import SkillModal from "./skill-modal";
import SkillUpdateModal from "./skill-update-modal";

type TSkill = {
  id: string;
  skill: string;
  duration: number;
};

const SkillSection = () => {
  const { data: skills, isLoading } = useGetAllSkillQuery("");
  const [deleteSkill] = useDeleteSkillMutation();

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
        const data = await deleteSkill(id).unwrap();
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
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<TSkill | null>(null);

  const handleUpdate = (skill: TSkill) => {
    setSelectedSkill(skill);
    setUpdateModalOpen(true);
  };

  return (
    <div className="section-design">
      <SectionTitle label="Key Skills" component={<SkillModal />} />
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 md:gap-2 gap-1">
        {!isLoading &&
          skills?.data?.map((skill: TSkill) => (
            <div
              className="p-2 border-[0.5px] border-primary rounded text-primary flex justify-between items-center"
              key={skill.id}
            >
              <div className="flex items-center gap-2 flex-1">
                <span className="text-sm font-medium">{skill.skill} - </span>
                <span className="text-xs">{`${skill.duration} Years`}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 text-sm font-medium bg-[#E5F4FF] rounded text-blue-500"
                  title="Edit"
                  onClick={() => handleUpdate(skill)}
                >
                  <FiEdit />
                </button>
                <button
                  className="p-2 text-sm font-medium text-red-500 bg-[#FEEFEE] rounded"
                  title="Delete"
                  onClick={() => handleDelete(skill.id)}
                >
                  <FiDelete />
                </button>
              </div>
            </div>
          ))}
      </div>
      {selectedSkill && (
        <SkillUpdateModal
          isOpen={isUpdateModalOpen}
          setIsOpen={setUpdateModalOpen}
          skill={selectedSkill}
        />
      )}
    </div>
  );
};

export default SkillSection;
