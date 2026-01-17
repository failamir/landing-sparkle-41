import { motion } from "framer-motion";
import { FileText, Receipt, FileSignature, Award } from "lucide-react";

const EverydayHrBento = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-violet-500 font-medium text-xs uppercase tracking-wider mb-3 block">
                        Documents
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Everything in
                        <br />
                        the right place.
                    </h2>
                    <p className="text-muted-foreground">Keep legal, safe, and on the same page.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Documents Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#7EE7EA] rounded-[40px] p-10 min-h-[500px] flex flex-col relative overflow-hidden"
                    >
                        <div className="mb-4">
                            <FileText className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">Documents</h3>
                        <p className="text-foreground/70 text-sm font-medium">All your HR docs, nicely organized.</p>

                        {/* Folder Illustration */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-40 bg-[#4FD1D9] rounded-xl flex items-center justify-center shadow-lg">
                            <div className="w-56 h-48 bg-[#4FD1D9] rounded-xl absolute top-6 rotate-3 opacity-50" />
                            {/* Main Folder Face */}
                            <div className="w-64 h-48 bg-[#5CE1E6] rounded-xl relative z-10 flex items-center justify-center shadow-sm">
                                {/* Face on folder */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex gap-8">
                                        <div className="w-3 h-2 border-b-2 border-black/60 rounded-full" />
                                        <div className="w-3 h-2 border-b-2 border-black/60 rounded-full" />
                                    </div>
                                    <div className="w-4 h-2 border-b-2 border-black/60 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Expenses Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-[40px] overflow-hidden min-h-[500px] relative group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop"
                            alt="Expenses"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-0 left-0 p-10 text-white w-full bg-gradient-to-t from-black/60 to-transparent">
                            <div className="mb-4">
                                <Receipt className="w-8 h-8 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">Expenses</h3>
                            <p className="text-white/90 text-sm font-medium">Fast, easy, and fully approved in seconds.</p>
                        </div>
                    </motion.div>

                    {/* Contracts Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#FFD6E0] rounded-[40px] p-10 min-h-[600px] flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[80%] h-full bg-[#FFC107] rounded-bl-full z-0" />

                        <div className="relative z-10">
                            <div className="mb-4">
                                <FileSignature className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">Contracts</h3>
                            <p className="text-foreground/70 text-sm font-medium max-w-[200px]">Create, sign, and store contracts without the paper cuts.</p>
                        </div>

                        {/* Pencil Illustration */}
                        <div className="absolute bottom-[-20px] left-8 w-32 h-[400px] bg-[#FFC107] rotate-[-15deg] rounded-b-lg border-x-4 border-yellow-500/20 z-10 flex flex-col items-center">
                            {/* Tip */}
                            <div className="w-full h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-t-[80px] border-t-[#FFE082] absolute -top-[80px]" />
                            <div className="w-full h-0 border-l-[64px] border-l-transparent border-r-[64px] border-r-transparent border-t-[30px] border-t-[#333] absolute -top-[30px]" />

                            {/* Face */}
                            <div className="mt-20 flex flex-col items-center gap-2 rotate-[15deg]">
                                <div className="flex gap-4">
                                    <div className="w-3 h-3 bg-black/80 rounded-full" />
                                    <div className="w-3 h-3 bg-black/80 rounded-full" />
                                </div>
                                <div className="w-6 h-3 border-b-2 border-black/60 rounded-full" />
                            </div>
                        </div>

                    </motion.div>

                    {/* Certificates Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#E0DAFD] rounded-[40px] p-10 min-h-[600px] flex flex-col relative overflow-hidden"
                    >
                        <div className="mb-4">
                            <Award className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">Certificates</h3>
                        <p className="text-foreground/70 text-sm font-medium">Track licenses, credentials, and valid dates.</p>

                        {/* Phone Mockup */}
                        <div className="absolute bottom-0 right-0 w-[80%] h-[70%] bg-white rounded-tl-[32px] border-t-[8px] border-l-[8px] border-[#333] shadow-xl overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full" />
                                    <div className="w-32 h-3 bg-gray-100 rounded-full" />
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-100" />
                                    <div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-100" />
                                    <div className="w-full h-12 bg-gray-50 rounded-lg border border-gray-100" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EverydayHrBento;
