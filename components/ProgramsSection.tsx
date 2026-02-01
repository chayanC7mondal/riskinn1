import { motion } from "framer-motion";
import { GraduationCap, Timer, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    title: "FRM Part 1 Mock Test",
    description: "100 Questions",
    icon: Timer,
    badge: "TIMED TESTING",
    color: "bg-amber-900",
    details:
      "Crafted By: FRM Experts, Industry Veterans, IIT, IIM, Alumni\n• Real World Exam Simulation\n• Timed Testing Experience\n• 100 Questions for FRM Part 1\n• Ranked\n• FRM Expert Crafted\n• Club Members Avail Perks",
  },
  {
    title: "FRM GUIDED Prep",
    description: "3 Month Daily Guided Prep",
    icon: GraduationCap,
    badge: "BEST SELLER",
    badgeColor: "BEST SELLER BADGE",
    color: "bg-green-600",
    details:
      "Taught By: IIM, IIT Alumni, Goldman Sachs, HSBC ESG Consulting\n• Personalized Planner\n• Dedicated Peer Study Group of 3\n• Daily Mentor Guidance\n• Text and Voice Notes\n• Timed Mocks\n• Club Members Avail Added Perks",
  },
  {
    title: "FRM Part 1 LIVE Course",
    description: "6 Month Course",
    icon: BookOpen,
    badge: "BEST SELLER",
    color: "bg-gray-700",
    details:
      "Taught By: IIM, IIT Alumni, Goldman Sachs, HSBC ESG Consulting\n• 210+ Hours\n• Timed Mocks\n• LIVE Video Lessons\n• Weekend Classes\n• Club Members Avail Added Perks\n• Doubt Resolution",
  },
  {
    title: "Investment Banking Intensive (IBI) Certification Program",
    description: "45 Days Intensive Program",
    icon: Award,
    badge: "PREMIUM",
    badgeColor: "PREMIUM BADGE",
    color: "bg-blue-100",
    details:
      "Taught By: VP Investment Bankers (Goldman Sachs, HSBC, Citi Bank, IIM, IIT Alumni)\n• 120+ hours\n• Live Video Lessons\n• Self Paced Study Material\n• Interview Preparation\n• Club Members Avail Added Perks\n• Industry Connections",
  },
];

export default function ProgramsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-semibold tracking-wide text-teal-600 mb-2 sm:mb-3"
          >
            Featured Learning
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          >
            Your Gateway to Finance & Risk Career
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4"
          >
            Comprehensive Programs crafted by Top Rated Experts ensuring
            Industry relevant mindset and skill development in Finance and Risk.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Placeholder */}
                <div
                  className={`${program.color} h-40 sm:h-48 relative flex items-center justify-center`}
                >
                  <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white/50" />
                  <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-teal-600 hover:bg-teal-700 text-white text-[10px] sm:text-xs">
                    {program.badge}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2 text-[10px] sm:text-xs text-gray-600">
                    <p className="line-clamp-4">{program.details}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
