import { useResume } from "@/context/ResumeContext";
import ClassicTemplate from "@/components/builder/templates/ClassicTemplate";
import TableTemplate from "@/components/builder/templates/TableTemplate";
import ModernTemplate from "@/components/builder/templates/ModernTemplate";

const ResumePreview = () => {
  const { data } = useResume();

  const renderTemplate = () => {
    switch (data.template) {
      case "table":
        return <TableTemplate data={data} />;
      case "modern":
        return <ModernTemplate data={data} />;
      case "classic":
      default:
        return <ClassicTemplate data={data} />;
    }
  };

  return (
    <div
      id="resume-preview"
      className="bg-white mx-auto shadow-lg"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "10mm 12mm",
      }}
    >
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;
