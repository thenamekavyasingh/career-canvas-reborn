import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PersonalSection = () => {
  const { data, updatePersonal } = useResume();
  const p = data.personal;

  const field = (label: string, key: keyof typeof p) => (
    <div className="space-y-1.5">
      <Label className="text-muted-foreground text-xs uppercase tracking-wider">{label}</Label>
      <Input value={p[key]} onChange={(e) => updatePersonal(key, e.target.value)} className="bg-secondary/50 border-border" />
    </div>
  );

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-semibold text-foreground">Personal Information</h3>
      <div className="grid grid-cols-2 gap-4">
        {field("Full Name", "name")}
        {field("Title / Degree", "title")}
        {field("Email", "email")}
        {field("Phone", "phone")}
        {field("LinkedIn", "linkedin")}
        {field("GitHub", "github")}
        {field("LeetCode", "leetcode")}
        {field("Location", "location")}
      </div>
    </div>
  );
};

export default PersonalSection;
