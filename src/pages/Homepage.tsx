import { FormEvent, useState } from "react";
import "./Homepage.css";

const CAPABILITIES = [
  "Autonomous systems",
  "Infrastructure",
  "Product engineering",
  "Interfaces",
  "ML systems",
  "Leadership",
];

const STACK = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Docker",
  "Tailwind",
  "Drizzle",
];

const PROJECTS = [
  {
    badge: "Creator & Maintainer",
    stars: "1 star",
    title: "m-maps",
    description:
      "Spoof iPhone GPS over USB on macOS. Open-source location simulation for development, security testing, and research.",
    href: "https://github.com/mayoka0/m-maps",
  },
  {
    badge: "Contributor",
    stars: "19k+ stars",
    title: "pydantic-ai",
    description:
      "AI agent framework, the Pydantic way. Agent orchestration with typed tools and structured outputs.",
    href: "https://github.com/pydantic/pydantic-ai",
  },
  {
    badge: "Founder",
    stars: "7 public repos",
    title: "Mayoka Labs",
    description:
      "An architectural collective I founded for systems infrastructure: orchestration, resilience, and agent networks when they fit.",
    href: "https://github.com/mayoka0",
  },
];

const OPEN_SOURCE = [
  {
    name: "pydantic-ai",
    sub: "AI Agent Framework · Active contributor",
    role: "Contributor · bug fixes",
  },
  {
    name: "click",
    sub: "Python CLI toolkit · Active contributor",
    role: "Contributor · bug fixes",
  },
  {
    name: "scipy",
    sub: "Scientific computing · Active contributor",
    role: "Contributor · bug fixes",
  },
  {
    name: "sympy",
    sub: "Computer algebra · Active contributor",
    role: "Contributor · bug fixes",
  },
  {
    name: "jc",
    sub: "CLI to JSON · Active contributor",
    role: "Contributor · bug fixes",
  },
];

const Homepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:m@mayoka.dev?subject=${subject}&body=${body}`;
  };

  return (
    <div className="hp">
      <nav className="hp-nav">
        <a className="hp-logo" href="#top">
          Mayoka
        </a>
        <div className="hp-nav-links">
          <a href="#projects">Projects</a>
          <a href="#open-source">Open Source</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
          <a
            className="hp-github-cta"
            href="https://github.com/mayoka0"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>

      <main id="top">
        <section className="hp-hero">
          <p className="hp-eyebrow">MAYOKA · SOFTWARE ENGINEER</p>
          <h1 className="hp-hero-title">
            Software
            <br />
            Engineer
          </h1>
          <p className="hp-hero-copy">
            Software engineer shipping product and infrastructure. Day to day
            that means reliable systems, clean interfaces, and the occasional
            deep dive into autonomous agents and AI tooling.
          </p>
          <div className="hp-focus">
            <div className="hp-focus-item">
              <span className="hp-focus-num">01</span>
              <span className="hp-focus-label">
                Product engineering &amp; open source
              </span>
            </div>
            <div className="hp-focus-item">
              <span className="hp-focus-num">02</span>
              <span className="hp-focus-label">
                Infrastructure &amp; systems design
              </span>
            </div>
          </div>
        </section>

        <section className="hp-stats" aria-label="Stats">
          <div className="hp-stat-card">
            <p className="hp-stat-value">547</p>
            <p className="hp-stat-label">Contributions in the last year</p>
          </div>
          <div className="hp-stat-card">
            <p className="hp-stat-value">5</p>
            <p className="hp-stat-label">Major open-source libraries</p>
          </div>
          <div className="hp-stat-card">
            <p className="hp-stat-value">45</p>
            <p className="hp-stat-label">Public repositories</p>
          </div>
        </section>

        <section className="hp-section" aria-label="Core capabilities">
          <p className="hp-section-label">CORE CAPABILITIES</p>
          <div className="hp-pills">
            {CAPABILITIES.map((item) => (
              <span className="hp-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="hp-section" id="projects">
          <p className="hp-section-label">RECENT PROJECTS</p>
          <div className="hp-projects">
            {PROJECTS.map((project) => (
              <article className="hp-project-card" key={project.title}>
                <div className="hp-project-meta">
                  <span className="hp-project-badge">{project.badge}</span>
                  <span className="hp-project-stars">{project.stars}</span>
                </div>
                <h2 className="hp-project-title">{project.title}</h2>
                <p className="hp-project-desc">{project.description}</p>
                <a
                  className="hp-project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="hp-section" id="open-source">
          <p className="hp-section-label">OPEN SOURCE CONTRIBUTIONS</p>
          <p className="hp-os-intro">
            Ongoing contributions across major open-source libraries: bug fixes
            and improvements. No fixed timeline; each is an active, continuing
            collaboration.
          </p>
          <div className="hp-os-list">
            {OPEN_SOURCE.map((item) => (
              <div className="hp-os-row" key={item.name}>
                <div>
                  <p className="hp-os-name">{item.name}</p>
                  <p className="hp-os-sub">{item.sub}</p>
                </div>
                <span className="hp-os-role">{item.role}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="hp-section" id="stack">
          <p className="hp-section-label">TOOLS &amp; STACK</p>
          <div className="hp-pills">
            {STACK.map((item) => (
              <span className="hp-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="hp-section" id="contact">
          <p className="hp-section-label">LET&apos;S WORK TOGETHER</p>
          <form className="hp-contact-wrap" onSubmit={onSubmit}>
            <div className="hp-field">
              <label htmlFor="hp-name">Name</label>
              <input
                id="hp-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="hp-field">
              <label htmlFor="hp-email">Email</label>
              <input
                id="hp-email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="hp-field">
              <label htmlFor="hp-message">Message</label>
              <textarea
                id="hp-message"
                name="message"
                placeholder="What are you working on?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button className="hp-submit" type="submit">
              Send message
            </button>
            <p className="hp-email-helper">
              Or email directly:{" "}
              <a href="mailto:m@mayoka.dev">m@mayoka.dev</a>
            </p>
          </form>
        </section>
      </main>

      <footer className="hp-footer">
        <div className="hp-footer-row">
          <span className="hp-footer-left">Mayoka · © 2026</span>
          <a className="hp-footer-right" href="mailto:m@mayoka.dev">
            m@mayoka.dev
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
