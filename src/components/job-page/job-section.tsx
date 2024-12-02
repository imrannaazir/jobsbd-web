import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobCard from "../ui/job-card";


const JobSection = () => {
  return (
    <div>
      <div className="border rounded shadow-lg mt-5 px-5 py-5 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <h2 className="text-lg md:text-xl font-semibold w-full text-center md:text-left">
            We found <span className="text-primary">(1)</span> jobs
          </h2>
          <div className="flex gap-3 items-center justify-center md:justify-end  w-full">
            <h2 className="font-semibold text-end">Sort By:</h2>
            <Select>
              <SelectTrigger className="w-1/2">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="latestJobs">Latest Jobs</SelectItem>
                  <SelectItem value="hightoLow">Salary High to Low</SelectItem>
                  <SelectItem value="lowtoHigh">Salary Low to High</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobSection;
