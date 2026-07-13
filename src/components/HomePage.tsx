"use client";

import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProjectGallery } from "./ProjectGallery";
import { ProcessSection } from "./ProcessSection";
import { ResourceSection } from "./ResourceSection";
import { ProjectBrief } from "./ProjectBrief";

export function HomePage() {
  const [briefOpen, setBriefOpen] = useState(false);
  return (
    <main>
      <Header onStartProject={() => setBriefOpen(true)} />
      <Hero onStartProject={() => setBriefOpen(true)} />
      <ProjectGallery />
      <ProcessSection />
      <ResourceSection onStartProject={() => setBriefOpen(true)} />
      <section className="experience" id="about"><p className="eyebrow">Verdexo Ventures · Since 2017</p><h2>20 years around packaging.<br />Still curious about the next brand.</h2><button className="button button-light" onClick={() => setBriefOpen(true)}>Build yours with us <ArrowUpRight /></button></section>
      <footer><div className="footer-mark">VERDEXO <span>Packaging Studio</span></div><p>Tea · Chips · Rice · Atta · Spices · Custom packaging</p><p>© 2026 Verdexo Ventures Pvt. Ltd.</p></footer>
      <ProjectBrief open={briefOpen} onClose={() => setBriefOpen(false)} />
    </main>
  );
}
