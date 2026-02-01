import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    company: "Risk Analytics & Advisory Firm (MnC)",
    location: "India",
    title: "Credit Risk Analyst (3+ Years)",
    type: "Full-time",
    skills: [
      "Credit Risk",
      "ECL Modeling",
      "Risk Weighted Assets",
      "IFRS9",
      "BCBS239",
      "SAS",
    ],
    salary: "20-35 LPA INR",
  },
  {
    company: "Leading Risk Analytics Firm",
    location: "Mumbai, India",
    title: "Model Governance Stats",
    type: "Full-time",
    skills: ["Python", "SQL", "Market Risk", "VaR"],
    salary: "25,00,000 INR P.A",
  },
  {
    company: "Financial Advisory & Compliance Consulting Group",
    location: "Kuwait",
    title: "Credit and Market Risk Analytics",
    type: "Full-time",
    skills: ["Credit Modeling", "IFRS 9", "Team Lead", "FRM"],
    salary: "Competitive LPA",
  },
  {
    company: "Big 4",
    location: "Mumbai, Bangalore, Pune",
    title: "Market Risk & Analytics",
    type: "Full-time",
    skills: ["Machine Learning", "Python", "Fraud Detection", "AWS"],
    salary: "Competitive",
  },
];

const companyLogos = ["D", "pwc", "K", "SS"];

export default function JobsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs sm:text-sm font-semibold text-teal-600 mb-2 sm:mb-3"
          >
            <Briefcase className="w-4 h-4 inline mr-2" />
            Featured Opportunities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Find Your Next Role in Risk
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore curated job openings from leading firms in the Finance and
            Risk sectors.
          </motion.p>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Company & Location */}
              <div className="mb-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  {job.company}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {job.location}
                </p>
              </div>

              {/* Job Title */}
              <h3 className="font-bold text-lg text-gray-900 mb-3">
                {job.title}
              </h3>

              {/* Type Badge */}
              <span className="inline-block border border-gray-300 text-gray-900 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {job.type}
              </span>

              {/* Skills */}
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-medium text-gray-900">Skills:</span>{" "}
                {job.skills.join(", ")}
              </p>

              {/* Company Logos Placeholder */}
              <div className="mb-4">
                <p className="text-xs text-gray-600 mb-2">
                  Hiring for one of these companies
                </p>
                <div className="flex gap-2">
                  {companyLogos.map((logo, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>

              {/* Salary & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="font-semibold text-gray-900 text-sm">
                  {job.salary}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 transition-all duration-200 hover:scale-105"
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
