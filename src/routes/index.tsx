import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, GraduationCap, Award, Users, Briefcase, CheckCircle2 } from "lucide-react";
import profile from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dilmi Senevirathna | HR & Business Administration Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Dilmi Senevirathna — Business Administration & HRM undergraduate with 2+ years of corporate experience in recruitment support, coordination, documentation and reporting.",
      },
      { property: "og:title", content: "Dilmi Senevirathna | HR & Business Administration Portfolio" },
      {
        property: "og:description",
        content:
          "HR and business administration portfolio: competencies, corporate experience, education, certifications and references.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const skillGroups = [
  {
    title: "Human Resources Management",
    icon: Users,
    items: [
      "Recruitment Basics",
      "Interview Coordination",
      "Onboarding Support",
      "Employee Relations",
      "HR Documentation",
      "HR Strategy Fundamentals",
      "Training Coordination",
      "Employee Engagement",
    ],
  },
  {
    title: "Business & Administration",
    icon: Briefcase,
    items: [
      "Business Administration",
      "Organizational Behaviour",
      "Office Coordination",
      "Scheduling & Calendars",
      "Documentation",
      "Record Keeping",
      "Report Preparation",
      "Client & Vendor Communication",
    ],
  },
  {
    title: "Digital, Analytical & Personal",
    icon: CheckCircle2,
    items: [
      "MS Office",
      "Google Workspace",
      "Excel Reporting",
      "SQL Reporting",
      "Jira",
      "Data Entry Accuracy",
      "Deadline Discipline",
      "Bilingual (Sinhala / English)",
    ],
  },
];

const experience = [
  {
    role: "Quality Assurance Engineer",
    org: "Commercializer (Private) Limited",
    period: "Jun 2025 – Jun 2026",
    points: [
      "Supporting three business products (Sufra OS, ArivPay, Intaj) inside a structured corporate environment.",
      "Preparing documentation, plans and status reports used by managers and stakeholders.",
      "Coordinating daily with cross-functional teams and escalating issues through the correct channels.",
      "Participating in sprint planning and daily stand-ups within an Agile/Scrum environment.",
    ],
  },
  {
    role: "Quality Assurance Engineer",
    org: "eSupport Technologies",
    period: "Mar 2024 – Mar 2025",
    points: [
      "Produced detailed reports and documentation for management review across multiple projects.",
      "Improved a routine process, reducing the time required by around 60%.",
      "Tracked work items and deadlines in Jira, keeping records current and auditable.",
      "Liaised with client-facing staff to turn feedback into actionable internal follow-ups.",
    ],
  },
  {
    role: "WordPress Developer (Freelance)",
    org: "Self-Employed",
    period: "2023",
    points: [
      "Managed 10+ client engagements independently — quoting, scheduling, communication and delivery.",
      "Handled client expectations and follow-ups professionally from first contact to sign-off.",
    ],
  },
  {
    role: "Software Engineer Intern / Frontend Developer",
    org: "eSupport Technologies · Realpos Pvt Ltd",
    period: "2023 – 2024",
    points: [
      "Completed a full internship: took direction, met deadlines and contributed to team output.",
      "Collaborated with designers and stakeholders to deliver requirements on schedule.",
    ],
  },
];

const highlights = [
  { value: "2+ yrs", label: "Corporate experience" },
  { value: "10+", label: "Freelance clients managed" },
  { value: "4", label: "Diplomas completed" },
  { value: "60%", label: "Process time reduced" },
];

const certifications = [
  "Diploma in Human Resources Management — IMBS Green Campus",
  "Diploma in English — IMBS Green Campus",
  "Diploma in Software Testing",
  "Diploma in Cyber Security & Ethical Hacking — SITC Campus",
];

const references = [
  {
    name: "R.M. Thilakarathna Bandara",
    title: "Staff Sergeant, Sri Lanka Army",
    phone: "071 651 4984",
    email: "thilakarathnabndr@gmail.com",
  },
  {
    name: "B. Vishaka Samanmalie",
    title: "Manager – Dalugama MPCS",
    phone: "070 102 2689",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="h-7 w-1.5 rounded-full bg-accent" />
      <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">{children}</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <header className="bg-primary px-5 pb-16 pt-14 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
          <img
            src={profile}
            alt="Portrait of Dilmi Senevirathna"
            className="h-36 w-36 shrink-0 rounded-full border-4 border-accent object-cover"
            width={144}
            height={144}
          />
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Business Administration &amp; HRM
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Dilmi Senevirathna</h1>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              Human Resources &amp; Business Administration undergraduate with 2+ years of real corporate
              experience in reporting, coordination and documentation — now focused on recruitment, employee
              relations and people operations.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-primary-foreground/80 sm:justify-start">
              <a className="flex items-center gap-2 hover:text-accent" href="mailto:chathuryadilmi@gmail.com">
                <Mail className="h-4 w-4" /> chathuryadilmi@gmail.com
              </a>
              <a className="flex items-center gap-2 hover:text-accent" href="tel:+94775765299">
                <Phone className="h-4 w-4" /> +94 77 5 765 299
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Sri Lanka
              </span>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href="https://linkedin.com/in/dilmi-senevirathna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/DilSenevirathna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://dilmi-senevirathna-a2jpfexyt-dilmi-senevirathnas-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              >
                <Globe className="h-4 w-4" /> Portfolio
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Highlights */}
      <section className="mx-auto -mt-9 max-w-5xl px-5">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="text-2xl font-bold text-accent">{h.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <SectionTitle>Profile</SectionTitle>
        <p className="text-base leading-relaxed text-muted-foreground">
          I am a Business Administration &amp; HRM undergraduate at IMBS Green Campus (2025–2027) building a
          career in human resources management. Alongside my studies I work full time inside Agile corporate
          teams, where I handle documentation, status reporting, cross-team coordination and confidential
          record keeping — the same disciplines HR runs on. I have also managed 10+ freelance clients
          end-to-end, so I am comfortable owning communication, scheduling and follow-through without
          supervision.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-secondary/60 py-14">
        <div className="mx-auto max-w-5xl px-5">
          <SectionTitle>Core Competencies</SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <group.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-primary">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-6 border-l-2 border-border pl-6">
          {experience.map((job) => (
            <article key={job.role + job.period} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-accent" />
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-primary">{job.role}</h3>
                  <span className="text-xs font-medium text-accent">{job.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{job.org}</p>
                <ul className="mt-3 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="bg-secondary/60 py-14">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-2">
          <div>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 text-accent">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-xs font-medium">2025 – 2027</span>
                </div>
                <h3 className="mt-2 font-semibold text-primary">
                  BA in Business Administration and HRM (HND Level)
                </h3>
                <p className="text-sm text-muted-foreground">IMBS Green Campus</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Business administration, organizational behaviour, recruitment, employee relations and HR
                  strategy.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-2 text-accent">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-xs font-medium">2021 – 2026</span>
                </div>
                <h3 className="mt-2 font-semibold text-primary">Bachelor of Software Engineering (Honours)</h3>
                <p className="text-sm text-muted-foreground">Open University of Sri Lanka</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Systems analysis, project delivery and development methodologies.
                </p>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle>Certifications</SectionTitle>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground shadow-sm"
                >
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground shadow-sm">
              <span className="font-semibold text-primary">Languages: </span>
              Sinhala (Native) · English (Professional working proficiency)
            </div>
          </div>
        </div>
      </section>

      {/* References & contact */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <SectionTitle>References</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {references.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-primary">{r.name}</h3>
              <p className="text-sm text-muted-foreground">{r.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.phone}</p>
              {r.email ? <p className="text-sm text-muted-foreground">{r.email}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-primary px-5 py-10 text-center text-primary-foreground">
        <h2 className="text-xl font-semibold">Open to HR &amp; Business Administration opportunities</h2>
        <p className="mt-2 text-sm text-primary-foreground/80">
          Internships, HR assistant and administration roles — available in Sri Lanka.
        </p>
        <a
          href="mailto:chathuryadilmi@gmail.com"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" /> Get in touch
        </a>
      </footer>
    </main>
  );
}
