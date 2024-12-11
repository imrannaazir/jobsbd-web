import { CarouselItem } from "../ui/carousel";

const HomePageJobCardSkeleton = () => {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="border rounded-lg shadow-md px-5 py-4 w-full animate-pulse">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-6 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
          <div className="p-2">
            <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="h-8 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    </CarouselItem>
  );
};

export default HomePageJobCardSkeleton;
