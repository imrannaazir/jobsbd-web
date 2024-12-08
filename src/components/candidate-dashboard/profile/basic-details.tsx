"use client";
import { FaBriefcase } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineWorkHistory } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { TbMoneybag } from "react-icons/tb";
import SectionTitle from "../section-title";
import ProfileEditModal from "./profile-edit-modal";
import ProfileIconInfo from "./profile-icon-info";

import { useGetCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { FiPhone } from "react-icons/fi";

const BasicDetails = () => {
  const { data: candidateInfo, isLoading } = useGetCandidateInfoQuery("");

  const data = [
    {
      icon: <MdOutlineWorkHistory />,
      label: "Work Experience",
      data: `${candidateInfo?.data?.totalExperience} years`,
    },
    {
      icon: <TbMoneybag />,
      label: "Present Salary",
      data: candidateInfo?.data?.currentSalary,
    },
    {
      icon: <TbMoneybag />,
      label: "Expected Salary",
      data: candidateInfo?.data?.expectedSalary,
    },
    {
      icon: <FaBriefcase />,
      label: "Employment Type",
      data: candidateInfo?.data?.employmentType,
    },
    {
      icon: <FiPhone />,
      label: "Contact Number",
      data: candidateInfo?.data?.phoneNumber,
    },
    {
      icon: <MdOutlineEmail />,
      label: "Email Address",
      data: candidateInfo?.data?.email,
    },
    {
      icon: <SlLocationPin />,
      label: "Current Location",
      data: candidateInfo?.data?.address?.district,
    },
  ];

  return (
    <>
      <div id="details" className="section-design">
        {/* headline */}
        <SectionTitle label="Basic Details" component={<ProfileEditModal />} />
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

export default BasicDetails;
