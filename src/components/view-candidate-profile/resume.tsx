import { Download } from "lucide-react";
import ResumeSkeleton from "../candidate-dashboard/cv-manager/resume-skeleton";
import { TResume } from "@/type";
import { useGetSingleCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { useParams } from "next/navigation";
import Link from "next/link";

export function Resume() {
  const { candidateId } = useParams();
  const { data: userInfo, isFetching } = useGetSingleCandidateInfoQuery(
    candidateId as string
  );
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold  text-primary">Resume</h2>

      {isFetching ? (
        <ResumeSkeleton />
      ) : (
        userInfo?.data?.resumes?.map((resume: TResume) => (
          <div
            className="flex items-center justify-between mb-3 pb-3 border-b-2"
            key={resume?.id}
          >
            <h3 className="text-lg text-primary font-semibold">
              {resume?.file_name}
            </h3>

            <Link
              href={resume?.url}
              className="flex item-center gap-2 p-2 font-medium text-primary bg-bgColour rounded-full"
            >
              <p>Download Resume</p> <Download className="mr-2" />
            </Link>
          </div>
        ))
      )}
      {!isFetching && !userInfo?.data?.languages?.length && (
        <p className="text-red-500 text-center">No resumes added yet!</p>
      )}
      {/* 
        <Download className="mr-2 h-4 w-4" />
        Download Full Resume
      </Button> */}
    </div>
  );
}
