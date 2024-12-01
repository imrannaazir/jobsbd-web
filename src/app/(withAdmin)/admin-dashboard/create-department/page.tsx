/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DepartmentModal from "@/components/admin-dashboard/departments/DepartmentModal";
import IndustryModal from "@/components/admin-dashboard/industries/IndustryModal";
import SectionTitle from "@/components/candidate-dashboard/section-title";
import { useGetDepartmentsQuery } from "@/redux/api/candidate/candidateApi";
import { useDeleteDepartmentMutation } from "@/redux/api/department/deapartmentApi";
import { useDeleteIndustryMutation } from "@/redux/api/industry/industryApi";
import { IoTrashBinSharp } from "react-icons/io5";

import Swal from "sweetalert2";

type TDepartment = { id: string; name: string };

const CreateDepartment = () => {
  const { data: departments, isLoading } = useGetDepartmentsQuery("");
  const [deleteDepartment] = useDeleteDepartmentMutation();

  const handleDeleteIndustry = async (departmentId: string) => {
    try {
      const response: any = await deleteDepartment(departmentId);
      console.log(response);

      if (response?.data) {
        Swal.fire({
          title: "Success",
          text: "Department deleted successfully!",
          icon: "success",
        });
      } else {
        throw new Error(response?.error?.data?.message || "Creation failed");
      }
    } catch (error) {
      console.error("API Error:", error); // Logs detailed error
      Swal.fire({
        title: "Error",
        text: "Department deletion failed",
        icon: "error",
      });
    }
  };

  return (
    <div className="section-design mt-10">
      <SectionTitle label="Departments" component={<DepartmentModal />} />
      {/* details Section */}
      <div className="p-4 flex flex-col gap-2">
        {!isLoading &&
          departments?.data?.map((department: TDepartment, index: number) => (
            <div
              className="py-2 px-4 border rounded-md text-primary flex items-center gap-2"
              key={department.id}
            >
              <p className="flex-1">
                <span className="w-5 inline-block">{index + 1}.</span>
                <span>{department?.name}</span>
              </p>
              <button
                onClick={() => handleDeleteIndustry(department.id)}
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

export default CreateDepartment;
