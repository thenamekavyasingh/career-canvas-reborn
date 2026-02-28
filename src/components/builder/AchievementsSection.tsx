import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const AchievementsSection = () => {
  const { data, updateAchievements } = useResume();

  const update = (index: number, value: string) => {
    const newArr = [...data.achievements];
    newArr[index] = value;
    updateAchievements(newArr);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Achievements</h3>
        <Button variant="outline" size="sm" onClick={() => updateAchievements([...data.achievements, ""])} className="text-xs gap-1">
          <Plus className="w-3.5 h-3.5" /> Add
        </Button>
      </div>
      {data.achievements.map((a, i) => (
        <div key={i} className="flex gap-2 items-center group">
          <Input value={a} onChange={(e) => update(i, e.target.value)} className="bg-secondary/50 border-border" />
          <button onClick={() => updateAchievements(data.achievements.filter((_, idx) => idx !== i))} className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AchievementsSection;
