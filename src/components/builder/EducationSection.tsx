import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const EducationSection = () => {
  const { data, addEducation, updateEducation, removeEducation } = useResume();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Education</h3>
        <Button variant="outline" size="sm" onClick={addEducation} className="text-xs gap-1">
          <Plus className="w-3.5 h-3.5" /> Add
        </Button>
      </div>
      {data.education.map((edu) => (
        <div key={edu.id} className="bg-secondary/30 rounded-xl p-4 space-y-3 border border-border/50 relative group">
          <button
            onClick={() => removeEducation(edu.id)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Institution</Label>
              <Input value={edu.institution} onChange={(e) => updateEducation(edu.id, "institution", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Degree</Label>
              <Input value={edu.degree} onChange={(e) => updateEducation(edu.id, "degree", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Start Date</Label>
              <Input value={edu.startDate} onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)} placeholder="YYYY-MM" className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">End Date</Label>
              <Input value={edu.endDate} onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)} placeholder="YYYY-MM" className="bg-card border-border" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
