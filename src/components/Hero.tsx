"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, CheckCircle } from "@phosphor-icons/react";

type HeroProps = { onStartProject: () => void };

export function Hero({ onStartProject }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Packaging for ambitious food brands</p>
          <h1>Make your product look <span>ready for market.</span></h1>
          <p className="hero-description">From brand identity and print-ready artwork to finished packaging—we help tea, snacks, rice, atta and FMCG products earn attention and trust.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={onStartProject}>Get a packaging quote <ArrowRight /></button>
            <a className="button button-light" href="#work">Explore our work <ArrowDown /></a>
          </div>
          <div className="hero-checks">
            <span><CheckCircle weight="fill" /> Custom design</span>
            <span><CheckCircle weight="fill" /> Print support</span>
            <span><CheckCircle weight="fill" /> Low to bulk quantities</span>
          </div>
        </div>
        <div className="hero-products" aria-label="Featured Verdexo packaging designs">
          <span className="hero-kicker">Designed by Verdexo</span>
          <Image className="hero-pack hero-tea" src="/images/tea.png" alt="Misty Leaf premium Assam tea packaging" width={500} height={880} priority unoptimized />
          <Image className="hero-pack hero-chips" src="/images/chips.png" alt="Crisp Rush potato chips packaging" width={470} height={790} priority unoptimized />
          <Image className="hero-pack hero-rice" src="/images/rice.png" alt="Grain Crown basmati rice packaging" width={500} height={850} priority unoptimized />
          <div className="hero-float"><strong>4 categories</strong><span>One launch-ready system</span></div>
        </div>
      </div>
      <div className="trust-strip">
        <span><strong>Since 2017</strong>Verdexo Ventures</span>
        <span><strong>20+ years</strong>Packaging experience</span>
        <span><strong>Design to print</strong>One accountable partner</span>
        <span><strong>Across India</strong>Production support</span>
      </div>
    </section>
  );
}
