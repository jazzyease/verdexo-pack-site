"use client";

import Image from "next/image";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { categories, projects } from "../data/projects";

export function ProjectGallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((project) => project.category === active), [active]);

  return (
    <section className="work-section" id="work">
      <div className="section-heading">
        <div><p className="eyebrow">Selected packaging work</p><h2>Designed for real categories.</h2></div>
        <p>Browse category-specific identities, finished packs and production-ready thinking.</p>
      </div>
      <div className="category-filter" role="tablist" aria-label="Filter packaging projects">
        {categories.map((category) => (
          <button key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)} role="tab" aria-selected={active === category}>{category}</button>
        ))}
      </div>
      <div className="project-grid">
        {filtered.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className={`project-visual tone-${index % 4}`}>
              <span className="project-index">0{projects.indexOf(project) + 1}</span>
              <Image src={project.image} alt={`${project.title} packaging`} width={520} height={760} unoptimized />
              {project.downloadable && <span className="download-tag"><DownloadSimple /> Sample available</span>}
            </div>
            <div className="project-info">
              <div><p>{project.category} · {project.format}</p><h3>{project.title}</h3></div>
              <button aria-label={`View ${project.title} project`}><ArrowRight /></button>
            </div>
            <p className="project-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
