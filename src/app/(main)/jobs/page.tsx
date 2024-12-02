import JobSection from "@/components/job-page/job-section";
import JobSidebar from "@/components/job-page/job-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const JobsPage = () => {
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
        <JobSection />
      </div>
    </section>
  );
};

export default JobsPage;
