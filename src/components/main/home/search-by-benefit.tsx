"use client";

import { Building2, ChevronDown, Clock, Lightbulb, Users } from "lucide-react";
import { useState } from "react";
import Container from "../Container";

const tabs = [
  {
    id: "working-hours",
    label: "Working Hours And Leave",
    icon: Clock,
    benefits: [
      "More than 120 days off per year",
      "Can leave the company by 17:00",
      "Long vacations available",
      "No overtime work",
      "Maternity and paternity leave system",
      "Two days off per week",
      "Leave the office by 5:00 p.m.",
      "Shorter working hours OK",
      "Less than 7 hours of work",
      "Remote work available",
      "120 days or more per holidays",
      "Monthly average overtime hours within 20 hours",
    ],
  },
  {
    id: "skill-development",
    label: "Skill Development",
    icon: Lightbulb,
    benefits: [
      "Training program available",
      "Opportunities to experience cutting-edge technology",
      "There are qualification acquisition support and allowance",
      "Acquire specialized skills",
      "Language Courses",
    ],
  },
  {
    id: "mnc",
    label: "MNC, International, Forbes",
    icon: Building2,
    benefits: [
      "Group companies",
      "Foreign Affiliated Company",
      "Public Organization",
      "BtoB service",
      "BtoC service",
      "Women only",
      "Listed and stock public companies",
      "Listed company group company",
      "Startup member",
      "Foreign-funded enterprise",
    ],
  },
  {
    id: "specialty",
    label: "Employee Specialty",
    icon: Users,
    benefits: [
      "Average age in 20s",
      "Average age 30s",
      "Average age in 40s",
      "Higher percentage of women than other companies",
      "Foreign management",
      "Young management team",
      "Female managers",
      "Resignation rate below 5%",
      "Mid-career joining 50% or more",
      "Women are active",
      "Women's management appointment available",
    ],
  },
];

export default function SearchByBenefit() {
  const [activeTab, setActiveTab] = useState("working-hours");
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-10">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Search By Benefit <span className="text-[#DB1517]">(5,741)</span>
          </h2>
          <button className="hidden lg:block px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]">
            EXPLORE ALL
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-col space-y-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex flex-1 gap-2 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === id
                    ? "bg-[#0179C0] text-white"
                    : "text-[#2B6EB3] bg-[#E5F4FF]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="grid grid-cols-4 gap-4">
                    {tab.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center p-4 gap-2 border-b-1  border-gray-400 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E6F3FF] flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {tabs.map(({ id, label, icon: Icon, benefits }) => (
            <div
              key={id}
              className="border rounded-lg bg-[#0179C0] text-white overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(id)}
                className="w-full px-4 py-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordion === id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === id && (
                <div className="bg-white p-4 space-y-2">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center p-4 gap-2 border-b-1  border-gray-400 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E6F3FF] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-6">
          <button className="lg:hidden px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]">
            EXPLORE ALL
          </button>
        </div>
      </Container>
    </section>
  );
}
