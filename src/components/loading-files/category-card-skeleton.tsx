import React from "react"

const CategoryCardSkeleton = () => {
  return (
    <div className="flex items-center p-8 border-b-2 border-l-[0.5px] border-gray-300 rounded-lg animate-pulse">
      <div className="p-3 bg-gray-200 rounded-full w-12 h-12"></div>
      <div className="ml-4 flex-1">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  )
}

export default CategoryCardSkeleton

