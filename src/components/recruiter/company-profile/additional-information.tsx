"use client";
import { FaBriefcase } from "react-icons/fa6";
import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import ProfileIconInfo from "@/components/candidate-dashboard/profile/profile-icon-info";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import AdditionalInformationModal from "./additional-information-modal";
import { BsGraphUpArrow } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaHandHoldingMedical } from "react-icons/fa";



const AdditionalInformation = () => {
  const { data: candidateInfo, isLoading } = useGetCandidateInfoQuery("");

  const data = [
    {
      icon: <BsGraphUpArrow />,
      label: "Nature Of Business",
      data: `years`,
    },
    {
      icon: <TfiMenuAlt />,
      label: "Category",
      data: candidateInfo?.data?.currentSalary,
    },
    {
      icon: <HiOutlineBuildingOffice2 />,
      label: "Industry",
      data: candidateInfo?.data?.expectedSalary,
    },
    {
      icon: <HiOutlineBuildingOffice2 />,
      label: "Department",
      data: candidateInfo?.data?.employmentType,
    },
    {
      icon: <FaBriefcase />,
      label: "New Job Opening",
      data: candidateInfo?.data?.phoneNumber,
    },
    {
      icon: <FaHandHoldingMedical />,
      label: "Medical Allowance",
      data: candidateInfo?.data?.email,
    },
    {
        icon: <HiOutlineBuildingOffice2 />,
        label: "Sub Office",
        data: candidateInfo?.data?.phoneNumber,
      },
  ];

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        <SectionTitle label="Additional Information" component={<AdditionalInformationModal />} />
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

export default AdditionalInformation;