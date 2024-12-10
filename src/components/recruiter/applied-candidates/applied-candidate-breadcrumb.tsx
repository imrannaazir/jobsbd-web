import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const AppliedCandidateBreadcrumb = () => {
  return (
    <section className="border rounded shadow-lg mt-5 px-5 py-5 bg-white">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link
              href="/recruiter/dashboard"
              className="font-semibold flex items-center justify-center gap-3"
            >
              <span>Dashboard</span>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link
              href="/recruiter/posted-job"
              className="font-semibold flex items-center justify-center gap-3"
            >
              <span>Posted Job</span>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">
              Applied Candidates
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};

export default AppliedCandidateBreadcrumb;
