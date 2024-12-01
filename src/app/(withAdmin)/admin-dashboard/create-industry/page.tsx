/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import IndustryModal from "@/components/admin-dashboard/industries/IndustryModal";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import { useGetIndustriesQuery } from "@/redux/api/candidate/candidateApi";
import { useDeleteIndustryMutation } from "@/redux/api/industry/industryApi";
import { IoTrashBinSharp } from "react-icons/io5";

import Swal from "sweetalert2";

type TIndustry = { id: string; name: string };

const CreateIndustry = () => {
  const { data: industries, isLoading } = useGetIndustriesQuery("");
  const [deleteIndustry] = useDeleteIndustryMutation();

  const handleDeleteIndustry = async (industryId: string) => {
    try {
      const response: any = await deleteIndustry(industryId);
      if (response?.data) {
        Swal.fire({
          title: "Success",
          text: "Industry deleted successfully!",
          icon: "success",
        });
      } else {
        throw new Error(response?.error?.data?.message || "Creation failed");
      }
    } catch (error) {
      console.error("API Error:", error); // Logs detailed error
      Swal.fire({
        title: "Error",
        text: "Industry deletion failed",
        icon: "error",
      });
    }
  };

  return (
    <div className="section-design mt-10">
      <SectionTitle label="Industries" component={<IndustryModal />} />
      {/* details Section */}
      <div className="p-4 flex flex-col gap-2">
        {!isLoading &&
          industries?.data?.map((industry: TIndustry, index: number) => (
            <div
              className="py-2 px-4 border rounded-md text-primary flex items-center gap-2"
              key={industry.id}
            >
              <p className="flex-1">
                <span className="w-5 inline-block">{index + 1}.</span>
                <span>{industry?.name}</span>
              </p>
              <button
                onClick={() => handleDeleteIndustry(industry.id)}
                className="flex items-center gap-1 hover:text-red-500 transition-colors duration-300 ease-in-out"
              >
                <IoTrashBinSharp />
                <span>Delete</span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CreateIndustry;
