import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PersonalSection = () => {
  const { data, updatePersonal } = useResume();
  const p = data.personal;

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-semibold text-foreground">Personal Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase tracking-wider">Full Name</Label>
          <Input value={p.name} onChange={(e) => updatePersonal("name", e.target.value)} className="bg-secondary/50 border-border focus:ring-accent" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase tracking-wider">Job Title</Label>
          <Input value={p.title} onChange={(e) => updatePersonal("title", e.target.value)} className="bg-secondary/50 border-border" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase tracking-wider">Email</Label>
          <Input value={p.email} onChange={(e) => updatePersonal("email", e.target.value)} className="bg-secondary/50 border-border" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase tracking-wider">Phone</Label>
          <Input value={p.phone} onChange={(e) => updatePersonal("phone", e.target.value)} className="bg-secondary/50 border-border" />
        </div>
        <div className="col-span-2 space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase tracking-wider">Location</Label>
          <Input value={p.location} onChange={(e) => updatePersonal("location", e.target.value)} className="bg-secondary/50 border-border" />
        </div>
        <div className="col-span-2 space-y-1.5">
          <Label className="text-muted-foreground text-xs uppercase tracking-wider">Summary</Label>
          <Textarea value={p.summary} onChange={(e) => updatePersonal("summary", e.target.value)} className="bg-secondary/50 border-border min-h-[80px] resize-none" />
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;
