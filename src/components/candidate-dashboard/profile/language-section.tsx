import React from "react";
import SectionTitle from "../section-title";
import LanguageModal from "./language-modal";
import LanguageTable from "./language-table";


const LanguageSection = () => {
  const languages = [
    {
      _id: "1155",
      name: "English",
      proficiency: "English",
    },
  ];
  return (
    <div className="section-design">
      <SectionTitle
        label="Languages"
        component={<LanguageModal />}
      />
      <div className="p-4">
        <LanguageTable languages={languages} />
      </div>
    </div>
  );
};

export default LanguageSection;
