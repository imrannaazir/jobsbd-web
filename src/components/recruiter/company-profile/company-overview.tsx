"use client";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";
import CompanyOverviewModal from "./company-overview-modal";

const CompanyOverview = () => {
  const { data } = useGetCandidateInfoQuery("");

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        <SectionTitle
          label="Company Overview"
          component={<CompanyOverviewModal />}
        />
        {/* details info */}
        <div className="grid grid-cols-1 items-center justify-center gap-5 p-4">
          {data?.length >= 0 ? (
            <div className="w-full flex flex-col items-center justify-center gap-1">
              <Image
                src=""
                width={100}
                height={100}
                className="w-full"
                alt="Company-image"
              />
              <div className="space-y-3 w-full px-2 lg:px-5">
                <p className="font-medium my-2"></p>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center gap-1">
              <CiImageOn className="size-80" />
              <div className="space-y-3 w-full px-2 lg:px-5">
                <div className="bg-gray-300 h-8 w-full rounded animate-pulse"></div>
                <div className="bg-gray-300 h-5 w-full rounded animate-pulse"></div>
                <div className="bg-gray-300 h-5 w-full rounded animate-pulse"></div>
                <div className="bg-gray-300 h-5 w-full rounded animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyOverview;
