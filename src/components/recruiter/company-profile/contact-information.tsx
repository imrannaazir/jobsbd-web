"use client";

import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import ProfileIconInfo from "@/components/candidate-dashboard/profile/profile-icon-info";
import AdditionalInformationModal from "./additional-information-modal";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";



const ContactInformation = () => {
  const { data: candidateInfo, isLoading } = useGetCandidateInfoQuery("");

  const data = [
    {
      icon: <FaPhoneAlt />,
      label: "Phone Number",
      data: `years`,
    },
    {
      icon: <MdOutlineMail />,
      label: "Email Address",
      data: candidateInfo?.data?.currentSalary,
    },
    {
      icon: <AiOutlineHome />,
      label: "Address",
      data: candidateInfo?.data?.expectedSalary,
    },
  ];

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        <SectionTitle label="Contact Information" component={<AdditionalInformationModal />} />
        {/* details info */}
        <div className="grid grid-cols-4 items-center justify- gap-5 p-4">
          {data?.map((item, index) => (
            <ProfileIconInfo
              key={index}
              icon={item.icon}
              label={item.label}
              data={item.data}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactInformation;