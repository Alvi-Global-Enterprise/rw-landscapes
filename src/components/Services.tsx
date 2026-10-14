interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconPath: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: "patios",
    title: "Patios",
    description: "Create clean, durable areas for seating, dining and everyday use.",
    iconPath: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M4 12h16M12 5v14" />
      </>
    ),
  },
  {
    id: "fencing",
    title: "Fencing",
    description: "Refresh boundaries and add privacy with practical, tidy fencing.",
    iconPath: <path d="M5 20V5M12 20V5M19 20V5M3 8h18M3 14h18" />,
  },
  {
    id: "driveways",
    title: "Driveways",
    description: "Hard-wearing driveway solutions designed around access and kerb appeal.",
    iconPath: <path d="M3 19h18M5 19l3-12h8l3 12M9 11h6M7 15h10" />,
  },
  {
    id: "turfing",
    title: "Turfing",
    description: "Lay fresh natural turf for an instantly cleaner, greener lawn.",
    iconPath: (
      <>
        <path d="M4 20c4-8 7-11 16-16-1 9-4 14-16 16Z" />
        <path d="M4 20c4-4 8-7 13-9" />
      </>
    ),
  },
  {
    id: "artificial-grass",
    title: "Artificial Grass",
    description: "Low-maintenance green spaces with a neat, consistent finish.",
    iconPath: (
      <>
        <path d="M12 21V8M12 13c-5 0-7-3-7-7 5 0 7 2 7 7ZM12 16c5 0 7-3 7-7-5 0-7 2-7 7Z" />
      </>
    ),
  },
  {
    id: "garden-clearance",
    title: "Garden Clearance",
    description: "Clear overgrown, tired or unused gardens ready for transformation.",
    iconPath: <path d="M6 20h12M9 20V8h6v12M7 8h10M12 8V4M9 4h6" />,
  },
  {
    id: "tree-work",
    title: "Tree Work",
    description: "Tidy and manage trees and growth to improve the garden around them.",
    iconPath: <path d="M12 21V9M8 21h8M6 9h12l-3-3 1-3H8l1 3-3 3Z" />,
  },
  {
    id: "decking",
    title: "Decking",
    description: "Add a defined outdoor area for relaxing, entertaining and garden living.",
    iconPath: <path d="M3 7h18M3 12h18M3 17h18M7 3v18M12 3v18M17 3v18" />,
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    description: "Bring tired hard surfaces back to a cleaner, brighter appearance.",
    iconPath: <path d="M5 19h8M9 19v-7l5-5 4 4-5 5v3M13 7l4 4M4 5h5" />,
  },
  {
    id: "hedges",
    title: "Hedges",
    description: "Shape, reduce and maintain hedges for a cleaner garden boundary.",
    iconPath: (
      <>
        <path d="M4 20c1-7 4-11 8-15 4 4 7 8 8 15M7 20v-5M12 20V9M17 20v-5" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>Landscaping services for every outdoor space.</h2>
          <p>
            A focused range of practical landscaping services, delivered with
            attention to detail from initial clearance through to the finished
            space.
          </p>
        </div>
        <div className="service-grid">
          {servicesData.map((service) => (
            <article key={service.id} className="service reveal">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {service.iconPath}
                </svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
