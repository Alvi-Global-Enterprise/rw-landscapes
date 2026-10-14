export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-kicker">
          <span /> Professional landscaping services
        </div>
        <h1>
          Outdoor spaces, <strong>built to last.</strong>
        </h1>
        <p>
          From garden clearances and fresh turf to patios, fencing, decking and
          complete outdoor transformations — RW Landscapes creates practical,
          clean and inviting spaces.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Get a Free Quote <span>→</span>
          </a>
          <a className="btn btn-ghost" href="#work">
            View Our Work <span>↗</span>
          </a>
        </div>
        <div className="hero-trust mb-6">
          <span>
            <b>✓</b> Quality work
          </span>
          <span>
            <b>✓</b> Reliable service
          </span>
          <span>
            <b>✓</b> Competitive prices
          </span>
        </div>
      </div>
      <div className="stats">
        <div className="container stats-grid">
          <div className="stat">
            <strong>10+ services</strong>
            <span>Landscaping & outdoor work</span>
          </div>
          <div className="stat">
            <strong>Free quotes</strong>
            <span>Discuss your project with us</span>
          </div>
          <div className="stat">
            <strong>Professional finish</strong>
            <span>Built around your space</span>
          </div>
          <div className="stat">
            <strong>Taking bookings</strong>
            <span>From October</span>
          </div>
        </div>
      </div>
    </section>
  );
}
