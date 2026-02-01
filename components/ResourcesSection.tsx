import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    category: "Planning Strategy",
    title:
      "Top Challenges & Getting Started with FRM Preparation - Curriculum, Discipline, Career",
    description:
      "Facing Challenges balancing work and FRM Prep? Learn strategic planning techniques to optimize your study...",
    duration: "02:45",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    bgColor: "bg-green-600",
  },
  {
    category: "Balancing Work & FRM Prep.",
    title: "How to Balance 9-5 Work and FRM Prep?",
    description:
      "Discover practical strategies to effectively manage your full-time job while preparing for the FRM exam. Real tip...",
    duration: "12:35",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    bgColor: "bg-green-600",
  },
  {
    category: "Planning Strategy",
    title: "How to PLAN your FRM Prep?",
    description:
      "Facing challenges balancing work and FRM Prep? Learn strategic planning techniques to optimize your study...",
    duration: "15:42",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    bgColor: "bg-green-600",
  },
];

export default function ResourcesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs sm:text-sm font-semibold text-teal-600 mb-2 sm:mb-3"
          >
            💡 FRM Exam Insights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          >
            Jump Into <span className="text-teal-600">FRM Prep Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Quick tips and strategies from top-rated FRM mentors to accelerate
            your exam preparation
          </motion.p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Thumbnail */}
              <div
                className={`relative rounded-2xl overflow-hidden mb-5 ${resource.bgColor}`}
              >
                <div className="aspect-video relative">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play
                        className="w-6 h-6 text-teal-600 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1.5 rounded">
                    {resource.category}
                  </span>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {resource.duration}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {resource.description}
              </p>
              <Button
                variant="ghost"
                className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 transition-all duration-200"
              >
                Watch Now →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
