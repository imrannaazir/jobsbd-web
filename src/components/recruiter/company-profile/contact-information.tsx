"use client";

import ProfileIconInfo from "@/components/candidate-dashboard/profile/profile-icon-info";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import { useGetMyCompanyQuery } from "@/redux/api/company/company-api";
import { TCompany } from "@/type/company.types";
import { AiOutlineHome } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const ContactInformation = () => {
  const { data: companyData, isFetching } = useGetMyCompanyQuery("");
  const company: TCompany = companyData?.data || {};

  const data = [
    {
      icon: <FaPhoneAlt />,
      label: "Phone Number",
      data: company?.user?.phoneNumber || "Not Added",
    },
    {
      icon: <MdOutlineMail />,
      label: "Email Address",
      data: company?.user?.email || "Not Added",
    },
    {
      icon: <AiOutlineHome />,
      label: "Address",
      data: company?.address?.district
        ? `${company?.address?.addressLine}, ${company?.address?.district}`
        : "Not Added",
    },
  ];

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        <SectionTitle label="Contact Information" component={<div />} />
        {/* details info */}
        <div className="grid grid-cols-4 items-center justify- gap-5 p-4">
          {data?.map((item, index) => (
            <ProfileIconInfo
              key={index}
              icon={item.icon}
              label={item.label}
              data={item.data}
              isLoading={isFetching}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
