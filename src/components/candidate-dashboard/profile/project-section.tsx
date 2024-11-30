import React from "react";
import SectionTitle from "../section-title";
import ProjectModal from "./project-modal";

const ProjectSection = () => {
  return (
    <div className="section-design">
      <SectionTitle label="Projects" component={<ProjectModal />} />
      <div className="p-4">
        <p className="text-primary font-bold mb-5">Project Name</p>
        <div className="pb-4 mb-6 border-b">
          <p className="font-bold">company Name</p>

          <div className="flex items-center gap-2 mt-2">
            <p>start Date</p> - <p>End date</p>
          </div>
        </div>
        {/* job Responsibilities */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-primary">
            Project Description
          </h4>
          <p>details</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
