"use client";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import { useGetMyCompanyQuery } from "@/redux/api/company/company-api";
import { TCompany } from "@/type/company.types";
import CompanyOverviewModal from "./company-overview-modal";

const CompanyOverview = () => {
  const { data: companyData, isFetching } = useGetMyCompanyQuery("");
  const company: TCompany = companyData?.data || {};

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        <SectionTitle
          label="Company Overview"
          component={<CompanyOverviewModal />}
        />
        {/* details info */}
        <div className="p-4">
          {isFetching ? (
            <div className="space-y-2">
              <div className="bg-gray-200 h-5 w-full rounded animate-pulse"></div>
              <div className="bg-gray-200 h-5 w-full rounded animate-pulse"></div>
              <div className="bg-gray-200 h-5 w-1/2 rounded animate-pulse"></div>
            </div>
          ) : (
            <p>{company?.companyDetails || "Not added"}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyOverview;
