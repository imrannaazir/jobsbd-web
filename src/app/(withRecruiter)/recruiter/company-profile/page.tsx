import AdditionalInformation from "@/components/recruiter/company-profile/additional-information";
import CompanyBasicDetails from "@/components/recruiter/company-profile/company-basic-details";
import ContactInformation from "@/components/recruiter/company-profile/contact-information";

const CompanyProfilePage = () => {
  return (
    <section className="relative z-20 space-y-8 mt-5">
      <CompanyBasicDetails />
      <AdditionalInformation/>
      <ContactInformation />
    </section>
   
  );
};

export default CompanyProfilePage;
