"use client";
import Container from "@/components/main/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfo } from "@/components/view-candidate-profile/basic-info";
import { Education } from "@/components/view-candidate-profile/education-content";
import { KeySkills } from "@/components/view-candidate-profile/key-skills";
import { Languages } from "@/components/view-candidate-profile/language";

import { Resume } from "@/components/view-candidate-profile/resume";
import { TrainingCertifications } from "@/components/view-candidate-profile/training-section";
import { Sidebar } from "@/components/view-candidate-profile/view-candidate-profile-sidebar";
import { WorkExperience } from "@/components/view-candidate-profile/work-experience";

export default function CandidateProfilePage() {
  const tabItems = [
    { value: "basic-info", label: "Basic Info", component: BasicInfo },
    { value: "key-skills", label: "Key Skills", component: KeySkills },
    {
      value: "work-experience",
      label: "Work Experience",
      component: WorkExperience,
    },
    { value: "education", label: "Education", component: Education },
    { value: "resume", label: "Resume", component: Resume },
    {
      value: "training-certifications",
      label: "Training & Certifications",
      component: TrainingCertifications,
    },
    { value: "languages", label: "Languages", component: Languages },
  ];
  return (
    <Container>
      <div className="py-10 px-5">
        <h1 className="text-2xl font-bold text-primary mb-6">
          Candidate Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Sidebar
              name="Shahinur Islam"
              qualification="Bachelor"
              experience="3+ Years"
              gender="Male"
              maritalStatus="Single"
              availableFrom="2024-10-30"
            />
          </div>

          <div className="md:col-span-3">
            <Tabs defaultValue="basic-info" className="space-y-6">
              <TabsList className="w-full justify-start flex-wrap">
                {tabItems.map((item) => (
                  <TabsTrigger key={item.value} value={item.value}>
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tabItems.map((item) => (
                <TabsContent key={item.value} value={item.value}>
                  <item.component />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </Container>
  );
}
