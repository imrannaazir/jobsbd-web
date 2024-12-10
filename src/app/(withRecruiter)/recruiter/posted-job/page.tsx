/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CandidateNotfound from "@/components/recruiter/candidate-notfound";
import { Button } from "@/components/ui/button";
import {
  useDeleteCompanyJobMutation,
  useGetCompanyJobsQuery,
} from "@/redux/api/company/companyApi";
import Link from "next/link";
import { IoEye, IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";

const PostedJobsPage = () => {
  const { data: companyPostedJobs } = useGetCompanyJobsQuery(undefined);
  const [deleteCompanyJob] = useDeleteCompanyJobMutation();

  const handleDeleteJob = async (jobId: string) => {
    try {
      const response: any = await deleteCompanyJob({ jobId });

      if (response?.data) {
        Swal.fire({
          title: "Success",
          text: "Job deleted successfully!",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("API Error:", error); // Logs detailed error
      Swal.fire({
        title: "Error",
        text: "Job deletion failed",
        icon: "error",
      });
    }
  };

  return (
    <section className="relative z-20">
      <div className="text-white flex justify-end mb-5">
        <Link href="/recruiter/new-job">
          <Button>Post New Job</Button>
        </Link>
      </div>
      <div className="border rounded shadow-lg mt-5 px-4 pt-7 pb-2 bg-white">
        <h2 className="text-lg md:text-xl font-semibold">Posted jobs</h2>
        <div className="mt-3">
          {companyPostedJobs?.data?.length !== 0 ? (
            <>
              <div className="grid grid-cols-4 bg-blue-100/80 p-3 font-semibold text-gray-700 text-base shadow-md">
                <p>Date</p>
                <p>Job Title</p>
                <p className="justify-self-center">Total Applicants</p>
                <p className="justify-self-center">Action</p>
              </div>
              {companyPostedJobs?.data?.map((job: any) => {
                const date = new Date(job.createdAt);
                return (
                  <div
                    key={job?.id}
                    className="grid grid-cols-4 p-3 items-center"
                  >
                    <p>{`${date.getFullYear()}/${
                      date.getMonth() + 1
                    }/${date.getDate()}`}</p>
                    <p className="text-blue-400 font-semibold">{job?.title}</p>
                    <p className="justify-self-center">{job?.totalApplicant}</p>
                    <div className="justify-self-center flex items-center gap-2">
                      <Link href={`/recruiter/posted-job/${job?.id}`}>
                        <button className="p-2 rounded-lg bg-blue-100/80 border border-blue-100 hover:shadow-md transition-shadow duration-300 ease-in-out">
                          <IoEye className="text-blue-400" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteJob(job?.id)}
                        className="p-2 rounded-lg bg-red-100/80 border border-red-100 hover:shadow-md transition-shadow duration-300 ease-in-out"
                      >
                        <IoTrashBin className="text-red-400" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="mb-5">
              <CandidateNotfound title="No Jobs Posted!" />
              <div className="text-center">
                <p className="mb-3 text-gray-500">
                  Post job & Find the Perfect Match for Your Company Today
                </p>
                <Link href="/recruiter/new-job">
                  <Button>Post New Job</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostedJobsPage;
