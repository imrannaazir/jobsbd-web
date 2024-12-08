
import Link from "next/link";
import { BsBuildingsFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { IoMegaphoneOutline } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import SearchJobByLocation from "./search-job-by-location";

export default function HeroSection() {
  return (
    <div className="relative min-h-[600px] w-full bg-cover bg-center">
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="mb-4 text-5xl  text-gray-700">Where Jobs Seek You.</h1>
        <h2 className="mb-12 text-2xl font-medium text-[#0179C0]">
          11,000+ Active Vacancies, Available Right Now!
        </h2>

        <div
          className="bg-cover pb-24 bg-center w-full"
          style={{
            backgroundImage:
              'url("https://atb-jobs.com/v2/images/bannerBackground.png")',
          }}
        >
          {/* Search Form */}
          <SearchJobByLocation/>

          <div className="flex items-center justify-center gap-2">
            <IoMegaphoneOutline size={40} className=" text-blue-500" />
            <p className="text-lg">
              2 Minute{" "}
              <Link href="/registration" className="text-[#0179C0] underline">
                Registration
              </Link>
              , For a Lifetime of Opportunities!
            </p>
          </div>

          {/* Stats */}
          <div>
            <div className="flex flex-wrap justify-center gap-12 w-full">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-6">
                  <BsBuildingsFill className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-600">VACANCIES</p>
                  <p className="text-2xl font-bold text-blue-600">21,216+</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-6">
                  <FaRegBuilding className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-600">COMPANIES</p>
                  <p className="text-2xl font-bold text-blue-600">9,709+</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-6">
                  <MdPersonSearch className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-600">LIVE JOBS</p>
                  <p className="text-2xl font-bold text-blue-600">7,736+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
