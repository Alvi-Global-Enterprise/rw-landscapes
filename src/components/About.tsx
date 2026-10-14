import Image from "next/image";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-copy reveal">
          <span className="eyebrow">About RW Landscapes</span>
          <h2>Transforming gardens from overgrown to ready to enjoy.</h2>
          <p>
            RW Landscapes focuses on practical, well-finished outdoor work —
            whether that means clearing an overgrown garden, preparing ground,
            laying turf or creating a complete patio and lawn area.
          </p>
          <p>
            Every project is approached with the end result in mind: a space that
            looks better, works better and is built to be enjoyed.
          </p>
          <div className="about-list">
            <div>
              <span className="tick">✓</span> Professional landscaping
            </div>
            <div>
              <span className="tick">✓</span> Reliable service
            </div>
            <div>
              <span className="tick">✓</span> Quality workmanship
            </div>
            <div>
              <span className="tick">✓</span> Competitive prices
            </div>
          </div>
          <a className="btn btn-primary" href="#contact">
            Discuss Your Garden <span>→</span>
          </a>
        </div>
        <div className="about-visual reveal">
          <div className="about-photo before">
            <Image
              src="/images/img_2.webp"
              alt="Before: overgrown garden ready for clearance"
              width={600}
              height={600}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
            <span className="about-photo-label">Before</span>
          </div>
          <div className="about-photo after">
            <Image
              src="/images/img_3.webp"
              alt="After: finished lawn and landscaped garden"
              width={600}
              height={600}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
            <span className="about-photo-label">After</span>
          </div>
          <div className="about-badge">
            Outdoor spaces
            <br />
            <span>built to last.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
