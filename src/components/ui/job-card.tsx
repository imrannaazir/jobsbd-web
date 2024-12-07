"use client";
import img from "@/assets/location.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TJob } from "@/type/job.types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import ApplyJobModal from "./apply-job-modal";
import SavedJobButton from "./saved-job-button";


type TJobCardProps = {
  job: TJob;
};
const JobCard: FC<TJobCardProps> = ({ job }) => {
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg text-primary">{job?.title}</CardTitle>
          <CardDescription className="font-semibold">
            Deploy your new project in one-click.
          </CardDescription>
        </div>

        <SavedJobButton id={job?.id} />
      </CardHeader>
      <CardContent>
        <div className="mt-4 space-y-4">
          <div className=" flex items-center justify-between">
            <div className="flex items-center  justify-between gap-2">
              <div className="p-2 bg-bgColour rounded-full text-primary">
                <TbMoneybag />
              </div>
              <p className="text-sm font-semibold">
                Salary: 100000 Taka/Monthly
              </p>
            </div>
            <Image src={img} alt="company image" width={60} height={60} />
          </div>
          {/* benefits */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 px-2 py-1 text-sm text-[#15A449] bg-[#EEFAF7] rounded-full">
              <FaBriefcase />
              <p>Full time</p>
            </div>
            <div className="flex items-center gap-1  px-2 py-1 text-sm text-[#8743DF] bg-[#F2E9FF] rounded-full">
              <FaGraduationCap />
              <p>Full time</p>
            </div>
            <div className="flex items-center gap-1  px-2 py-1 text-sm text-[#ED7200] bg-[#FFF5E2] rounded-full">
              <IoLocationSharp />
              <p>Full time</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4">
        <div className="flex items-center  justify-between gap-2">
          <div className="p-2 bg-bgColour rounded-full text-primary">
            <CiClock2 />
          </div>
          <p className="text-sm font-semibold">Deadline: 100000 Taka/Monthly</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-primary font-semibold border border-primary hover:bg-primary hover:text-white text-sm transition-all duration-300 rounded px-2 py-1"
          >
            View Details
          </Link>
          <ApplyJobModal jobId={job?.id} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
