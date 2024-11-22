"use client";

import ExpireSoonJobs from "@/components/main/home/expire-soon-jobs";
import ExploreByCategory from "@/components/main/home/explore-by-category";
import LiveJobs from "@/components/main/home/live-jobs";
import PostJobSection from "@/components/main/home/post-job-section";
import ThisMonthJobs from "@/components/main/home/this-month-jobs";

export default function HomePage() {
  return (
    <>
      <LiveJobs />
      <ThisMonthJobs />
      <ExploreByCategory />
      <ExpireSoonJobs />
      <PostJobSection />
    </>
  );
}
