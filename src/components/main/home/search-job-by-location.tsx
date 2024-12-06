"use client";
import { MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
const SearchJobByLocation = () => {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobLocation, setJobLocation] = useState<string>("");

  //   handle search job
  const handleSearchJob = () => {
    const params = new URLSearchParams();
    
    if (jobTitle.trim() !== "") {
      params.append("query", jobTitle.trim());
    }
    
    if (jobLocation.trim() !== "") {
      params.append("location", jobLocation.trim());
    }

    const queryString = params.toString();
    
    if (queryString) {
      router.push(`/jobs?${queryString}`);
    } else {
      // If both fields are empty, just navigate to the jobs page without parameters
      router.push('/jobs');
    }
  };
  return (
    <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 md:flex-row shadow-2xl p-6">
      <div className="relative flex-1">
        <input
          onChange={(e) => setJobTitle(e.target?.value)}
          type="text"
          placeholder="Keyword, Job Title, Company Name"
          className="w-full rounded-lg border hover:border-black border-gray-300  py-4 pl-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <Search className="absolute text-[#177dd0] bg-[#E9F5FF] right-3 top-1/2 h-5 w-5 -translate-y-1/2 " />
      </div>
      <div className="relative flex-1">
        <input
          onChange={(e) => setJobLocation(e.target?.value)}
          type="text"
          placeholder="Location"
          className="w-full rounded-lg border hover:border-black border-gray-300 px-4 py-4 p-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <MapPin className="absolute text-[#177dd0] right-3 top-1/2 h-5 w-5 -translate-y-1/2 bg-[#E9F5FF]" />
      </div>
      <button
        onClick={handleSearchJob}
        className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-[#155EAC]"
      >
        SEARCH JOB
      </button>
    </div>
  );
};

export default SearchJobByLocation;
