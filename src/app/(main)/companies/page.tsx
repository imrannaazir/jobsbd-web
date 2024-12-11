"use client";
import FilterCompanies from "@/components/comapny-page/FilterCompanies";
import ShowCompanies from "@/components/comapny-page/ShowCompanies";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetAllCompaniesQuery } from "@/redux/api/company/companyApi";
import { useSearchParams } from "next/navigation";

const CompanyPage = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams).toString();
  const { data: companiesData, isFetching } = useGetAllCompaniesQuery(params);

  const companies = companiesData?.data || [];

  return (
    <section className="relative flex bg-gray-50 flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="lg:sticky top-28 h-full md:h-[calc(100vh-7rem)] w-full lg:w-96 shadow-lg">
        <ScrollArea className="h-full">
          <FilterCompanies />
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        <ShowCompanies companies={companies} isFetching={isFetching} />
      </div>
    </section>
  );
};

export default CompanyPage;
