"use client"
import React from "react";
import SectionTitle from "../section-title";
import SkillModal from "./skill-modal";
import { useGetAllSkillQuery } from "@/redux/api/candidate/candidateApi";

type TSkill = {
  id: string;
  skill: string;
  duration: number;
};
const SkillSection = () => {
  const { data: skills, isLoading } = useGetAllSkillQuery("");
  
  return (
    <div className="section-design">
      <SectionTitle label="Key Skills" component={<SkillModal />} />
      {/* details Section */}
      <div className="p-4 grid grid-cols-4 ">
        {!isLoading &&
          skills?.data?.map((skill: TSkill) => (
            <div
              className="p-2 border-2 border-primary rounded text-primary flex items-center gap-2"
              key={skill.id}
            >
              <p className="flex-1">
                <span>{skill?.skill}</span> - 
                <span>{` ${skill?.duration} Years`}</span>
              </p>
              <div className="flex-1 flex items-center gap-5">
                <p>Buttons</p>
                <p>Buttons</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillSection;
