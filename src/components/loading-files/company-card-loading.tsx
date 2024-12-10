import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";


export default function CompanyCardLoading() {
  return (
    <Card>
      <CardContent>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-5">
            <Skeleton className="h-[100px] w-[110px] rounded-md" />
            <Skeleton className="h-8 w-48" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4">
        <Skeleton className="h-5 w-32" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-28" />
        </div>
      </CardFooter>
    </Card>
  );
}
