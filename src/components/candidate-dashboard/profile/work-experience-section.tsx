import React from "react";
import SectionTitle from "../section-title";
import WorkExperienceModel from "./work-experience-model";

const WorkExperienceSection = () => {
  return (
    <div className="section-design ">
      <SectionTitle
        label="Work Experience"
        component={<WorkExperienceModel />}
      />
      <div className="p-4">
        <p className="text-primary font-bold mb-5">Designation</p>
        <div className="pb-4 mb-6 border-b">
          <div className="flex items-center gap-2 mb-2">
          <p className="font-bold">company Name |</p>
          <p className="text-sm text-primary px-2 py-1 bg-bgColour rounded-full">job type</p>
          </div>
          <div className="flex items-center gap-2">
            <p>start Date</p> - <p>End date</p> | <p>company Location</p>
          </div>

        </div>
        {/* job Responsibilities */}
        <div className="space-y-2">
            <h4 className="text-lg font-semibold text-primary">Job Responsibilities</h4>
            <p>details</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
