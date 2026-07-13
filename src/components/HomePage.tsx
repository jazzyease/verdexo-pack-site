"use client";

import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProjectGallery } from "./ProjectGallery";
import { ProcessSection } from "./ProcessSection";
import { ResourceSection } from "./ResourceSection";
import { ProjectBrief } from "./ProjectBrief";
import Image from "next/image";

export function HomePage() {
  const [briefOpen, setBriefOpen] = useState(false);
  return (
    <main>
      <Header onStartProject={() => setBriefOpen(true)} />
      <Hero onStartProject={() => setBriefOpen(true)} />
      <ProjectGallery />
      <ProcessSection />
      <ResourceSection onStartProject={() => setBriefOpen(true)} />
      <section className="experience" id="about">
        <div><p className="eyebrow">Your product deserves a stronger first impression</p><h2>Good product.<br />Now build the brand.</h2><p>Tell us what you sell, your target quantity and where you want to compete. We’ll recommend the right packaging route.</p><button className="button button-light" onClick={() => setBriefOpen(true)}>Start your packaging project <ArrowUpRight /></button></div>
        <div className="experience-products"><Image src="/images/tea.png" alt="Tea packaging by Verdexo" width={400} height={700} unoptimized /><Image src="/images/chips.png" alt="Chips packaging by Verdexo" width={380} height={650} unoptimized /></div>
      </section>
      <footer><div><div className="footer-mark">VERDEXO <span>Packaging Studio</span></div><p>Packaging design, artwork and production support for growing brands.</p></div><div className="footer-links"><a href="#work">Our work</a><a href="#process">How it works</a><a href="#resources">Downloads</a><button onClick={() => setBriefOpen(true)}>Start a project</button></div><p>© 2026 Verdexo Ventures Pvt. Ltd.</p></footer>
      <ProjectBrief open={briefOpen} onClose={() => setBriefOpen(false)} />
    </main>
  );
}
