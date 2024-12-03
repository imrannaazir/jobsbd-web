import { useGetAllMySavedJobsQuery } from "@/redux/api/job/jobApi";
import { TSavedJob } from "@/type/job.types";
import { useMemo } from "react";

const useSaveJob = (jobId: string) => {
  const { data, isFetching } = useGetAllMySavedJobsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const isInSavedJobs = useMemo(() => {
    if (isFetching || !data) return false;
    const savedJobs = data.data as TSavedJob[];
    return savedJobs.some((job) => job.jobId === jobId);
  }, [data, isFetching, jobId]);

  return { isInSavedJobs };
};

export default useSaveJob;
