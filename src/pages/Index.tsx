import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BuiltForPeopleSection from "@/components/landing/BuiltForPeopleSection";
import FeatureSection from "@/components/landing/FeatureSection";
import TeamCultureSection from "@/components/landing/TeamCultureSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BuiltForPeopleSection />
      
      <FeatureSection
        tag="Everyday HR"
        title={<>All the basics,<br />done beautifully.</>}
        description="From time off to contracts, Aboard takes care of the everyday stuff without feeling like work. It's everything your team needs to stay organized and supported — without the usual friction."
        features={["People directory", "Time off", "Contracts & documents", "Onboarding & offboarding", "Expenses"]}
        image="https://framerusercontent.com/images/wZj3XICZfKe91G2EmzUSJc88Uk.png"
        imageAlt="Everyday HR Dashboard"
      />

      <TeamCultureSection />

      <FeatureSection
        tag="Growth & feedback"
        title="Grow your people."
        description="Support your team with regular 1-1s, clear goals, and feedback that actually happens. Because real growth comes from the conversations in between the big moments."
        features={["1-1 Meetings", "Goals", "Forms", "Skills", "Analytics"]}
        image="https://framerusercontent.com/images/a3J1B7oT2gjWA58kSC4c0sWitA.png"
        imageAlt="Growth & Feedback Dashboard"
        reversed
        bgLight
      />

      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
