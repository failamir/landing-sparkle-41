import { motion } from "framer-motion";
import { Users, Calendar, FileText, UserPlus, Receipt } from "lucide-react";

interface FeatureItem {
    icon: React.ElementType;
    label: string;
}

interface ComplexFeatureSectionProps {
    tag: string;
    title: React.ReactNode;
    description: string;
    features?: string[];
    visual: React.ReactNode;
    reversed?: boolean;
    bgLight?: boolean;
}

const featureIcons: Record<string, React.ElementType> = {
    "People directory": Users,
    "Time off": Calendar,
    "Contracts & documents": FileText,
    "Onboarding & offboarding": UserPlus,
    "Expenses": Receipt,
    "1-1 Meetings": Users,
    "Goals": Users,
    "Forms": FileText,
    "Skills": Users,
    "Analytics": Users,
};

const ComplexFeatureSection = ({
    tag,
    title,
    description,
    features = [],
    visual,
    reversed = false,
    bgLight = false,
}: ComplexFeatureSectionProps) => {
    // Split features into two columns if they exist
    const midpoint = Math.ceil(features.length / 2);
    const leftFeatures = features.slice(0, midpoint);
    const rightFeatures = features.slice(midpoint);

    return (
        <section className={`py-24 ${bgLight ? 'bg-section-light' : 'bg-background'}`}>
            <div className="max-w-[1000px] mx-auto px-6">
                <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <span className="text-primary font-medium text-xs uppercase tracking-wider mb-3 block">
                            {tag}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {description}
                        </p>

                        {/* Feature List - Optional */}
                        {features.length > 0 && (
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                <div className="flex flex-col gap-4">
                                    {leftFeatures.map((feature) => {
                                        const Icon = featureIcons[feature] || Users;
                                        return (
                                            <div key={feature} className="flex items-center gap-3">
                                                <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                                                <span className="text-foreground font-medium">{feature}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex flex-col gap-4">
                                    {rightFeatures.map((feature) => {
                                        const Icon = featureIcons[feature] || Users;
                                        return (
                                            <div key={feature} className="flex items-center gap-3">
                                                <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                                                <span className="text-foreground font-medium">{feature}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex-1 w-full"
                    >
                        {visual}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ComplexFeatureSection;
