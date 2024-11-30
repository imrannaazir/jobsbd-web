import CompanyCard from "@/components/ui/company-card";

const FollowedCompanies = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20">
      <div className="mb-4">
        <div className="flex flex-col gap-6 border-b pb-3">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Followed Companies
          </h1>

          <p className=" text-sm text-primary font-bold mb-8">
            You are currently following 1 Company Profile
          </p>
        </div>
        {/* saved-jobs card container*/}
        <div className="grid grid-cols-2 p-5 gap-5">
          <CompanyCard />
        </div>
      </div>
    </div>
  );
};

export default FollowedCompanies;
