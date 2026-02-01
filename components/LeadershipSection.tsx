import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, X, Mail, Linkedin, Twitter } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const leaders = [
  {
    name: "Ripul Dutt",
    role: "Founder & CEO",
    bio: "Ripul is the Founder of Risk Inn and a Graduate of IIT and Tulane University, USA. With a diverse background encompassing academic research (150+ citations), Product Management, Performance Marketing, and VC Management Consulting, Ripul brings a wealth of experience to the table. Ripul's global exposure, having worked in India, the USA, and Europe, adds depth to his understanding of market dynamics. Ripul believes in the power of teamwork and is passionate about empowering individuals to utilize their talents effectively, making him a key figure in fostering growth and innovation at Risk Inn.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&facepad=2",
    email: "ripul@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Praful Kumar Singh",
    role: "CTO",
    bio: "Praful leads the technology vision at Risk Inn, driving digital transformation in finance education. With extensive experience in building scalable platforms and a passion for EdTech innovation, he ensures Risk Inn stays at the forefront of technology. His expertise spans cloud architecture, AI/ML integration, and creating seamless user experiences for thousands of learners worldwide.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&facepad=2",
    email: "praful@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aman Sharma",
    role: "Technology Team",
    bio: "Aman is a key member of the Technology Team at Risk Inn, building scalable solutions for finance professionals worldwide with cutting-edge technologies. His focus on performance optimization and user experience has been instrumental in delivering a world-class learning platform to thousands of students across the globe.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&facepad=2",
    email: "aman@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sudhanshu Kanwar",
    role: "Mentor Extraordinaire",
    credentials: "CFA, FRM, CQF",
    bio: "Sudhanshu is an expert in quantitative finance with years of experience mentoring future risk professionals. Holding prestigious certifications including CFA, FRM, and CQF, he brings unparalleled industry knowledge to Risk Inn. His mentorship has helped hundreds of students clear their FRM exams and secure positions at top financial institutions globally.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&facepad=2",
    email: "sudhanshu@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Alexander Kolker",
    role: "Climate Finance Mentor",
    credentials: "Full Bright Scholar",
    bio: "Dr. Kolker is a pioneering researcher in climate risk and sustainable finance education. As a Fulbright Scholar, he brings academic rigor and global perspective to Risk Inn's climate finance curriculum. His work bridges the gap between traditional risk management and emerging ESG considerations, preparing students for the future of finance.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&facepad=2",
    email: "alexander@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Neeraj Lahoti",
    role: "Market Risk Consultant",
    credentials: "CFA, FRM, CAIA, CMT",
    bio: "Neeraj is a seasoned market risk professional with extensive experience at top global banks. His multi-faceted expertise spanning equity, fixed income, and derivatives markets makes him an invaluable mentor. He has guided numerous professionals in their transition to quantitative finance roles at leading institutions.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&facepad=2",
    email: "neeraj@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
];

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState<
    (typeof leaders)[0] | null
  >(null);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs sm:text-sm font-semibold text-teal-600 mb-2 sm:mb-4"
          >
            Our Expert Crew
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
          >
            Meet the Risk Inn Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4"
          >
            Passionate professionals dedicated to empowering your journey in
            risk management.
          </motion.p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-6 pl-4 md:pl-8">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="flex-shrink-0 w-[280px] md:w-[320px]"
            >
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-[4/5] relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Risk Inn Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent rounded px-2 py-1">
                      <span className="text-accent-foreground text-xs font-bold">
                        Risk
                      </span>
                      <span className="text-accent-foreground text-xs font-bold ml-0.5">
                        Inn
                      </span>
                    </div>
                  </div>

                  {/* Plus Button */}
                  <button
                    onClick={() => setSelectedLeader(leader)}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110 group-hover:scale-110"
                    aria-label={`View ${leader.name}'s profile`}
                  >
                    <Plus className="w-5 h-5 text-foreground" />
                  </button>

                  {/* Name & Role */}
                  <div className="absolute bottom-4 left-4 right-16">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {leader.name}
                      {leader.credentials && (
                        <span className="text-white/70 font-normal text-sm block">
                          {leader.credentials}
                        </span>
                      )}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">{leader.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bio Modal */}
      <Dialog
        open={!!selectedLeader}
        onOpenChange={() => setSelectedLeader(null)}
      >
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <button
            onClick={() => setSelectedLeader(null)}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {selectedLeader && (
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-2/5 relative">
                <div className="aspect-square md:aspect-auto md:h-full">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Risk Inn Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent rounded px-2 py-1">
                      <span className="text-accent-foreground text-xs font-bold">
                        Risk
                      </span>
                      <span className="text-accent-foreground text-xs font-bold ml-0.5">
                        Inn
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/5 p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {selectedLeader.name}
                </h2>

                {/* Role & Social Links */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent font-semibold">
                    {selectedLeader.role}
                    {selectedLeader.credentials &&
                      ` • ${selectedLeader.credentials}`}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${selectedLeader.email}`}
                      className="w-8 h-8 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={selectedLeader.linkedin}
                      className="w-8 h-8 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={selectedLeader.twitter}
                      className="w-8 h-8 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed">
                  {selectedLeader.bio}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
