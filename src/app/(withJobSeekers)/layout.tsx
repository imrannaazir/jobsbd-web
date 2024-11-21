"use client";

import CandidateDashboardNavbar from "@/components/candidate-dashboard/candidate-dashboard-navbar";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "JobsBD",
//   description: "JobsBd is an online source for job opportunities.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // main section container
    <section className="relative">
      <div className="h-[70px] bg-primary fixed -z-10 w-full"></div>
      <div className="flex">
        {/* side nav */}
        <CandidateDashboardNavbar />
        {/* children */}
        <div className="relative top-11">{children}</div>
        {/* right box */}
      </div>
    </section>
  );
}
