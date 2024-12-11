"use client";
import CompanyInfoCard from "@/components/job-details-page/company-info-card";
import JobDetailsCard from "@/components/job-details-page/job-details-card";
import Container from "@/components/main/Container";
import { useGetSingleJobDetailsQuery } from "@/redux/api/job/jobApi";
import { TJob } from "@/type/job.types";
import { useParams } from "next/navigation";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  console.log(jobId);

  const { data, isFetching } = useGetSingleJobDetailsQuery(jobId as string, {
    skip: !jobId,
  });

  const job = (data?.data || {}) as TJob;
  return (
    <section className="relative">
      <div className="bg-[#0078FF] h-[227px]"></div>
      <div className="min-h-screen bg-[#F9F9F9] p-4">
        <Container>
          <div className="space-y-4 flex flex-col-reverse lg:flex-row items-start gap-12 -mt-[200px]">
            <CompanyInfoCard isFetching={isFetching} company={job?.company} />
            <JobDetailsCard isFetching={isFetching} data={job} />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default JobDetailsPage;
