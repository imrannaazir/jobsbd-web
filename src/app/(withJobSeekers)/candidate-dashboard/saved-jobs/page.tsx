"use client";
import JobCard from "@/components/ui/job-card";
import { useGetAllMySavedJobsQuery } from "@/redux/api/job/jobApi";
import { TJob, TSavedJob } from "@/type/job.types";

const SavedJobs = () => {
  const { data } = useGetAllMySavedJobsQuery("");
  const jobs = data?.data?.map((savedJob: TSavedJob) => savedJob.job) as TJob[];
  console.log({ jobs, data });

  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20">
      <div className="mb-4">
        <div className="flex flex-col gap-6 border-b pb-3">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Saved Jobs</h1>

          <p className=" text-sm text-primary font-bold mb-8">
            You have applied {jobs?.length} jobs
          </p>
        </div>
        {/* saved-jobs card container*/}
        <div className="grid grid-cols-2 p-5 gap-5">
          {jobs?.map((job) => (
            <JobCard key={job?.id} job={job} status={null} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedJobs;
