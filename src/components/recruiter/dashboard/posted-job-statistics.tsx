"use client";

import Image from "next/image";
import noJobsFound from "@/assets/candidate-dashboard/no-results-found.png";

const PostedJobStatistics = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          <h1 className="text-xl font-bold text-gray-700 mb-4">
            Posted Job Statistics
          </h1>
        </div>

        <div className="w-full p-10 flex flex-col items-center justify-center text-center bg-white">
          <div className="w-48 h-48 mb-6">
            <Image
              src={noJobsFound}
              alt="No results illustration"
              className="w-full h-full"
              height={400}
              width={400}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-700">
            No Results Found!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PostedJobStatistics;
