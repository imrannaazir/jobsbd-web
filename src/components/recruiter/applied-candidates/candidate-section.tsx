/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useGetAllJobApplicantsOfJobQuery } from "@/redux/api/job/jobApi";
import { TAppliedJob } from "@/type/job.types";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import AppliedCandidateCard from "./applied-candidate-card";

const CandidateSection = () => {
  const { jobId } = useParams();
  const { data: jobApplicantData, isFetching } =
    useGetAllJobApplicantsOfJobQuery(jobId as string, {
      skip: !jobId,
    });

  const appliedJobs = (jobApplicantData?.data || []) as TAppliedJob[];

  const [activeStatus, setActiveStatus] = useState("ALL");

  const statuses = useMemo(
    () => [
      //   { label: "All", count: appliedJobs?.data?.length },
      //   {
      //     label: "Applied",
      //     count: appliedJobs?.data?.filter(
      //       (job: TAppliedJob) => job.status === jobStatus.APPLIED
      //     ).length,
      //   },
      //   {
      //     label: "In Review",
      //     count: appliedJobs?.data?.filter(
      //       (job: TAppliedJob) => job.status === jobStatus.INREVIEW
      //     ).length,
      //   },
      //   {
      //     label: "Rejected",
      //     count: appliedJobs?.data?.filter(
      //       (job: TAppliedJob) => job.status === jobStatus.REJECTED
      //     ).length,
      //   },
      //   {
      //     label: "ShortList",
      //     count: appliedJobs?.data?.filter(
      //       (job: TAppliedJob) => job.status === jobStatus.SHORTLISTED
      //     ).length,
      //   },
      //   {
      //     label: "Interview",
      //     count: appliedJobs?.data?.filter(
      //       (job: TAppliedJob) => job.status === jobStatus.INTERVIEW
      //     ).length,
      //   },
      //   {
      //     label: "Selected",
      //     count: appliedJobs?.data?.filter(
      //       (job: TAppliedJob) => job.status === jobStatus.SELECTED
      //     ).length,
      //   },
      //   {
      //     label: "Hired",
      //     count: appliedJobs?.data?.filter(
      //       (job: TAppliedJob) => job.status === jobStatus.HIRED
      //     ).length,
      //   },
    ],
    []
  );
  return (
    <div>
      <div className="border rounded shadow-lg mt-5 bg-white">
        <div className="p-5 border-b">
          <h2 className="text-lg md:text-xl font-semibold text-center md:text-left">
            We found <span className="text-primary mr-1">(1)</span>
            Candidates for{" "}
            <span className="text-primary mr-1">“Software Dev”</span>
          </h2>
        </div>

        <div className="p-5">
          {/*  <div className="hidden md:flex flex-wrap gap-2 justify-center">
            {statuses.map((status) => (
              <button
                key={status?.label}
                onClick={() => setActiveStatus(status?.label)}
                className={`px-6 py-4 rounded-md text-primary text-sm font-semibold ${
                  activeStatus === status?.label
                    ? "bg-primary text-white"
                    : "bg-[#E6F3FF] text-gray-700 hover:bg-gray-300"
                }`}
              >
                {status.label}
                {status.count !== undefined && ` - [${status.count}]`}
              </button>
            ))}
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {appliedJobs?.map((item) => (
          <AppliedCandidateCard key={item?.id} appliedJob={item} />
        ))}
      </div>
    </div>
  );
};

export default CandidateSection;
