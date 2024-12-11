import React from "react";

export const CompanyCardSkeletonGroup = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          {/* Top Banner Skeleton */}
          <div className="w-full h-36 bg-gray-300 rounded-t-lg"></div>

          {/* Content Skeleton */}
          <div className="border rounded-b-lg shadow-md px-5 py-4">
            {/* Logo and Company Name Skeleton */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
              <div className="flex-1 h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Job Opening Skeleton */}
            <div className="flex items-center gap-2 my-5">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="flex-1 h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Buttons and Job Count Skeleton */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="flex-1 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="w-24 h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CompanyCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Top Banner Skeleton */}
      <div className="w-full h-36 bg-gray-300 rounded-t-lg"></div>

      {/* Content Skeleton */}
      <div className="border rounded-b-lg shadow-md px-5 py-4">
        {/* Logo and Company Name Skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
          <div className="flex-1 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* Job Opening Skeleton */}
        <div className="flex items-center gap-2 my-5">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="flex-1 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* Buttons and Job Count Skeleton */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex-1 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="w-24 h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
