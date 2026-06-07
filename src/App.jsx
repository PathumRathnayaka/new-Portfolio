import { useEffect, useMemo, useState } from 'react'
import './App.css'

const profile = {
  name: 'Pathum',
  role: 'Software Engineer',
  location: 'Sri Lanka',
  email: 'hello@pathum.dev',
  availability: 'Open to software engineering roles and freelance builds',
  summary:
    'I design and build fast, reliable digital products with clean interfaces, thoughtful architecture, and the patience to make details feel effortless.',
}

const navItems = ['work', 'skills', 'experience', 'contact']

const projects = [
  {
    title: 'Qaldrin Portfolio',
    type: 'Personal brand system',
    description:
      'A responsive portfolio designed to present engineering craft, project thinking, and contact paths with a polished light and dark experience.',
    stack: ['React', 'Vite', 'Responsive UI', 'Theme System'],
    impact: 'Built as a modern, recruiter-friendly first impression.',
  },
  {
    title: 'Full-Stack Product Builds',
    type: 'Web applications',
    description:
      'Production-minded application work focused on clear user flows, maintainable components, API integration, and pragmatic delivery.',
    stack: ['JavaScript', 'React', 'Node.js', 'REST APIs'],
    impact: 'Turns ambiguous product ideas into usable, testable software.',
  },
  {
    title: 'Engineering Utilities',
    type: 'Developer tooling',
    description:
      'Small tools, dashboards, and automation pieces that reduce repetitive work and make engineering workflows easier to operate.',
    stack: ['Automation', 'Frontend', 'Tooling', 'Data Flows'],
    impact: 'Improves speed and clarity for day-to-day technical work.',
  },
]

const skills = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'API Integration',
  'Responsive Design',
  'Git',
  'UI Engineering',
  'Problem Solving',
  'Performance',
  'Product Thinking',
]

const experience = [
  {
    title: 'Frontend Engineering',
    detail:
      'Building polished interfaces with reusable components, reliable state handling, accessibility, and careful responsive behavior.',
  },
  {
    title: 'Backend & Integrations',
    detail:
      'Connecting products to APIs, services, and data flows while keeping architecture understandable and practical.',
  },
  {
    title: 'Product Delivery',
    detail:
      'Taking ideas from loose requirements into working releases with attention to quality, speed, and long-term maintainability.',
  },
]

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const storedTheme = window.localStorage.getItem('portfolio-theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const themeLabel = useMemo(
    () => (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'),
    [theme],
  )

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          <span className="brand-mark">
            <img src="/Logo.png" alt="" />
          </span>
          <span>{profile.name}</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          aria-label={themeLabel}
          title={themeLabel}
        >
          <span
            className={`theme-icon theme-icon--${theme === 'dark' ? 'moon' : 'sun'}`}
            aria-hidden="true"
          />
        </button>
      </header>

      <main id="top">
        <section className="hero-section section-band">
          <div className="hero-copy">
            <p className="eyebrow">{profile.role} / {profile.location}</p>
            <h1>Building useful software with sharp interfaces and steady engineering.</h1>
            <p className="hero-text">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                View work
              </a>
              <a className="button secondary" href={`mailto:${profile.email}`}>
                Contact me
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Profile highlights">
            <div className="portrait" aria-hidden="true">
              <img src="/og-image.png" alt="" />
            </div>
            <div>
              <p className="panel-label">Currently</p>
              <p className="panel-text">{profile.availability}</p>
            </div>
            <div className="quick-stats">
              <span>
                <strong>12+</strong>
                Skills
              </span>
              <span>
                <strong>3</strong>
                Focus Areas
              </span>
              <span>
                <strong>100%</strong>
                Responsive
              </span>
            </div>
          </aside>
        </section>

        <section className="section-band intro-grid" aria-label="Engineering profile">
          <div>
            <p className="section-kicker">What I bring</p>
            <h2>Calm execution from first idea to shipped product.</h2>
          </div>
          <p>
            My work sits at the intersection of product sense and engineering
            discipline: clean component systems, practical backend thinking,
            responsive layouts, and interfaces that feel simple because the hard
            decisions were handled underneath.
          </p>
        </section>

        <section className="section-band" id="work">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <h2>Projects shaped around outcomes.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span>Featured</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className="impact">{project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band skills-section" id="skills">
          <div className="section-heading">
            <p className="section-kicker">Toolbox</p>
            <h2>Skills for building clean, useful products.</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section-band" id="experience">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Engineering strengths that travel across projects.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-kicker">Contact</p>
          <h2>Have a product, role, or idea that needs a careful engineer?</h2>
          <p>
            I am ready to talk through the problem, shape the approach, and build
            the software with focus.
          </p>
          <a className="button primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
