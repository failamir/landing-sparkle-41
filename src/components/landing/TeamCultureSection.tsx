import { motion } from "framer-motion";
import { FileText, Users, Sparkles, Image } from "lucide-react";

const TeamCultureSection = () => {
  return (
    <section className="py-24 bg-section-light">
      <div className="max-w-[840px] mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-xs uppercase tracking-wider mb-4 block">
            Team culture
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-4">
            Belong together.
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto">
            Stay connected, celebrate moments, and create a culture where people feel seen and included — no matter where they work.
          </p>
        </motion.div>

        {/* Bento Grid - Asymmetric 2 columns */}
        <div className="grid md:grid-cols-2 gap-3">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {/* Posts Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#e0f0ff] rounded-2xl p-5 flex flex-col min-h-[280px]"
            >
              <div className="mb-3">
                <FileText className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Posts</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Keep everyone in the loop with thoughtful, timely updates — big or small.
              </p>
              
              {/* Sample Post Card */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <span className="text-[11px] text-muted-foreground">1h ago</span>
                <h4 className="text-base font-bold text-foreground mt-0.5">It's moving day</h4>
                <div className="flex items-center gap-2.5 mt-2.5">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                    alt="Eva Williams"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Eva Williams</p>
                    <p className="text-[11px] text-muted-foreground">Office Manager</p>
                  </div>
                </div>
                <p className="text-[13px] text-muted-foreground mt-2.5 leading-relaxed">
                  Today's the day—we're making the move to our new downtown office! Here's a quick guide to help the day go as smoothly as possible:
                </p>
                <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-foreground font-medium">
                  <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-muted-foreground/60 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                  </span>
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
              className="bg-[#e0d8f4] rounded-2xl p-5 flex flex-col relative overflow-hidden flex-1 min-h-[320px]"
            >
              <div className="mb-3">
                <Users className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Employee portal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A personal space for every employee to access what they need, anytime.
              </p>
              
              {/* Decorative Smiley Cloud */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6">
                <div className="relative">
                  <div className="w-36 h-20 bg-[#c9b8f7] rounded-t-full" />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="flex gap-5 mb-1.5">
                      <div className="w-2 h-2 bg-violet-800/70 rounded-full" />
                      <div className="w-2 h-2 bg-violet-800/70 rounded-full" />
                    </div>
                    <div className="w-6 h-3 border-b-2 border-violet-800/70 rounded-b-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            {/* Events Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden flex-1 min-h-[320px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=500&fit=crop" 
                alt="Events" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <div className="mb-2">
                  <Sparkles className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-1">Events</h3>
                <p className="text-white/80 text-sm leading-relaxed">
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
              className="bg-[#fff8dc] rounded-2xl p-5 flex flex-col min-h-[280px]"
            >
              <div className="mb-3">
                <Image className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Photo library</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                Bring your culture to life through the faces, moments, and memories you share.
              </p>
              
              {/* Phone Mockup */}
              <div className="flex justify-center">
                <div className="w-44 bg-white rounded-2xl p-1.5 shadow-md border border-gray-100">
                  <div className="bg-gray-50 rounded-xl p-2.5">
                    <div className="flex items-center justify-center text-[9px] text-muted-foreground mb-1.5">
                      <span>9:41</span>
                    </div>
                    <div className="text-xs font-semibold text-foreground text-center mb-2">Photos</div>
                    <div className="flex items-center gap-1 mb-1.5">
                      <span className="text-[10px] font-medium text-foreground">Recent</span>
                      <span className="text-[10px] text-muted-foreground">&gt;</span>
                    </div>
                    <div className="grid grid-cols-3 gap-0.5 mb-2">
                      <div className="aspect-square bg-gradient-to-br from-orange-300 to-rose-300 rounded-sm" />
                      <div className="aspect-square bg-gradient-to-br from-blue-300 to-purple-300 rounded-sm" />
                      <div className="aspect-square bg-gradient-to-br from-green-300 to-teal-300 rounded-sm" />
                    </div>
                    <div className="text-[10px] font-medium text-foreground">Albums</div>
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
