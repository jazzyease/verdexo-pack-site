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
      <div className="section-heading center-heading">
        <div><p className="eyebrow">Packaging categories</p><h2>Explore designs made for the shelf.</h2></div>
        <p>See how category cues, structure and a clear brand identity come together in finished packs.</p>
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
              <Image src={project.image} alt={`${project.title} packaging`} width={520} height={760} unoptimized />
              {project.downloadable && <span className="download-tag"><DownloadSimple /> Sample dieline</span>}
            </div>
            <div className="project-info">
              <div><p>{project.category} packaging</p><h3>{project.title}</h3><small>{project.format}</small></div>
              <button aria-label={`View ${project.title} project`}><ArrowRight /></button>
            </div>
            <p className="project-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
