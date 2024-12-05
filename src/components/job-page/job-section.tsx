/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllJobsQuery } from "@/redux/api/job/jobApi";
import { useAppSelector } from "@/redux/hooks";
import { TJob } from "@/type/job.types";
import JobCard from "../ui/job-card";

const JobSection = () => {
  const filterQuery = useAppSelector((state) => state.job.filter);
  const { data, isLoading, isFetching } = useGetAllJobsQuery(filterQuery);
  const jobs = data?.data as TJob[];
  return (
    <div>
      <div className="border rounded shadow-lg mt-5 px-5 py-5 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <h2 className="text-lg md:text-xl font-semibold w-full text-center md:text-left">
            We found <span className="text-primary">{jobs?.length}</span> jobs
          </h2>
          <div className="flex gap-3 items-center justify-center md:justify-end  w-full">
            <h2 className="font-semibold text-end">Sort By:</h2>
            <Select>
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="latestJobs">Latest Jobs</SelectItem>
                  <SelectItem value="hightoLow">Salary High to Low</SelectItem>
                  <SelectItem value="lowtoHigh">Salary Low to High</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        {isFetching ? (
          <div className="flex items-center justify-center w-full h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
            {jobs?.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
        {!isLoading && !jobs?.length && (
          <p className="text-red-500 text-center text-lg font-semibold">
            No Jobs found!!
          </p>
        )}
      </div>
    </div>
  );
};

export default JobSection;
