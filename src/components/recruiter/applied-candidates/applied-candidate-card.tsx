import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdBusinessCenter } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import userImage from "../../../assets/candidate-dashboard/candidate-default.png";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode, FaPhone } from "react-icons/fa6";


const AppliedCandidateCard = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <div>
              <Image src={userImage} alt="user image" width={80} height={80} />
            </div>
            <div>
              <h2 className="font-semibold">Imtiaz Samy Chowdhury</h2>
              <p className="text-sm">Applied on: Dec 8th 24</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-primary bg-[#E9F5FF] p-2 my-1 rounded-full flex items-center justify-center">
                  <FaPhone className="size-5" />
                </span>
                <p className="text-gray-600 text-sm font-semibold">
                  01876701147
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary bg-[#E9F5FF] p-2 my-1 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="size-5" />
                </span>
                <p className="text-gray-600 text-sm font-semibold">
                  Patiya Government College
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary bg-[#E9F5FF] p-2 my-1 rounded-full flex items-center justify-center">
                  <FaLaptopCode className="size-5" />
                </span>
                <p className="text-gray-600 text-sm font-semibold">
                  Frontend Developer
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary bg-[#E9F5FF] p-2 my-1 rounded-full flex items-center justify-center">
                  <MdBusinessCenter className="size-5" />
                </span>
                <p className="text-gray-600 text-sm font-semibold">
                  Work Experience: 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardContent className="flex gap-2 border-t border-b p-3 flex-wrap">
        <div className="flex items-center gap-1  px-2 py-1 text-sm bg-[#EBEBEB] rounded-full">
          <p>Accounting Skill - 2 years</p>
        </div>
        <div className="flex items-center gap-1  px-2 py-1 text-sm bg-[#EBEBEB] rounded-full">
          <p>Active listening - 1 years</p>
        </div>
        <div className="flex items-center gap-1  px-2 py-1 text-sm bg-[#EBEBEB] rounded-full">
          <p>ReactJS - 2 years</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 justify-between border-t p-4 flex-wrap">
        <div className="flex items-center  justify-between gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="inReview">In Review</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="shortList">ShortList</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="selected">Selected</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/">
            <Button>View Profile</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AppliedCandidateCard;
