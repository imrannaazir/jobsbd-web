"use client";
import { Card, CardContent } from "@/components/ui/card";
import { TJob } from "@/type/job.types";
import { formatDeadline } from "@/utils/format-deadline";
import { Briefcase, Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import JobDetailsCardSkeleton from "../loading-files/job-details-skeletons";
import ApplyJobModal from "../ui/apply-job-modal";
import SavedJobButton from "../ui/saved-job-button";
import JobInfoItem from "./job-info-item";
import SectionCard from "./section-card";

export default function JobDetailsCard({
  data,
  isFetching,
}: {
  data: TJob;
  isFetching: boolean;
}) {
  if (isFetching) {
    return <JobDetailsCardSkeleton />;
  }
  return (
    <Card className="flex-1">
      <CardContent className="p-6">
        {/* Job Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{data?.title}</h1>
            <div className="inline-block bg-blue-50 text-sm px-3 py-1 rounded-full">
              <span className="text-red-500 mr-1">Application Deadline:</span>
              {formatDeadline(data?.deadline)}
            </div>
          </div>
          <div>
            <p className="p-2 mb-5 bg-bgColour font-semibold rounded-l-full">
              <span className="mr-1">Vacancy:</span>
              {data?.vacancy}
            </p>
            <div className="flex gap-2">
              <ApplyJobModal jobId={data?.id} status={null} />
              <SavedJobButton id={data?.id} />
            </div>
          </div>
        </div>

        {/* Job Info Grid */}
        <div className="bg-[#F8F8F8] grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 p-4 border">
          <JobInfoItem
            icon={DollarSign}
            title={`Salary: ${
              data?.negotiable ? "Negotiable" : data.minSalary - data?.maxSalary
            }`}
            subtitle="Monthly Salary in Taka"
          />
          <JobInfoItem
            icon={Clock}
            title={`${data?.experienceInMonths || "Not Added"}`}
            subtitle="Experience(In month)"
          />
          <JobInfoItem
            icon={Briefcase}
            title={data?.jobType}
            subtitle="Employment Type"
          />
          <JobInfoItem
            icon={Calendar}
            title={`${data?.minAge || "Not Added"}`}
            subtitle="Age"
          />
          <JobInfoItem icon={MapPin} title="N/A" subtitle="Location" />
        </div>

        <div className="space-y-6">
          {/* Job Description */}
          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">
              Job Description
            </h2>
            <h3 className="text-lg font-semibold mb-2">Company Overview</h3>
            <p className="text-muted-foreground">
              {data?.company?.companyDetails || "Not Added"}
            </p>
          </section>

          {/* Job Description */}
          <SectionCard
            headline="Job Description"
            description={data?.jobDescription}
          />
          {/* Job Requirements */}
          <SectionCard
            headline="Job Requirements"
            description={data?.jobRequirements}
          />
          {/* Education Qualifications */}
          <SectionCard
            headline="Education Qualifications"
            description={`${data?.degreeTitle} in ${data?.degreeName}`}
          />
          {/* Job Requirements */}
          <SectionCard
            headline="Company Benefits"
            description={data?.compensationBenefits}
          />
        </div>
      </CardContent>
    </Card>
  );
}
