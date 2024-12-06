"use client";

import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import SectionTitle from "../section-title";
import SummaryModal from "./summary-modal";
import SummaryUpdateModal from "./summary-update-modal";

const Summary = () => {
  const { data: candidateInfo, isLoading } = useGetCandidateInfoQuery("");
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div id="summary" className="section-design relative">
      <SectionTitle label="Summary" component={<SummaryModal />} />
      {!isLoading && candidateInfo?.data?.bio ? (
        <div className="p-5">
          <div
            className="mr-28 mt-4"
            dangerouslySetInnerHTML={{
              __html: candidateInfo.data.bio,
            }}
          ></div>
          <div className="flex justify-end absolute items-center top-20 right-5 gap-4">
            <button
              className="p-2 text-sm font-medium bg-[#E5F4FF] rounded text-blue-500"
              title="Edit"
              onClick={() => setModalOpen(true)}
            >
              <FiEdit />
            </button>
          </div>
        </div>
      ) : (
        !isLoading && (
          <div className="text-gray-600 text-sm p-4">
            <p>No summary yet.</p>
          </div>
        )
      )}

      <SummaryUpdateModal isOpen={isModalOpen} setIsOpen={setModalOpen} />
    </div>
  );
};

export default Summary;
