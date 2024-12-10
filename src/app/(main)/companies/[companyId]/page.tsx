"use client";
import CompanyInfoCard from "@/components/job-details-page/company-info-card";
import Container from "@/components/main/Container";
import CompanyBasicDetails from "@/components/recruiter/company-profile/company-basic-details";
import CompanyOverview from "@/components/recruiter/company-profile/company-overview";
import ContactInformation from "@/components/recruiter/company-profile/contact-information";
import { useGetCompanyByIdQuery } from "@/redux/api/company/company-api";
import { TCompany } from "@/type/company.types";
import { useParams } from "next/navigation";

const JobDetailsPage = () => {
  const { companyId } = useParams();

  const { data: companyData, isFetching } = useGetCompanyByIdQuery(
    companyId as string,
    {
      skip: !companyId,
    }
  );
  const company: TCompany = companyData?.data || {};
  return (
    <section className="relative">
      <div className="bg-primary h-[227px]"></div>
      <div className=" bg-[#F9F9F9] p-4">
        <Container>
          <div className="space-y-4 flex flex-col-reverse lg:flex-row items-start gap-12 -mt-[200px]">
            <CompanyInfoCard company={company} isFetching={isFetching} />
            <section className="relative z-20 space-y-8 my-5 ">
              <CompanyBasicDetails company={company} isFetching={isFetching} />
              <CompanyOverview company={company} isFetching={isFetching} />
              {/* <AdditionalInformation/> */}
              <ContactInformation company={company} isFetching={isFetching} />
            </section>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default JobDetailsPage;
