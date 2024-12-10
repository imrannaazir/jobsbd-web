"use client";
import { TExperience } from "@/type/experience.types";
import SectionTitle from "../section-title";
import WorkExperienceModel from "./work-experience-model";
import { useGetAllExperienceQuery } from "@/redux/api/candidate/candidateApi";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { removeUnderscore } from "@/utils/remove-underscore";

const WorkExperienceSection = () => {
  const { data: experiences, isLoading } = useGetAllExperienceQuery("");
  return (
    <div className="section-design ">
      <SectionTitle
        label="Work Experience"
        component={<WorkExperienceModel />}
      />
      {!isLoading &&
        experiences?.data?.map((experience: TExperience) => (
          <div className="p-4 border-b" key={experience.id}>
            <p className="text-primary font-bold mb-5">
              {experience?.designation}
            </p>
            <div className="pb-4 mb-6 border-b">
              <div className="flex items-center gap-2 mb-2">
                <p className="font-bold">{experience?.companyName} |</p>
                <p className="text-sm text-primary px-2 py-1 bg-bgColour rounded-full">
                  {removeUnderscore(experience?.employmentType)}
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
            {/* job Responsibilities */}
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
    </div>
  );
};

export default WorkExperienceSection;
