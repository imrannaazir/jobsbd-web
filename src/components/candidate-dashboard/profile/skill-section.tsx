import React from "react";
import SectionTitle from "../section-title";
import SkillModal from "./skill-modal";

const SkillSection = () => {
  return (
    <div className="section-design">
      <SectionTitle label="Key Skills" component={<SkillModal />} />
      {/* details Section */}
      <div className="p-4 grid grid-cols-4 ">
        <div className="p-2 border-2 border-primary rounded text-primary flex items-center gap-2">
          <p>
            <span>Skill</span> - <span>years</span>
          </p>
          <div className="flex items-center gap-5">
            <p>Buttons</p>
            <p>Buttons</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
