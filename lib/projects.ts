export type Project = {
  displayOrder: number;
  slug: string;
  showcaseStyle?: "mobile" | "desktop";
  title: string;
  shortTitle: string;
  type: string;
  summary: string;
  overview: string;
  contributions?: {
    title: string;
    description: string;
  }[];
  role: string[];
  stack: string[];
  team?: string;
  client?: string;
  duration: string;
  accent: string;
  previewImage?: string;
  cardHref?: string;
  cardLabel?: string;
  liveLabel?: string;
  screenshots?: {
    src: string;
    title: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  highlights: string[];
  decisions: string[];
  challenges: string[];
  results: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    displayOrder: 1,
    slug: "fall-protection-plan",
    title: "WorkSafeBC Fall Protection Plan",
    shortTitle: "Fall Protection Plan",
    type: "React Native, Expo, Node.js, Express, MongoDB, SQLite",
    summary: "Digitizing fall protection planning for construction teams.",
    overview: "A React Native application developed for WorkSafeBC to digitize fall protection planning workflows for construction teams.\n\nThe application streamlines multi-step form completion, offline data collection, PDF generation, review, sharing, and digital sign-off.",
    contributions: [
      {
        title: "UI / UX Design",
        description: "Designed the application layout, navigation flow, form experience, and overall user interface."
      },
      {
        title: "Component Architecture",
        description: "Built reusable React Native components, shared layouts, and maintainable UI architecture."
      },
      {
        title: "Authentication",
        description: "Implemented sign-in, sign-up, password recovery, and secure authentication flows."
      },
      {
        title: "Workflow Features",
        description: "Built the Site Details form, dashboard, PDF preview and sharing, and guided planning experience."
      },
      {
        title: "Offline Support",
        description: "Implemented SQLite offline queue and synchronization for reliable field usage."
      },
      {
        title: "Integration & Quality",
        description: "Performed integration testing, UI/UX refinement, and bug fixing across project modules."
      }
    ],
    role: ["Full-Stack Developer", "Product Designer"],
    stack: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "SQLite"],
    team: "5 Developers",
    client: "WorkSafeBC",
    duration: "Jan 2026 – Apr 2026",
    accent: "from-emerald-300/65 via-cyan-300/55 to-sky-300/55",
    previewImage: "/FPP/fpp.png",
    screenshots: [
      {
        src: "/FPP/01-dashborad2.png",
        title: "Dashboard",
        description: "A clean starting point for creating and managing fall protection plans."
      },
      {
        src: "/FPP/02-step2-2.png",
        title: "Step Workflow",
        description: "A guided multi-step experience that keeps users focused on one planning task at a time."
      },
      {
        src: "/FPP/03-step3-2.png",
        title: "Plan Details",
        description: "Structured inputs capture the information needed for a reliable safety plan."
      },
      {
        src: "/FPP/04-step5-2.png",
        title: "Review Stage",
        description: "A review layer helps teams confirm details before generating the final output."
      },
      {
        src: "/FPP/05-pdf2.png",
        title: "PDF Output",
        description: "The plan can be exported into a document format that is easier to share and archive."
      },
      {
        src: "/FPP/06-share2.png",
        title: "Share Flow",
        description: "The sharing step supports collaboration and smooth handoff across stakeholders."
      },
      {
        src: "/FPP/07-sign2.png",
        title: "Signature",
        description: "The sign-off flow makes completion and accountability more explicit."
      }
    ],
    features: [
      {
        title: "Multi-step Guided Workflow",
        description: "Guides users through complex fall protection planning one structured step at a time."
      },
      {
        title: "Offline Data Collection",
        description: "Stores form progress locally so plans can be completed in areas with limited connectivity."
      },
      {
        title: "PDF Generation",
        description: "Transforms completed form data into a structured document for review and record keeping."
      },
      {
        title: "Digital Sign-off",
        description: "Supports a clear approval step for completed fall protection plans."
      },
      {
        title: "Dashboard",
        description: "Provides quick access to recent plans, progress states, and plan management actions."
      },
      {
        title: "Plan Sharing",
        description: "Enables completed plans and generated documents to be shared with project stakeholders."
      }
    ],
    highlights: [
      "Multi-step guided form flow",
      "Safety-document PDF generation",
      "Review, share, and sign workflow",
      "Clear dashboard for plan management"
    ],
    decisions: [
      "Designed the experience around a guided sequence so users are not overwhelmed by a dense compliance form.",
      "Kept the review and PDF stages visible because trust and document accuracy matter more than visual novelty in this workflow.",
      "Separated creation, export, sharing, and signature into clear stages so the product reads like a real operational tool."
    ],
    challenges: [
      "Translating a compliance-heavy planning process into a UI that feels manageable instead of bureaucratic.",
      "Preserving enough detail for safety documentation while keeping the workflow understandable for everyday users.",
      "Balancing form completeness, document output quality, and collaboration needs in one product flow."
    ],
    results: [
      "Created a more professional digital workflow for building fall protection plans.",
      "Made the process easier to scan, complete, review, and hand off between people.",
      "Turned a document-centric requirement into a product experience that feels more credible to recruiters and stakeholders."
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    displayOrder: 2,
    slug: "pathpal",
    title: "PathPal - Community Discovery Web App",
    shortTitle: "PathPal",
    type: "HTML, JS, Express, Node.js, MongoDB",
    summary: "A location-based web app for sharing real-time updates, discovering nearby places, and connecting with local communities.",
    overview: "PathPal is a community discovery web app that helps users share updates, explore nearby places, and interact around local experiences. It combines real-time posting, map-based discovery, and lightweight social features in a browser-based product experience.",
    role: ["Full-Stack Developer", "Product Designer"],
    stack: ["HTML", "JS", "Express", "Node.js", "MongoDB"],
    duration: "Apr 2025 – May 2025",
    accent: "from-violet-300/75 via-blue-300/50 to-cyan-300/60",
    previewImage: "/pathPal/pathPal.png",
    screenshots: [
      {
        src: "/pathPal/01-pathpal-map2.png",
        title: "Map Discovery",
        description: "A location-first map view that helps users discover nearby places and posts."
      },
      {
        src: "/pathPal/02-pathPal-addPOI2.png",
        title: "Add Place",
        description: "A focused flow for creating points of interest with useful location context."
      },
      {
        src: "/pathPal/03-pathPal-POI2.png",
        title: "Place Detail",
        description: "A detail screen for reviewing community posts and place information."
      },
      {
        src: "/pathPal/04-pathPal-savedRoutes2.png",
        title: "Saved Routes",
        description: "A route-saving surface that keeps personal discovery paths easy to revisit."
      },
      {
        src: "/pathPal/05-pathPal-places2.png",
        title: "Places",
        description: "A browsable places view for scanning location-based recommendations."
      },
      {
        src: "/pathPal/06pathpal-feed2.png",
        title: "Community Feed",
        description: "A real-time feed for sharing moments, photos, comments, and social engagement."
      }
    ],
    features: [
      {
        title: "Real-time Sharing",
        description: "Users can share updates with photos, locations, and short posts in real time through a streamlined web interface."
      },
      {
        title: "Discover Nearby",
        description: "Location-aware discovery helps users browse nearby places and community activity in a more interactive map experience."
      },
      {
        title: "Engage & Connect",
        description: "Likes, comments, bookmarks, and profile features support lightweight community interaction across the app."
      }
    ],
    highlights: [
      "Real-time feed with image uploads",
      "Location-based discovery and map flow",
      "User authentication and authorization",
      "Likes, comments, bookmarks, and profiles"
    ],
    decisions: [
      "Designed the app around a fast community feed so recruiters can immediately understand the product behavior.",
      "Separated discovery, map, favorites, and profile flows to keep the web navigation intuitive and easy to scan.",
      "Used a modular API structure so post, auth, media, and location features can evolve independently."
    ],
    challenges: [
      "Balancing real-time interaction with clean state management across feed updates and engagement actions.",
      "Making location discovery feel useful without overwhelming users with too many map interactions.",
      "Keeping the interface calm while still showing enough content, metadata, and actions across multiple views."
    ],
    results: [
      "Delivered a complete social product flow from authentication to posting and engagement.",
      "Created a recruiter-friendly case study that communicates product thinking, engineering scope, and UX intent.",
      "Built a foundation that can expand into richer place recommendations and community features."
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    displayOrder: 3,
    slug: "finsight-ai",
    showcaseStyle: "desktop" as const,
    title: "FinSight AI",
    shortTitle: "FinSight AI",
    type: "React, .NET 8, OpenAI API, SQLite",
    summary: "A two-page AI-powered prototype that turns financial data, anomaly alerts, and expense trends into clear explanations and actionable recommendations.",
    overview: "FinSight AI is an AI-powered financial insight prototype designed to help small business users understand financial data more easily. Instead of only displaying charts or transaction records, the system explains what happened, why it may have happened, and what actions users can take.\n\nThe prototype focuses on dashboard-level and alert-level AI analysis, demonstrating how anomaly detection, smart alerts, and AI-generated recommendations can support better financial decision-making.",
    role: ["Full-Stack Developer", "AI Integration", "Prototype Designer"],
    stack: ["React", "Vite", "MUI", ".NET 8", "OpenAI API", "ML.NET", "SQLite"],
    duration: "Apr 2026 - Personal Project Prototype",
    accent: "from-emerald-300/60 via-sky-300/55 to-cyan-300/55",
    previewImage: "/FinSight/01-dashborad.png",
    liveLabel: "View Prototype",
    screenshots: [
      {
        src: "/FinSight/01-dashborad.png",
        title: "Dashboard Overview",
        description: "The main dashboard summarizes financial status, key metrics, and recent business performance signals."
      },
      {
        src: "/FinSight/02-insight.png",
        title: "AI Insights",
        description: "Alert-level analysis highlights unusual patterns and surfaces severity-based financial issues for review."
      },
      {
        src: "/FinSight/03-detect.png",
        title: "Anomaly Detection",
        description: "AI-generated financial explanations turn raw expense movement into readable observations and recommendations."
      }
    ],
    features: [
      {
        title: "AI Financial Insights",
        description: "Generates structured explanations to help users understand spending changes, unusual patterns, and key financial issues."
      },
      {
        title: "Smart Alert Analysis",
        description: "Highlights abnormal expense patterns with severity levels and contextual financial insights."
      },
      {
        title: "Actionable Suggestions",
        description: "Transforms raw financial data into summaries, possible causes, and suggested actions for better business decisions."
      }
    ],
    highlights: [
      "Two-page AI-powered financial insight prototype",
      "Dashboard-level and alert-level AI analysis",
      "Smart alerts with severity classification",
      "AI-generated explanations and recommendations",
      "Anomaly detection and financial trend interpretation",
      "User-focused output for faster decision-making"
    ],
    decisions: [
      "Designed the prototype around explanation-first insight so users can understand what changed before digging into raw financial records.",
      "Split the concept into dashboard-level and alert-level analysis to show how AI can support different layers of financial review.",
      "Used a lightweight prototype stack so the focus stayed on product clarity, AI integration, and decision-support flows."
    ],
    challenges: [
      "Making AI-generated financial explanations feel useful without sounding vague or overly generic.",
      "Turning unusual spending patterns into alerts that are readable for business users instead of only technical reviewers.",
      "Balancing prototype speed with enough data structure to demonstrate a believable decision-support workflow."
    ],
    results: [
      "Created a clear two-page prototype showing how AI can support financial insight workflows.",
      "Connected anomaly detection, smart alerts, and recommendation output into one product story.",
      "Demonstrated practical AI integration in a format that feels closer to a real business tool than a generic demo."
    ],
    githubUrl: "https://github.com"
  }
].sort((firstProject, secondProject) => firstProject.displayOrder - secondProject.displayOrder);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
