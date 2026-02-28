import { useState } from "react";
import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const SkillsSection = () => {
  const { data, updateSkills } = useResume();
  const [input, setInput] = useState("");

  const addSkill = () => {
    const skill = input.trim();
    if (skill && !data.skills.includes(skill)) {
      updateSkills([...data.skills, skill]);
      setInput("");
    }
  };

  const removeSkill = (skill: string) => {
    updateSkills(data.skills.filter((s) => s !== skill));
  };

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-semibold text-foreground">Skills</h3>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
          placeholder="Type a skill and press Enter"
          className="bg-secondary/50 border-border"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="px-3 py-1.5 text-sm gap-1.5 cursor-pointer hover:bg-destructive/10 transition-colors"
            onClick={() => removeSkill(skill)}
          >
            {skill}
            <X className="w-3 h-3" />
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
