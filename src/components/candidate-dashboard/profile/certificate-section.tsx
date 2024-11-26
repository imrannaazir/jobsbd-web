import React from "react";
import SectionTitle from "../section-title";
import CertificateModal from "./certificate-modal";

const CertificateSection = () => {
  return (
    <div className="section-design">
      <SectionTitle
        label="Training & Certifications"
        component={<CertificateModal />}
      />
      <div className="p-4 border-b">
        <p className="text-primary font-bold mb-5">Certificate Name</p>
        <div className="pb-4 mb-6 border-b flex flex-col gap-2">
          <p className="font-bold">Institute Name: </p>

          <div className="flex items-center gap-2 mt-2">
            <p>start Date</p> - <p>End date</p>
          </div>
          <p className="font-bold">Duration: </p>
          <p className="text-sm">details</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
