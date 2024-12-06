/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobCard from "../ui/job-card";
import { TSearchParams } from "@/type";
// import { useGetAllJobsQuery } from "@/redux/api/job/jobApi";
// import { useAppSelector } from "@/redux/hooks";

const JobSection = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const params = new URLSearchParams(await searchParams);
  console.log(params.toString(), "line 18 from job section");
  // const filterQuery = useAppSelector((state) => state.job.filter);
  // const { data: jobs, isLoading, isFetching } = useGetAllJobsQuery(filterQuery);
  // console.log({ params, searchParams });
  const res = await fetch(`${process.env.BASE_API}/job/get-all?${params}`, {
    method: "GET",
    next: {
      revalidate: 600,
    },
  });
  const jobs = await res.json();
  return (
    <div>
      <div className="border rounded shadow-lg mt-5 px-5 py-5 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <h2 className="text-lg md:text-xl font-semibold w-full text-center md:text-left">
            {/* We found <span className="text-primary">{jobs?.data?.length}</span> */}
            jobs
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
        {jobs?.data?.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
            {jobs?.data?.map((job: any) => (
              <JobCard data={job} key={job.id} />
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-center text-lg font-semibold mt-10">
            No Jobs found!!
          </p>
        )}
      </div>
    </div>
  );
};

export default JobSection;
