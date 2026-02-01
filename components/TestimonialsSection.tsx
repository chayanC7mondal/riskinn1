import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "FRM Certified, Credit Risk Analyst",
    company: "Goldman Sachs",
    content:
      "Risk Inn's FRM prep course was a game-changer. The expert mentorship and timed mock tests helped me clear both parts on my first attempt. Highly recommended!",
    rating: 5,
    outcome: "Cleared FRM Part 1 & 2",
  },
  {
    name: "Sarah Chen",
    role: "Investment Banking Associate",
    company: "JP Morgan",
    content:
      "The IBI certification program provided hands-on Excel modeling skills that directly translated to my daily work. The interview prep was invaluable for my career transition.",
    rating: 5,
    outcome: "Secured IB Role",
  },
  {
    name: "Amit Patel",
    role: "Market Risk Manager",
    company: "HSBC",
    content:
      "The Global Careers Club connected me with amazing professionals worldwide. The upskilling courses in credit risk modeling helped me get promoted within 6 months.",
    rating: 5,
    outcome: "Promoted to Manager",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-r from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Student Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
          >
            Real Results from Real Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Join thousands of professionals who transformed their careers with
            Risk Inn
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-teal-400 mb-6" />

              {/* Content */}
              <p className="text-white/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Outcome Badge */}
              <div className="inline-block bg-teal-600 text-white px-3 py-1.5 text-sm font-semibold rounded-full mb-6">
                ✓ {testimonial.outcome}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center text-teal-400 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-teal-400 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "40,000+", label: "Professionals Trained" },
            { value: "95%", label: "Success Rate" },
            { value: "100+", label: "Countries Reached" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
