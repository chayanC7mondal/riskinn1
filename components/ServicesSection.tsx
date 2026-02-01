import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  BarChart3,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Global Careers Club",
    description:
      "Join our Careers Club, a private network of professionals and aspirants for upskilling, collaboration, and dedicated forums on finance and risk.",
  },
  {
    icon: GraduationCap,
    title: "Career Accelerator",
    description:
      "Accelerate your career with expert counseling, interview prep, upskilling, and mentoring, plus Global Careers Club benefits.",
  },
  {
    icon: BarChart3,
    title: "Timed Testing",
    description:
      "Ace your FRM, SCR, or RAI exams with our expert-crafted Timed Test Series. Join 10,000+ Risk Inn members for free support!",
  },
  {
    icon: Award,
    title: "Certification Pathway",
    description:
      "Get certified in investment banking with our Investment Banking Intensive (IBI) certification, featuring over 120 hours of content.",
  },
  {
    icon: Users,
    title: "Talent Placement",
    description:
      "Top finance talent meets the world's leading institutions. Discover elite opportunities or connect with professionals shaping the future.",
  },
  {
    icon: TrendingUp,
    title: "Upskilling",
    description:
      "We infuse your career with invaluable industry perspective. Explore Upskilling opportunities from seasoned professionals in market risk and more.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-teal-600 mb-3"
          >
            Explore our Ecosystem NOW!
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Overcome Obstacles, Own Your Success.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Risk Inn is here to fuel your finance & risk career with focused FRM
            prep, real time testing, upskilling led by top rated industry
            experts, and direct access to leading employers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
