import RecruiterNavbar from "@/components/recruiter/recruiter-navbar";
import RecruiterSidebar from "@/components/recruiter/recruiter-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JobsBD - Employer Dashboard",
  description: "JobsBd is an online source for job opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <>
        {/* Small devices */}
        <section className="relative md:hidden">
          <RecruiterNavbar />
          <div className="mt-20">
            <div className="h-20 bg-[#00457C] fixed -z-10 w-full"></div>
            <div className="flex flex-col lg:flex-row">
              {/* side nav */}
              <RecruiterSidebar />
              {/* children */}
              <div className="relative top-9 p-5 flex-1 bg-[#F9F9F9]">
                {children}
              </div>
              {/* right box */}
            </div>
          </div>
        </section>

        {/* Large devices */}
        <section className="hidden md:block relative h-full">
          <RecruiterNavbar />
          <div className="flex h-full">
            <div className="fixed top-20 left-0 h-[calc(100%-5rem)] w-64 bg-gray-100 z-20 shadow-lg">
              <ScrollArea className="h-full">

              <RecruiterSidebar />
              </ScrollArea>
            </div>
            <div className="h-28 bg-[#00457C] mt-20 fixed w-full"></div>
            <div className="flex-1 ml-64 mt-20 overflow-auto p-5 bg-gray-50">
              {children}
            </div>
          </div>
        </section>
      </>
 
  );
}
