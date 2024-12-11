import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const JobCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <div className="h-4 w-32 mb-2 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
      </CardHeader>

      <CardContent>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-3 w-48 bg-gray-300 rounded animate-pulse"></div>
            </div>

            <div className="h-12 w-12 bg-gray-300 rounded-full animate-pulse"></div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-6 w-20 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-6 w-24 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-6 w-16 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-3 w-32 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCardSkeleton;
