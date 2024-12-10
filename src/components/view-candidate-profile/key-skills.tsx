import { Badge } from "@/components/ui/badge";
import { useGetSingleCandidateInfoQuery } from "@/redux/api/candidate/candidateApi";
import { useParams } from "next/navigation";

type TSkill = {
  id: string;
  skill: string;
  duration: number;
};

export function KeySkills() {
  const { candidateId } = useParams();
  const { data: userInfo, isFetching } = useGetSingleCandidateInfoQuery(
    candidateId as string
  );
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold  text-primary">Key Skills</h2>
      <div className="flex flex-wrap gap-2">
        {!isFetching &&
          userInfo?.data?.skills?.map((skill: TSkill) => (
            <SkillBadge
              key={skill.id}
              skill={skill.skill}
              years={skill.duration}
            />
          ))}
      </div>
      {
        !isFetching &&
        !userInfo?.data?.skills?.length && <p className="text-red-500 text-center">No skills added yet!</p>
      }
    </div>
  );
}

function SkillBadge({ skill, years }: { skill: string; years: number }) {
  return (
    <Badge variant="default" className="text-sm">
      {skill} - {years} {years === 1 ? "year" : "years"}
    </Badge>
  );
}
