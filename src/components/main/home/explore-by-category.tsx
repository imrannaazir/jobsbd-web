"use client";
import CategoryCardSkeleton from "@/components/loading-files/category-card-skeleton";
import CategoryCard from "@/components/ui/category-card";
import { useGetDepartmentQuery } from "@/redux/api/department/deapartmentApi";
import { TDepartment } from "@/type/department.types";
import Link from "next/link";
import Container from "../Container";

const ExploreByCategory = () => {
  const { data: departments, isFetching } = useGetDepartmentQuery("");
  return (
    <section className="py-10">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Explore By Category</h2>
          <Link
            href={`/categories`}
            className="hidden lg:block px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]"
          >
            EXPLORE ALL
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {isFetching
            ? Array.from({ length: 8 }, (_, index) => (
                <CategoryCardSkeleton key={index} />
              ))
            : departments?.data
                ?.slice(0, 8)
                ?.map((department: TDepartment) => (
                  <CategoryCard key={department?.id} category={department} />
                ))}
        </div>
        <div className="flex items-center justify-center my-5">
          <button className="lg:hidden px-5 py-2 text-base font-semibold rounded border text-primary border-primary hover:bg-[#DCEFFF]">
            EXPLORE ALL
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ExploreByCategory;
