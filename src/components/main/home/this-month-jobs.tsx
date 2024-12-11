"use client";

import Image from "next/image";
import { LiaStopwatchSolid } from "react-icons/lia";
import Container from "../Container";
import { IoLocationOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useGetAllCompaniesQuery } from "@/redux/api/company/companyApi";
import { BsBuildings } from "react-icons/bs";
import companyCover from "@/assets/company/comapny-cover.jpeg";
import { CompanyCardSkeleton } from "@/components/loading-files/company-card-skeleton";
import { TCompany } from "@/type/company.types";
const ThisMonthJobs = () => {
  const { data: companiesData, isFetching } = useGetAllCompaniesQuery("");
  const companies = companiesData?.data?.slice(0, 8);
  return (
    <section className="py-10">
      <Container>
        {/* title section */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-2xl text-center lg:text-left lg:text-3xl font-semibold w-full lg:w-auto">
            Featured Companies
          </h2>
          <Link
            href={`/companies`}
            className="hidden lg:block px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]"
          >
            EXPLORE ALL
          </Link>
        </div>

        {/* carousel section */}
        <div className="py-10">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {companies?.map((company: TCompany) => (
                <CarouselItem
                  key={company?.id}
                  className="md:basis-1/2 lg:basis-1/4"
                >
                  {isFetching ? (
                    <CompanyCardSkeleton />
                  ) : (
                    <>
                      {/* Top Banner */}
                      <div>
                        <Image
                          src={company?.image || companyCover}
                          alt="Company Banner"
                          width={100}
                          height={100}
                          className="w-full h-36 object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="border rounded-b-lg shadow-md px-5 py-4">
                        {/* Content */}
                        <div>
                          <div className="flex items-center  gap-3">
                            {company?.image ? (
                              <Image
                                src={company?.image}
                                alt="company image"
                                width={60}
                                height={60}
                              />
                            ) : (
                              <div className="p-2 text-primary rounded-full bg-bgColour h-[60px]">
                                <BsBuildings size={30} />
                              </div>
                            )}{" "}
                            <h3 className="text-base font-bold">
                              {company?.companyName}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 my-5">
                            <span className="text-blue-600 bg-[#E9F5FF] p-2 rounded-full flex items-center justify-center">
                              <IoLocationOutline className="size-5" />
                            </span>
                            <p className="text-gray-600 text-sm font-semibold">
                              Job Opening
                            </p>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 bg-[#E9F5FF] p-2 rounded-full flex items-center justify-center">
                              <LiaStopwatchSolid className="size-5" />
                            </span>
                            <p className="text-primary text-sm font-semibold">
                              Job Opening
                              <span> ({company?.postedJobsCount})</span>
                            </p>
                          </div>
                          <Link
                            href={`/companies/${company?.id}`}
                            className="nav-link bg-[#155EAD] text-white hover:bg-primary py-2 cursor-pointer text-sm"
                          >
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex items-center justify-center my-5">
          <Link
            href={`/companies`}
            className="lg:hidden px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]"
          >
            EXPLORE ALL
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ThisMonthJobs;
