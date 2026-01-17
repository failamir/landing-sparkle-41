import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, Sparkles, Image } from "lucide-react";

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
          className="max-w-xl mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Team culture
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
            Belong together.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay connected, celebrate moments, and create a culture where people feel seen and included — no matter where they work.
          </p>
          <Button variant="ghost" className="group">
            Learn more 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Posts Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 rounded-3xl p-6 flex flex-col"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Posts</h3>
            <p className="text-muted-foreground mb-6">
              Keep everyone in the loop with thoughtful, timely updates — big or small.
            </p>
            
            {/* Sample Post Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <span className="text-xs text-muted-foreground">1h ago</span>
              <h4 className="text-lg font-bold text-foreground mt-1">It's moving day</h4>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400" />
                <div>
                  <p className="text-sm font-medium text-foreground">Eva Williams</p>
                  <p className="text-xs text-muted-foreground">Office Manager</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Today's the day—we're making the move to our new downtown office! Here's a quick guide to help the day go as smoothly as possible:
              </p>
              <p className="text-xs text-muted-foreground mt-3">📍 Arrival & Access</p>
            </div>
          </motion.div>

          {/* Events Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden min-h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=500&fit=crop" 
              alt="Events" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Events</h3>
              <p className="text-white/80 text-sm">
                Plan internal moments that feel like something to look forward to.
              </p>
            </div>
          </motion.div>

          {/* Employee Portal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-violet-100 rounded-3xl p-6 flex flex-col relative overflow-hidden min-h-[350px]"
          >
            <div className="w-12 h-12 bg-violet-400 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-violet-900 mb-2">Employee portal</h3>
            <p className="text-violet-700">
              A personal space for every employee to access what they need, anytime.
            </p>
            
            {/* Decorative Smiley */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
              <div className="w-32 h-32 bg-violet-400 rounded-full flex items-center justify-center">
                <div className="flex gap-3">
                  <div className="w-3 h-3 bg-violet-900 rounded-full" />
                  <div className="w-3 h-3 bg-violet-900 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photo Library Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-amber-50 rounded-3xl p-6 flex flex-col"
          >
            <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mb-4">
              <Image className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Photo library</h3>
            <p className="text-muted-foreground mb-6">
              Bring your culture to life through the faces, moments, and memories you share.
            </p>
            
            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="w-48 bg-white rounded-3xl p-2 shadow-lg border border-gray-200">
                <div className="bg-gray-100 rounded-2xl p-3">
                  <div className="text-xs font-medium text-foreground mb-2">Photos</div>
                  <div className="text-sm font-semibold text-foreground mb-2">Recent &gt;</div>
                  <div className="grid grid-cols-4 gap-1 mb-3">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-orange-200 to-pink-200 rounded-sm" />
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-foreground">Albums</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamCultureSection;
