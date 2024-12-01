"use client";
import React from "react";
import SectionTitle from "../section-title";
import ProjectModal from "./project-modal";
import { useGetAllProjectsQuery } from "@/redux/api/candidate/candidateApi";
import { convertIntoDateString } from "@/utils/convert-into-date-string";

type TProject = {
  id: string;
  title: string;
  companyName: string;
  startDate: Date;
  endDate?: Date;
  isWorking?: boolean;
  description: string;
};

const ProjectSection = () => {
  const { data, isLoading } = useGetAllProjectsQuery("");
  return (
    <div className="section-design">
      <SectionTitle label="Projects" component={<ProjectModal />} />
      <div className="p-4">
        {!isLoading &&
          data?.data?.map((project: TProject) => (
            <div key={project.id} className="border-b py-5">
              <p className="text-primary font-bold mb-5">{project?.title}</p>
              <div className="pb-4 mb-6 border-b">
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
              {/* job Responsibilities */}
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectSection;
