import JobSection from "@/components/job-page/job-section";
import JobSidebar from "@/components/job-page/job-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TSearchParams } from "@/type";

const JobsPage = async ({
  searchParams,
}: {
  searchParams: Promise<TSearchParams>;
}) => {
  const params = new URLSearchParams(await searchParams);

  const res = await fetch(`${process.env.BASE_API}/job/get-all?${params}`, {
    method: "GET",
    next: {
      revalidate: 600,
    },
  });
  const jobsData = await res.json();
  const jobs = jobsData?.data || [];

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
        <JobSection jobs={jobs} />
      </div>
    </section>
  );
};

export default JobsPage;
