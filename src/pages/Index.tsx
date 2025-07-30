import Header from "@/components/Header";
import SmartSidebar from "@/components/Sidebar/SmartSidebar";
import CalendarGrid from "@/components/Calendar/CalendarGrid";
import heroImage from "@/assets/hero-calendar.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Smart Calendar App
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            AI-powered scheduling that learns your patterns, optimizes your time, and keeps you productive
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm text-primary font-medium">AI is analyzing your optimal schedule...</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SmartSidebar />
        
        {/* Calendar Content */}
        <main className="flex-1 p-6">
          <CalendarGrid />
        </main>
      </div>
    </div>
  );
};

export default Index;