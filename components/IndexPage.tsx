"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import MasterySection from "@/components/MasterySection";
import ResourcesSection from "@/components/ResourcesSection";
import JobsSection from "@/components/JobsSection";
import WebinarsSection from "@/components/WebinarsSection";
import ResearchSection from "@/components/ResearchSection";
import LeadershipSection from "@/components/LeadershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProgramsSection />
        <MasterySection />
        <ResourcesSection />
        <JobsSection />
        <WebinarsSection />
        <ResearchSection />
        <LeadershipSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
