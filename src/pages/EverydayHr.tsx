import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import CTASection from "@/components/landing/CTASection";
import EverydayHrHero from "@/components/landing/EverydayHrHero";
import FeatureSection from "@/components/landing/FeatureSection";
import EverydayHrBento from "@/components/landing/EverydayHrBento";
import heroDashboard from "@/assets/hero-dashboard.png"; // Reusing existing assets
import { Clock, Navigation, Timer } from "lucide-react";

const EverydayHr = () => {
    // Custom feature config for this page
    const featuresDashboard = [
        "Time off",
        "Weather Planner",
        "Time reporting",
    ];

    const featuresOnboarding = [
        "Onboarding",
        "Offboarding"
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <EverydayHrHero />

            {/* Everyday Effortless Section */}
            <FeatureSection
                tag="Team Collections"
                title={<>The everyday,<br />made effortless</>}
                description="Take care of the small things — so your team has room for the big work. From managing time off to planning your week, do it all easily, all in one calm, central place."
                features={featuresDashboard}
                image={heroDashboard}
                imageAlt="Everyday HR Dashboard"
                bgLight={true}
            />

            <EverydayHrBento />

            {/* Onboarding Section */}
            <FeatureSection
                tag="Onboarding & Offboarding"
                title={<>From day one to<br />day last.</>}
                description="Set the tone with a really (really) nice welcome — and leave a lasting impression on your team's last day."
                features={featuresOnboarding}
                image="https://framerusercontent.com/images/wZj3XICZfKe91G2EmzUSJc88Uk.png" // Using the same img for now as placeholder or reuse
                imageAlt="Onboarding Dashboard"
            />

            <CTASection />
            <Footer />
        </div>
    );
};

export default EverydayHr;
