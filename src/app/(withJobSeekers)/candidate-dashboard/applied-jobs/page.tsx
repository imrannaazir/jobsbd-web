"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import noJobsFound from "../../../../assets/candidate-dashboard/no-results-found.png";
import { useGetAllAppliedJobsQuery } from "@/redux/api/job/jobApi";
import Loader from "@/components/job-page/Loader";
import JobCard from "@/components/ui/job-card";
import { TJob } from "@/type/job.types";
import { jobStatus } from "@/constant/constant-variable";

type TAppliedJob = {
  id: string;
  status: string;
  job: TJob;
};

const AppliedJobs = () => {
  const { data: appliedJobs, isFetching } = useGetAllAppliedJobsQuery("");
  const [activeStatus, setActiveStatus] = useState("ALL");

  const filteredJobs = useMemo(() => {
    if (!appliedJobs?.data) return [];
    if (activeStatus === "ALL") return appliedJobs.data;
    return appliedJobs.data.filter((job: TAppliedJob) => job.status === activeStatus);
  }, [appliedJobs?.data, activeStatus]);

  const statuses = useMemo(() => [
    { label: "ALL", count: appliedJobs?.data?.length },
    { label: "APPLIED", count: appliedJobs?.data?.filter((job: TAppliedJob) => job.status === jobStatus.APPLIED).length },
    { label: "ACCEPTED", count: appliedJobs?.data?.filter((job: TAppliedJob) => job.status === jobStatus.ACCEPTED).length },
    { label: "REJECTED", count: appliedJobs?.data?.filter((job: TAppliedJob) => job.status === jobStatus.REJECTED).length },
    { label: "SHORTLISTED", count: appliedJobs?.data?.filter((job: TAppliedJob) => job.status === jobStatus.SHORTLISTED).length },
  ], [appliedJobs?.data]);

  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Applied Jobs
          </h1>

          {/* Status tabs (hidden on small devices) */}
          <div className="hidden md:flex flex-wrap gap-2 mb-6">
            {statuses.map((status) => (
              <button
                key={status.label}
                onClick={() => setActiveStatus(status.label)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeStatus === status.label
                    ? "bg-primary text-white"
                    : "bg-[#E6F3FF] text-gray-700 hover:bg-gray-300"
                }`}
              >
                {status.label}
                {status.count !== undefined && ` - [${status.count}]`}
              </button>
            ))}
          </div>
        </div>

        <p className="text-blue-600 mb-8">
          You have applied to {appliedJobs?.data?.length} jobs
        </p>
        {isFetching ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredJobs.map((job: TAppliedJob) => (
              <JobCard key={job?.id} status={job?.status} job={job?.job} />
            ))}
          </div>
        )}
        {!isFetching && filteredJobs.length === 0 && (
          <div className="w-full p-10 flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-md">
            <div className="w-48 h-48 mb-6">
              <Image
                src={noJobsFound}
                alt="No results illustration"
                className="w-full h-full"
                height={400}
                width={400}
              />
            </div>
            <h2 className="text-2xl font-bold text-black">No Results Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;

