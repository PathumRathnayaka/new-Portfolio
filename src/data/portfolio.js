export const profile = {
  name: 'Pathum Rathnayaka',
  role: 'Software Engineer',
  location: 'Sri Lanka',
  email: 'thilinapathumrathnayaka@gmail.com',
  portfolio: 'https://pathumrathnayaka.online/',
  github: 'https://github.com/PathumRathnayaka',
  linkedin: 'https://www.linkedin.com/in/pathumrathnayaka',
  availability:
    'Open to software engineering roles and freelance builds',
  summary:
    'A Software Engineer from Sri Lanka specializing in building scalable web applications, SaaS platforms, and enterprise software solutions. Experienced in full-stack development, system design, and delivering modern digital products',
}

export const navItems = ['work', 'skills', 'experience', 'contact']

export const socialHandle = 'pathumrathnayaka.online'

export const socials = [
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

export const projects = [
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

export const workHistory = [
  {
    role: 'Associate Software Engineer',
    company: 'Surecore (Pvt) Ltd',
    companyHref: 'https://www.surecore.co/',
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQGCwHfh8S-Whw/company-logo_200_200/company-logo_200_200/0/1630593471865/surecore_co_logo?e=1788393600&v=beta&t=Jekr5IXRGs6sfv-6mlo4t_S1UEWFsJBm87P8pgXoeSU',
    logoText: 'SC',
    logoColor: 'linear-gradient(135deg, #22d3ee, #6366f1)',
    employmentType: 'Full-time',
    duration: 'Jun 2026 - Present · 3 mos',
    location: 'Colombo, Western Province, Sri Lanka · Hybrid',
    description:
      'Contributing to the design, development, and maintenance of scalable backend systems. Developing secure RESTful APIs, implementing business logic, and optimizing performance.',
    skills: ['Software Infrastructure', 'Program Creation', 'REST APIs', 'System Design'],
  },
  {
    role: 'Full Stack Engineer',
    company: 'Cenzios',
    companyHref: 'https://cenzios.com/',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFfnDEkhFArcA/company-logo_200_200/B56ZeCBoF0HUAM-/0/1750233154670/cenzios_it_solutions_pvt_ltd_logo?e=1788393600&v=beta&t=HlbL0bEblVjZ4iGtlxMl3cerkMKzQYqEJUmtTGGHO5I',
    logoText: 'CZ',
    logoColor: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
    employmentType: 'Internship',
    duration: 'Nov 2025 - May 2026 · 7 mos',
    location: 'Remote',
    description:
      'Worked as a Full Stack Developer Intern, contributing to the development and maintenance of a scalable multi-tenant SaaS platform built for enterprise business operations. Collaborated with cross-functional teams.',
    skills: ['Software Infrastructure', 'Web Technologies', 'SaaS Development'],
  },
  {
    role: 'Freelance Developer',
    company: 'Fiverr',
    companyHref: null,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCP-vyvDXngL3NeN5uJ5fCl1UUCNYACdJoEj8zHOWocmpZwupw0-vx01P&s=10',
    logoText: 'FR',
    logoColor: 'linear-gradient(135deg, #1dbf73, #19a463)',
    employmentType: 'Freelance',
    duration: 'May 2022 - Jan 2025 · 2 yrs 9 mos',
    location: 'Remote',
    description:
      'Developed custom web solutions, dashboards, and business management systems, fixed production bugs, optimized performance, and integrated payment gateways, authentication providers, and external APIs.',
    skills: ['Full Stack Development', 'API Integration', 'Client Delivery'],
  },
]

export const skills = [
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'Redux Toolkit', icon: 'simple-icons:redux' },
  { name: 'React Query', icon: 'simple-icons:reactquery' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
  { name: 'Shadcn/ui', icon: 'simple-icons:shadcnui' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'Express.js', icon: 'simple-icons:express' },
  { name: 'NestJS', icon: 'simple-icons:nestjs' },
  { name: 'Spring Boot', icon: 'simple-icons:springboot' },
  { name: 'REST APIs', icon: 'mdi:api' },
  { name: 'GraphQL', icon: 'simple-icons:graphql' },
  { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
  { name: 'MongoDB', icon: 'simple-icons:mongodb' },
  { name: 'Kafka', icon: 'simple-icons:apachekafka' },
  { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq' },
  { name: 'Python', icon: 'simple-icons:python' },
  { name: 'OpenCV', icon: 'simple-icons:opencv' },
  { name: 'Flask', icon: 'simple-icons:flask' },
  { name: 'Jira', icon: 'simple-icons:jira' },
]

export const experience = [
  {
    title: 'Software Engineer',
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
