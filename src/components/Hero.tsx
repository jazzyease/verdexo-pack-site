"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";

type HeroProps = { onStartProject: () => void };

export function Hero({ onStartProject }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Design · Packaging · Production</p>
        <h1>Your product is ready. <em>Does the packaging look ready?</em></h1>
        <p className="hero-description">We turn promising products into shelf-ready brands through packaging strategy, design and production.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore designs <ArrowDown /></a>
          <button className="button button-outline" onClick={onStartProject}>Start a project <ArrowRight /></button>
        </div>
      </div>
      <div className="hero-products" aria-label="Featured Verdexo packaging designs">
        <div className="measure measure-top"><span>Seal area</span></div>
        <div className="measure measure-side"><span>Retail-ready structures</span></div>
        <Image className="hero-pack hero-tea" src="/images/tea.png" alt="Misty Leaf premium Assam tea packaging" width={500} height={880} priority />
        <Image className="hero-pack hero-chips" src="/images/chips.png" alt="Crisp Rush potato chips packaging" width={470} height={790} priority />
        <Image className="hero-pack hero-rice" src="/images/rice.png" alt="Grain Crown basmati rice packaging" width={500} height={850} priority />
        <p className="hero-note">Designed to be noticed.<br />Built to be produced.</p>
      </div>
    </section>
  );
}
