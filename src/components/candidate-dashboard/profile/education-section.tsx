"use client";
import React from "react";
import SectionTitle from "../section-title";
import EducationAddModal from "./education-add-modal";
import { useGetAllEducationQuery } from "@/redux/api/candidate/candidateApi";
import { convertIntoDateString } from "@/utils/convert-into-date-string";

type TEducation = {
  id: string;
  degree: string;
  instituteName: string;
  currentlyStudying?: boolean;
  grade: number;
  startDate: Date;
  endDate?: Date;
};
const EducationSection = () => {
  const { data, isLoading } = useGetAllEducationQuery("");
  console.log(data);
  return (
    <div id="education" className="section-design">
      <SectionTitle label="Education" component={<EducationAddModal />} />
      {/* details */}
      <div className="p-4">
        {!isLoading &&
          data?.data?.map((edu: TEducation) => (
            <div key={edu.id} className="border-b py-5">
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
          ))}
      </div>
    </div>
  );
};

export default EducationSection;
