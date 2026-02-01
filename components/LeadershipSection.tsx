import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, X, Mail, Linkedin, Twitter } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const leaders = [
  {
    name: "Ripul Dutt",
    role: "Founder & CEO",
    bio: "Ripul is the Founder of Risk Inn and a Graduate of IIT and Tulane University, USA. With a diverse background encompassing academic research (150+ citations), Product Management, Performance Marketing, and VC Management Consulting, Ripul brings a wealth of experience to the table. Ripul's global exposure, having worked in India, the USA, and Europe, adds depth to his understanding of market dynamics. Ripul believes in the power of teamwork and is passionate about empowering individuals to utilize their talents effectively, making him a key figure in fostering growth and innovation at Risk Inn.",
    image: "/public/assets/ripul_risk_inn.avif",
    email: "ripul@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Praful Kumar Singh",
    role: "CTO",
    bio: "He is the technical architect behind Riskinn platform and leading the engineering team as well - who enjoys designing systems that are fast, scalable, and boring in the best possible way. He has worked with PHP, Python (Django & Flask), Ruby on Rails, and Go to build APIs and backend services, supported by MySQL, PostgreSQL, Redis, and Celery. He has hands-on experience deploying and running production systems on AWS and GCP using Docker, and cares deeply about clean code, system reliability, and long-term maintainability.",
    image: "/public/assets/Praful_Kumar_Singh.avif",
    email: "praful@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aman Sharma",
    role: "Technology Team",
    bio: "Aman is in echnology team with Riskinn. With a deep background in areas like EdTech, Web2.0, Web3.0, AI/ML, He ensures our technology effectively empowers risk professionals worldwide. He is passionate about leveraging cutting-edge tools to create seamless user experiences and drive innovation in risk management education and talent connection.",
    image: "/public/assets/Aman_Sharma.avif",
    email: "aman@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sudhanshu Kanwar",
    role: "Mentor Extraordinaire, CFA, FRM, CQF",

    bio: "Mr. Sudhanshu Kanwar, FRM, CFA, CQF, is a seasoned leader with a distinguished career spanning global institutions like HSBC, Goldman Sachs, and the Government of India, he excels in strategy, quantitative Finance, and risk management. Certified by Harvard Business School, CFA Institute, GARP, CQF Institute, and Alteryx, he blends technical expertise with innovative problem-solving approaches informed by psychology and cognitive science. A member of the HBR Advisory Council, he brings cutting-edge insights and a proven track record of delivering transformative, data-driven solutions in his senior leadership role at a leading multinational organization.",
    image: "/public/assets/Sudhanshu_Kanwar.avif",
    email: "sudhanshu@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Alexander Kolker",
    role: "Climate Finance Mentor, Full Bright",
    credentials: "Full Bright",
    bio: "Dr. Alex Kolker is a climate science expert with a global perspective, focusing on the environmental and economic impacts of climate change. He has worked across the Gulf of Mexico, North Africa, and the Middle East, studying the intersection of environmental risk, infrastructure vulnerability, and climate resilience. His research informs evidence-based policy, climate adaptation planning, and resilience finance, particularly in regions facing sea level rise. A NATO Fellow and former Fulbright Scholar, Dr. Kolker’s work has been featured in major international media and award-winning documentaries. He brings a data-driven, interdisciplinary approach to advancing sustainable development and climate-aligned investment strategies.",
    image: "/public/assets/Alexander_Kolker.avif",
    email: "alexander@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rigved Pimpalkar",
    role: "FRM Mentor",

    bio: "Rigved Pimpalkar is a seasoned Finance professional with over 5 years of experience in financial risk management, credit risk analysis, and technical analysis. A certified Financial Risk Manager and NSE-certified Technical Analyst, he has worked on developing credit risk frameworks, financial models, and ESG assessments, contributing to the retail sector and sustainability projects. Rigved has successfully conducted technical analysis training programs for over 170 participants and has a proven track record of mentoring aspiring Finance professionals. He combines practical expertise with a passion for simplifying complex financial concepts, making him an exceptional mentor for FRM Part 1 and Part 2 students.",
    image: "/public/assets/Rigved_Pimpalkar.avif",
    email: "rigved@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Umar Siddique",
    role: "Recruitment Head, Risk Inn",

    bio: "Umar Siddique is the Global Recruitment Head at Risk Inn, bringing a wealth of experience across diverse business verticals. Known for his strategic insight and dedication, he consistently elevates recruitment standards and drives impactful hiring solutions. With a strong focus on excellence, Umar is committed to aligning top talent with the organization’s vision and growth, ensuring Risk Inn remains at the forefront of industry leadership.",
    image: "/public/assets/umar_risk_inn.avif",
    email: "rigved@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Divesh Jethwa",
    role: "Mentor",
    credentials: "FRM",
    bio: "Divesh Jethwa is an experienced investment strategist with deep expertise across equities, fixed income, and derivatives. He specializes in portfolio construction, tactical trading, and risk-adjusted strategies tailored to meet diverse financial objectives. With a disciplined, research-driven approach combining technical and fundamental analysis, he identifies growth opportunities, manages downside risk, and optimizes asset allocation. His focus on market intelligence and long-term value creation positions him as a trusted advisor in navigating complex financial markets.",
    image: "/public/assets/divesh_jethwa.avif",
    email: "rigved@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Karan Aggarwal",
    role: "Risk Modeling Mentor, Risk Management Upskilling Award Winner",

    bio: "Karan Aggarwal is one of India’s leading trainers in Financial Modelling, Risk Modelling, Data Analytics, Actuarial Science. He has spearheaded several solution accelerators and prototypes in Risk and Analytics space. Karan has also authored a number of papers on Basel Modelling, IFRS 9 Modelling, Stress Testing & Machine Learning. He is widely regarded for his problem solving, thought leadership and intrapreneurship skills. His analytical mindset, solid fundamentals & the thirst to keep learning set him apart as a true authority in this field. Karan has also been awarded the Young Indian Entrepreneur Award by the Confederation Of Indian Industries in the year 2017.",
    image: "/karan_agg.jpeg",
    email: "rigved@riskinn.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Satyapriya Ojha",
    role: "Risk Modeling Mentor, FRM, CQF (Distinction), IIT Kharagpur",

    bio: "Satyapriya Ojha is a highly skilled Capital Markets and Risk professional with 12+ years of experience in Regulatory Capital, Valuation and Analytics. He is an IIT & IIM graduate and holds FRM charter (top quartile in all subjects of part I & part II) and a distinction from CQF institute. He is an expert in quantitative models used in valuation and risk management. He has worked as a consultant in several regulatory projects for some of the top banks in the US in BASEL III and FRTB space. Currently, he serves as a product owner for a top wealth management firm engaged in quantitative portfolio management for institutional clients.",
    image: "/satyapriya_ojha.jpeg",
    email: "#",
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

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

                  <button
                    onClick={() => setSelectedLeader(leader)}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110 group-hover:scale-110"
                    aria-label={`View ${leader.name}'s profile`}
                  >
                    <Plus className="w-5 h-5 text-foreground" />
                  </button>

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
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-2xl bg-white shadow-2xl">
          <DialogTitle className="sr-only">
            {selectedLeader
              ? `${selectedLeader.name} Profile`
              : "Leadership Profile"}
          </DialogTitle>
          {/* Close Button */}
          <button
            onClick={() => setSelectedLeader(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          {selectedLeader && (
            <div className="flex flex-col md:flex-row">
              {/* LEFT: Image */}
              <div className="md:w-2/5 relative bg-gray-100">
                <div className="h-full w-full aspect-[3/4] md:aspect-auto">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT: Content */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col">
                {/* Name */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {selectedLeader.name}
                </h2>

                {/* Role & Social Icons */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-teal-600 font-semibold text-base">
                    {selectedLeader.role}
                  </span>

                  {/* Social Icons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${selectedLeader.email}`}
                      className="w-8 h-8 rounded-sm bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 text-gray-600" />
                    </a>

                    <a
                      href={selectedLeader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-sm bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-gray-600" />
                    </a>

                    <a
                      href={selectedLeader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-sm bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4 text-gray-600" />
                    </a>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-700 leading-relaxed text-base">
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
