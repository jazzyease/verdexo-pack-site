"use client";

import { ArrowRight, CheckCircle, X } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

type ProjectBriefProps = { open: boolean; onClose: () => void };

export function ProjectBrief({ open, onClose }: ProjectBriefProps) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent) => { event.preventDefault(); setSubmitted(true); };

  if (!open) return null;
  return (
    <div className="brief-overlay" role="dialog" aria-modal="true" aria-labelledby="brief-title">
      <button className="overlay-dismiss" aria-label="Close project brief" onClick={onClose} />
      <aside className="brief-panel">
        <button className="brief-close" onClick={onClose} aria-label="Close"><X /></button>
        {submitted ? (
          <div className="brief-success"><CheckCircle size={54} weight="thin" /><p className="eyebrow">Brief received</p><h2>That is a strong start.</h2><p>In the full website, this would be sent to the Verdexo team with the selected design reference attached.</p><button className="button button-dark" onClick={onClose}>Continue exploring</button></div>
        ) : (
          <><p className="eyebrow">Start a packaging project</p><h2 id="brief-title">Tell us what you are building.</h2><p className="brief-lead">A few useful details help us recommend the right design and packaging route.</p>
          <form onSubmit={handleSubmit}>
            <label>What is your product?<input required placeholder="e.g. Premium Assam tea" /></label>
            <label>What do you need?<select defaultValue=""><option value="" disabled>Select one</option><option>Packaging design</option><option>Design and printing</option><option>Custom packaging structure</option><option>Complete brand launch</option></select></label>
            <label>Approximate quantity<input placeholder="e.g. 10,000 pouches" /></label>
            <label>Your WhatsApp or email<input required placeholder="How should we contact you?" /></label>
            <button className="button button-dark" type="submit">Send project brief <ArrowRight /></button>
          </form></>
        )}
      </aside>
    </div>
  );
}
