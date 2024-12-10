import { useGetSingleCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { useParams } from "next/navigation";

type TLanguage = { id: string; language: string; proficiency: string };

export function Languages() {
  const { candidateId } = useParams();
  const { data: userInfo, isFetching } = useGetSingleCandidateInfoQuery(
    candidateId as string
  );

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold  text-primary">Languages</h2>
      <ul className="space-y-2">
        {!isFetching &&
          userInfo?.data?.languages?.map((lang: TLanguage) => (
            <li key={lang?.id}>
              <span className="font-medium mr-1">{lang?.language}:</span>
              {lang?.proficiency}
            </li>
          ))}
      </ul>
      {
        !isFetching &&
        !userInfo?.data?.languages?.length && <p className="text-red-500 text-center">No languages added yet!</p>
      }
    </div>
  );
}
