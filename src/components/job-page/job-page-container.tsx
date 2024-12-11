"use client";
import JobSection from "@/components/job-page/job-section";
import JobSidebar from "@/components/job-page/job-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetAllJobsQuery } from "@/redux/api/job/jobApi";
import { useSearchParams } from "next/navigation";

const JobPageContainer = () => {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);
  const { data: jobsData, isFetching } = useGetAllJobsQuery(
    searchParams.toString()
  );
  const jobs = jobsData?.data || [];

  console.log(jobs);

  return (
    <section className="relative flex bg-gray-50 flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="lg:sticky top-28 h-full md:h-[calc(100vh-7rem)] w-full lg:w-96 shadow-lg">
        <ScrollArea className="h-full">
          <JobSidebar />
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        <JobSection jobs={jobs} isLoading={isFetching} />
      </div>
    </section>
  );
};

export default JobPageContainer;
