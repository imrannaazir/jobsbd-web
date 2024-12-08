
"use client"
import { useGetAllMySavedJobsQuery } from "@/redux/api/job/jobApi";
import { TSavedJob } from "@/type/job.types";
import { useMemo } from "react";

const useSaveJob = (jobId: string) => {
  const { data } = useGetAllMySavedJobsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const isInSavedJobs = useMemo(() => {
    const savedJobs = data?.data as TSavedJob[];
    return savedJobs?.some((job) => job?.jobId === jobId);
  }, [data, jobId]);

  return { isInSavedJobs };
};

export default useSaveJob;
