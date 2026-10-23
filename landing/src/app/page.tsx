"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollCanvas from "./ScrollCanvas";

// Configuration
const FRAME_COUNT = 120;
const FRAME_PREFIX = "erp-frame";
const BACKGROUND_COLOR = "#050505";

// Text content for scroll sections
const scrollContent = [
  {
    position: 0,
    alignment: "center" as const,
    headline: "EduFlow School ERP",
    subtitle: "The Future of School Management",
    description: "Streamline your school operations with our comprehensive ERP solution",
  },
  {
    position: 0.3,
    alignment: "left" as const,
    headline: "Smart Administration",
    subtitle: "Effortless Management",
    description: "Manage students, teachers, classes, and attendance with ease",
  },
  {
    position: 0.6,
    alignment: "right" as const,
    headline: "Powerful Analytics",
    subtitle: "Data-Driven Decisions",
    description: "Gain insights with real-time reports and comprehensive dashboards",
  },
  {
    position: 0.9,
    alignment: "center" as const,
    headline: "Transform Your School",
    subtitle: "Start Today",
    description: "Join thousands of schools already using EduFlow to revolutionize education",
    cta: "Get Started",
  },
];

// Text section component
function TextSection({
  position,
  alignment,
  headline,
  subtitle,
  description,
  cta,
}: {
  position: number;
  alignment: "left" | "right" | "center";
  headline: string;
  subtitle: string;
  description: string;
  cta?: string;
}) {
  const { scrollYProgress } = useScroll();
  
  // Calculate opacity based on scroll position
  const opacity = useTransform(scrollYProgress, [
    position - 0.1,
    position,
    position + 0.1,
  ], [0, 1, 0]);

  // Calculate y position for parallax effect
  const y = useTransform(scrollYProgress, [
    position - 0.1,
    position,
    position + 0.1,
  ], [50, 0, -50]);

  const alignmentClasses = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  const containerClasses = {
    left: "justify-start",
    right: "justify-end",
    center: "justify-center",
  };

  return (
    <motion.div
      className={`fixed inset-0 flex items-center ${containerClasses[alignment]} pointer-events-none z-10`}
      style={{ opacity, y }}
    >
      <div className={`max-w-2xl px-8 ${alignmentClasses[alignment]}`}>
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white/90 mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {headline}
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl text-white/70 mb-2 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {subtitle}
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-white/60 mb-8 max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {description}
        </motion.p>
        
        {cta && (
          <motion.button
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 font-medium tracking-wider hover:bg-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cta}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

// Scroll indicator
function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      style={{ scale, opacity }}
    >
      <div className="flex flex-col items-center gap-2 text-white/40">
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
      </div>
    </motion.div>
  );
}

// Progress bar
function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-white/10 z-30"
      style={{ width: "100%" }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ width: scrollYProgress }}
      />
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#050505] text-white/60 overflow-x-hidden">
      {/* Progress bar */}
      <ProgressBar />

      {/* Scroll canvas - sticky container */}
      <div className="relative h-[400vh]">
        <ScrollCanvas
          frameCount={FRAME_COUNT}
          framePrefix={FRAME_PREFIX}
          backgroundColor={BACKGROUND_COLOR}
        />

        {/* Text overlays */}
        {scrollContent.map((section, index) => (
          <TextSection key={index} {...section} />
        ))}

        {/* Scroll indicator */}
        <ScrollIndicator />
      </div>

      {/* Footer */}
      <footer className="h-screen flex items-center justify-center bg-[#050505]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white/90 mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Experience the power of EduFlow School ERP
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white/90 font-medium tracking-wider hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-transparent border border-white/20 rounded-lg text-white/90 font-medium tracking-wider hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
