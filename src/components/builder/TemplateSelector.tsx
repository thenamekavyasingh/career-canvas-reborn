import { useResume } from "@/context/ResumeContext";
import { TemplateType } from "@/types/resume";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageIcon, X } from "lucide-react";
import { useRef } from "react";

const templates: { id: TemplateType; name: string; desc: string }[] = [
  { id: "classic", name: "Classic", desc: "Centered header, bullet points, traditional academic style" },
  { id: "table", name: "Table", desc: "Logo + table education, brackets in skills, side-aligned contacts" },
  { id: "modern", name: "Modern", desc: "Color accents, thick borders, clean spacing" },
];

const TemplateSelector = () => {
  const { data, setTemplate, setLogoUrl } = useResume();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setLogoUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg font-semibold text-foreground">Template & Logo</h3>

      {/* Template selection */}
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs uppercase tracking-wider">Resume Template</Label>
        <div className="grid grid-cols-3 gap-2">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`p-3 rounded-lg border text-left transition-all ${
                data.template === t.id
                  ? "border-accent bg-accent/10 ring-1 ring-accent"
                  : "border-border bg-secondary/30 hover:border-muted-foreground/30"
              }`}
            >
              <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{t.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Logo upload */}
      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs uppercase tracking-wider">College / University Logo</Label>
        <div className="flex items-center gap-3">
          {data.logoUrl ? (
            <div className="relative">
              <img src={data.logoUrl} alt="Logo" className="w-14 h-14 object-contain rounded-md border border-border bg-white p-1" />
              <button
                onClick={() => setLogoUrl(null)}
                className="absolute -top-1.5 -right-1.5 bg-destructive text-destructive-foreground rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <div className="w-14 h-14 rounded-md border border-dashed border-border flex items-center justify-center bg-secondary/30">
              <ImageIcon className="w-5 h-5 text-muted-foreground" />
            </div>
          )}
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="text-xs"
            >
              {data.logoUrl ? "Change Logo" : "Upload Logo"}
            </Button>
            <p className="text-[10px] text-muted-foreground mt-1">PNG or JPG, shown on Table & Modern templates</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
