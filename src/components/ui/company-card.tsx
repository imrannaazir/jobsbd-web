import img from "@/assets/location.png";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./button";

const CompanyCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="mt-4 space-y-4">
          <div className=" flex items-center gap-5">
            <Image
              src={img}
              alt="company image"
              width={110}
              height={100}
              className="border p-2 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              Company Name
            </h3>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-4">
        <p className="text-primary font-semibold">Job Opening-[0]</p>
        <div className="flex items-center gap-4">
          <Button>View Profile</Button>
          <Button variant="outline">Unfollow</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
