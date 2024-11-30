import CandidateNotfound from "@/components/recruiter/candidate-notfound";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PostedJobsPage = () => {
  return (
    <section className="relative z-20">
      <div className="text-white flex justify-end mb-5">
        <Link href="/recruiter/new-job">
          <Button>Post New Job</Button>
        </Link>
      </div>
      <div className="border rounded shadow-lg mt-5 px-4 py-7 bg-white">
        <h2 className="text-lg md:text-xl font-semibold">Posted jobs</h2>
        <div className="mt-3">
        <CandidateNotfound title="Candidate Not Found!" />
        <div className="text-center">
        <p className="mb-3 text-gray-500">Post job & Find the Perfect Match for Your Company Today</p>
        <Link href="/recruiter/new-job">
          <Button>Post New Job</Button>
        </Link>
        </div>
      </div>
      </div>

      
    </section>
  );
};

export default PostedJobsPage;
