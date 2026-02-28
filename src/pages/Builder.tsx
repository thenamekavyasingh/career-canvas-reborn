import { Link } from "react-router-dom";
import { ResumeProvider } from "@/context/ResumeContext";
import PersonalSection from "@/components/builder/PersonalSection";
import ExperienceSection from "@/components/builder/ExperienceSection";
import EducationSection from "@/components/builder/EducationSection";
import SkillsSection from "@/components/builder/SkillsSection";
import ResumePreview from "@/components/builder/ResumePreview";
import { ArrowLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const BuilderPage = () => {
  return (
    <ResumeProvider>
      <div className="h-screen flex flex-col bg-background">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-card/80 backdrop-blur-sm">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display font-semibold text-sm">Resume Builder</span>
          </Link>
        </header>

        {/* Main content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Editor panel */}
          <div className="w-1/2 border-r border-border">
            <ScrollArea className="h-full">
              <div className="p-6 space-y-6">
                <PersonalSection />
                <Separator />
                <ExperienceSection />
                <Separator />
                <EducationSection />
                <Separator />
                <SkillsSection />
              </div>
            </ScrollArea>
          </div>

          {/* Preview panel */}
          <div className="w-1/2 bg-secondary/30">
            <ScrollArea className="h-full">
              <div className="p-6">
                <ResumePreview />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </ResumeProvider>
  );
};

export default BuilderPage;
