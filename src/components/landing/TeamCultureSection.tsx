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
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* Posts Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#e8e4f8] rounded-3xl p-6 flex flex-col"
            >
              <div className="w-10 h-10 mb-4">
                <FileText className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Posts</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Keep everyone in the loop with thoughtful, timely updates — big or small.
              </p>
              
              {/* Sample Post Card */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <span className="text-xs text-muted-foreground">1h ago</span>
                <h4 className="text-lg font-bold text-foreground mt-1">It's moving day</h4>
                <div className="flex items-center gap-3 mt-3">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                    alt="Eva Williams"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Eva Williams</p>
                    <p className="text-xs text-muted-foreground">Office Manager</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Today's the day—we're making the move to our new downtown office! Here's a quick guide to help the day go as smoothly as possible:
                </p>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-foreground font-medium">
                  <span className="w-4 h-4 rounded-full border-2 border-foreground flex items-center justify-center text-[8px]">◎</span>
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
              className="bg-[#ddd6f3] rounded-3xl p-6 flex flex-col relative overflow-hidden flex-1 min-h-[280px]"
            >
              <div className="w-10 h-10 mb-4">
                <Users className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Employee portal</h3>
              <p className="text-muted-foreground text-sm">
                A personal space for every employee to access what they need, anytime.
              </p>
              
              {/* Decorative Smiley Cloud */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8">
                <div className="relative">
                  <div className="w-40 h-24 bg-[#c4b5fd] rounded-t-full" />
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="flex gap-6 mb-2">
                      <div className="w-2.5 h-2.5 bg-violet-700 rounded-full" />
                      <div className="w-2.5 h-2.5 bg-violet-700 rounded-full" />
                    </div>
                    <div className="w-8 h-4 border-b-2 border-violet-700 rounded-b-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Events Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden flex-1 min-h-[320px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=500&fit=crop" 
                alt="Events" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="w-10 h-10 mb-3">
                  <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Events</h3>
                <p className="text-white/80 text-sm">
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
              className="bg-[#fef3e2] rounded-3xl p-6 flex flex-col"
            >
              <div className="w-10 h-10 mb-4">
                <Image className="w-8 h-8 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Photo library</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Bring your culture to life through the faces, moments, and memories you share.
              </p>
              
              {/* Phone Mockup */}
              <div className="flex justify-center">
                <div className="w-52 bg-white rounded-3xl p-2 shadow-lg border border-gray-200">
                  <div className="bg-gray-50 rounded-2xl p-3">
                    <div className="flex items-center justify-center text-[10px] text-muted-foreground mb-2">
                      <span>9:41</span>
                    </div>
                    <div className="text-sm font-semibold text-foreground text-center mb-3">Photos</div>
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-xs font-medium text-foreground">Recent</span>
                      <span className="text-xs text-muted-foreground">&gt;</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 mb-3">
                      <div className="aspect-square bg-gradient-to-br from-orange-300 to-rose-300 rounded-sm" />
                      <div className="aspect-square bg-gradient-to-br from-blue-300 to-purple-300 rounded-sm" />
                      <div className="aspect-square bg-gradient-to-br from-green-300 to-teal-300 rounded-sm" />
                    </div>
                    <div className="text-xs font-medium text-foreground">Albums</div>
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
