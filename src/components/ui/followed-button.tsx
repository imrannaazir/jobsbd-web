"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import {
  useGetAllMyFollowedCompanyQuery,
  useToggleCompanyFollowMutation,
} from "@/redux/api/company/company-api";
import { ClassValue } from "clsx";
import { Button } from "./button";

const FollowedButton = ({
  companyId,
  className,
}: {
  companyId: string;
  className?: ClassValue;
}) => {
  const { data, isFetching } = useGetAllMyFollowedCompanyQuery("");
  const followedCompanyIds =
    data?.data?.map((item: any) => item?.companyId) || [];
  const isFollowed = followedCompanyIds?.include(companyId);
  const [toggleFollow, { isLoading }] = useToggleCompanyFollowMutation();
  const handleFlowing = async () => {
    await toggleFollow(companyId);
  };
  return (
    <Button
      onClick={handleFlowing}
      disabled={isLoading || isFetching}
      className={cn("bg-emerald-500 hover:bg-emerald-600", className)}
    >
      +{" "}
      {isLoading && isFetching ? "Loading" : isFollowed ? "UNFOLLOW" : "FOLLOW"}
    </Button>
  );
};

export default FollowedButton;
