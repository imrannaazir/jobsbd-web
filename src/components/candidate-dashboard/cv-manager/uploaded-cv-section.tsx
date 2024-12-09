/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  useGetAllResumeQuery,
  useRemoveResumeMutation,
} from "@/redux/api/resume/resumeApi";
import { FaRegTrashAlt } from "react-icons/fa";
import ResumeSkeleton from "./resume-skeleton";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { TResume } from "@/type";
import Swal from "sweetalert2";

const UploadedCvSection = () => {
  const { data: uploadedResumes, isFetching } = useGetAllResumeQuery("");
  const [removeResume] = useRemoveResumeMutation();

  const handleRemoveResume = async (id: string) => {
    console.log(id);
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await removeResume(id).unwrap();
        console.log(response);
        if (response?.data) {
          Swal.fire(
            "Deleted!",
            "Resume record has been deleted.",
            "success"
          );
        }
      }
    } catch (error: any) {
      Swal.fire("Error", "Something went wrong while deleting.", "error");
    }
  };
  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded-md relative z-20 my-5 shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4 pb-5 border-b-2">
          Uploaded Resume
        </h1>

        {/* upload Resume card container*/}

        {isFetching ? (
          <ResumeSkeleton />
        ) : (
          uploadedResumes?.data?.map((resume: TResume) => (
            <div
              className="flex items-center justify-between mb-3 pb-3 border-b-2"
              key={resume?.id}
            >
              <div>
                <h3 className="text-lg text-primary font-semibold">
                  {resume?.file_name}
                </h3>
                <p>
                  <span className="mr-1">Uploaded at -</span>
                  {convertIntoDateString(resume?.createdAt)}
                </p>
              </div>
              <button
                onClick={() => handleRemoveResume(resume?.id)}
                className="px-4 py-4 text-sm font-medium text-red-500 bg-[#FEEFEE] rounded-full"
              >
                <FaRegTrashAlt size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UploadedCvSection;
