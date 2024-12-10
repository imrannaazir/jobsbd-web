import { useGetSingleCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { TExperience } from "@/type/experience.types";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { useParams } from "next/navigation";

export function WorkExperience() {
  const { candidateId } = useParams();
  const { data: userInfo, isFetching } = useGetSingleCandidateInfoQuery(
    candidateId as string
  );

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold  text-primary">Work Experience</h2>
      {!isFetching &&
        userInfo?.data?.experiences?.map((exp: TExperience) => (
          <ExperienceItem key={exp?.id} {...exp} />
        ))}
      {!isFetching && !userInfo?.data?.educations?.length && (
        <p className="text-red-500 text-center">
          No work experience added yet!
        </p>
      )}
    </div>
  );
}

function ExperienceItem({
  designation,
  companyName,
  startDate,
  endDate,
  jobResponsibilities,
}: TExperience) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold  text-primary">{designation}</h3>
      <p className="text-gray-600">{companyName}</p>
      <p className="text-sm text-gray-500">
        {`${convertIntoDateString(startDate as Date)} -
          ${convertIntoDateString(endDate as Date)}`}
      </p>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{
          __html: jobResponsibilities || "",
        }}
      ></div>
    </div>
  );
}
