import React from "react";
import SectionTitle from "../section-title";
import SummaryModal from "./summary-modal";

const Summary = () => {
  return (
    <div id="summary" className="section-design">
      <SectionTitle label="Summary" component={<SummaryModal />} />
      <div className="p-5">
        <p className="text-gray-600 text-sm">This is a summary.</p>
      </div>
    </div>
  );
};

export default Summary;
