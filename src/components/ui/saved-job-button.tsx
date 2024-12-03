import { Button } from "@/components/ui/button";
import useSaveJob from "@/hooks/useSavedJob";
import { cn } from "@/lib/utils";
import { useToggleInSavedJobMutation } from "@/redux/api/job/jobApi";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuLoader } from "react-icons/lu";

interface SavedJobButtonProps {
  id: string;
}

const SavedJobButton: React.FC<SavedJobButtonProps> = ({ id }) => {
  const [toggleInSaveJobs, { isLoading }] = useToggleInSavedJobMutation();
  const { isInSavedJobs } = useSaveJob(id);

  const handleToggle = async () => {
    await toggleInSaveJobs(id).unwrap();
  };

  const SaveIcon = isLoading ? LuLoader : isInSavedJobs ? FaHeart : FaRegHeart;

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleToggle}
      className="hover:bg-transparent"
    >
      <SaveIcon
        className={cn("text-primary", isLoading && "animate-spin")}
        size={20}
      />
    </Button>
  );
};

export default React.memo(SavedJobButton);
