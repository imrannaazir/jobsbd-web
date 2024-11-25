"use client"
import Link from "next/link";
import React from "react";
import { BsBuildings } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";

const CandidateDashboard = () => {
  const buttons = [
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
  ];
  return (
    <section className="relative z-20">
      {/* section top button*/}
      <div className="hidden lg:flex items-center gap-3">
        {buttons.map((button, index) => (
          <Link
            href={button.href}
            key={index}
            className="flex items-center gap-1 bg-white px-2 py-4 rounded shadow-md w-full"
          >
            <p className="bg-white p-2 rounded-full shadow-primary shadow-2xl">
              {button.icon}
            </p>
            <p className="flex-1 text-lg font-semibold">{button.label}</p>
          </Link>
        ))}
      </div>
      {/* body */}
      <div className="border rounded shadow-lg mt-8 px-4 py-7 bg-white">
        <div className="flex items-center gap-5">
          <h3 className="text-xl font-bold">My job feed (Recommended jobs)</h3>
          <p className="bg-bgColour p-2 rounded-full">
            <MdOutlineWorkHistory size={25} className="text-primary" />
          </p>
        </div>
        <p className="text-gray-500">
          To access personalized job recommendations, Please click the icon
          above.
        </p>
      </div>
    </section>
  );
};

export default CandidateDashboard;
