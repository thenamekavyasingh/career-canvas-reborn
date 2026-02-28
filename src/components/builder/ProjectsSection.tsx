import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const ProjectsSection = () => {
  const { data, addProject, updateProject, updateProjectBullets, removeProject } = useResume();

  const handleBulletChange = (projId: string, index: number, value: string) => {
    const proj = data.projects.find((p) => p.id === projId);
    if (!proj) return;
    const newBullets = [...proj.bullets];
    newBullets[index] = value;
    updateProjectBullets(projId, newBullets);
  };

  const addBullet = (projId: string) => {
    const proj = data.projects.find((p) => p.id === projId);
    if (!proj) return;
    updateProjectBullets(projId, [...proj.bullets, ""]);
  };

  const removeBullet = (projId: string, index: number) => {
    const proj = data.projects.find((p) => p.id === projId);
    if (!proj) return;
    updateProjectBullets(projId, proj.bullets.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Projects</h3>
        <Button variant="outline" size="sm" onClick={addProject} className="text-xs gap-1">
          <Plus className="w-3.5 h-3.5" /> Add
        </Button>
      </div>
      {data.projects.map((proj) => (
        <div key={proj.id} className="bg-secondary/30 rounded-xl p-4 space-y-3 border border-border/50 relative group">
          <button onClick={() => removeProject(proj.id)} className="absolute top-3 right-3 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Title</Label>
              <Input value={proj.title} onChange={(e) => updateProject(proj.id, "title", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Date</Label>
              <Input value={proj.date} onChange={(e) => updateProject(proj.id, "date", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Source Link Label</Label>
              <Input value={proj.sourceLink} onChange={(e) => updateProject(proj.id, "sourceLink", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Live Link Label</Label>
              <Input value={proj.liveLink} onChange={(e) => updateProject(proj.id, "liveLink", e.target.value)} className="bg-card border-border" />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground text-xs uppercase tracking-wider">Bullet Points</Label>
            {proj.bullets.map((b, i) => (
              <div key={i} className="flex gap-2">
                <Textarea value={b} onChange={(e) => handleBulletChange(proj.id, i, e.target.value)} className="bg-card border-border min-h-[40px] resize-none text-sm" />
                <button onClick={() => removeBullet(proj.id, i)} className="text-muted-foreground hover:text-destructive shrink-0 mt-2">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            <Button variant="ghost" size="sm" onClick={() => addBullet(proj.id)} className="text-xs gap-1">
              <Plus className="w-3 h-3" /> Add bullet
            </Button>
          </div>
          <div className="space-y-1">
            <Label className="text-muted-foreground text-xs uppercase tracking-wider">Tech Stack</Label>
            <Input value={proj.techStack} onChange={(e) => updateProject(proj.id, "techStack", e.target.value)} className="bg-card border-border" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
