"use client";
import CompanyInfoCard from "@/components/job-details-page/company-info-card";
import JobDetailsCard from "@/components/job-details-page/job-details-card";
import Container from "@/components/main/Container";
import { useParams } from "next/navigation";

const JobDetailsPage = () => {
  const params = useParams();
  return (
    <section className="relative">
      <div className="bg-[#0078FF] h-[227px]"></div>
      <div className="min-h-screen bg-[#F9F9F9] p-4">
        <Container>
          <div className="space-y-4 flex flex-col-reverse lg:flex-row items-start gap-12 -mt-[200px]">
            <CompanyInfoCard />
            <JobDetailsCard jobId={params?.jobId as string} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default JobDetailsPage;
