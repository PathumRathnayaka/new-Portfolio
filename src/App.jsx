import { useEffect, useMemo, useState } from 'react'
import './App.css'

const profile = {
  name: 'Pathum Rathnayaka',
  role: 'Software Engineer',
  location: 'Sri Lanka',
  email: 'thilinapathumrathnayaka@gmail.com',
  portfolio: 'https://pathumrathnayaka.online/',
  github: 'https://github.com/PathumRathnayaka',
  linkedin: 'https://www.linkedin.com/in/pathumrathnayaka',
  availability: 'Software engineer focused on SaaS platforms, business systems, and production-ready web applications',
  summary:
    'I build real-world software solutions across frontend, backend, and product delivery, including HR and payroll systems, SaaS platforms, business websites, and AI-powered monitoring tools.',
}

const navItems = ['work', 'skills', 'experience', 'contact']

const socialHandle = 'pathumrathnayaka.online'

const socials = [
  {
    name: 'Instagram',
    icon: 'instagram',
    href: `https://www.instagram.com/${socialHandle}/`,
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    href: `https://www.facebook.com/${socialHandle}/`,
  },
  {
    name: 'Threads',
    icon: 'threads',
    href: `https://www.threads.net/@${socialHandle}`,
  },
  {
    name: 'TikTok',
    icon: 'tiktok',
    href: `https://www.tiktok.com/@${socialHandle}`,
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: profile.github,
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: profile.linkedin,
  },
]

const projects = [
  {
    title: 'CenzHRM HR & Payroll Platform',
    type: 'Multi-tenant SaaS',
    description:
      'Developed an HR and payroll platform used by multiple organizations, covering employee management, attendance tracking, leave workflows, payroll operations, salary calculations, loans, EPF/ETF, and role-based access control.',
    stack: ['React', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
    impact: 'Built for a live production environment with real business workflows.',
    link: 'https://payroll.dev.cenzios.com/login',
  },
  {
    title: 'Marketplace SaaS Platform',
    type: 'Enterprise microservices',
    description:
      'Architected and developed a cloud-ready marketplace platform using microservices, secure authentication, distributed business services, scalable service communication, and optimized data management.',
    stack: ['Spring Boot', 'NestJS', 'Node.js', 'Kafka', 'RabbitMQ', 'JWT'],
    impact: 'Designed for high-availability enterprise application needs.',
    link: 'https://github.com/PathumRathnayaka/Marketplace-Microservice.git',
  },
  {
    title: 'SNP Holdings Corporate Website',
    type: 'Business website',
    description:
      'Built and enhanced a responsive corporate website for a Sri Lankan printing and sportswear manufacturing business, improving performance, SEO, maintainability, and the overall user experience.',
    stack: ['Next.js', 'React', 'Node.js', 'SEO', 'Responsive UI'],
    impact: 'Delivered a modern platform to showcase products and services.',
    link: 'https://snpholdings.online/',
  },
  {
    title: 'AI Employee Productivity Monitoring',
    type: 'Computer vision dashboard',
    description:
      'Created a real-time monitoring system that detects phone usage, sleeping, and away-from-desk behavior from webcam input, then streams activity events to a live React dashboard.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'YOLO', 'Flask', 'React', 'MongoDB'],
    impact: 'Provides instant status updates and daily productivity summaries.',
    link: 'https://github.com/PathumRathnayaka/AI-powered-employee-productivity-monitoring-system.git',
  },
]

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Redux Toolkit',
  'React Query',
  'Tailwind CSS',
  'Shadcn/ui',
  'Node.js',
  'Express.js',
  'NestJS',
  'Spring Boot',
  'REST APIs',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Kafka',
  'RabbitMQ',
  'Python',
  'OpenCV',
  'Flask',
  'Jira',
]

const experience = [
  {
    title: 'Intern Software Engineer',
    detail:
      'Served as the primary developer for CenzHRM, leading frontend and backend development for a multi-tenant HR management SaaS, including the administrative portal and core business modules.',
  },
  {
    title: 'Freelance Software Engineer',
    detail:
      'Developed custom web solutions, dashboards, and business management systems, fixed production bugs, optimized performance, and integrated payment gateways, authentication providers, and external APIs.',
  },
  {
    title: 'SaaS & Product Engineering',
    detail:
      'Worked across requirement analysis, Agile delivery, backend architecture, database design, authentication flows, responsive UI, and scalable application patterns for real business products.',
  },
]

function SocialIcon({ icon }) {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icon === 'instagram' ? (
        <>
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="0.7" />
        </>
      ) : null}
      {icon === 'facebook' ? (
        <path d="M14 8.6h2.1V5.2c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.4v3H4.5v3.8h3.3V23h4v-5.8h3.3l.5-3.8h-3.8v-2.6c0-1.1.3-1.8 2.2-1.8Z" />
      ) : null}
      {icon === 'threads' ? (
        <path d="M17.7 11.1c-.2-3.9-2.5-6.1-6.3-6.1-3.5 0-6 2.4-6 6.1 0 3.8 2.5 6.4 6.2 6.4 2.3 0 4.2-1 5.1-2.7l-2.2-1.1c-.5.9-1.4 1.4-2.8 1.4-1.8 0-3.1-1.1-3.1-3.1 0-2.1 1.2-3.2 3-3.2 1.7 0 2.7.8 3 2.2-1-.5-2-.7-3.1-.7-2.4 0-4 1.3-4 3.3 0 1.9 1.5 3.2 3.7 3.2 2.1 0 3.6-1.1 4.1-3 .8.5 1.2 1.2 1.2 2.1 0 2.9-2.6 4.8-6.1 4.8-4.6 0-7.6-3.2-7.6-8.1C2.8 7.6 6 4 11.4 4c5.1 0 8.4 3.2 8.6 8.5Z" />
      ) : null}
      {icon === 'tiktok' ? (
        <path d="M15.4 3c.4 2.6 1.8 4.2 4.1 4.4v3.4c-1.4.1-2.7-.3-4-1.1v6.3c0 3.2-2.2 5.5-5.4 5.5-3.1 0-5.4-2.1-5.4-5.1 0-3.4 2.8-5.8 6.2-5.2v3.5c-1.4-.4-2.5.4-2.5 1.7 0 1.1.8 1.8 1.9 1.8 1.2 0 1.9-.8 1.9-2.1V3Z" />
      ) : null}
      {icon === 'github' ? (
        <path d="M12 2.4c-5.4 0-9.7 4.4-9.7 9.8 0 4.3 2.8 8 6.7 9.3.5.1.7-.2.7-.5v-1.9c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.6 0 3.8-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8V21c0 .3.2.6.7.5a9.8 9.8 0 0 0 6.7-9.3c0-5.4-4.4-9.8-9.7-9.8Z" />
      ) : null}
      {icon === 'linkedin' ? (
        <path d="M6.5 8.8H3.2V21h3.3ZM4.9 7.1c1.1 0 1.9-.8 1.9-1.8S6 3.5 4.9 3.5 3 4.3 3 5.3s.8 1.8 1.9 1.8ZM21 21h-3.3v-6.4c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1V21H10V8.8h3.2v1.7c.5-.8 1.5-2 3.6-2 2.6 0 4.2 1.8 4.2 5.5Z" />
      ) : null}
    </svg>
  )
}

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
                <strong>SaaS</strong>
                Platforms
              </span>
              <span>
                <strong>AI</strong>
                Monitoring
              </span>
              <span>
                <strong>Full</strong>
                Stack
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
            My work sits at the intersection of product delivery and engineering
            discipline: clean frontend systems, practical backend architecture,
            secure APIs, database design, third-party integrations, and
            responsive interfaces that solve real business problems.
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
                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project
                  </a>
                ) : null}
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
          <div className="contact-links" aria-label="Profile links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#top" aria-label={`${profile.name} home`}>
            <span className="brand-mark">
              <img src="/Logo.png" alt="" />
            </span>
            <span>{profile.name}</span>
          </a>
          <p>@{socialHandle}</p>
        </div>

        <div className="footer-socials" aria-label="Social media links">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              title={social.name}
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
