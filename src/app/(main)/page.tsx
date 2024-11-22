"use client";

import ExpireSoonJobs from "@/components/main/home/expire-soon-jobs";
import ExploreByCategory from "@/components/main/home/explore-by-category";
import HeroSection from "@/components/main/home/hero-section";
import LiveJobs from "@/components/main/home/live-jobs";
import PostJobSection from "@/components/main/home/post-job-section";
import SearchBYBenefit from "@/components/main/home/search-by-benefit";
import ThisMonthJobs from "@/components/main/home/this-month-jobs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveJobs />
      <ThisMonthJobs />
      <ExploreByCategory />
      <SearchBYBenefit />
      <ExpireSoonJobs />
      <PostJobSection />
    </>
  );
}
