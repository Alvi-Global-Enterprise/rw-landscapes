interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const stepsData: ProcessStep[] = [
  {
    number: "01",
    title: "Tell us about it",
    description:
      "Share what you want to improve, from a small garden job to a full outdoor transformation.",
  },
  {
    number: "02",
    title: "Get your quote",
    description:
      "We discuss the work, materials and finish so the project can be planned around your space.",
  },
  {
    number: "03",
    title: "We get to work",
    description:
      "Clearance, preparation, installation and finishing are carried out with a focus on quality.",
  },
  {
    number: "04",
    title: "Enjoy the result",
    description:
      "A cleaner, more usable outdoor space ready for everyday life and entertaining.",
  },
];

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">How it works</span>
          <h2>A straightforward approach from first chat to finished garden.</h2>
          <p>
            Tell us what you want to change and we’ll help turn the idea into a
            clear, practical project.
          </p>
        </div>
        <div className="process-grid">
          {stepsData.map((step) => (
            <article key={step.number} className="step reveal">
              <div className="step-no">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
