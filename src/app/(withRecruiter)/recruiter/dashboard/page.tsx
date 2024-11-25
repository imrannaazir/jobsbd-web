"use client";
import PostedJobStatistics from "@/components/recruiter/dashboard/posted-job-statistics";
import ThisWeekApplicants from "@/components/recruiter/dashboard/this-week-applicants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { BsBuildings } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";

const RecruiterDashboard = () => {
  const buttons = [
    {
      label: "Published Jobs",
      icon: <MdOutlineWorkHistory size={25} />,
      href: "/recruiter/posted-job",
    },
    {
      label: "Applied Candidate",
      icon: <FaRegHeart size={25} />,
      href: "/saved-jobs",
    },
    {
      label: "Messages",
      icon: <BsBuildings size={25} />,
      href: "/followed-company",
    },
    {
      label: "Today's Applicant",
      icon: <BsBuildings size={25} />,
      href: "/followed-company",
    },
  ];
  return (
    <section className="relative z-20">
      <div className="text-white flex items-center justify-between mb-5">
        <h2 className="font-semibold">Welcome to your dashboard.</h2>
        <Link href="/recruiter/new-job">
          <Button>Post New Job</Button>
        </Link>
      </div>
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
        <ThisWeekApplicants />
      </div>
      <div className="border rounded shadow-lg mt-8 px-4 py-7 bg-white">
        <PostedJobStatistics/>
      </div>
    </section>
  );
};

export default RecruiterDashboard;
