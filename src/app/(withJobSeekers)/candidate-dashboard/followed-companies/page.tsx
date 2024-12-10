"use client";
import CompanyCardLoading from "@/components/loading-files/company-card-loading";
import CompanyCard from "@/components/ui/company-card";
import { useGetAllFollowedCompanyQuery } from "@/redux/api/followed-company/followedCompanyApi";
import { TCompany } from "@/type/company.types";

const FollowedCompanies = () => {
  const { data: FollowedCompanies, isFetching } =
    useGetAllFollowedCompanyQuery("");
  const dataLength = FollowedCompanies?.data?.length;
  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20">
      <div className="mb-4">
        <div className="flex flex-col gap-6 border-b pb-3">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Followed Companies
          </h1>

          <p className=" text-sm text-primary font-bold mb-8">
            You are currently following {dataLength} Company Profile
          </p>
        </div>
        {/* saved-jobs card container*/}
        <div className="grid grid-cols-2 p-5 gap-5">
          {isFetching ? (
            <CompanyCardLoading />
          ) : (
            FollowedCompanies?.data?.map((company : TCompany) => (
              <CompanyCard key={company?.id} company={company} />
            ))
          )}
        </div>
        {!isFetching && !dataLength && (
          <p className="text-red-500 text-center text-lg font-semibold mt-10">
            No Jobs found!!
          </p>
        )}
      </div>
    </div>
  );
};

export default FollowedCompanies;
