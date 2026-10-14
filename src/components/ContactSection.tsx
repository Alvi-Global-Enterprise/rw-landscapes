"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Garden clearance",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const servicesList = [
    "Garden clearance",
    "Patio / paving",
    "Fencing",
    "Driveway",
    "Turfing",
    "Artificial grass",
    "Decking",
    "Tree work",
    "Pressure washing",
    "Hedges",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Free Quote Enquiry — RW Landscapes");
    const bodyText =
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || "Not provided"}\n` +
      `Service: ${formData.service}\n\n` +
      `Project details:\n${formData.message}`;

    const body = encodeURIComponent(bodyText);

    setStatusMessage(
      "Your email app should open with the enquiry ready to send. If it doesn't open automatically, you can also copy your message below."
    );

    window.location.href = `mailto:rwlandscapingservices1@gmail.com?subject=${subject}&body=${body}`;
  };

  const copyDetailsToClipboard = () => {
    const details =
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || "Not provided"}\n` +
      `Service: ${formData.service}\n` +
      `Details: ${formData.message}`;

    navigator.clipboard.writeText(details).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <aside className="contact-card reveal">
          <span className="eyebrow" style={{ color: "#c8ff9b" }}>
            Get in touch
          </span>
          <h3>Let’s talk about your garden.</h3>
          <p>
            For enquiries, quotes and bookings, contact RW Landscapes directly.
          </p>

          <div className="contact-item">
            <span className="mini">☎</span>
            <div>
              <a href="tel:+447877722888" className="hover:underline">
                <strong>07877 722888</strong>
              </a>
              <br />
              <small>Call for a free quote</small>
            </div>
          </div>

          <div className="contact-item">
            <span className="mini">☎</span>
            <div>
              <a href="tel:+447749264022" className="hover:underline">
                <strong>07749 264022</strong>
              </a>
              <br />
              <small>Alternative number</small>
            </div>
          </div>

          <div className="contact-item">
            <span className="mini">✉</span>
            <div>
              <a
                href="mailto:rwlandscapingservices1@gmail.com"
                className="hover:underline"
              >
                <strong>rwlandscapingservices1@gmail.com</strong>
              </a>
              <br />
              <small>Email enquiries</small>
            </div>
          </div>
        </aside>

        <form className="form reveal" id="quoteForm" onSubmit={handleSubmit}>
          <span className="eyebrow">Request a quote</span>
          <h2 style={{ fontSize: "2.35rem", marginTop: "13px" }}>
            Tell us what you need.
          </h2>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                required
                type="tel"
                placeholder="07..."
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="field">
              <label htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                {servicesList.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <div className="field full">
              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us a little about the garden or work you have in mind..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="field full">
              <button className="btn btn-primary" type="submit">
                Prepare Email Enquiry <span>→</span>
              </button>
              <p className="form-note">
                Submitting opens your email app with the enquiry details
                addressed to RW Landscapes.
              </p>

              {statusMessage && (
                <div
                  className="form-status"
                  id="formStatus"
                  role="status"
                  style={{ display: "block" }}
                >
                  <p className="mb-2">{statusMessage}</p>
                  <button
                    type="button"
                    onClick={copyDetailsToClipboard}
                    className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg bg-[#276e24] text-white hover:bg-[#1f591c] transition-colors"
                  >
                    {copied ? "✓ Details Copied!" : "📋 Copy Enquiry Details"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
