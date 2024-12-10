"use client";
import CompanyBasicDetails from "@/components/recruiter/company-profile/company-basic-details";
import CompanyOverview from "@/components/recruiter/company-profile/company-overview";
import ContactInformation from "@/components/recruiter/company-profile/contact-information";
import { useGetMyCompanyQuery } from "@/redux/api/company/company-api";
import { TCompany } from "@/type/company.types";

const CompanyProfilePage = () => {
  const { data: companyData, isFetching } = useGetMyCompanyQuery("");
  const company: TCompany = companyData?.data || {};
  return (
    <section className="relative z-20 space-y-8 mt-5">
      <CompanyBasicDetails company={company} isFetching={isFetching} />
      <CompanyOverview company={company} isFetching={isFetching} />
      <ContactInformation company={company} isFetching={isFetching} />
    </section>
  );
};

export default CompanyProfilePage;
