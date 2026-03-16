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
      style={{
        width: "794px",
        minHeight: "1123px",
        padding: "0.6in 0.7in",
        background: "#ffffff",
        boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
        margin: "0 auto",
      }}
    >
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;
