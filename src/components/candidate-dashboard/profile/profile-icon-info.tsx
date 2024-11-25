
import React, { ReactNode } from "react";

const ProfileIconInfo = ({
  icon,
  label,
  data,
}: {
  icon: ReactNode;
  label: string;
  data?: string;
}) => {
  return (
    <div className="flex items-center gap-3">
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
  );
};

export default ProfileIconInfo;
