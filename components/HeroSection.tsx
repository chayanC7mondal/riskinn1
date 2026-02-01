import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "40K+", label: "Happy Professionals" },
  { icon: Globe, value: "100+", label: "Countries" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-28 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="image.png"
          alt="Finance professionals in seminar"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/85" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              <span className="text-white block mb-2">Empowering</span>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent block mb-2">
                Finance & Risk
              </span>
              <span className="text-white block">Professionals</span>
              <span className="text-teal-400 block">Globally</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join the Top 1% in our Merit Based Network to Connect, Excel,
              Accelerate with over 40,000 Finance and Risk Professionals
              connected across 100+ Nations
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full px-8 py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl w-full sm:w-auto"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white border-2 border-white text-slate-900 hover:bg-white 
                hover:text-black font-bold rounded-full px-8 py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl hover:shadow-teal-500/50 w-full sm:w-auto"
              >
                Book Counseling
              </Button>
            </div>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-10 text-white shadow-2xl max-w-sm">
              <div className="text-6xl font-extrabold mb-3 tracking-tight">
                40K+
              </div>
              <div className="text-xl font-semibold mb-8 opacity-95">
                Happy Professionals
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border-3 border-white/40 flex items-center justify-center text-base font-bold text-white shadow-lg"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:hidden mt-12 grid grid-cols-3 gap-4 sm:gap-6 bg-teal-600/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-teal-500/30 shadow-xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating CTA Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="hidden lg:block absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Button
          size="lg"
          className="bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-full px-10 py-6 text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
        >
          Step Into Legacy
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </section>
  );
}
