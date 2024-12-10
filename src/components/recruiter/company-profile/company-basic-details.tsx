"use client";
import ProfileIconInfo from "@/components/candidate-dashboard/profile/profile-icon-info";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import { useGetMyCompanyQuery } from "@/redux/api/company/company-api";
import { TCompany } from "@/type/company.types";
import { getYear } from "date-fns";
import { FaLink } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { PiUsersFourFill } from "react-icons/pi";
import BasicDetailsModal from "./basic-details-modal";

const CompanyBasicDetails = () => {
  const { data: companyData, isFetching } = useGetMyCompanyQuery("");
  const company: TCompany = companyData?.data || {};

  const data = [
    {
      icon: <LuCalendarCheck />,
      label: "Year Founded",
      data: company?.foundedDate
        ? getYear(company?.foundedDate).toString()
        : "Not Added",
    },
    {
      icon: <FaBriefcase />,
      label: "Business Type",
      data: company?.businessType || "Not Added",
    },
    {
      icon: <PiUsersFourFill />,
      label: "Number of Employees",
      data: company?.numberOfEmployees?.toString() || "Not Added",
    },
    {
      icon: <HiOutlineBuildingOffice2 />,
      label: "Number of Offices",
      data: company?.numberOfOffices?.toString() || "Not Added",
    },
    {
      icon: <IoLocationSharp />,
      label: "Location",
      data: company?.address
        ? `${company?.address?.addressLine}, ${company?.address?.district}`
        : "Not Added",
    },
    {
      icon: <FaLink />,
      label: "Website",
      data: company?.websiteLink || "Not Added",
    },
  ];
  console.log({ data });

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        <SectionTitle
          label="Company Information"
          component={
            company?.companyName && <BasicDetailsModal company={company} />
          }
        />
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

export default CompanyBasicDetails;
