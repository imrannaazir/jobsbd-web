'use client'

import { useState, useMemo } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import JobCard from "../ui/job-card"
import { TJob } from "@/type/job.types"

const JobSection = ({ jobs: initialJobs }: { jobs: TJob[] }) => {
  const [sortOption, setSortOption] = useState<string>('latestJobs')

  const sortedJobs = useMemo(() => {
    const sortedArray = [...initialJobs]
    switch (sortOption) {
      case 'latestJobs':
        return sortedArray.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      case 'hightoLow':
        return sortedArray.sort((a, b) => b.maxSalary - a.maxSalary)
      case 'lowtoHigh':
        return sortedArray.sort((a, b) => a.minSalary - b.minSalary)
      default:
        return sortedArray
    }
  }, [initialJobs, sortOption])

  const handleSortChange = (value: string) => {
    setSortOption(value)
  }

  return (
    <div>
      <div className="border rounded shadow-lg mt-5 px-5 py-5 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <h2 className="text-lg md:text-xl font-semibold w-full text-center md:text-left">
            We found <span className="text-primary mr-1">{sortedJobs.length}</span>
            jobs
          </h2>
          <div className="flex gap-3 items-center justify-center md:justify-end w-full">
            <h2 className="font-semibold text-end">Sort By:</h2>
            <Select onValueChange={handleSortChange} defaultValue="latestJobs">
              <SelectTrigger className="w-[180px]">
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

      <div>
        {sortedJobs.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
            {sortedJobs.map((job: TJob) => (
              <JobCard job={job} key={job.id} status={null} />
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-center text-lg font-semibold mt-10">
            No Jobs found!!
          </p>
        )}
      </div>
    </div>
  )
}

export default JobSection

