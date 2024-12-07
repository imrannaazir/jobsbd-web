"use client";
import { FaBriefcase } from "react-icons/fa6";
import { LuCalendarCheck } from "react-icons/lu";
import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import ProfileIconInfo from "@/components/candidate-dashboard/profile/profile-icon-info";
import { PiUsersFourFill } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import BasicDetailsModal from "./basic-details-modal";

const CompanyBasicDetails = () => {
  const { data: candidateInfo, isLoading } = useGetCandidateInfoQuery("");

  const data = [
    {
      icon: <LuCalendarCheck />,
      label: "Year Founded",
      data: `years`,
    },
    {
      icon: <FaBriefcase />,
      label: "Business Type",
      data: candidateInfo?.data?.currentSalary,
    },
    {
      icon: <PiUsersFourFill />,
      label: "Number of Employees",
      data: candidateInfo?.data?.expectedSalary,
    },
    {
      icon: <HiOutlineBuildingOffice2 />,
      label: "Number of Offices",
      data: candidateInfo?.data?.employmentType,
    },
    {
      icon: <IoLocationSharp />,
      label: "Location",
      data: candidateInfo?.data?.phoneNumber,
    },
    {
      icon: <FaLink />,
      label: "Website",
      data: candidateInfo?.data?.email,
    },
  ];

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        <SectionTitle label="Company Information" component={<BasicDetailsModal />} />
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

export default CompanyBasicDetails;
