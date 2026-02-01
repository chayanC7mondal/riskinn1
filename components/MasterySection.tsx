import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const programs = [
  {
    badge: "EXPERT CRAFTED",
    title: "Deep Quant Finance (DQF) Certificate (Python & Excel)",
    description:
      "This upskilling course provides an intensive overview of quantitative Finance tools essential for modern financial analytics. Begin by mastering...",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  },
  {
    badge: "AWARD WINNING",
    secondBadge: "EXPERT CRAFTED",
    title: "Credit Risk Modeling Certificate (Excel and Python)",
    description:
      "Join this award-winning upskilling bootcamp to enhance your expertise in credit risk management through Excel and Python. Covering key areas suc...",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
  },
  {
    badge: "EXPERT CRAFTED",
    title: "Integrated Treasury Risk Modeling (ICAAP, ILAAP, IRRBB): Excel",
    description:
      "This intensive upskilling program equips you with advanced knowledge in bank capital planning and liquidity risk management. Explore regulatory...",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

export default function MasterySection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          >
            Mastery Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4"
          >
            Intensive Bootcamps and practical courses with certifications for
            career acceleration in Finance and Risk.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[4/3] shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-col gap-2">
                  <span className="bg-gray-900 text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />{" "}
                    {program.badge}
                  </span>
                  {program.secondBadge && (
                    <span className="bg-yellow-500 text-gray-900 text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded flex items-center gap-1">
                      <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3" />{" "}
                      {program.secondBadge}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                {program.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
