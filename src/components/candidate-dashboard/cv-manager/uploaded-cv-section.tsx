"use client";
import { useGetAllResumeQuery } from "@/redux/api/resume/resumeApi";
import { FaRegTrashAlt } from "react-icons/fa";
import ResumeSkeleton from "./resume-skeleton";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { TResume } from "@/type";



const UploadedCvSection = () => {
  const { data: uploadedResumes, isFetching } = useGetAllResumeQuery("");
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
              <button className="px-4 py-4 text-sm font-medium text-red-500 bg-[#FEEFEE] rounded-full">
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
