import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Accessibility,
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  BellRing,
  Blocks,
  Bot,
  Bookmark,
  BrainCircuit,
  Check,
  ClipboardList,
  Code2,
  FileText,
  Github,
  Heart,
  Map,
  MapPin,
  MessageCircle,
  Navigation,
  Newspaper,
  LockKeyhole,
  ListChecks,
  Lightbulb,
  LayoutDashboard,
  Palette,
  PenTool,
  ScanSearch,
  Server,
  Share2,
  Smartphone,
  Sparkles,
  TriangleAlert,
  Users,
  WifiOff
} from "lucide-react";
import { ProjectCarousel } from "@/components/project-carousel";
import { ProjectDesktopShowcase } from "@/components/project-desktop-showcase";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: `${project.shortTitle} | Haven Zhang`,
    description: project.summary
  };
}

function PhoneMockup() {
  const tabs = ["Community", "Places", "Announcements"];

  return (
    <div className="relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-slate-300/70 bg-slate-50 text-slate-950 shadow-[0_24px_90px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
            P
          </span>
          <span className="font-semibold">PathPal</span>
        </div>
        <span className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-white">
          <span className="h-3 w-4 border-y border-slate-700" />
        </span>
      </div>
      <div className="grid grid-cols-3 border-b border-slate-200 text-center text-xs font-semibold">
        {tabs.map((tab, index) => (
          <span
            key={tab}
            className={`py-3 ${index === 0 ? "bg-white text-slate-950" : "text-blue-600"}`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="flex gap-2 px-3 py-3">
        <div className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400">
          Search
        </div>
        <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
          Most liked
        </div>
      </div>
      <div className="space-y-3 px-3 pb-4">
        <article className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="mb-3 flex items-center gap-2">
            <span className="size-9 rounded-full bg-gradient-to-br from-amber-200 to-emerald-300" />
            <div>
              <p className="text-sm font-semibold">Haven</p>
              <p className="text-xs text-slate-400">2025-05-22 01:17 a.m.</p>
            </div>
          </div>
          <p className="text-sm font-semibold leading-5">
            Went outside for 5 minutes and came back with 76 photos.
          </p>
          <div className="mt-3 h-36 rounded-lg bg-gradient-to-br from-emerald-200 via-cyan-200 to-slate-500" />
          <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <Heart size={15} /> 74
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={15} /> 0
            </span>
            <Bookmark size={15} />
          </div>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-full bg-yellow-100 text-lg">
              :)
            </span>
            <div>
              <p className="text-sm font-semibold">Nancy</p>
              <p className="text-xs text-slate-400">2025-03-21 10:59 a.m.</p>
            </div>
          </div>
          <p className="text-sm font-semibold">what a wonderful day</p>
          <p className="mt-1 text-xs text-slate-500">nice sunshine day</p>
        </article>
      </div>
      <div className="grid grid-cols-4 border-t border-slate-200 bg-slate-100/80 py-2 text-center text-[11px] text-slate-700">
        <span>Discover</span>
        <span>Map</span>
        <span>Favorites</span>
        <span>You</span>
      </div>
    </div>
  );
}

function PrototypeShowcase({
  title,
  stack
}: {
  title: string;
  stack: string[];
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-glow">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-cyan-300/10" />
      <div className="relative z-10 mx-auto max-w-md rounded-lg border border-white/10 bg-[#0f1118] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/38">
              AI Insight Prototype
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
          </div>
          <span className="grid size-11 place-items-center rounded-full bg-emerald-300/12 text-emerald-200">
            <Sparkles size={20} />
          </span>
        </div>
        <div className="mt-6 grid gap-3">
          {[
            {
              icon: BarChart3,
              title: "Dashboard Insight",
              text: "Explains expense shifts and important financial movement."
            },
            {
              icon: TriangleAlert,
              title: "Alert Review",
              text: "Flags unusual patterns with severity and likely causes."
            },
            {
              icon: Navigation,
              title: "Action Guidance",
              text: "Suggests practical next steps for business decisions."
            }
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-md bg-white/[0.05] text-white/70">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/56">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/64"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectShowcase({
  project
}: {
  project: ReturnType<typeof getProject>;
}) {
  const screenshots = project?.screenshots;

  if (screenshots?.length) {
    if (project?.showcaseStyle === "desktop") {
      return (
        <div className="relative w-full">
          <ProjectDesktopShowcase screenshots={screenshots} />
        </div>
      );
    }

    return (
      <div className="relative w-full">
        <ProjectCarousel screenshots={screenshots} />
      </div>
    );
  }

  if (project) {
    return <PrototypeShowcase title={project.shortTitle} stack={project.stack} />;
  }

  return <PhoneMockup />;
}

function SectionBlock({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <p key={item} className="text-sm leading-7 text-white/58">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="noise pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-8 sm:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          All Projects
        </Link>

        <section className="grid gap-10 py-12 xl:grid-cols-[0.85fr_1.05fr_400px]">
          <div
            className={`flex flex-col ${
              project.slug === "finsight-ai" ? "justify-start" : "justify-center"
            }`}
          >
            <p className="mb-5 text-sm font-semibold uppercase text-violet-200/70">
              Featured Project
            </p>
            <h1 className="whitespace-pre-line text-4xl font-bold leading-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            {project.productSubtitle ? (
              <p className="mt-3 text-lg font-medium leading-7 text-white/58 sm:text-xl">
                {project.productSubtitle}
              </p>
            ) : null}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase text-white/45">
                Project Overview
              </p>
              <div>
                {project.overview.split("\n\n").map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 0
                        ? "text-base font-medium leading-7 text-white/82"
                        : "mt-3 text-sm leading-7 text-white/64"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            {project.slug === "finsight-ai" ? (
              <>
                <div className="mt-8">
                  <p className="mb-4 text-sm font-semibold uppercase text-white/45">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/12 bg-white/[0.045] px-3 py-2 text-sm text-white/66"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <p className="mb-4 text-sm font-semibold uppercase text-white/45">
                    My Role
                  </p>
                  <div className="space-y-2 text-sm text-white/70">
                    {project.role.map((role) => (
                      <p key={role}>{role}</p>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
            {/*
            <div className="mt-9 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 rounded-md bg-violet-300 px-5 py-3 text-sm font-semibold text-[#100f18] shadow-[0_0_28px_rgba(167,139,250,0.24)] transition hover:bg-violet-200"
                >
                  {project.liveLabel ?? "Live Demo"}
                  <ArrowUpRight size={17} />
                </a>
              ) : null}
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-2 rounded-md border border-white/16 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                View on GitHub
                <Github size={17} />
              </a>
            </div>
            */}
            {project.slug !== "finsight-ai" ? (
            <div className="mt-10">
              <p className="mb-6 text-sm font-semibold uppercase text-white/45">
                Product Highlights
              </p>
              <div className="space-y-7">
                {project.features.map((feature, index) => {
                  const icons =
                    project.slug === "fall-protection-plan"
                      ? [ScanSearch, Sparkles, PenTool, ListChecks, WifiOff, FileText]
                      : project.slug === "pathpal"
                        ? [Navigation, Map, MapPin, Newspaper, Share2, Bookmark]
                        : project.slug === "finsight-ai"
                          ? [LayoutDashboard, BrainCircuit, ScanSearch, BellRing, Lightbulb, Bot]
                          : [Users, MapPin, Heart];
                  const Icon = icons[index] ?? Sparkles;

                  return (
                    <div key={feature.title} className="flex gap-5">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-violet-300/10 text-violet-200">
                        <Icon size={21} />
                      </span>
                      <div>
                        <h2 className="font-semibold text-white">{feature.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-white/58">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            ) : null}
          </div>

          <div className="relative flex items-start justify-center xl:pt-44">
            <ProjectShowcase project={project} />
          </div>

          <aside className="w-full max-w-[400px] space-y-8 xl:pt-44">
            {project.slug === "finsight-ai" ? (
              <div>
                <p className="mb-6 text-sm font-semibold uppercase text-white/45">
                  Product Highlights
                </p>
                <div className="space-y-7">
                  {project.features.map((feature, index) => {
                    const icons = [
                      LayoutDashboard,
                      BrainCircuit,
                      ScanSearch,
                      BellRing,
                      Lightbulb,
                      Bot
                    ];
                    const Icon = icons[index] ?? Sparkles;

                    return (
                      <div key={feature.title} className="flex gap-5">
                        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-violet-300/10 text-violet-200">
                          <Icon size={21} />
                        </span>
                        <div>
                          <h2 className="font-semibold text-white">{feature.title}</h2>
                          <p className="mt-2 text-sm leading-6 text-white/58">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
            {project.contributions ? (
              <div className="w-full rounded-xl border border-violet-200/15 bg-violet-300/[0.045] p-5">
                <p className="mb-5 text-sm font-semibold uppercase text-white/45">
                  My Contributions
                </p>
                <div className="space-y-4">
                  {project.contributions.map((contribution, index) => {
                    const contributionIcons =
                      project.slug === "pathpal"
                        ? [Palette, Code2, MessageCircle, Accessibility, Server, BadgeCheck]
                        : [Palette, Blocks, LockKeyhole, ClipboardList, Smartphone, BadgeCheck];
                    const ContributionIcon = contributionIcons[index] ?? Check;

                    return (
                      <div key={contribution.title} className="flex gap-3 border-l border-violet-300/30 pl-4">
                        <ContributionIcon
                          size={17}
                          className="mt-0.5 shrink-0 text-violet-200/80"
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-white/85">
                            {contribution.title}
                          </h3>
                          <p className="mt-1 text-[13px] leading-5 text-white/56">
                            {contribution.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
            {project.slug !== "finsight-ai" ? (
            <div>
              <p className="mb-4 text-sm font-semibold uppercase text-white/45">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/12 bg-white/[0.045] px-3 py-2 text-sm text-white/66"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            ) : null}
            {project.team ? (
              <div>
                <p className="mb-4 text-sm font-semibold uppercase text-white/45">Team</p>
                <p className="text-sm text-white/70">{project.team}</p>
              </div>
            ) : null}
            {project.client ? (
              <div>
                <p className="mb-4 text-sm font-semibold uppercase text-white/45">Client</p>
                <p className="text-sm text-white/70">{project.client}</p>
              </div>
            ) : null}
            {project.appUrl ? (
              <div>
                <p className="mb-4 text-sm font-semibold uppercase text-white/45">App Link</p>
                <a
                  href={project.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white"
                >
                  View Live App
                  <ArrowUpRight size={16} />
                </a>
              </div>
            ) : null}
            {project.slug !== "finsight-ai" &&
            !project.team &&
            !project.client &&
            !project.appUrl ? (
              <div>
                <p className="mb-4 text-sm font-semibold uppercase text-white/45">My Role</p>
                <div className="space-y-2 text-sm text-white/70">
                  {project.role.map((role) => (
                    <p key={role}>{role}</p>
                  ))}
                </div>
              </div>
            ) : null}
            {project.duration ? (
              <div>
                <p className="mb-4 text-sm font-semibold uppercase text-white/45">Duration</p>
                <p className="text-sm text-white/70">{project.duration}</p>
              </div>
            ) : null}
          </aside>
        </section>

        {/* <section className="grid gap-4 border-t border-white/10 py-12 md:grid-cols-3">
          <SectionBlock title="Design Decisions" items={project.decisions} />
          <SectionBlock title="Challenges" items={project.challenges} />
          <SectionBlock title="Final Effect" items={project.results} />
        </section> */}

      </div>
    </main>
  );
}
