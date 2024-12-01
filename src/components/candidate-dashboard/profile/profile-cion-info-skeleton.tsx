import React from "react";

const ProfileIconInfoSkeleton = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Skeleton Icon */}
      <div className="bg-gray-200 text-xl p-2 rounded-full h-10 w-10 animate-pulse"></div>

      {/* Skeleton Details */}
      <div className="space-y-1">
        <div className="bg-gray-200 h-4 w-24 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-5 w-32 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProfileIconInfoSkeleton;
