import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-resume.jpg";

const features = [
  {
    icon: "🎨",
    title: "Beautiful Templates",
    description: "Choose from professionally designed templates that stand out.",
  },
  {
    icon: "⚡",
    title: "Build in Minutes",
    description: "Intuitive interface that lets you create your resume fast.",
  },
  {
    icon: "🔒",
    title: "Your Data Stays Local",
    description: "Everything is stored in your browser. No sign-up required.",
  },
  {
    icon: "📄",
    title: "Live Preview",
    description: "See changes in real-time as you type your information.",
  },
];

const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] hero-bg flex items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
              The simplest way to build a
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Professional{" "}
              <span className="text-gradient">Resume</span>
            </h1>
            <p className="text-primary-foreground/60 text-lg md:text-xl max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Create a stunning, ATS-friendly resume in minutes. No sign-up needed — just start building.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button
                size="lg"
                onClick={() => navigate("/builder")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-display text-lg px-10 py-6 rounded-xl glow-accent transition-all hover:scale-105"
              >
                Start Building →
              </Button>
            </div>
          </div>
          <div className="hidden md:block animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <img src={heroImage} alt="Professional resume preview" className="rounded-2xl card-shadow-hover animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const LandingFeatures = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Why choose us?
      </h2>
      <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
        Everything you need to create a professional resume that gets you hired.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  </section>
);

const LandingFooter = () => (
  <footer className="py-12 bg-secondary/50 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-xl font-semibold text-foreground mb-2">Resume Builder</p>
      <p className="text-muted-foreground text-sm">Build professional resumes with ease.</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <LandingHero />
    <LandingFeatures />
    <LandingFooter />
  </div>
);

export default Index;
