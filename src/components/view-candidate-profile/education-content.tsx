import { TEducation } from "@/type/education.types";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { useGetSingleCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { useParams } from "next/navigation";

export function Education() {
  const { candidateId } = useParams();
  const { data: userInfo, isFetching } = useGetSingleCandidateInfoQuery(
    candidateId as string
  );
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold  text-primary">Education</h2>
      {!isFetching &&
        userInfo?.data?.educations?.map((edu: TEducation) => (
          <EducationItem key={edu?.id} {...edu} />
        ))}
      {!isFetching && !userInfo?.data?.educations?.length && (
        <p className="text-red-500 text-center">
          No educations details added yet!
        </p>
      )}
    </div>
  );
}

function EducationItem({
  degree,
  instituteName,
  startDate,
  endDate,
  grade,
}: TEducation) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">{degree}</h3>
      <p className="text-gray-600">{instituteName}</p>
      <p className="text-sm text-gray-500">
        {`${convertIntoDateString(startDate as Date)} -
          ${convertIntoDateString(endDate as Date)}`}
      </p>
      <p className="text-sm">grade: {grade}</p>
    </div>
  );
}
