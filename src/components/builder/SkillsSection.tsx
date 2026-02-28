import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const SkillsSection = () => {
  const { data, addSkill, updateSkill, removeSkill } = useResume();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Skills</h3>
        <Button variant="outline" size="sm" onClick={addSkill} className="text-xs gap-1">
          <Plus className="w-3.5 h-3.5" /> Add
        </Button>
      </div>
      {data.skills.map((skill) => (
        <div key={skill.id} className="flex gap-3 items-start group">
          <div className="grid grid-cols-3 gap-3 flex-1">
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Category</Label>
              <Input value={skill.category} onChange={(e) => updateSkill(skill.id, "category", e.target.value)} className="bg-secondary/50 border-border" />
            </div>
            <div className="col-span-2 space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Items (comma separated)</Label>
              <Input value={skill.items} onChange={(e) => updateSkill(skill.id, "items", e.target.value)} className="bg-secondary/50 border-border" />
            </div>
          </div>
          <button onClick={() => removeSkill(skill.id)} className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity mt-7">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
