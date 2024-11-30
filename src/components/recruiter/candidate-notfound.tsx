import Image from "next/image";
import noJobsFound from "@/assets/candidate-dashboard/no-results-found.png";

type CandidateNotfoundProps = {
    title: string;
}  

const CandidateNotfound = ( { title }: CandidateNotfoundProps) => {
  return (
    <div className="w-full p-10 flex flex-col items-center justify-center text-center bg-white">
      <div className="w-48 h-48 mb-6">
        <Image
          src={noJobsFound}
          alt="No results illustration"
          className="w-full h-full"
          height={400}
          width={400}
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-700">{title}</h2>
    </div>
  );
};

export default CandidateNotfound;
