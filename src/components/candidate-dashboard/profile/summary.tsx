"use client";
import React from "react";
import SectionTitle from "../section-title";
import SummaryModal from "./summary-modal";
import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
const Summary = () => {
  const { data: candidateInfo, isLoading } = useGetCandidateInfoQuery("");
  return (
    <div id="summary" className="section-design">
      <SectionTitle label="Summary" component={<SummaryModal />} />
      {!isLoading && (
        <div
          className="p-5"
          dangerouslySetInnerHTML={{
            __html: candidateInfo?.data?.bio,
          }}
        ></div>
      )}
      {!isLoading && !candidateInfo?.data && (
        <p className="text-gray-600 text-sm p-4">No summary yet.</p>
      )}
    </div>
  );
};

export default Summary;
