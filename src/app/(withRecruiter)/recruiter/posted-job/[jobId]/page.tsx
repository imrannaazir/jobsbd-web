import AppliedCandidateBreadcrumb from "@/components/recruiter/applied-candidates/applied-candidate-breadcrumb";
import CandidateSection from "@/components/recruiter/applied-candidates/candidate-section";

const AppliedCandidatesPage = () => {
  return (
    <section className="relative z-20">
      <AppliedCandidateBreadcrumb />
      <CandidateSection />
    </section>
  );
};

export default AppliedCandidatesPage;
