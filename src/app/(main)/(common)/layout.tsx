"use client";
import Link from "next/link";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [activeButton, setActiveButton] = useState<string>("");

  const handleButtonClick = (link: string) => {
    setActiveButton(link);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="bg-primary h-[300px]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 -mt-[200px] lg:mb-[100px] mb-[40px] lg:mx-[80px] mx-[40px] gap-8">
        <div className="bg-white shadow-md rounded-md shadow-slate-400 py-12 lg:h-[420px]">
          <Link href="/terms-conditions">
            <button
              onClick={() => handleButtonClick("/terms-conditions")}
              className={`btn w-full flex items-center align-middle justify-between px-6 py-3 mb-4 ${
                activeButton === "/terms-conditions"
                  ? "text-primary bg-bgColour"
                  : "text-gray-500"
              }`}
            >
              <span className="font-bold text-lg">Terms and Conditions</span>
              <FaAngleRight className="font-light text-2xl" />
            </button>
          </Link>
          <Link href="/privacy-policy">
            <button
              onClick={() => handleButtonClick("/privacy-policy")}
              className={`btn w-full flex items-center align-middle justify-between px-6 py-3 mb-4 ${
                activeButton === "/privacy-policy"
                  ? "text-primary bg-bgColour"
                  : "text-gray-500"
              }`}
            >
              <span className="font-bold text-lg">Privacy Policy</span>
              <FaAngleRight className="font-light text-2xl" />
            </button>
          </Link>
          <Link href="/refund-policy">
            <button
              onClick={() => handleButtonClick("/refund-policy")}
              className={`btn w-full flex items-center align-middle justify-between px-6 py-3 mb-4 ${
                activeButton === "/refund-policy"
                  ? "text-primary bg-bgColour"
                  : "text-gray-500"
              }`}
            >
              <span className="font-bold text-lg">Refund Policy</span>
              <FaAngleRight className="font-light text-2xl" />
            </button>
          </Link>
        </div>
        <div className="lg:col-span-3 bg-white shadow-md rounded-md shadow-slate-400 lg:p-12 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
