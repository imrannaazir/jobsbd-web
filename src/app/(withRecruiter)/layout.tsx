import RecruiterNavbar from "@/components/recruiter/recruiter-navbar";
import RecruiterSidebar from "@/components/recruiter/recruiter-sidebar";
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
    <html lang="en">
      <body>
        <section className="relative">
          <RecruiterNavbar />
          <div className="mt-20">
            <div className="h-[70px] bg-[#00457C] fixed -z-10 w-full"></div>
            <div className="flex flex-col lg:flex-row">
              {/* side nav */}
              <RecruiterSidebar />
              {/* children */}
              <div className="relative top-9 p-5 flex-1">{children}</div>
              {/* right box */}
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
