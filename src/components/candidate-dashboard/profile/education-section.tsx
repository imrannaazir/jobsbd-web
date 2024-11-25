import React from "react";
import SectionTitle from "../section-title";
import EducationAddModal from "./education-add-modal";

const EducationSection = () => {
  return (
    <div id="education" className="section-design">
      <SectionTitle label="Education" component={<EducationAddModal />} />
      {/* details */}
      <div className="p-4">
        <div className="mb-5">
          <h4 className="text-lg text-primary font-semibold">Title</h4>
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Institute</p>
          <p className="text-sm">
            <span>Start Date</span> - <span>End Date</span> | Result: GPA
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
