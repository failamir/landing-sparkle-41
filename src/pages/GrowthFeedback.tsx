import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import GrowthFeedbackHero from "@/components/landing/GrowthFeedbackHero";
import FeatureSection from "@/components/landing/FeatureSection";

const GrowthFeedback = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <GrowthFeedbackHero />

            {/* 1:1 Meetings Section */}
            <FeatureSection
                tag="1:1 Meetings"
                title={<>Make check-ins<br />part of the rhythm</>}
                description="Support bold careers, one conversation at a time. For ongoing alignment, growth, and clarity in the everyday."
                features={["Weekly check-ins", "Action items", "Private notes", "History"]}
                image="https://framerusercontent.com/images/a3J1B7oT2gjWA58kSC4c0sWitA.png" // Placeholder, reusing existing
                imageAlt="1:1 Meeting Dashboard"
                bgLight={true}
            />

            {/* Goals Section */}
            <FeatureSection
                tag="Goals"
                title={<>Help your team<br />grow with purpose.</>}
                description="Set transparent goals, understand strengths, and support bold careers — with tools that make growth part of every week."
                features={["Goal tracking", "Progress updates", "Team alignment", "Visual timelines"]}
                image="https://framerusercontent.com/images/wZj3XICZfKe91G2EmzUSJc88Uk.png" // Placeholder
                imageAlt="Goals Dashboard"
                reversed={true}
            />

            {/* Reviews / Feedback Section */}
            <FeatureSection
                tag="People analytics"
                title={<>See what’s<br />working</>}
                description="Turn unruly data into meaningful order. Spot trends, support growth, and make better decisions."
                features={["Pulse surveys", "Performance reviews", "Feedback cycles", "Analytics"]}
                image="https://framerusercontent.com/images/a3J1B7oT2gjWA58kSC4c0sWitA.png" // Placeholder
                imageAlt="Analytics Dashboard"
                bgLight={true}
            />

            <CTASection />
            <Footer />
        </div>
    );
};

export default GrowthFeedback;
