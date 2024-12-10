/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetSingleCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { removeUnderscore } from "@/utils/remove-underscore";
import { useParams } from "next/navigation";
// import { Send } from "lucide-react";

interface SidebarProps {
  name: string;
  qualification: string;
  experience: string;
  gender: string;
  maritalStatus: string;
  availableFrom: string;
}

export function Sidebar({}: SidebarProps) {
  const { candidateId } = useParams();
  const { data: userInfo } = useGetSingleCandidateInfoQuery(
    candidateId as string
  );
  return (
    <Card className="p-6 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="w-32 h-32">
          <AvatarImage
            src={userInfo?.data?.image}
            alt={userInfo?.data?.fullName}
          />
          <AvatarFallback>
            {userInfo?.data?.fullName
              ?.split(" ")
              .map((n: any[]) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold">{userInfo?.data?.fullName}</h2>
        {/* <Button className="w-full">
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </Button> */}
      </div>

      <div className="space-y-4">
        <InfoItem
          label="Designation"
          value={userInfo?.data?.designation || "No Provided"}
        />
        <InfoItem
          label="Qualification"
          value={
            userInfo?.data?.totalExperience
              ? `${userInfo?.data?.totalExperience}+ years`
              : "Not Provided"
          }
        />
        <InfoItem
          label="Total Year of Experience"
          value={
            userInfo?.data?.totalExperience
              ? `${userInfo?.data?.totalExperience}+ years`
              : "Not Provided"
          }
        />
        <InfoItem
          label="Employment Type"
          value={
            userInfo?.data?.employmentType
              ? removeUnderscore(userInfo?.data?.employmentType)
              : "Not Provided"
          }
        />
        <InfoItem
          label="Job Level"
          value={userInfo?.data?.jobLevel || "Not Provided"}
        />
      </div>
    </Card>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}
