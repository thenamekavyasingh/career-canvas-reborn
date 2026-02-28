import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const ExperienceSection = () => {
  const { data, addExperience, updateExperience, removeExperience } = useResume();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Experience</h3>
        <Button variant="outline" size="sm" onClick={addExperience} className="text-xs gap-1">
          <Plus className="w-3.5 h-3.5" /> Add
        </Button>
      </div>
      {data.experience.map((exp) => (
        <div key={exp.id} className="bg-secondary/30 rounded-xl p-4 space-y-3 border border-border/50 relative group">
          <button
            onClick={() => removeExperience(exp.id)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Company</Label>
              <Input value={exp.company} onChange={(e) => updateExperience(exp.id, "company", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Role</Label>
              <Input value={exp.role} onChange={(e) => updateExperience(exp.id, "role", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Start Date</Label>
              <Input value={exp.startDate} onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)} placeholder="YYYY-MM" className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">End Date</Label>
              <Input value={exp.endDate} onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)} placeholder="Present" className="bg-card border-border" />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-muted-foreground text-xs uppercase tracking-wider">Description</Label>
            <Textarea value={exp.description} onChange={(e) => updateExperience(exp.id, "description", e.target.value)} className="bg-card border-border min-h-[60px] resize-none" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
