import CandidateDashboardTopNav from "@/components/candidate-dashboard/candidate-dashboard-top-nav";
import BasicDetails from "@/components/candidate-dashboard/profile/basic-details";
import EducationSection from "@/components/candidate-dashboard/profile/education-section";
import SkillSection from "@/components/candidate-dashboard/profile/skill-section";
import Summary from "@/components/candidate-dashboard/profile/summary";

const page = () => {
  // Navigation items
  const navItems = [
    { name: "Basic Details", href: "/candidate-dashboard/profile/#details" },
    { name: "Profile Summary", href: "/candidate-dashboard/profile/#summary" },
    { name: "Education", href: "/candidate-dashboard/profile/#education" },
  ];
  return (
    <>
      <CandidateDashboardTopNav navItems={navItems} />
      <div className="relative top-14 py-5 space-y-8">
        <BasicDetails />

        <Summary />

        <EducationSection />
        <SkillSection />
      </div>
    </>
  );
};

export default page;
