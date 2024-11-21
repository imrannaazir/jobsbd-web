import CircularProgressBar from "@/components/candidate-dashboard/circular-progress-bar";
import img from "@/assets/candidate-dashboard/candidate-default.png";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import React from "react";
import { MdOutlineDashboard, MdOutlineWorkHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";

const CandidateDashboardNavbar: React.FC = () => {
  const navLinks = [
    {
      label: "Dashboard",
      icon: <MdOutlineDashboard size={25} />,
      href: "/candidate-dashboard",
    },
    {
      label: "Profile",
      icon: <CgProfile size={25} />,
      href: "/candidate-profile",
    },
    {
      label: "Applied Jobs",
      icon: <MdOutlineWorkHistory size={25} />,
      href: "/applied-jobs",
    },
    {
      label: "Saved Jobs",
      icon: <FaRegHeart size={25} />,
      href: "/saved-jobs",
    },
    {
      label: "Followed Company",
      icon: <BsBuildings size={25} />,
      href: "/followed-company",
    },
    {
      label: "Logout",
      icon: <CiLogout size={25} />,
      href: "/candidate-dashboard",
    },
  ];
  return (
    <>
      <div className="bg-white z-50 w-[316px] shadow-md min-h-screen rounded">
        {/* profile picture image */}
        <div className="relative flex items-center justify-center">
          {/* Circular Progress Bar */}
          <CircularProgressBar />
          {/* Centered Image */}
          <Image
            alt="profile default image"
            src={img}
            className="w-[60px] h-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {/* user Name */}
        <h3 className="text-xl font-bold text-center py-5">User Name</h3>
        <Divider />
        <ul className="mt-2">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="flex items-center gap-3  p-2 font-semibold"
            >
              <p className="bg-white p-1 rounded-full shadow-xl">{link.icon}</p>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CandidateDashboardNavbar;
