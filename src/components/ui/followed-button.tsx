"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import {
  useGetAllMyFollowedCompanyQuery,
  useToggleCompanyFollowMutation,
} from "@/redux/api/company/company-api";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TCompany } from "@/type/company.types";
import { ClassValue } from "clsx";
import { PlusCircle } from "lucide-react";
import { Button } from "./button";

const FollowedButton = ({
  companyId,
  className,
}: {
  companyId: string;
  className?: ClassValue;
}) => {
  const user = useAppSelector(selectCurrentUser);
  const { data, isFetching } = useGetAllMyFollowedCompanyQuery("");

  let followedCompanyIds: string[] = [];
  if (data) {
    followedCompanyIds = data?.data?.map((item: TCompany) => item?.id);
  }
  const isFollowed = followedCompanyIds?.includes(companyId);
  const [toggleFollow, { isLoading }] = useToggleCompanyFollowMutation();
  const handleFlowing = async () => {
    await toggleFollow(companyId);
  };

  return (
    <Button
      onClick={handleFlowing}
      disabled={isLoading || isFetching || !user?.id}
      className={cn(
        "rounded-full bg-blue-100 hover:text-white  text-primary",
        className
      )}
    >
      <PlusCircle />
      {isLoading && isFetching ? "Loading" : isFollowed ? "UNFOLLOW" : "FOLLOW"}
    </Button>
  );
};

export default FollowedButton;
