import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobStatus } from "@/constant/constant-variable";
import { useUpdateApplyStatusMutation } from "@/redux/api/job/jobApi";
import { TAppliedJob, TAppliedStatus } from "@/type/job.types";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode, FaPhone } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import userImage from "../../../assets/candidate-dashboard/candidate-default.png";

const AppliedCandidateCard = ({ appliedJob }: { appliedJob: TAppliedJob }) => {
  const [updateApplyStatus, { isLoading }] = useUpdateApplyStatusMutation();
  const handleStatusUpdate = async (value: TAppliedStatus) => {
    console.log({
      appliedJobId: appliedJob?.id,
      status: value,
    });

    await updateApplyStatus({
      appliedJobId: appliedJob?.id,
      status: value,
    });
  };
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <div>
              <Image
                src={appliedJob?.candidate?.image || userImage}
                alt="user image"
                width={80}
                height={80}
              />
            </div>
            <div>
              <h2 className="font-semibold">
                {appliedJob?.candidate?.fullName}
              </h2>
              <p className="text-sm">{appliedJob.createdAt}</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-primary bg-[#E9F5FF] p-2 my-1 rounded-full flex items-center justify-center">
                  <FaPhone className="size-5" />
                </span>
                <p className="text-gray-600 text-sm font-semibold">
                  {appliedJob?.candidate?.user?.phoneNumber || "Not added"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary bg-[#E9F5FF] p-2 my-1 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="size-5" />
                </span>
                <p className="text-gray-600 text-sm font-semibold">
                  {appliedJob?.candidate?.educations?.[0]?.instituteName ||
                    "Not added"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary bg-[#E9F5FF] p-2 my-1 rounded-full flex items-center justify-center">
                  <FaLaptopCode className="size-5" />
                </span>
                <p className="text-gray-600 text-sm font-semibold">
                  {appliedJob?.candidate?.designation || "Not added"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary bg-[#E9F5FF] p-2 my-1 rounded-full flex items-center justify-center">
                  <MdBusinessCenter className="size-5" />
                </span>
                <p className="text-gray-600 text-sm font-semibold">
                  Work Experience:{" "}
                  {appliedJob?.candidate?.totalExperience || "Not added"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardContent className="flex gap-2 border-t border-b p-3 flex-wrap">
        {appliedJob?.candidate?.skills?.length ? (
          appliedJob?.candidate?.skills.map((skill) => (
            <div
              key={skill?.id}
              className="flex items-center gap-1  px-2 py-1 text-sm bg-[#EBEBEB] rounded-full"
            >
              <p>
                {skill?.skill} - {skill?.duration} years
              </p>
            </div>
          ))
        ) : (
          <p>No skill added</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 justify-between border-t p-4 flex-wrap">
        <div className="flex items-center  justify-between gap-2">
          <Select
            defaultValue={appliedJob?.status}
            onValueChange={handleStatusUpdate}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.keys(jobStatus)?.map((item) => (
                  <SelectItem
                    className="capitalize"
                    key={item}
                    value={item}
                    disabled={
                      item === jobStatus.APPLIED ||
                      appliedJob?.status === item ||
                      isLoading
                    }
                  >
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <Link href={`/candidate/${appliedJob?.candidateId}`}>
            <Button>View Profile</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AppliedCandidateCard;
