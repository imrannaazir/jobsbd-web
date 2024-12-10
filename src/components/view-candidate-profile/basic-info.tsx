"use client";

import { useParams } from "next/navigation";
import { useGetSingleCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
export function BasicInfo() {
  const { candidateId } = useParams();
  const { data: userInfo } = useGetSingleCandidateInfoQuery(
    candidateId as string
  );
  const notProvided = "Not Provided";
  return (
    <div className="space-y-5">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-primary">Profile Summary</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: userInfo?.data?.bio || "",
          }}
        ></div>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold  text-primary">
          Basic Information
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <InfoItem
            label="Full Name"
            value={userInfo?.data?.fullName || notProvided}
          />
          <InfoItem
            label="Email"
            value={
              userInfo?.data?.user ? userInfo?.data?.user?.email : notProvided
            }
          />
          <InfoItem
            label="Phone"
            value={
              userInfo?.data?.user
                ? userInfo?.data?.user?.phoneNumber
                : notProvided
            }
          />
          <InfoItem
            label="Address"
            value={
              userInfo?.data?.address
                ? `${userInfo?.data?.address?.addressLine}, ${userInfo?.data?.address?.district} `
                : notProvided
            }
          />

          <InfoItem
            label="Current Salary"
            value={userInfo?.data?.currentSalary || notProvided}
          />
          <InfoItem
            label="Expected Salary"
            value={userInfo?.data?.expectedSalary || notProvided}
          />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}
