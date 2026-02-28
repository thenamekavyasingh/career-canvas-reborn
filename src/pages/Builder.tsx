import { useRef } from "react";
import { Link } from "react-router-dom";
import { ResumeProvider } from "@/context/ResumeContext";
import PersonalSection from "@/components/builder/PersonalSection";
import EducationSection from "@/components/builder/EducationSection";
import ProjectsSection from "@/components/builder/ProjectsSection";
import SkillsSection from "@/components/builder/SkillsSection";
import AchievementsSection from "@/components/builder/AchievementsSection";
import PositionsSection from "@/components/builder/PositionsSection";
import ResumePreview from "@/components/builder/ResumePreview";
import { ArrowLeft, Download } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

const BuilderContent = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = async () => {
    const el = document.getElementById("resume-preview");
    if (!el) return;

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-card/80 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display font-semibold text-sm">Resume Builder</span>
        </Link>
        <Button onClick={handleExportPDF} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display gap-2">
          <Download className="w-4 h-4" /> Export PDF
        </Button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-[440px] shrink-0 border-r border-border">
          <ScrollArea className="h-full">
            <div className="p-6 space-y-6">
              <PersonalSection />
              <Separator />
              <EducationSection />
              <Separator />
              <ProjectsSection />
              <Separator />
              <SkillsSection />
              <Separator />
              <AchievementsSection />
              <Separator />
              <PositionsSection />
            </div>
          </ScrollArea>
        </div>

        <div className="flex-1 bg-secondary/30 overflow-auto">
          <div className="p-6" ref={previewRef}>
            <ResumePreview />
          </div>
        </div>
      </div>
    </div>
  );
};

const BuilderPage = () => (
  <ResumeProvider>
    <BuilderContent />
  </ResumeProvider>
);

export default BuilderPage;
