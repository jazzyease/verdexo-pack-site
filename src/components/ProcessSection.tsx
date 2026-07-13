import { ArrowRight, Cube, PenNib, Factory, Handshake, Package } from "@phosphor-icons/react/dist/ssr";

const steps = [
  { number: "01", title: "Shape the identity", copy: "Positioning, naming cues and a clear visual language for your category.", icon: PenNib },
  { number: "02", title: "Build the pack", copy: "Accurate artwork, production structure and realistic mockups before print.", icon: Cube },
  { number: "03", title: "Take it to market", copy: "Printing support, packaging production and a coherent launch presence.", icon: Factory },
];

export function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="section-heading center-heading"><div><p className="eyebrow">Why Verdexo</p><h2>More than a good-looking packet.</h2></div><p>Every design is grounded in production reality, category behaviour and your commercial goals.</p></div>
      <div className="feature-grid">
        <article><PenNib /><h3>Custom, not templated</h3><p>A brand system built around your product, audience and price point.</p></article>
        <article><Package /><h3>Production-aware</h3><p>Artwork, structure and finishes planned for how the pack will actually be made.</p></article>
        <article><Factory /><h3>Design to delivery</h3><p>Support from the first concept through printing and packaging production.</p></article>
        <article><Handshake /><h3>Practical guidance</h3><p>Clear recommendations on formats, quantities, materials and next steps.</p></article>
      </div>
      <div className="process-band">
        <div className="process-intro"><p className="eyebrow">A clear three-step process</p><h2>From product idea to shelf-ready brand.</h2><a href="#resources">Prepare your brief <ArrowRight /></a></div>
        <div className="process-list">
        {steps.map(({ number, title, copy, icon: Icon }) => (
          <article key={number}><span>{number}</span><Icon size={30} weight="thin" /><h3>{title}</h3><p>{copy}</p></article>
        ))}
        </div>
      </div>
    </section>
  );
}
