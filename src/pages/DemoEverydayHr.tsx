import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Search, Bell, MoreHorizontal, Plus, Clock, ArrowRight, FileText, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const DemoEverydayHr = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [messageInput, setMessageInput] = useState("");
    const [showPendingRequests, setShowPendingRequests] = useState(false);

    const navTabs = ["Home", "Time-off", "Whistleblowing", "People", "1-on-1", "Onboarding"];

    const teamMembers = [
        { name: "Lillian Peterson", avatar: "https://i.pravatar.cc/150?img=1", initials: "LP" },
        { name: "Maria J. Go", avatar: "https://i.pravatar.cc/150?img=2", initials: "MG", away: true },
        { name: "Lisa King", avatar: "https://i.pravatar.cc/150?img=3", initials: "LK" },
        { name: "John Kamau", avatar: "https://i.pravatar.cc/150?img=4", initials: "JK", away: true },
        { name: "Sara Mitchell", avatar: "https://i.pravatar.cc/150?img=5", initials: "SM" },
        { name: "Kathy Nelson", avatar: "https://i.pravatar.cc/150?img=6", initials: "KN" },
        { name: "Michael Wanjala", avatar: "https://i.pravatar.cc/150?img=7", initials: "MW" },
        { name: "Rebecca Wilson", avatar: "https://i.pravatar.cc/150?img=8", initials: "RW" },
        { name: "Samuel Chege", avatar: "https://i.pravatar.cc/150?img=9", initials: "SC" },
    ];

    const dates = [
        { day: 17, month: "Apr" }, { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 },
        { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26, isToday: true },
        { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 },
        { day: 1, month: "May" }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 },
        { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 },
    ];

    const timeOffBlocks = [
        { row: 0, startCol: 9, span: 2, emoji: "🤒", type: "sick", status: "approved" },
        { row: 1, startCol: 10, span: 3, emoji: "🌴", type: "vacation", status: "approved" },
        { row: 1, startCol: 17, span: 1, emoji: "😌", type: "personal", status: "pending" },
        { row: 1, startCol: 21, span: 2, emoji: "🏖️", type: "vacation", status: "pending" },
        { row: 3, startCol: 14, span: 3, emoji: "🏖️", type: "vacation", status: "pending" },
        { row: 4, startCol: 15, span: 3, emoji: "😷", type: "sick", status: "approved" },
        { row: 5, startCol: 15, span: 1, emoji: "🤒", type: "sick", status: "approved" },
        { row: 8, startCol: 21, span: 6, emoji: "🏖️", type: "vacation", status: "approved" },
    ];

    const pendingRequests = [
        { name: "Sarah Parker", avatar: "https://i.pravatar.cc/150?img=10", type: "Parental leave", emoji: "👶", time: "1d", status: "pending", group: "Today" },
        { name: "Lisa King", avatar: "https://i.pravatar.cc/150?img=3", type: "Parental leave", emoji: "👶", time: "2d", status: "approved", group: "Today" },
        { name: "John Kamau", avatar: "https://i.pravatar.cc/150?img=4", type: "Vacation", emoji: "🏖️", time: "2d", status: "rejected", group: "Past week" },
        { name: "Michael Wanjala", avatar: "https://i.pravatar.cc/150?img=7", type: "Parental leave", emoji: "👶", time: "2d", status: "pending", group: "Past month" },
    ];

    const quickActions = [
        { icon: "🏖️", label: "Request time off" },
        { icon: "📋", label: "Expenses" },
        { icon: "📄", label: "Documents" },
        { icon: "⏱️", label: "Time Reporting" },
    ];

    const teammates = [
        { name: "Tomas Santos", avatar: "https://i.pravatar.cc/150?img=12", status: "🏖️ Away" },
        { name: "Sandra Lavers", avatar: "https://i.pravatar.cc/150?img=13", role: "Product Designer" },
        { name: "Helena Saez", avatar: "https://i.pravatar.cc/150?img=14", role: "Product Designer" },
        { name: "Brian Flores", avatar: "https://i.pravatar.cc/150?img=15", role: "Product Designer" },
    ];

    const getBlockStyle = (type: string, status: string) => {
        if (status === "pending") {
            return "border-2 border-dashed border-pink-300 bg-pink-50";
        }
        switch (type) {
            case "sick":
                return "bg-purple-100";
            case "vacation":
                return "bg-pink-200";
            case "personal":
                return "bg-blue-100";
            default:
                return "bg-gray-100";
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "approved":
                return <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>;
            case "rejected":
                return <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">✕</span>;
            default:
                return <span className="w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs">−</span>;
        }
    };

    const renderHomeContent = () => (
        <div className="flex-1 p-8 max-w-4xl mx-auto">
            {/* Greeting Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">Hello Eva 👋</h1>
                <p className="text-gray-500">Wednesday, 30 October</p>
            </div>

            {/* Weather Card */}
            <div className="bg-gradient-to-r from-blue-400 to-cyan-300 rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                            <span>📍</span>
                            <span>Copenhagen</span>
                        </div>
                        <div className="text-5xl font-light mb-2">17°</div>
                        <div className="text-white/80 text-sm">Cloudy</div>
                    </div>
                    <div className="text-6xl">⛅</div>
                </div>
                {/* Temperature forecast */}
                <div className="flex gap-4 mt-4">
                    {[
                        { time: "Now", temp: "17°" },
                        { time: "14:00", temp: "16°" },
                        { time: "15:00", temp: "15°" },
                        { time: "16:00", temp: "14°" },
                        { time: "17:00", temp: "13°" },
                    ].map((item, i) => (
                        <div key={i} className="text-center text-sm">
                            <div className="text-white/70">{item.time}</div>
                            <div className="font-medium">{item.temp}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-3 mb-8">
                {quickActions.map((action, i) => (
                    <button
                        key={i}
                        className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                        <span className="text-2xl">{action.icon}</span>
                        <span className="text-sm text-gray-700">{action.label}</span>
                    </button>
                ))}
            </div>

            {/* Time Off Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Time off</h3>
                    <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal size={18} />
                    </button>
                </div>
                <div className="flex items-center gap-8">
                    {/* Circular Progress */}
                    <div className="relative w-24 h-24">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="48"
                                cy="48"
                                r="40"
                                stroke="#E5E7EB"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle
                                cx="48"
                                cy="48"
                                r="40"
                                stroke="#3B82F6"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={`${(17/25) * 251} 251`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-lg font-semibold text-gray-900">17</div>
                                <div className="text-xs text-gray-500">of 25</div>
                            </div>
                        </div>
                    </div>
                    {/* Time off details */}
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="text-sm text-gray-600">Taken</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">8 days</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                <span className="text-sm text-gray-600">Remaining</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">17 days</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full border-2 border-dashed border-blue-300"></div>
                                <span className="text-sm text-gray-600">Pending</span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">3 days</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teammates Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Teammates</h3>
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                        View all <ArrowRight size={14} />
                    </button>
                </div>
                <div className="space-y-3">
                    {teammates.map((mate, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src={mate.avatar} />
                                <AvatarFallback>{mate.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900">{mate.name}</div>
                                <div className="text-xs text-gray-500">{mate.status || mate.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const whistleblowingMessages = [
        {
            id: 1,
            sender: "Brooklyn Simmons",
            avatar: "https://i.pravatar.cc/150?img=20",
            time: "Just now",
            message: "Thank you for submitting the case, we have now started the investigation and will contact you accordingly.",
            isHandler: true,
        },
        {
            id: 2,
            sender: "Anonymous reporter",
            avatar: null,
            time: "Just now",
            message: "Thank you!",
            isHandler: false,
        },
    ];

    const renderWhistleblowingContent = () => (
        <div className="flex flex-1">
            {/* Main Content */}
            <div className="flex-1 p-8 border-r border-gray-100">
                {/* Back Button & Title */}
                <div className="flex items-center gap-3 mb-6">
                    <button className="text-gray-500 hover:text-gray-700">
                        <ChevronLeft size={20} />
                    </button>
                    <h1 className="text-lg font-medium text-gray-900">
                        Report <span className="text-gray-400">(e5bb5aba-50a7-479a-b06a-5a6db4d1d6e5)</span>
                    </h1>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <button className="ml-auto text-gray-400 hover:text-gray-600">
                        <MoreHorizontal size={18} />
                    </button>
                </div>

                {/* Report Content */}
                <div className="mb-8">
                    <p className="text-gray-700 mb-4">
                        I'm writing to express serious concerns regarding the unsafe conditions prevailing in the warehouse. The current state poses significant risks to employee safety, and urgent action is needed to rectify these issues.
                    </p>
                    <p className="text-gray-700 mb-4">Observations:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li>Poor housekeeping and cluttered aisles.</li>
                        <li>Inadequate safety equipment and signage.</li>
                        <li>Improper material handling practices.</li>
                        <li>Failure to enforce safety policies.</li>
                        <li>Inadequate employee training.</li>
                    </ul>
                    <p className="text-gray-700">
                        It's crucial to address these issues promptly to prevent potential injuries and ensure a safe working environment. I urge you to take immediate steps to improve safety standards in the warehouse.
                    </p>
                </div>

                {/* File Attachment */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-8 w-fit">
                    <FileText size={18} className="text-gray-400" />
                    <span className="text-sm text-gray-700">text.doc</span>
                </div>

                {/* Message Thread */}
                <div className="space-y-4 mb-6">
                    {whistleblowingMessages.map((msg) => (
                        <div key={msg.id} className="flex gap-3">
                            {msg.isHandler ? (
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={msg.avatar || undefined} />
                                    <AvatarFallback>BS</AvatarFallback>
                                </Avatar>
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-500 text-sm">👤</span>
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium text-gray-900">{msg.sender}</span>
                                    <span className="text-xs text-gray-400">{msg.time}</span>
                                </div>
                                <p className="text-sm text-gray-700">{msg.message}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="https://i.pravatar.cc/150?img=20" />
                        <AvatarFallback>BS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Write message to anonymous reporter..."
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 rounded-full text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-80 p-6">
                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Open</span>
                    <button className="ml-auto text-gray-400 hover:text-gray-600">
                        <MoreHorizontal size={18} />
                    </button>
                </div>

                {/* Details */}
                <div className="space-y-4 mb-6">
                    <div className="flex items-start justify-between">
                        <span className="text-sm text-gray-500">Received</span>
                        <span className="text-sm text-gray-900">March 24, 2005</span>
                    </div>
                    <div className="flex items-start justify-between">
                        <span className="text-sm text-gray-500">ID</span>
                        <span className="text-sm text-gray-900 text-right">e5bb5aba-50a7-479a-<br />b06a-5a6db4d1d6e5</span>
                    </div>
                </div>

                {/* Category Dropdown */}
                <div className="mb-4">
                    <label className="text-sm text-gray-500 block mb-2">Category</label>
                    <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900">
                        Misconduct
                        <ChevronRight size={16} className="text-gray-400 rotate-90" />
                    </button>
                </div>

                {/* Handler Dropdown */}
                <div className="mb-6">
                    <label className="text-sm text-gray-500 block mb-2">Handler</label>
                    <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                                <AvatarImage src="https://i.pravatar.cc/150?img=20" />
                                <AvatarFallback>BS</AvatarFallback>
                            </Avatar>
                            Brooklyn Simmons
                        </div>
                        <ChevronRight size={16} className="text-gray-400 rotate-90" />
                    </button>
                </div>

                {/* Resolution Note */}
                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-700 mb-3">
                        I'm pleased to announce that the safety concerns raised regarding the conditions in the warehouse have been successfully addressed, and the issue has been resolved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                        20 minutes ago
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTimeOffContent = () => (
        <div className="relative">
            {/* Main Content */}
            <div className="p-6">
                {/* Page Title & Filters */}
                <div className="mb-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-900 mb-3">Time-off</h1>
                        <div className="flex items-center gap-2 flex-wrap">
                            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">
                                <span>📋</span> View
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">
                                My reports <X size={14} />
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">
                                <span>🏖️</span> Availability type
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700">
                                All <X size={14} />
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500">
                                <Plus size={18} />
                            </button>
                        </div>
                    </div>
                    {/* Toggle Pending Requests Button */}
                    <button
                        onClick={() => setShowPendingRequests(!showPendingRequests)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            showPendingRequests
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        <Clock size={16} />
                        Pending requests
                        {pendingRequests.filter(r => r.status === "pending").length > 0 && (
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                                showPendingRequests ? "bg-white text-blue-500" : "bg-blue-500 text-white"
                            }`}>
                                {pendingRequests.filter(r => r.status === "pending").length}
                            </span>
                        )}
                    </button>
                </div>

                {/* Timeline Calendar */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                    {/* Month Header */}
                    <div className="flex">
                        <div className="w-44 shrink-0" />
                        <div className="flex-1 overflow-x-auto">
                            <div className="flex">
                                {dates.map((date, i) => (
                                    <div key={i} className="w-10 shrink-0 text-center">
                                        {date.month && (
                                            <div className="text-xs text-gray-500 font-medium py-1">
                                                {date.month === "Apr" ? "April" : ""}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Date Headers */}
                    <div className="flex border-b border-gray-100">
                        <div className="w-44 shrink-0" />
                        <div className="flex-1 overflow-x-auto">
                            <div className="flex">
                                {dates.map((date, i) => (
                                    <div
                                        key={i}
                                        className={`w-10 shrink-0 py-2 text-center text-sm ${
                                            date.isToday
                                                ? "text-white"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        <span
                                            className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${
                                                date.isToday ? "bg-blue-500" : ""
                                            }`}
                                        >
                                            {date.day}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team Rows */}
                    {teamMembers.map((member, rowIndex) => (
                        <div
                            key={member.name}
                            className="flex border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                        >
                            {/* Member Info */}
                            <div className="w-44 shrink-0 flex items-center gap-3 px-4 py-3">
                                <Avatar className="w-7 h-7">
                                    <AvatarImage src={member.avatar} />
                                    <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-700 truncate">{member.name}</span>
                                {member.away && (
                                    <span className="text-gray-400 text-xs">✈</span>
                                )}
                            </div>

                            {/* Timeline Grid */}
                            <div className="flex-1 relative overflow-x-auto">
                                <div className="flex h-12">
                                    {dates.map((date, colIndex) => (
                                        <div
                                            key={colIndex}
                                            className={`w-10 shrink-0 border-l border-gray-50 ${
                                                date.isToday ? "border-l-2 border-l-blue-200" : ""
                                            }`}
                                        />
                                    ))}
                                    {/* Time-off blocks */}
                                    {timeOffBlocks
                                        .filter((block) => block.row === rowIndex)
                                        .map((block, blockIndex) => (
                                            <div
                                                key={blockIndex}
                                                className={`absolute top-2 h-8 rounded-lg flex items-center px-2 ${getBlockStyle(
                                                    block.type,
                                                    block.status
                                                )}`}
                                                style={{
                                                    left: `${block.startCol * 40}px`,
                                                    width: `${block.span * 40 - 4}px`,
                                                }}
                                            >
                                                <span className="text-sm">{block.emoji}</span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                        <ChevronRight size={20} />
                    </button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700 font-medium">
                        Today
                    </button>
                </div>
            </div>

            {/* Floating Sidebar - Pending Requests */}
            {showPendingRequests && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/20 z-40"
                        onClick={() => setShowPendingRequests(false)}
                    />
                    {/* Panel */}
                    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">Pending requests</h2>
                            <button 
                                onClick={() => setShowPendingRequests(false)}
                                className="p-1 hover:bg-gray-100 rounded text-gray-400"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {["Today", "Past week", "Past month"].map((group) => {
                            const groupRequests = pendingRequests.filter((r) => r.group === group);
                            if (groupRequests.length === 0) return null;
                            return (
                                <div key={group} className="mb-6">
                                    <h3 className="text-sm text-gray-500 mb-3">{group}</h3>
                                    <div className="space-y-2">
                                        {groupRequests.map((request, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="relative">
                                                    <Avatar className="w-10 h-10">
                                                        <AvatarImage src={request.avatar} />
                                                        <AvatarFallback>{request.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="absolute -bottom-1 -right-1">
                                                        {getStatusBadge(request.status)}
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-sm font-medium text-gray-900">{request.name}</div>
                                                    <div className="text-xs text-gray-500 flex items-center gap-1">
                                                        <span>{request.emoji}</span>
                                                        <span>{request.type}</span>
                                                        <span>·</span>
                                                        <span>{request.time}</span>
                                                    </div>
                                                </div>
                                                <button className="p-1 hover:bg-gray-200 rounded text-gray-400">
                                                    <MoreHorizontal size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Top Navigation */}
            <header className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <span className="text-white text-lg">⛵</span>
                    </div>
                    {/* Nav Tabs */}
                    <nav className="flex items-center gap-1">
                        {navTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    activeTab === tab
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                            <span className="text-lg">≡</span>
                        </button>
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <span className="text-sm">?</span>
                    </button>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <Search size={18} />
                    </button>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100">
                        <Bell size={18} />
                    </button>
                    <Avatar className="w-9 h-9 border-2 border-green-500">
                        <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                        <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                </div>
            </header>

            {activeTab === "Home" && renderHomeContent()}
            {activeTab === "Whistleblowing" && renderWhistleblowingContent()}
            {activeTab === "Time-off" && renderTimeOffContent()}
        </div>
    );
};

export default DemoEverydayHr;
