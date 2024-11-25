"use client";

import img from "@/assets/candidate-dashboard/candidate-default.png";
import CircularProgressBar from "@/components/candidate-dashboard/circular-progress-bar";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBuildings } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineWorkHistory } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const RecruiterSidebar: React.FC = () => {
  const currentPath = usePathname();
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

  return (
    <div className="bg-white lg:w-[316px] shadow-md lg:min-h-screen rounded z-10">
      <div className="flex flex-col items-center gap-5 p-5 border-b shadow-md lg:shadow-none">
        {/* Profile Picture and Progress */}
        <div className="relative flex items-center justify-center">
          <CircularProgressBar />
          <Image
            alt="Profile Default"
            src={img}
            className="w-[60px] h-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {/* User Name */}
        <h3 className="text-xl font-bold text-primary text-center">User Name</h3>
      </div>

      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={
                currentPath === link.href
                  ? "flex items-center text-sm lg:text-base gap-3 py-2 px-3 bg-[#EFF7FF] transition text-primary font-semibold"
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
