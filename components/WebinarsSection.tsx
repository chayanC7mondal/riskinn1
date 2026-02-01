import { motion } from "framer-motion";
import { Play, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const webinars = [
  {
    episode: "Episode 2",
    title: "Global Trend In Financial Risk Management",
    description:
      "This engaging session explored the tools, strategies, and competencies essential for success in a data-driven risk management landscape.",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-8b2c63dc3556?w=600&h=400&fit=crop",
    speakers: [
      { name: "Ripul Dutt", role: "Founder, Risk Inn" },
      { name: "Gabriel Ryan", role: "VP of DBS Bank, Singapore" },
    ],
  },
  {
    episode: "Episode 1",
    title: "The Future Of Market Risk",
    description:
      "This session was packed with actionable insights into market risk, quantitative Finance, and career strategies in a rapidly evolving financial ecosystem.",
    thumbnail:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    speakers: [
      { name: "Ripul Dutt", role: "Founder, Risk Inn" },
      { name: "Neeraj Lahoti", role: "CFA, FRM, CAIA, CMT" },
    ],
  },
];

export default function WebinarsSection() {
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
            Discover the Power of Conversations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4"
          >
            Insights, strategies, and career journeys in Risk Management and
            Finance.
          </motion.p>
        </div>

        {/* Webinars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Episode Label */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <span className="text-sm text-gray-600">{webinar.episode}</span>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  •
                </Button>
              </div>

              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-700 group cursor-pointer">
                <img
                  src={webinar.thumbnail}
                  alt={webinar.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-slate-800/60" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <div className="bg-teal-600 rounded px-3 py-1 inline-block mb-3">
                      <span className="text-white text-xs font-bold flex items-center gap-1">
                        Risk Inn
                      </span>
                    </div>
                    <p className="text-white/80 text-sm mb-1">Webinar</p>
                    <h3 className="text-white font-bold text-xl uppercase leading-tight max-w-xs">
                      {webinar.title.split(" ").slice(0, 4).join(" ")}
                    </h3>
                  </div>

                  {/* Play Button */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play
                        className="w-7 h-7 text-white ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  {/* Speakers */}
                  <div className="flex flex-col gap-2">
                    {webinar.speakers.map((speaker) => (
                      <div
                        key={speaker.name}
                        className="flex items-center gap-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/20" />
                        <div>
                          <p className="text-white text-sm font-medium">
                            {speaker.name}
                          </p>
                          <p className="text-white/70 text-xs">
                            {speaker.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Subscribe Button */}
                  <Button
                    size="sm"
                    className="absolute bottom-4 left-4 bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    <Bell className="w-4 h-4 mr-1" />
                    SUBSCRIBE
                  </Button>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  {webinar.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {webinar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
