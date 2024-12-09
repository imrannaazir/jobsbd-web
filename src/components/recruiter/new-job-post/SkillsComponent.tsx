"use client"

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { InputField } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

interface Skill {
  skill: string;
  duration: number;
}

interface SkillsProps {
  onSkillsChange: (skills: Skill[]) => void;
  initialSkills?: Skill[];
}

const SkillsComponent: React.FC<SkillsProps> = ({ onSkillsChange, initialSkills = [{ skill: "", duration: 0 }] }) => {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);

  useEffect(() => {
    onSkillsChange(skills);
  }, [skills, onSkillsChange]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [name]: value } : skill
    );
    setSkills(updatedSkills);
  };

  const handleAddSection = () => {
    if (
      skills.some(
        (skill) => skill.skill.trim() === "" || skill.duration === 0
      )
    ) {
      Swal.fire({
        title: "Error",
        text: "Please complete the current skill entries before adding a new section.",
        icon: "error",
      });
      return;
    }
    setSkills([...skills, { skill: "", duration: 0 }]);
  };

  const handleRemoveSection = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <InputField
              name="skill"
              label="Job Skill"
              type="text"
              placeholder="Enter Job Skill"
              value={skill.skill}
              onChange={(e) => handleInputChange(index, e)}
            />

            <InputField
              name="duration"
              label="Job Duration"
              type="text"
              placeholder="Enter Job Duration"
              value={skill.duration}
              onChange={(e) => handleInputChange(index, e)}
            />
            {skills.length > 1 && (
              <div>
                <Button
                  type="button"
                  onClick={() => handleRemoveSection(index)}
                  className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded mt-8"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      <Button
        type="button"
        onClick={handleAddSection}
        className="bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded"
      >
        Add New
      </Button>
    </div>
  );
};

export default SkillsComponent;