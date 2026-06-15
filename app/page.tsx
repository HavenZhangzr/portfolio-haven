"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Lock,
  MapPin,
  Monitor,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

const heroHighlights = [
  "7+ Years Enterprise Experience",
  "Full-Stack Systems",
  "Mobile Apps",
  "Backend APIs",
  "Database-Driven Applications"
];

const skills = [
  "React",
  "React Native",
  "Node.js",
  ".NET",
  "SQL",
  "MongoDB",
  "Oracle",
  "Git"
];

const aboutHighlights = [
  {
    title: "Enterprise Foundation",
    description: "7+ years building and maintaining enterprise software in structured client environments.",
    icon: BriefcaseBusiness
  },
  {
    title: "Full-Stack Product Thinking",
    description: "Comfortable across UI/UX, backend APIs, and database-driven application flows.",
    icon: Monitor
  },
  {
    title: "Vancouver Area",
    description: "Based in the Vancouver area and open to software developer opportunities.",
    icon: MapPin
  }
];

const experience = [
  {
    title: "Freelance Studio",
    place: "Full-Stack Development",
    period: "Now",
    icon: BriefcaseBusiness,
    detail: "Collaborating on modern web applications, UI systems, and scalable products through freelance and team-based projects.",
    image: "/SFS.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    linkLabel: "Visit Studio",
    linkHref: "https://systemforge-studio.github.io/systemforge-website/",
    current: true
  },
  {
    title: "BCIT CST",
    place: "Computer Systems Technology",
    period: "Vancouver, Canada",
    icon: GraduationCap,
    detail: "Hands-on education across software development, databases, networking, and systems. Completed multiple full-stack projects in team environments.",
    image: "/BCIT.jpeg",
    tags: ["JavaScript", "React", "Node.js", "MySQL", "Git"]
  },
  {
    title: "NEC Projects",
    place: "Enterprise Software Experience",
    period: "China",
    icon: Monitor,
    detail: "Worked on enterprise systems for NEC clients through a China-based outsourcing company. Focused on web development, testing workflows, and long-term system maintenance.",
    image: "/NEC.webp",
    tags: ["Java", "Spring", "JavaScript", "jQuery", "Oracle"]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeading({
  label,
  title
}: {
  label: string;
  title: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-8 flex items-end justify-between gap-6"
    >
      <div>
        <p className="mb-3 text-xs font-semibold uppercase text-violet-200/70">
          {label}
        </p>
        <h2 className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}

function ProjectPreview({
  accent,
  image
}: {
  accent: string;
  image?: string;
}) {
  return (
    <div className="relative h-52 overflow-hidden rounded-md border border-white/10 bg-[#0f1118]">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      ) : (
        <>
          <div className={`absolute inset-x-5 top-5 h-20 rounded-md bg-gradient-to-br ${accent}`} />
          <div className="absolute bottom-4 left-5 right-5 grid grid-cols-[1fr_0.72fr] gap-3">
            <div className="space-y-2">
              <span className="block h-2 rounded-full bg-white/45" />
              <span className="block h-2 w-3/4 rounded-full bg-white/20" />
              <span className="block h-2 w-1/2 rounded-full bg-white/14" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <span className="h-8 rounded bg-white/12" />
              <span className="h-8 rounded bg-white/8" />
            </div>
          </div>
        </>
      )}
      {image ? (
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f1118] to-transparent" />
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="noise pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex items-center justify-between py-7">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white">
            H.Zhang
          </a>
          <nav className="hidden items-center gap-7 text-sm text-white/52 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition hover:text-violet-200 ${
                  item === "Home" ? "text-violet-200 underline decoration-violet-300/60 underline-offset-8" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com/HavenZhangzr"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/72 transition hover:border-white/28 hover:text-white"
          >
            <Github size={17} />
          </a>
        </header>

        <section
          id="home"
          className="grid min-h-[calc(100vh-9rem)] items-start gap-12 border-b border-white/10 pb-14 pt-10 md:grid-cols-[1fr_0.86fr] md:pt-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="mb-4 text-xl font-semibold text-white/58">Hello, I&apos;m</p>
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Haven Zhang
            </h1>
            <h2 className="mt-5 text-xl font-semibold text-white/82 sm:text-2xl">
              Full-Stack &amp; Mobile Developer
            </h2>
            <div className="mt-5 h-px w-full max-w-lg bg-white/12" />
            <p className="mt-6 max-w-lg text-base leading-8 text-white/58">
              I build full-stack web and mobile applications with clean code, thoughtful UI/UX, and reliable backend systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-violet-300 px-5 py-3 text-sm font-semibold text-[#100f18] shadow-[0_0_28px_rgba(167,139,250,0.28)] transition hover:bg-violet-200"
              >
                View Projects
                <ArrowUpRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/16 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-medium text-white/62"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-7 rounded-full bg-violet-300/18 blur-2xl" />
              <div className="relative size-64 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_40px_rgba(168,139,250,0.18)] sm:size-72">
                <Image
                  src="/haven-web.png"
                  alt="Haven Zhang portrait"
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 640px) 18rem, 20rem"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="border-b border-white/10 py-16">
          <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="mb-3 text-xs font-semibold uppercase text-violet-200/70">
                About
              </p>
              <h2 className="max-w-lg text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[3.45rem]">
                Enterprise experience with a
                <span className="block text-white/78"> modern full-stack mindset.</span>
              </h2>

              <div className="mt-10 space-y-0 rounded-[24px] border border-white/10 bg-white/[0.025] p-2">
                {aboutHighlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`flex gap-4 rounded-[20px] px-4 py-5 ${index !== 0 ? "border-t border-white/8" : ""}`}
                    >
                      <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-2xl bg-violet-300/10 text-violet-200">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-base leading-7 text-white/58">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8"
            >
              <div className="rounded-[22px] border border-violet-200/12 bg-violet-300/[0.05] px-5 py-4 text-sm font-medium text-violet-100/90">
                Full-stack and mobile developer focused on clean UI/UX, backend systems, and database-driven applications.
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-white/60">
                <p>
                  I&apos;m a full-stack and mobile developer based in the Vancouver area. My background combines 7+ years of enterprise software development experience on NEC-related client projects, hands-on software training at BCIT, and recent project experience building modern web and mobile applications.
                </p>
                <p>
                  I enjoy turning complex requirements into clean interfaces, stable data flows, backend APIs, and applications that feel simple and reliable for users.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/72"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="border-b border-white/10 py-16">
          <SectionHeading
            label="Featured Projects"
            title="Selected work that connects clean UI, backend systems, and real user needs."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
              >
                {project.cardHref ? (
                  <a
                    href={project.cardHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-lg border border-white/10 bg-white/[0.035] p-3 transition hover:-translate-y-1 hover:border-violet-200/40 hover:bg-white/[0.06]"
                  >
                    <ProjectPreview accent={project.accent} image={project.previewImage} />
                    <div className="p-2 pt-5">
                      <h3 className="text-base font-semibold text-white">{project.shortTitle}</h3>
                      <p className="mt-2 text-sm text-white/42">{project.type}</p>
                      <p className="mt-4 min-h-24 text-sm leading-6 text-white/56">
                        {project.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition group-hover:text-white">
                        {project.cardLabel ?? "View Project"}
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </a>
                ) : (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block rounded-lg border border-white/10 bg-white/[0.035] p-3 transition hover:-translate-y-1 hover:border-violet-200/40 hover:bg-white/[0.06]"
                  >
                    <ProjectPreview accent={project.accent} image={project.previewImage} />
                    <div className="p-2 pt-5">
                      <h3 className="text-base font-semibold text-white">{project.shortTitle}</h3>
                      <p className="mt-2 text-sm text-white/42">{project.type}</p>
                      <p className="mt-4 min-h-24 text-sm leading-6 text-white/56">
                        {project.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition group-hover:text-white">
                        Case Study
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="border-b border-white/10 py-16">
          <SectionHeading
            label="Experience"
            title="NEC, BCIT, and freelance work shaped how I build reliable web products."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {experience.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                  className="rounded-[22px] border border-white/10 bg-white/[0.035] p-4 sm:p-5"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <span className="grid size-10 place-items-center rounded-md text-violet-200">
                      <Icon size={20} />
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/72 sm:text-sm">
                      {item.current ? <span className="size-2 rounded-full bg-emerald-400" /> : null}
                      {item.period}
                    </span>
                  </div>

                  <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl border border-white/8 bg-[#10131b]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>

                  <h3 className="text-[2rem] font-semibold leading-none text-white sm:text-[2.15rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-violet-200/82">{item.place}</p>
                  <p className="mt-5 text-base leading-8 text-white/60">{item.detail}</p>

                  {item.linkHref ? (
                    <a
                      href={item.linkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-violet-200 transition hover:text-white"
                    >
                      {item.linkLabel}
                      <ArrowUpRight size={18} />
                    </a>
                  ) : null}

                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[28px] border border-violet-200/20 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_28%),linear-gradient(180deg,rgba(17,19,29,0.96),rgba(13,14,22,0.98))] p-7 shadow-[0_0_0_1px_rgba(196,181,253,0.06),0_0_60px_rgba(91,33,182,0.16)] sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
            <div className="pointer-events-none absolute -left-16 top-12 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-violet-400/15 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.72fr] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-2 text-base text-white/58">
                  <MapPin size={17} className="text-violet-300" />
                  Vancouver Area, Canada
                </div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Let&apos;s build clean, user-friendly, and reliable software.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/54">
                  Open to full-stack, mobile, and backend development opportunities.
                </p>
                <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/68">
                  <ShieldCheck size={18} className="text-violet-300" />
                  Privacy-conscious contact options
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/haven-zhang"
                  className="group flex items-center justify-between rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-5 text-base font-semibold text-white transition hover:border-white/24 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin size={20} />
                    LinkedIn
                  </span>
                  <ArrowRight size={20} className="transition group-hover:translate-x-1" />
                </a>
                <a
                  href="https://github.com/HavenZhangzr"
                  className="group flex items-center justify-between rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-5 text-base font-semibold text-white transition hover:border-white/24 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-3">
                    <Github size={20} />
                    GitHub
                  </span>
                  <ArrowRight size={20} className="transition group-hover:translate-x-1" />
                </a>
                <div className="flex items-start gap-3 pt-2 text-sm leading-6 text-white/46">
                  <Lock size={16} className="mt-1 shrink-0 text-violet-300" />
                  Your privacy matters. I review and respond to all messages personally.
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
