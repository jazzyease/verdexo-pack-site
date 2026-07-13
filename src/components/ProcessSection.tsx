import { ArrowRight, Cube, PenNib, Factory } from "@phosphor-icons/react/dist/ssr";

const steps = [
  { number: "01", title: "Shape the identity", copy: "Positioning, naming cues and a clear visual language for your category.", icon: PenNib },
  { number: "02", title: "Build the pack", copy: "Accurate artwork, production structure and realistic mockups before print.", icon: Cube },
  { number: "03", title: "Take it to market", copy: "Printing support, packaging production and a coherent launch presence.", icon: Factory },
];

export function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="process-intro"><p className="eyebrow">One partner, complete journey</p><h2>From a product idea to a brand people trust.</h2><a href="#services">Explore our capabilities <ArrowRight /></a></div>
      <div className="process-list">
        {steps.map(({ number, title, copy, icon: Icon }) => (
          <article key={number}><span>{number}</span><Icon size={30} weight="thin" /><h3>{title}</h3><p>{copy}</p></article>
        ))}
      </div>
    </section>
  );
}
