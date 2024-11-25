"use client";
import Image from "next/image";
import { useState } from "react";
import noJobsFound from "../../../../assets/candidate-dashboard/no-results-found.png";

const AppliedJobs = () => {
  const statuses = [
    { label: "ALL", count: null },
    { label: "APPLIED", count: 0 },
    { label: "IN REVIEW", count: 0 },
    { label: "REJECTED", count: 0 },
    { label: "SHORTLIST", count: 0 },
    { label: "INTERVIEW", count: 0 },
    { label: "SELECTED", count: 0 },
    { label: "HIRED", count: 0 },
  ];

  // State to track active tab
  const [activeStatus, setActiveStatus] = useState("ALL");

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
                {status.count !== null && ` - [${status.count}]`}
              </button>
            ))}
          </div>
        </div>

        <p className="text-blue-600 mb-8">You have applied 0 jobs</p>

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
      </div>
    </div>
  );
};

export default AppliedJobs;
