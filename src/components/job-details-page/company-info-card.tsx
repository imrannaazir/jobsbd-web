import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TCompany } from "@/type/company.types";
import { getYear } from "date-fns";
import { SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaBriefcase, FaLink } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { PiUsersFourFill } from "react-icons/pi";
import ProfileIconInfo from "../candidate-dashboard/profile/profile-icon-info";
import FollowedButton from "../ui/followed-button";

export default function CompanyInfoCard({
  company,
  isFetching,
}: {
  company: TCompany;
  isFetching: boolean;
}) {
  const defaultImage =
    "https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png";

  const companyDetails = [
    {
      icon: <LuCalendarCheck />,
      label: "Year Founded",
      data: company?.foundedDate
        ? getYear(company.foundedDate).toString()
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
        ? `${company.address.addressLine}, ${company.address.district}`
        : "Not Added",
    },
    {
      icon: <FaLink />,
      label: "Website",
      data: company?.websiteLink || "Not Added",
    },
  ];

  return (
    <Card className="max-w-xs w-full">
      <CardHeader className="space-y-4">
        {/* Company Logo */}
        {isFetching ? (
          <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full animate-pulse" />
        ) : (
          <div className="w-24 h-24 mx-auto bg-slate-50 border rounded-full flex items-center justify-center">
            <Image
              src={company?.image || defaultImage}
              alt="Company logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        )}

        {/* Company Name and Follow Button */}
        <div className="text-center space-y-2">
          {isFetching ? (
            <div className="w-40 h-5 bg-gray-200 rounded-md animate-pulse mx-auto" />
          ) : (
            <h2 className="text-xl font-semibold text-primary">
              {company?.companyName || "Not Added"}
            </h2>
          )}
          {isFetching ? (
            <div className="w-32 h-6 bg-gray-200 rounded-md animate-pulse mx-auto" />
          ) : (
            <FollowedButton companyId={company?.id} />
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Company Details */}
        <div className="space-y-4">
          {companyDetails.map((item, index) => (
            <ProfileIconInfo
              key={index}
              icon={item.icon}
              label={item.label}
              data={item.data}
              isLoading={isFetching}
            />
          ))}
        </div>

        {/* Visit Website Button */}
        {!isFetching && company?.websiteLink && (
          <a
            href={company.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Button variant="outline" className="w-fit mx-auto text-xs">
              Visit Website <SquareArrowUpRight />
            </Button>
          </a>
        )}
      </CardContent>
    </Card>
  );
}
