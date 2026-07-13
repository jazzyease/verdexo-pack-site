"use client";

import { ArrowRight, DownloadSimple, FilePdf } from "@phosphor-icons/react";

const resources = [
  ["Packaging brief checklist", "PDF · 8 pages"],
  ["Print-ready artwork guide", "PDF · 12 pages"],
  ["Centre-seal sample dieline", "PDF · Editable"],
];

type ResourceSectionProps = { onStartProject: () => void };

export function ResourceSection({ onStartProject }: ResourceSectionProps) {
  return (
    <section className="resource-section" id="resources">
      <div className="resource-copy"><p className="eyebrow">Resources for ambitious brands</p><h2>Start with better information.</h2><p>Selected practical resources are available to help you prepare the right brief and avoid expensive production mistakes.</p><button onClick={onStartProject}>Need a custom dieline? <ArrowRight /></button></div>
      <div className="resource-list">
        {resources.map(([title, meta]) => (
          <button className="resource-row" key={title} onClick={() => window.alert("Demo download — this resource will be connected in the production site.")}>
            <FilePdf size={29} weight="thin" /><span><strong>{title}</strong><small>{meta}</small></span><DownloadSimple size={25} />
          </button>
        ))}
      </div>
    </section>
  );
}
