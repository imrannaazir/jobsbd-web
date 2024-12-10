'use client';

import CategoryCardSkeleton from "@/components/loading-files/category-card-skeleton";
import Container from "@/components/main/Container";
import CategoryCard from "@/components/ui/category-card";
import { useGetDepartmentQuery } from "@/redux/api/department/deapartmentApi";
import { TDepartment } from "@/type/department.types";

const CategoriesPage = () => {
  const { data: departments, isFetching } = useGetDepartmentQuery("");

  return (
    <>
      <div className="bg-primary h-[350px]"></div>
      <section className="-mt-[280px] mb-10">
        <Container>
          <p className="text-white">Home / All Categories</p>
          <div className="bg-white rounded-lg shadow-2xl mt-10">
            <h3 className="text-2xl font-semibold p-4 border-b-2">
              Explore Jobs By Category
            </h3>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {isFetching
                ? Array.from({ length: 8 }, (_, index) => (
                    <CategoryCardSkeleton key={index} />
                  ))
                : departments?.data?.map((department : TDepartment) => (
                    <CategoryCard key={department?.id} category={department} />
                  ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CategoriesPage;

