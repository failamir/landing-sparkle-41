import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const EverydayHrHero = () => {
    return (
        <section className="pt-32 pb-16 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
                        Let the essentials
                        <br />
                        run smoothly.
                    </h1>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Time off, onboarding, docs, and more — all in one sunny, easy place.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="rounded-full px-8 bg-[#7dd3fc] hover:bg-[#7dd3fc]/90 text-foreground font-semibold"
                        >
                            Book demo
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="rounded-full px-8 bg-sky-100 text-sky-600 hover:bg-sky-200"
                        >
                            Try for free
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EverydayHrHero;
