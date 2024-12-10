import { TDepartment } from "@/type/department.types";
import Link from "next/link";
import React from "react";
import { BsBuildings } from "react-icons/bs";

const CategoryCard = ({ category }:{ category : TDepartment}) => {
  return (
    <Link href={`/jobs?department=${category?.name}`}>
      <div
        key={category.name}
        className="flex items-center p-8 border-b-2 border-l-[0.5px] border-gray-300 rounded-lg"
      >
        <div className="p-3 bg-[#E9F5FF] rounded-full">
        <BsBuildings className="text-primary"/>
        </div>
        <div className="ml-4">
          <h3 className="text-lg">{category.name}</h3>
          <p className="text-sm font-bold text-primary">
            [{category?.totalJobs}]
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
