"use client";

import ProfileIconInfo from "@/components/candidate-dashboard/profile/profile-icon-info";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TCompany } from "@/type/company.types";
import { AiOutlineHome } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import CompanyContactInformationModal from "./company-contact-information-modal";
const ContactInformation = ({
  company,
  isFetching,
}: {
  company: TCompany;
  isFetching: boolean;
}) => {
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
  const user = useAppSelector(selectCurrentUser);

  return (
    <>
      <div id="details" className="section-design rounded-md">
        {/* headline */}
        <SectionTitle
          label="Contact Information"
          component={
            isFetching ? (
              <div />
            ) : user?.id ? (
              <CompanyContactInformationModal
                addressLine={company?.address?.addressLine}
                district={company?.address?.district}
              />
            ) : (
              <div />
            )
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

export default ContactInformation;
