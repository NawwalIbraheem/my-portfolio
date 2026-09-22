import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Code2,
  Download,
  ExternalLink,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Smartphone,
  Sun,
  X,
} from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: 'Mfumo wa Bei',
    description:
      'A practical price-management tool connecting a Flutter mobile experience to a Django REST API.',
    image: '',
    technologies: ['Flutter', 'Dart', 'Django', 'REST API'],
    githubUrl: 'https://github.com/NawwalIbraheem/mfumo_wa_bei',
    liveUrl: '',
    featured: true,
  },
  {
    title: 'Halal Link',
    description:
      'A Flutter project focused on making useful, everyday information easier to find and use.',
    image: '',
    technologies: ['Flutter', 'Dart'],
    githubUrl: 'https://github.com/NawwalIbraheem/halal_link',
    liveUrl: '',
    featured: true,
  },
  {
    title: 'USSD Crops',
    description:
      'A Python-based USSD concept for making crop information reachable on simple mobile devices.',
    image: '',
    technologies: ['Python'],
    githubUrl: 'https://github.com/NawwalIbraheem/ussd_crops',
    liveUrl: '',
    featured: false,
  },
  {
    title: 'Digital Doc',
    description:
      'A document-focused project placeholder, ready for its technology and repository details.',
    image: '',
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    featured: false,
  },
  {
    title: 'QR Document Generator',
    description:
      'A QR-first document utility placeholder. Project details can be added as the build is documented.',
    image: '',
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    featured: false,
  },
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['Flutter', 'Dart'],
  },
  {
    title: 'Web & backend',
    icon: Code2,
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Django'],
  },
  {
    title: 'Tools',
    icon: FolderGit2,
    items: ['REST APIs', 'Git', 'GitHub', 'VS Code'],
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('nawal-theme-v2');
    if (savedTheme) setDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('nawal-theme-v2', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="portfolio-shell">
          <header className="site-header">
            <div className="container">
              <nav className="nav-bar" aria-label="Primary navigation">
                <a className="brand" href="#home" onClick={closeMobileMenu} data-testid="link-brand-home">
                  <span className="brand-mark" aria-hidden="true">N</span>
                  <span className="brand-copy">Nawal Ibrahim</span>
                </a>

                <div className="nav-actions">
                  <button
                    className="icon-button"
                    type="button"
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    onClick={() => setDarkMode((current) => !current)}
                    data-testid="button-theme-toggle"
                  >
                    {darkMode ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
                  </button>
                  <a className="cv-button" href="/Nawal-Ibrahim-CV.pdf" download data-testid="link-download-cv-header">
                    <Download size={16} aria-hidden="true" />
                    <span>CV</span>
                  </a>
                  <button
                    className="menu-button"
                    type="button"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    onClick={() => setMobileMenuOpen((current) => !current)}
                    data-testid="button-mobile-menu"
                  >
                    {mobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                  </button>
                </div>
              </nav>

              <div id="mobile-navigation" className={`mobile-menu${mobileMenuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={closeMobileMenu} data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}>
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
                <a href="/Nawal-Ibrahim-CV.pdf" download onClick={closeMobileMenu} data-testid="link-download-cv-mobile">
                  <span>Download CV</span>
                  <Download size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </header>

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
          </main>

          <footer className="site-footer">
            <div className="container footer-inner">
              <span className="footer-mark" aria-label="Nawal Ibrahim">N.</span>
              <span>Designed and built by Nawal Ibrahim.</span>
              <span>© 2026 · Keep building.</span>
              <div className="footer-links">
                <a href="https://github.com/NawwalIbraheem" target="_blank" rel="noreferrer" aria-label="Nawal Ibrahim on GitHub" data-testid="link-footer-github">
                  GitHub <ArrowUpRight size={13} aria-hidden="true" />
                </a>
                <a href="#home" data-testid="link-footer-top">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-intro-block">
          <p className="eyebrow">Software developer <span>/</span> mobile &amp; full-stack development</p>
          <h1 className="hero-title" id="hero-title">
            Building things that feel <em>clear.</em>
          </h1>
          <p className="hero-subtitle">
            I&apos;m Nawal Ibrahim, a junior software developer working across mobile, web, and backend systems. I care about the details that make technology feel clear and useful.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects" data-testid="button-view-work">
              View My Work <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="button button-outline" href="https://github.com/NawwalIbraheem" target="_blank" rel="noreferrer" data-testid="link-hero-github">
              <Github size={16} aria-hidden="true" /> GitHub
            </a>
            <a className="button button-outline" href="/Nawal-Ibrahim-CV.pdf" download data-testid="link-download-cv-hero">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>

        <div className="notebook-note" aria-label="A note about Nawal's approach">
          <div className="note-rule" />
          <div className="note-content">
            <p className="note-title">A developer&apos;s notebook</p>
            <p>An evolving record of what I&apos;m learning, making, and paying attention to. Grounded in real people and the problems they need solved.</p>
          </div>
          <div className="availability">
            <span className="availability-line" aria-hidden="true" />
            <MapPin size={16} aria-hidden="true" />
            <span>Open to opportunities <b>·</b> East Africa</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-topline">
          <p className="section-kicker">01 / About</p>
          <p className="section-side-note">Curiosity, translated into practice.</p>
        </div>
        <div className="about-layout">
          <h2 className="section-title" id="about-title">Useful software starts with <em>attention.</em></h2>
          <div className="about-copy-wrap">
            <p className="about-copy">I enjoy turning real needs into software that feels clear, dependable, and worth returning to.</p>
            <p className="about-copy">I am interested in the full path from an idea to a working product: mobile interfaces, web experiences, backend services, and practical applications of AI/ML.</p>
            <p className="about-copy">I am looking for places to learn quickly, contribute thoughtfully, and work with people who care about solving the right problem—not just adding more code.</p>
            <p className="signature-line">Still learning. Still building.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-topline">
          <p className="section-kicker">02 / Skills</p>
          <p className="section-side-note">A growing toolkit, chosen for the problem.</p>
        </div>
        <div className="skills-heading-row">
          <h2 className="section-title" id="skills-title">Tools I use to move an idea <em>forward.</em></h2>
          <p className="skills-intro">No percentages—just technologies I am actively learning and using.</p>
        </div>
        <div className="skill-groups">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-heading">
                  <span className="skill-index">0{index + 1}</span>
                  <Icon size={16} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li key={skill} data-testid={`skill-${skill.toLowerCase().replaceAll(' ', '-')}`}>{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-topline">
          <p className="section-kicker">03 / Selected work</p>
          <a className="section-side-link" href="https://github.com/NawwalIbraheem" target="_blank" rel="noreferrer" data-testid="link-view-all-projects">
            All repositories <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
        <h2 className="section-title projects-heading" id="projects-title">Small builds with real questions <em>behind them.</em></h2>
        <div className="project-list">
          {projects.map((project, index) => <ProjectRow key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const projectId = project.title.toLowerCase().replaceAll(' ', '-');
  return (
    <article className={`project-row${project.featured ? ' is-featured' : ''}`} data-testid={`card-project-${projectId}`}>
      <div className="project-row-number">0{index + 1}</div>
      <div className="project-row-main">
        <div className="project-row-heading">
          <h3>{project.title}</h3>
          {project.featured && <span className="featured-label">Selected</span>}
        </div>
        <p>{project.description}</p>
        <div className="technology-list" aria-label={`${project.title} technologies`}>
          {project.technologies.length > 0 ? project.technologies.map((technology) => <span key={technology}>{technology}</span>) : <span>Technology details to be added</span>}
        </div>
      </div>
      <div className="project-row-art" aria-hidden="true">
        <span className="art-cross" />
        <span className="art-circle" />
        <small>Selected work</small>
      </div>
      <div className="project-row-actions">
        {project.githubUrl ? (
          <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer" data-testid={`link-project-github-${projectId}`}>
            <Github size={15} aria-hidden="true" /> GitHub <ExternalLink size={12} aria-hidden="true" />
          </a>
        ) : <span className="placeholder-chip"><FolderGit2 size={13} aria-hidden="true" /> GitHub link pending</span>}
        {project.liveUrl ? (
          <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer" data-testid={`link-project-live-${projectId}`}>
            View project <ExternalLink size={12} aria-hidden="true" />
          </a>
        ) : <span className="placeholder-chip">Live link pending</span>}
      </div>
    </article>
  );
}

function Journey() {
  return (
    <section className="section journey-section" aria-labelledby="journey-title">
      <div className="container">
        <div className="section-topline">
          <p className="section-kicker">04 / The next chapter</p>
          <p className="section-side-note">Details to be added when ready.</p>
        </div>
        <h2 className="section-title" id="journey-title">Room for the details to be <em>written.</em></h2>
        <div className="journey-grid">
          <div className="journey-item" id="education">
            <p className="timeline-meta">Education / Add details</p>
            <h3>Degree, program, or course can be added here.</h3>
            <p>Institution name, field of study, dates, and a short note are ready to be entered.</p>
          </div>
          <div className="journey-item" id="experience">
            <p className="timeline-meta">Experience / Add details</p>
            <h3>Role, internship, or placement can be added here.</h3>
            <p>Company or project context, responsibilities, and outcomes can be documented without guessing.</p>
          </div>
        </div>
        <a className="text-link journey-cv" href="/Nawal-Ibrahim-CV.pdf" download data-testid="link-download-cv-journey">
          <ArrowDownToLine size={15} aria-hidden="true" /> Download CV
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const email = String(form.get('email') ?? '');
    const message = String(form.get('message') ?? '');
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    setSubmitted(true);
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-topline">
          <p className="section-kicker">05 / Contact</p>
          <p className="section-side-note">A clear note is a good place to start.</p>
        </div>
        <h2 className="contact-title" id="contact-title">Let&apos;s make something <em>useful.</em></h2>
        <p className="contact-lead">I&apos;m open to conversations about <em>internships, graduate trainee roles, and early-career opportunities.</em></p>
        <div className="contact-grid">
          <div className="contact-details">
            <p>For job applications, trainee programs, internships, networking, or freelance opportunities, tell me a little about what you are working on.</p>
            <div className="contact-links">
              <a href="mailto:your-email@example.com" data-testid="link-contact-email"><Mail size={16} aria-hidden="true" /> your-email@example.com</a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" data-testid="link-contact-linkedin"><Linkedin size={16} aria-hidden="true" /> linkedin.com/in/your-profile <ExternalLink size={12} aria-hidden="true" /></a>
            </div>
            <p className="form-note">Contact details are editable placeholders—replace them before publishing.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} data-testid="form-contact">
            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" required placeholder="Name" data-testid="input-contact-name" />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" required placeholder="you@example.com" data-testid="input-contact-email" />
            </div>
            <div className="field">
              <label htmlFor="contact-message">A few words</label>
              <textarea id="contact-message" name="message" required placeholder="Tell me a little about the opportunity..." data-testid="input-contact-message" />
            </div>
            <div className="form-foot">
              <p className="form-note">Submit opens your email client using a mailto fallback.</p>
              <button className="button button-primary" type="submit" data-testid="button-send-message"><Send size={15} aria-hidden="true" /> Send message</button>
            </div>
            {submitted && <p className="form-success" role="status" data-testid="status-contact-submitted"><Check size={14} aria-hidden="true" /> Your email client should open with the message ready to send.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;