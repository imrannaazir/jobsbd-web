"use client";

import HomePageJobCardSkeleton from "@/components/loading-files/home-page-job-card-skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetAllJobsQuery } from "@/redux/api/job/jobApi";
import { TJob } from "@/type/job.types";
import { formatDeadline } from "@/utils/format-deadline";
import Image from "next/image";
import Link from "next/link";
import { BsBuildings } from "react-icons/bs";
import { LiaStopwatchSolid } from "react-icons/lia";
import Container from "../Container";

const ExpireSoonJobs = () => {
  const { data, isFetching } = useGetAllJobsQuery(`expiresIn=3`);
  const expiresJobs = (data?.data || []) as TJob[];

  if (!isFetching && expiresJobs?.length < 1) {
    return null;
  }
  return (
    <section className="py-10">
      <Container>
        {/* title section */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-2xl text-center lg:text-left lg:text-3xl font-semibold w-full lg:w-auto">
            Expire Soon Jobs
          </h2>
          <button className="hidden lg:block px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]">
            EXPLORE ALL
          </button>
        </div>

        <div className="py-10">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {isFetching
                ? Array.from({ length: 8 })?.map((_item, i) => (
                    <HomePageJobCardSkeleton key={i} />
                  ))
                : expiresJobs?.map((job) => (
                    <CarouselItem
                      key={job?.id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="border rounded-lg shadow-md px-5 py-4 w-full">
                        {/* Top Section */}
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-semibold text-primary">
                              {job?.title}{" "}
                            </h3>
                            <p className="text-gray-600 my-3 font-semibold">
                              {job?.company?.companyName}
                            </p>
                            <p className="text-gray-600 font-semibold">
                              Salary:{" "}
                              {job?.negotiable
                                ? "Negotiable"
                                : `${job?.minSalary} - ${job?.maxSalary}`}
                            </p>
                          </div>
                          <Link href={`/companies/${job?.companyId}`}>
                            {job?.company?.image ? (
                              <Image
                                src={job?.company?.image}
                                alt="company image"
                                width={60}
                                height={60}
                              />
                            ) : (
                              <div className="p-2 text-primary">
                                <BsBuildings size={60} />
                              </div>
                            )}
                          </Link>
                        </div>

                        {/* Divider */}
                        <hr className="my-4" />

                        {/* Bottom Section */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 bg-[#E9F5FF] p-2 rounded-full flex items-center justify-center">
                              <LiaStopwatchSolid className="size-5" />
                            </span>
                            <p className="text-gray-600 text-sm font-semibold">
                              Deadline:{formatDeadline(job?.deadline)}
                              <span className="text-red-600">
                                (3 days left)
                              </span>
                            </p>
                          </div>
                          <Link
                            href={`/job/${job?.id}`}
                            className="nav-link bg-[#155EAD] text-white hover:bg-primary py-2 cursor-pointer text-sm"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex items-center justify-center my-5">
          <Link
            href={`/jobs`}
            className="lg:hidden px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]"
          >
            EXPLORE ALL
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ExpireSoonJobs;
