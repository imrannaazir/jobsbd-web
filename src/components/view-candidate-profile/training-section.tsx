import { useGetSingleCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { TCertificate } from "@/type/certificate.types";
import { useParams } from "next/navigation";




export function TrainingCertifications() {
  const { candidateId } = useParams();
  const { data: userInfo, isFetching } = useGetSingleCandidateInfoQuery(
    candidateId as string
  );
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold  text-primary">
        Training & Certifications
      </h2>
      {!isFetching &&
        userInfo?.data?.trainings.map((cert: TCertificate) => (
          <CertificationItem key={cert?.id} {...cert} />
        ))}
      {!isFetching && !userInfo?.data?.languages?.length && (
        <p className="text-red-500 text-center">No certificates added yet!</p>
      )}
    </div>
  );
}

function CertificationItem({
  certificateName,
  institution,
  duration,
}: {
  certificateName: string;
  institution: string;
  duration: string;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold  text-primary">{certificateName}</h3>
      <p className="text-gray-600">{institution}</p>
      <p className="text-sm text-gray-500">{duration}</p>
    </div>
  );
}
