import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const research = [
  {
    title: "Machine Learning in Credit Risk & Default Prediction",
    description:
      "This latest research benchmarks six models namely LDA, logistic regression (LR), SVM, XGBoost, random forests, and DNN for predicting credit card defaults using data...",
    journal: "Risk and Financial Management",
    publisher: "MDPI",
  },
  {
    title: "Monetary Regimes and Market Risk: Enhanced HJM Model",
    description:
      "Monetary policy significantly influences market risk, especially through its effects on interest rate derivatives. This study delves into the intricacies of how changes in...",
    authors: "Robert A. Jarrow, Sujan Lamichhane",
    date: "March 20, 2024",
  },
  {
    title: "Credit Deterioration: SICR Framework for Proactive Risk Management",
    description:
      "New Month Knowledge share! The study finds that IFRS 9 credit risk assessment improves with a three-parameter SICR framework, refining how banks detect...",
    authors: "Arno Botha, Esmerelda Oberholzer, Janette Larney, Riaan de Jongh",
    date: "February 2025",
  },
  {
    title:
      "How ECB's QE Reshaped the Euro Bond Market: Key Insights for Risk Managers",
    description:
      "Week ending reading! ECB's Quant has significantly reshaped the euro bond market, influencing investor behavior and a...",
    authors: "Martijn Boermans, Tomas Carrera de Souza",
    date: "January 21, 2025",
  },
];

export default function ResearchSection() {
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
            Risk Inn Insights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          >
            Discover Cutting Edge Peer Reviewed Research
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Read latest research and engage in brainstorming
          </motion.p>
        </div>

        {/* Research Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {research.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <div className="bg-teal-600 rounded-lg px-2 py-1">
                  <span className="text-white text-xs font-bold">Risk</span>
                  <span className="text-white text-xs font-bold ml-0.5">
                    Inn
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    Risk Inn
                  </p>
                  <p className="text-xs text-gray-600">
                    Financial Research & Insights
                  </p>
                </div>
              </div>

              {/* Paper Preview */}
              <div className="bg-gray-100 rounded-lg p-4 mb-4 min-h-[120px]">
                {item.journal && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-600">
                      {item.journal}
                    </span>
                    {item.publisher && (
                      <span className="bg-gray-900 text-white text-xs px-2 py-0.5 rounded">
                        {item.publisher}
                      </span>
                    )}
                  </div>
                )}
                {item.authors && (
                  <p className="text-xs text-gray-600 mb-1">{item.authors}</p>
                )}
                {item.date && (
                  <p className="text-xs text-gray-600">{item.date}</p>
                )}
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {item.description}
              </p>

              <Button
                variant="ghost"
                className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
