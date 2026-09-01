"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import { ResumeData } from "@/data/resume";
import { assetPath } from "@/lib/site";

export function HeroSection({ resumeData }: { resumeData: ResumeData }) {
  const reduceMotion = useReducedMotion();
  const isRtl = resumeData.dir === "rtl";
  const nameParts = resumeData.personal.name.split(" ");
  const initials = nameParts.slice(0, 2).map((part) => part.charAt(0)).join("");
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="profile" className="lux-hero">
      <div className="lux-orbit" aria-hidden="true" />
      <div className="lux-hero-inner">
        <motion.div {...reveal} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lux-hero-copy">
          <div className="lux-kicker"><span className="lux-status-dot" />{resumeData.availability}</div>
          <h1 className="lux-display">
            <span>{nameParts[0]}</span>
            <em>{nameParts.slice(1).join(" ")}</em>
          </h1>
          <div className="lux-role-line">
            <p>{resumeData.personal.title}</p><span aria-hidden="true" />
            <p className="lux-location"><MapPin className="h-4 w-4" />{resumeData.personal.location}</p>
          </div>
          <p className="lux-intro">{resumeData.personal.summary}</p>
          <div className="lux-actions">
            <a href="#projects" className="lux-button lux-button-primary">{resumeData.ui.viewProjects}<ArrowDownRight className="h-4 w-4" /></a>
            <a href={assetPath(resumeData.personal.resumeUrl)} download className="lux-button lux-button-text">{resumeData.ui.downloadResume}<Download className="h-4 w-4" /></a>
          </div>
        </motion.div>
        <motion.aside {...reveal} transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.12 }} className="lux-portrait" aria-label={resumeData.ui.careerHighlights}>
          <div className="lux-portrait-top"><span>{isRtl ? "پرونده حرفه‌ای" : "Professional folio"}</span><span>©26</span></div>
          <div className="lux-monogram" aria-hidden="true">{initials}</div>
          <div className="lux-portrait-caption"><span>{resumeData.ui.operatingTitle}</span><ArrowUpRight className="h-5 w-5" /></div>
        </motion.aside>
      </div>
      <motion.div {...reveal} transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.2 }} className="lux-stats">
        {resumeData.stats.map((stat, index) => (
          <div className="lux-stat" key={stat.label}><span className="lux-stat-index">0{index + 1}</span><strong>{stat.value}</strong><p>{stat.label}</p></div>
        ))}
      </motion.div>
    </section>
  );
}
