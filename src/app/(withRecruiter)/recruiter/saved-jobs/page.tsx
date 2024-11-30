import CandidateNotfound from "@/components/recruiter/candidate-notfound";

const SavedJobsPage = () => {
  return (
    <section className="relative z-20">
      <div className="border rounded shadow-lg mt-8 px-4 py-7 bg-white">
        <h2 className="text-lg md:text-xl font-semibold">
          We found <span className="text-primary">(0)</span> saved candidates
        </h2>

        <div className="mt-8">
        <CandidateNotfound title="Candidate Not Found!" />
      </div>
      </div>

    </section>
  );
};

export default SavedJobsPage;
