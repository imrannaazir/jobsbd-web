"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { LiaStopwatchSolid } from "react-icons/lia";
import Container from "../Container";

const array = [
  { name: "John Doe" },
  { name: "Jane Doe" },
  { name: "Shiyam Sarker" },
  { name: "Bob Smith" },
  { name: "Eva Williams" },
  { name: "Chris Brown" },
  { name: "Olivia Davis" },
  { name: "Liam Wilson" },
];

const ExpireSoonJobs = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 2 : currentSlider - 1
    );

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array.length - 4 ? 0 : currentSlider + 1
    );

  return (
    <section className="py-10">
      <Container>
        {/* title section */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-2xl text-center lg:text-left lg:text-3xl font-semibold w-full lg:w-auto">
            Expire Soon Jobs
            <span className="text-red-600"> (651)</span>
          </h2>
          <button className="hidden lg:block px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]">
            EXPLORE ALL
          </button>
        </div>

        {/* carousel section */}
        <div className="flex flex-row items-center overflow-hidden gap-5 lg:gap-10 my-8">
          <div className="relative overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-between z-10">
              {/* arrow left */}
              <button
                onClick={prevSlider}
                className="flex justify-center items-center hover:bg-[#333333] rounded-full size-7 md:size-10 bg-slate-500"
              >
                <FaAngleLeft className="size-5 md:size-6 text-white" />
              </button>
              {/* arrow right */}
              <button
                onClick={nextSlider}
                className="flex justify-center items-center hover:bg-[#333333] rounded-full size-7 md:size-10 bg-slate-500"
              >
                <FaAngleRight className="size-5 md:size-6 text-white" />
              </button>
            </div>
            {/* slider container */}
            <div
              className="ease-linear duration-300 flex"
              style={{
                transform: `translateX(-${
                  currentSlider * (isSmallScreen ? 100 : 50)
                }%)`,
              }}
            >
              {/* sliders */}
              {array.map((each, idx) => (
                <div
                  key={idx}
                  className="p-2 min-w-full md:min-w-[50%] lg:min-w-[33.33%] "
                >
                  <div className="border rounded-lg shadow-md px-5 py-4 w-full">
                    {/* Top Section */}
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">
                          Senior Officer (International Business Development)
                        </h3>
                        <p className="text-gray-600 my-3 font-semibold">
                          Pilot Tours & Travels Ltd
                        </p>
                        <p className="text-gray-600 font-semibold">
                          Salary: Negotiable
                        </p>
                      </div>
                      <Image
                        src="https://atbjobs.s3.ap-southeast-1.amazonaws.com/employer/profile_photo/blob_1731916855."
                        alt="Company Logo"
                        width={60}
                        height={60}
                        className="w-12 h-12 object-cover rounded-full"
                      />
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
                          Deadline: Dec 31st, 24{" "}
                          <span className="text-red-600">(3 days left)</span>
                        </p>
                      </div>
                      <button className="nav-link bg-[#155EAD] text-white hover:bg-primary py-2 cursor-pointer text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center my-5">
          <button className="lg:hidden px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]">
            EXPLORE ALL
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ExpireSoonJobs;
