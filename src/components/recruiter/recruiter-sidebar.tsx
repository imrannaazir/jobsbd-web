"use client";

import img from "@/assets/candidate-dashboard/candidate-default.png";
import CircularProgressBar from "@/components/candidate-dashboard/circular-progress-bar";

import { useGetMyCompanyQuery } from "@/redux/api/company/company-api";
import { TCompany } from "@/type/company.types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsBuildings } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineWorkHistory } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";
const navLinks = [
  {
    label: "Dashboard",
    icon: <MdOutlineDashboard size={25} />,
    href: "/recruiter/dashboard",
  },
  {
    label: "New Job Post",
    icon: <CgProfile size={25} />,
    href: "/recruiter/new-job",
  },
  {
    label: "Posted Job",
    icon: <MdOutlineWorkHistory size={25} />,
    href: "/recruiter/posted-job",
  },
  {
    label: "Saved Jobs",
    icon: <FaRegHeart size={25} />,
    href: "/recruiter/saved-jobs",
  },
  {
    label: "Company Profile",
    icon: <BsBuildings size={25} />,
    href: "/recruiter/company-profile",
  },
  {
    label: "Settings",
    icon: <RiListSettingsLine size={25} />,
    href: "/recruiter/recruiter-settings",
  },
  {
    label: "Logout",
    icon: <CiLogout size={25} />,
    href: "/logout",
  },
];
const RecruiterSidebar: React.FC = () => {
  const currentPath = usePathname();
  const { data: companyData, isFetching } = useGetMyCompanyQuery("");
  const company: TCompany = companyData?.data || {};

  return (
    <div className="bg-white shadow-md lg:min-h-screen rounded z-10">
      <div className="flex flex-col items-center gap-5 p-5 border-b shadow-md lg:shadow-none">
        {/* Profile Picture and Progress */}
        {isFetching ? (
          <div className="bg-gray-200 w-[100px] h-[100px] rounded-full animate-pulse"></div>
        ) : (
          <div className="relative flex items-center justify-center">
            <CircularProgressBar />
            <Image
              alt="Profile Default"
              src={company?.image || img}
              className="w-[60px] h-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        )}
        {/* User Name */}
        {isFetching ? (
          <div className="bg-gray-200 h-5 w-32 rounded animate-pulse"></div>
        ) : (
          <h3 className="text-xl font-bold text-primary text-center">
            {company?.companyName}
          </h3>
        )}

        <div className="flex items-center justify-center">
          <Image
            alt="Profile Default"
            src={img}
            className="w-[100px] h-[100px] transform"
          />
        </div>
        {/* User Name */}
        <h3 className="text-lg font-bold text-primary text-center">
          Employer Account
        </h3>
      </div>

      <ul className="mt-2 md:mt-0 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={
                currentPath === link.href
                  ? "flex items-center text-sm lg:text-base gap-3 py-2 px-3 bg-[#EFF7FF] transition text-primary font-semibold border-l-4 border-primary"
                  : "flex items-center text-sm lg:text-base gap-3 py-2 px-3 hover:bg-[#EFF7FF] text-gray-800 transition font-semibold"
              }
            >
              <span className="p-2 rounded-full shadow">{link.icon}</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecruiterSidebar;
