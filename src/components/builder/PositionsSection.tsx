import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const PositionsSection = () => {
  const { data, addPosition, updatePosition, removePosition } = useResume();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold text-foreground">Positions of Responsibility</h3>
        <Button variant="outline" size="sm" onClick={addPosition} className="text-xs gap-1">
          <Plus className="w-3.5 h-3.5" /> Add
        </Button>
      </div>
      {data.positions.map((pos) => (
        <div key={pos.id} className="bg-secondary/30 rounded-xl p-4 space-y-3 border border-border/50 relative group">
          <button onClick={() => removePosition(pos.id)} className="absolute top-3 right-3 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
            <Trash2 className="w-4 h-4" />
          </button>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Title</Label>
              <Input value={pos.title} onChange={(e) => updatePosition(pos.id, "title", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Organization</Label>
              <Input value={pos.organization} onChange={(e) => updatePosition(pos.id, "organization", e.target.value)} className="bg-card border-border" />
            </div>
            <div className="space-y-1">
              <Label className="text-muted-foreground text-xs uppercase tracking-wider">Date</Label>
              <Input value={pos.date} onChange={(e) => updatePosition(pos.id, "date", e.target.value)} className="bg-card border-border" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PositionsSection;
