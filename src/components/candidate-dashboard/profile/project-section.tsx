/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
} from "@/redux/api/candidate/candidateApi";
import { convertIntoDateString } from "@/utils/convert-into-date-string";
import { useState } from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import SectionTitle from "../section-title";
import ProjectModal from "./project-modal";
import ProjectUpdateModal from "./project-update-modal";

type TProject = {
  id: string;
  title: string;
  companyName: string;
  startDate: Date;
  endDate?: Date;
  isWorking?: boolean;
  description: string;
  projectLink?: string;
};

const ProjectSection = () => {
  const { data, isLoading } = useGetAllProjectsQuery("");
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const [deleteProject] = useDeleteProjectMutation();

  // Delete Project
  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await deleteProject(id).unwrap();
        if (response?.data?.id) {
          Swal.fire("Deleted!", "Projectrecord has been deleted.", "success");
        }
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong while deleting.", "error");
    }
  };

  // Update Project
  const handleUpdate = (project: any) => {
    setSelectedProject(project);
    setUpdateModalOpen(true);
  };

  return (
    <div className="section-design">
      <SectionTitle label="Projects" component={<ProjectModal />} />
      <div className="p-4 ">
        {!isLoading &&
          data?.data?.map((project: TProject) => (
            <div key={project.id} className="border-b py-5 relative">
              <p className="text-primary font-bold mb-5">{project?.title}</p>
              <div className="pb-4 ">
                <p className="font-bold">{project?.companyName}</p>

                <div className="flex items-center gap-2 mt-2">
                  <p>{convertIntoDateString(project?.startDate)}</p> -
                  <p>
                    {project?.isWorking
                      ? "Running"
                      : convertIntoDateString(project?.endDate as Date)}
                  </p>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-primary">
                  Project Description
                </h4>
                {!isLoading && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project?.description,
                    }}
                  ></div>
                )}
                {!isLoading && !project?.description && (
                  <p className="text-gray-600 text-sm p-4">
                    This is a summary.
                  </p>
                )}
              </div>

             
              <div className="flex justify-end absolute right-0 top-0 mt-20 gap-4 mr-2">
                <button
                  onClick={() => handleUpdate(project)}
                  className="px-4 py-2 text-sm font-medium bg-[#E5F4FF] rounded text-blue-500"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="px-4 py-2 text-sm font-medium text-red-500 bg-[#FEEFEE] rounded"
                >
                  <FiDelete />
                </button>
              </div>
            </div>
          ))}
      </div>
      {selectedProject && (
        <ProjectUpdateModal
          isOpen={isUpdateModalOpen}
          setIsOpen={setUpdateModalOpen}
          project={{ ...selectedProject, isWorking: selectedProject?.isWorking ?? false }}
        />
      )}
    </div>
  );
};

export default ProjectSection;
