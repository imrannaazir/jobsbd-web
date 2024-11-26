import JobCard from "@/components/ui/job-card";

const SavedJobs = () => {
  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20">
      <div className="mb-4">
        <div className="flex flex-col gap-6 border-b pb-3">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Saved Jobs</h1>

          <p className=" text-sm text-primary font-bold mb-8">
            You have applied 0 jobs
          </p>
        </div>
        {/* saved-jobs card container*/}
        <div className="grid grid-cols-2 p-5 gap-5">
          <JobCard/>
        </div>
      </div>
    </div>
  );
};

export default SavedJobs;
