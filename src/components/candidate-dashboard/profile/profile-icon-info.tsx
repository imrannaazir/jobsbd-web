import React, { ReactNode } from "react";
import ProfileIconInfoSkeleton from "./profile-cion-info-skeleton";

const ProfileIconInfo = ({
  icon,
  label,
  data,
  isLoading,
}: {
  icon: ReactNode;
  label: string;
  data?: string;
  isLoading: boolean;
}) => {


  return (
    <>
    {
      isLoading ? (
        <ProfileIconInfoSkeleton />
        ) : (<div className="flex items-center gap-3">
          {/* icon */}
          <div className="bg-bgColour text-primary text-xl p-2 rounded-full">
            {icon}
          </div>
          {/* details */}
          <div>
            <p className="text-sm font-medium text-gray-800">{label}</p>
            <p className="text-primary font-semibold">{data}</p>
          </div>
        </div>
        )
    }
    </>
  );
};

export default ProfileIconInfo;
