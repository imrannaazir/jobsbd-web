/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { LiaStopwatchSolid } from "react-icons/lia";

const ShowCompanies = async ({ companies }: { companies: any }) => {
  console.log("comapnies", companies);

  return (
    <div>
      <div className="border rounded shadow-lg mt-5 px-5 py-5 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <h2 className="text-lg md:text-xl font-extrabold w-full text-center md:text-left">
            Showing companies{" "}
            <span className="text-primary mr-1">({companies?.length})</span>
          </h2>
        </div>
      </div>

      <div>
        {companies?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-5 my-10">
            {companies?.map((company: any) => (
              <div key={company?.id} className="">
                {/* Top Banner */}
                <div>
                  <Image
                    src={
                      company?.image ||
                      "https://atbjobs.s3.ap-southeast-1.amazonaws.com/employer/workspace/image-630x450%20(3)_1719398273_1731234907.png"
                    }
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
                      <Image
                        src="https://atbjobs.s3.ap-southeast-1.amazonaws.com/employer/profile_photo/blob_1731916855."
                        alt="Company Logo"
                        width={60}
                        height={60}
                        className="w-12 h-12 object-cover rounded-md"
                      />
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
                    <button className="nav-link bg-[#155EAD] text-white hover:bg-primary py-2 cursor-pointer text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-center text-lg font-semibold mt-10">
            No Company found!!
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowCompanies;
