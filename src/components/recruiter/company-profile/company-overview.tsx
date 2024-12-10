"use client";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TCompany } from "@/type/company.types";
import CompanyOverviewModal from "./company-overview-modal";

const CompanyOverview = ({
  company,
  isFetching,
}: {
  company: TCompany;
  isFetching: boolean;
}) => {
  const user = useAppSelector(selectCurrentUser);
  console.log({
    userId: user?.id,
    compUserId: company?.userId,
  });

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        {
          <SectionTitle
            label="Company Overview"
            component={
              isFetching ? (
                <div />
              ) : company.userId === user?.id ? (
                <CompanyOverviewModal
                  companyDetails={company?.companyDetails || ""}
                />
              ) : (
                <div />
              )
            }
          />
        }
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
