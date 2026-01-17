import Navbar from "@/components/landing/Navbar";
import TeamCultureHero from "@/components/landing/TeamCultureHero";
import ComplexFeatureSection from "@/components/landing/ComplexFeatureSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import { FileText, Laptop, Sparkles, Image } from "lucide-react";

const TeamCulture = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <TeamCultureHero />

            {/* Section 1: Keep everyone in the loop (Posts) */}
            <ComplexFeatureSection
                tag="Posts"
                title="Keep everyone in the loop."
                description="Keep your team informed with updates, big or small. From new hires to moving days, make sure everyone knows what's happening."
                visual={
                    <div className="bg-[#AEE2FA] rounded-[32px] p-8 pb-0 flex flex-col min-h-[500px] relative overflow-hidden group">
                        <div className="mb-4">
                            <FileText className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-3 tracking-tight">Exciting times ahead</h3>
                        <p className="text-foreground/70 text-base mb-8 leading-snug font-medium max-w-[90%]">
                            Keep everyone in the loop with thoughtful, timely updates — big or small.
                        </p>

                        {/* Internal Post Card Mockup - Copied & Adapted from TeamCultureSection */}
                        <div className="bg-white rounded-t-2xl p-6 shadow-xl relative top-2 mx-2">
                            <span className="text-xs text-muted-foreground font-medium">1h ago</span>
                            <h4 className="text-2xl font-bold text-foreground mt-1 mb-4 tracking-tight">Updates from Product</h4>

                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
                                    alt="Eva Williams"
                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                                />
                                <div>
                                    <p className="text-sm font-bold text-foreground">Eva Williams</p>
                                    <p className="text-xs text-muted-foreground font-medium">Product Lead</p>
                                </div>
                            </div>

                            <p className="text-[15px] text-foreground/80 leading-relaxed mb-4">
                                First, a huge thanks to everyone who helped us crush our goals last quarter! We're excited to share our roadmap for the next few months, including some highly requested features like <span className="font-bold">Team Gallery</span> and <span className="font-bold">Dark Mode</span>.
                            </p>

                            <div className="flex gap-2">
                                <span className="text-lg">💛</span>
                                <span className="text-lg">👍</span>
                                <span className="text-lg">🚀</span>
                            </div>

                        </div>
                    </div>
                }
                bgLight
            />

            {/* Section 2: Make space for real moments (Events) */}
            <ComplexFeatureSection
                tag="Moments that matter"
                title="Make space for real moments."
                description="Culture isn't just about work. Simple gives you the space to organize get-togethers, coffee chats, and team buildings with ease."
                reversed
                visual={
                    <div className="grid gap-5">
                        {/* Profile Cards Stack */}
                        <div className="bg-[#FAD9EA] rounded-[32px] p-8 flex flex-col relative overflow-hidden min-h-[400px]">
                            <div className="mb-4 text-foreground/80">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">Profile pages</h3>
                            <p className="text-foreground/70 mb-6">More than just a job title. Let people share who they really are.</p>

                            {/* Phone Mockup for Profile - simplified */}
                            <div className="relative mx-auto w-[220px] bg-black rounded-[2rem] border-[4px] border-black overflow-hidden shadow-2xl">
                                <div className="h-full bg-white flex flex-col items-center pt-8 pb-4 px-4 text-center">
                                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop" className="w-16 h-16 rounded-full mb-2 object-cover" />
                                    <h4 className="font-bold text-sm">Darlene Robertson</h4>
                                    <p className="text-[10px] text-gray-500 mb-4">UX Designer</p>
                                    <div className="w-full h-16 bg-gradient-to-r from-pink-200 to-blue-200 rounded-xl mb-2 opacity-50"></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            {/* Quiz / Face Card - simplified */}
                            <div className="bg-[#FBEFA3] rounded-[32px] p-6 flex flex-col min-h-[300px]">
                                <div className="mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 2-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-1">Face Quiz</h3>
                                <p className="text-sm text-foreground/70 mb-4">Help new hires learn names the fun way.</p>
                            </div>

                            {/* Events Card - dark */}
                            <div className="relative rounded-[32px] overflow-hidden min-h-[300px] flex flex-col justify-end p-6 group">
                                <img
                                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop"
                                    alt="Events"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="relative z-10 text-white">
                                    <Sparkles className="w-6 h-6 mb-2" />
                                    <h3 className="text-xl font-bold">Events</h3>
                                    <p className="text-sm opacity-90">Plan team retreats & lunches.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* Section 3: Build trust into the system (Photo Library) */}
            <ComplexFeatureSection
                tag="Shared history"
                title="Build trust into the system."
                description="Centralize your company photos and memories. It's not just storage, it's your company's shared history available for everyone."
                visual={
                    <div className="grid gap-5">
                        {/* Main Photo Card */}
                        <div className="bg-[#D1F5EE] rounded-[32px] p-8 pb-0 flex flex-col min-h-[400px] relative overflow-hidden">
                            <div className="mb-4">
                                <Image className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-3 tracking-tight">Photo library</h3>
                            <p className="text-foreground/70 text-base mb-8 leading-snug font-medium max-w-[90%]">
                                Always accessible for the whole team, safely stored, and easy to find.
                            </p>

                            {/* Simple Grid Mockup */}
                            <div className="grid grid-cols-3 gap-2 opacity-80 relative top-4">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="aspect-square bg-emerald-200/50 rounded-lg animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                }
                bgLight
            />
            {/* Removed redundant spacer */}

            <CTASection />
            <Footer />
        </div>
    );
};

export default TeamCulture;
