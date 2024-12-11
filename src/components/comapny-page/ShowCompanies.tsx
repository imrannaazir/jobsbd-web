/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { LiaStopwatchSolid } from "react-icons/lia";
import { CompanyCardSkeletonGroup } from "../loading-files/company-card-skeleton";
import { BsBuildings } from "react-icons/bs";
import Link from "next/link";
import companyCover from "@/assets/company/comapny-cover.jpeg";
import { TCompany } from "@/type/company.types";
const ShowCompanies = async ({
  companies,
  isFetching,
}: {
  companies: TCompany[];
  isFetching: boolean;
}) => {
  return (
    <div>
      <div className="border rounded shadow-lg mt-5 px-5 py-5 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <h2 className="text-lg md:text-xl font-extrabold w-full text-center md:text-left">
            Showing companies
            <span className="text-primary ml-1">({companies?.length})</span>
          </h2>
        </div>
      </div>

      <div>
        {isFetching ? (
          <CompanyCardSkeletonGroup />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 my-10">
            {companies?.map((company: TCompany) => (
              <div key={company?.id}>
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
              </div>
            ))}
          </div>
        )}
        {!isFetching && !companies?.length && (
          <p className="text-red-500 text-center text-lg font-semibold mt-10">
            No Company found!!
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowCompanies;
