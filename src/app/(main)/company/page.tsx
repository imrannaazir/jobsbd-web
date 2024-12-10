import FilterCompanies from "@/components/comapny-page/FilterCompanies";
import ShowCompanies from "@/components/comapny-page/ShowCompanies";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TCompanySearchParams } from "@/type";

const CompanyPage = async ({
  searchParams,
}: {
  searchParams: Promise<TCompanySearchParams>;
}) => {
  const params = new URLSearchParams(await searchParams);

  console.log(`http://localhost:5000/api/v1/companies/all?${params}`);

  const res = await fetch(
    `http://localhost:5000/api/v1/companies/all?${params}`,
    {
      method: "GET",
      next: {
        revalidate: 600,
      },
    }
  );

  const companiesData = await res.json();
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
        <ShowCompanies companies={companies} />
      </div>
    </section>
  );
};

export default CompanyPage;
