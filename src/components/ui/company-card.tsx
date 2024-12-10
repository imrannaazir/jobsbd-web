"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./button";
import { TCompany } from "@/type/company.types";
import { BsBuildings } from "react-icons/bs";

const CompanyCard = ({ company }: { company: TCompany }) => {
  return (
    <Card>
      <CardContent>
        <div className="mt-4 space-y-4">
          <div className=" flex items-center gap-5">
            {company?.image ? (
              <Image
                src={company?.image}
                alt="company image"
                width={110}
                height={100}
                className="border p-2 object-cover"
              />
            ) : (
              <div className="p-2">
                <BsBuildings size={110} />
              </div>
            )}
            <h3 className="text-2xl font-semibold text-gray-800">
              {company?.companyName}
            </h3>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4">
        <p className="text-primary font-semibold">
          Job Opening-[{company?.postedJobsCount}]
        </p>
        <div className="flex items-center gap-4">
          <Button>View Profile</Button>
          <Button variant="outline">Unfollow</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
