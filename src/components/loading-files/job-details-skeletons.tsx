"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function JobDetailsCardSkeleton() {
  return (
    <Card className="flex-1">
      <CardContent className="p-6 space-y-6">
        {/* Job Header Skeleton */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-2">
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-blue-100 rounded-full animate-pulse"></div>
          </div>
          <div>
            <div className="h-4 w-24 bg-gray-200 rounded mb-5 animate-pulse"></div>
            <div className="flex gap-2">
              <div className="h-10 w-28 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-10 w-28 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Job Info Grid Skeleton */}
        <div className="bg-[#F8F8F8] grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 p-4 border">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Job Description Skeleton */}
        {Array.from({ length: 4 }).map((_, index) => (
          <section key={index} className="space-y-4">
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </section>
        ))}
      </CardContent>
    </Card>
  );
}
