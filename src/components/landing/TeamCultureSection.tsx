import { motion } from "framer-motion";
import { FileText, Smartphone, Laptop, Sparkles, Image, ArrowRight } from "lucide-react";

const TeamCultureSection = () => {
  return (
    <section className="py-24 bg-section-light">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-xs uppercase tracking-wider mb-4 block">
            Team culture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Belong together.
          </h2>
          <p className="text-base text-muted-foreground/80 max-w-lg mx-auto leading-relaxed">
            Stay connected, celebrate moments, and create a culture where people feel seen and included — no matter where they work.
          </p>
          <div className="mt-8">
            <button className="bg-[#FFE8CC] hover:bg-[#ffe0b3] text-foreground/90 font-medium px-6 py-2.5 rounded-full text-sm transition-colors">
              Learn more
            </button>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            {/* Posts Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#AEE2FA] rounded-[32px] p-8 pb-0 flex flex-col min-h-[500px] relative overflow-hidden group"
            >
              <div className="mb-4">
                <FileText className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3 tracking-tight">Posts</h3>
              <p className="text-foreground/70 text-base mb-8 leading-snug font-medium max-w-[90%]">
                Keep everyone in the loop with thoughtful, timely updates — big or small.
              </p>

              {/* Internal Post Card Mockup */}
              <div className="bg-white rounded-t-2xl p-6 shadow-xl relative top-2 mx-2">
                <span className="text-xs text-muted-foreground font-medium">1h ago</span>
                <h4 className="text-2xl font-bold text-foreground mt-1 mb-4 tracking-tight">It's moving day</h4>

                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
                    alt="Eva Williams"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                  />
                  <div>
                    <p className="text-sm font-bold text-foreground">Eva Williams</p>
                    <p className="text-xs text-muted-foreground font-medium">Office Manager</p>
                  </div>
                </div>

                <p className="text-[15px] text-foreground/80 leading-relaxed mb-4">
                  Today's the day—we're making the move to our new downtown office! Here's a quick guide to help the day go as smoothly as possible:
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70 bg-gray-50 p-2 rounded-lg w-fit">
                  <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                  </div>
                  Arrival & Access
                </div>
              </div>
            </motion.div>

            {/* Employee Portal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-[#EADCFE] rounded-[32px] p-8 flex flex-col relative overflow-hidden min-h-[700px]"
            >
              <div className="mb-4 relative z-10">
                <Laptop className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3 tracking-tight relative z-10">Employee portal</h3>
              <p className="text-foreground/70 text-base mb-6 leading-snug font-medium max-w-[90%] relative z-10">
                A personal space for every employee to access what they need, anytime.
              </p>

              {/* Cloud Illustration */}
              <div className="absolute inset-0 top-[35%] w-full h-full pointer-events-none">
                {/* Main purple blob - body */}
                <div className="absolute bottom-0 left-0 right-0 h-[65%] w-full bg-[#C9B1FA] z-0 rounded-t-[40px]" />

                {/* Cloud bumps */}
                {/* Center Top */}
                <div className="absolute bottom-[45%] left-1/2 -translate-x-1/2 w-48 h-48 bg-[#C9B1FA] rounded-full z-0" />
                {/* Left Top */}
                <div className="absolute bottom-[30%] left-[-20px] w-40 h-40 bg-[#C9B1FA] rounded-full z-0" />
                {/* Right Top */}
                <div className="absolute bottom-[30%] right-[-20px] w-40 h-40 bg-[#C9B1FA] rounded-full z-0" />

                {/* Face */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
                  <div className="flex gap-16">
                    {/* Eyes - Curved lines */}
                    <div className="w-8 h-4 border-t-[4px] border-[#4A3B69] rounded-t-full" />
                    <div className="w-8 h-4 border-t-[4px] border-[#4A3B69] rounded-t-full" />
                  </div>
                  {/* Smile */}
                  <div className="w-12 h-6 border-b-[4px] border-[#4A3B69] rounded-b-full mt-2" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {/* Events Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-[32px] overflow-hidden flex-1 min-h-[630px] group"
            >
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop" // Changed to a more "outdoor group" vibe similar to ref
                alt="Events"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <div className="mb-4">
                  <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-3 tracking-tight">Events</h3>
                <p className="text-white/90 text-base leading-snug font-medium max-w-[90%]">
                  Plan internal moments that feel like something to look forward to.
                </p>
              </div>
            </motion.div>

            {/* Photo Library Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-[#FBEFA3] rounded-[32px] p-8 pb-0 flex flex-col min-h-[400px] relative overflow-hidden max-h-[400px]"
            >
              <div className="mb-4">
                <Image className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3 tracking-tight">Photo library</h3>
              <p className="text-foreground/70 text-base mb-8 leading-snug font-medium max-w-[90%]">
                Bring your culture to life through the faces, moments, and memories you share.
              </p>

              {/* Phone Mockup */}
              <div className="flex justify-center relative top-2">
                <div className="w-[280px] bg-[#111] rounded-t-[40px] p-3 shadow-2xl border-[6px] border-[#333]">
                  {/* Dynamic Island Area */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

                  {/* Screen Content */}
                  <div className="bg-white rounded-t-[32px] overflow-hidden h-full min-h-[300px] pt-8 px-4 pb-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-2 mb-4">
                      <span className="text-[10px] font-bold">9:41</span>
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 bg-black rounded-full text-[8px] flex items-center justify-center text-white">5G</div>
                        <div className="w-4 h-2.5 border border-black rounded-[2px]" />
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <h5 className="font-semibold text-sm">Photos</h5>
                    </div>

                    <div className="flex justify-between items-center mb-3 px-1">
                      <span className="text-xs font-semibold">Recent &gt;</span>
                      <span className="text-xs text-blue-500">Select</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1 mb-6">
                      <div className="aspect-square rounded-sm overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-square rounded-sm overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-square rounded-sm overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-square rounded-sm overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-square rounded-sm overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-square rounded-sm overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    <div className="text-xs font-bold mb-2">Albums</div>
                    <div className="flex gap-2 overflow-x-hidden">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg shrink-0" />
                      <div className="w-24 h-24 bg-gray-100 rounded-lg shrink-0" />
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCultureSection;
