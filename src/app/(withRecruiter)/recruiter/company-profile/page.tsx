"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CompanyProfilePage = () => {
  const buttons = [
    { label: "Company Information", href: "#company-information" },
    { label: "Company Overview", href: "#company-overview" },
    { label: "Organizational Structure", href: "#organizational-structure" },
    { label: "Meet The Team", href: "#meet-the-team" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "How We Do", href: "#how-we-do" },
    { label: "Photo Gallery", href: "#photo-gallery" },
    { label: "Join Us", href: "#join-us" },
    { label: "Additional Information", href: "#additional-information" },
    { label: "Contact Information", href: "#contact-information" },
    { label: "Social Media Networks", href: "#social-media-networks" },
    { label: "Job Benefits", href: "#job-benefits" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxVisible, setMaxVisible] = useState(0);

  useEffect(() => {
    const updateMaxVisible = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const buttonWidth = 160; // Adjust this based on button width
        setMaxVisible(Math.floor(containerWidth / buttonWidth));
      }
    };

    updateMaxVisible();
    window.addEventListener("resize", updateMaxVisible);

    return () => {
      window.removeEventListener("resize", updateMaxVisible);
    };
  }, []);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  const showMore = () => {
    if (startIndex + maxVisible < buttons.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showLess = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleButtons = buttons.slice(startIndex, startIndex + maxVisible);

  return (
    <section className="relative z-20">
      {/* Navigation Bar */}
      <section className="border rounded shadow-lg mt-14 px-3 py-2 flex items-center sticky top-0 bg-white w-full transition-shadow duration-300 ease-in-out">
        {/* Left Navigation Button */}
        {startIndex > 0 && (
          <button
            onClick={showLess}
            className="p-2 bg-white hover:bg-gray-200 transition rounded-l"
            title="Show previous buttons"
            aria-label="Show previous buttons"
          >
            <AiOutlineLeft size={14} className="text-gray-700" />
          </button>
        )}

        {/* Buttons */}
        <div
          ref={containerRef}
          className="flex gap-4 items-center px-4 overflow-hidden w-full"
        >
          {visibleButtons.map((button, index) => (
            <Link
              href={button.href}
              key={index}
              onClick={() => handleButtonClick(startIndex + index)}
              className={`flex items-center justify-center whitespace-nowrap py-2 px-3 ${
                activeIndex === startIndex + index
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } transition-all`}
              title={button.label}
              aria-label={button.label}
            >
              <p className="text-md font-semibold">{button.label}</p>
            </Link>
          ))}
        </div>

        {/* Right Navigation Button */}
        {startIndex + maxVisible < buttons.length && (
          <button
            onClick={showMore}
            className="p-2 bg-white hover:bg-gray-200 transition rounded-r"
            title="Show next buttons"
            aria-label="Show next buttons"
          >
            <AiOutlineRight size={14} className="text-gray-700" />
          </button>
        )}
      </section>

      {/* Section Content */}
    </section>
  );
};

export default CompanyProfilePage;
