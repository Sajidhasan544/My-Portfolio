export const profile = {
  name: "MD Sajid Hasan",
  shortName: "Sajid",
  title: "Full Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "sajid.hasan.dev@gmail.com",
  phone: "+880 1700 000000",
  availability: "Open to freelance and full-time roles",
  tagline:
    "I build polished web experiences that feel fast, clear, and genuinely useful.",
  intro:
    "I focus on modern React interfaces, scalable backend architecture, and thoughtful product details that make websites feel smooth from the first click.",
  resumeUrl: "#contact",
  stats: [
    { value: "3+", label: "Years building products" },
    { value: "20+", label: "Projects shipped" },
    { value: "100%", label: "Responsive layouts" },
  ],
  highlights: [
    "Responsive UI with strong visual polish",
    "React, Node.js, MongoDB, and REST API workflows",
    "Performance-focused interactions and clean code structure",
  ],
};

export const socialLinks = [
  {
    name: "GitHub",
    handle: "@sajidhasan",
    href: "https://github.com/yourusername",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "/in/sajidhasan",
    href: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    handle: "sajidhasan",
    href: "https://facebook.com/yourusername",
    icon: "facebook",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "palette",
    items: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Express", "MongoDB", "REST API"],
  },
  {
    title: "Workflow",
    icon: "layers",
    items: ["Git & GitHub", "UI Architecture", "Deployment", "Debugging"],
  },
];

export const timeline = [
  {
    period: "2024 - Present",
    title: "Freelance Full Stack Developer",
    description:
      "Building portfolio sites, dashboards, and business websites with an emphasis on performance and user experience.",
  },
  {
    period: "2022 - 2024",
    title: "Frontend-Focused Web Developer",
    description:
      "Worked on reusable components, clean layouts, and modern responsive interfaces using React and Tailwind CSS.",
  },
  {
    period: "2020 - 2022",
    title: "Learning and Shipping Personal Projects",
    description:
      "Strengthened JavaScript fundamentals and turned ideas into complete projects to improve both design taste and engineering confidence.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Dental Hospital Management System",
    category: "fullstack",
    summary:
      "A complete dental clinic website and management experience with appointments, doctor discovery, service pricing, contact flows, and patient auth screens.",
    description:
      "Built as a polished healthcare platform for a dental hospital. The project includes a conversion-focused landing page, multi-page clinic information architecture, searchable doctor and treatment views, contact and emergency touchpoints, and patient login/register flows. The design stays clean and trustworthy with a sky-blue medical palette, clear CTAs, image-driven sections, and responsive layouts.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    icon: "briefcase",
    features: [
      "Multi-page public website with Home, Doctors, Services, About, FAQ, Blog, Gallery, and Contact",
      "Search and category filtering for doctors and treatment listings",
      "Detailed service cards with pricing, duration, and category badges",
      "Patient login and multi-step registration interface",
      "Emergency contact banner, contact form, and Google Maps handoff",
      "Trust-building sections with testimonials, awards, milestones, and clinic gallery",
      "Responsive layout optimized for desktop and mobile browsing",
      "Strong healthcare branding with clean visual hierarchy and conversion-oriented CTAs",
    ],
    github: "#",
    live: "https://dental-hospital-management-system.vercel.app/",
    accent: "from-sky-500 via-cyan-400 to-blue-300",
    image: "https://dental-hospital-management-system.vercel.app/images/img1.jpg",
    metrics: [
      { label: "Patients Highlighted", value: "5,000+" },
      { label: "Specialist Doctors", value: "15+" },
      { label: "Years of Service", value: "10+" },
      { label: "Emergency Care", value: "24/7" },
    ],
    pages: [
      "Home and hero-driven landing page",
      "Doctors directory with category filters",
      "Services page with pricing and treatment durations",
      "About page with mission, vision, values, and milestones",
      "Contact page with form and emergency panel",
      "Login and registration screens for patient onboarding",
    ],
  },
  {
    id: 2,
    title: "AgroRailBD",
    category: "frontend",
    summary:
      "A multi-page agriculture logistics platform presenting a rail-based cold-chain solution for Bangladesh's farm-to-market transport challenges.",
    description:
      "AgroRailBD is a storytelling-driven transport and logistics website built around real agricultural pain points. The platform explains product spoilage, transport cost, time delays, and cold-chain gaps, then presents a structured rail-based solution through detailed sections, process flows, team information, and contact conversion points. It uses animated section reveals, a rotating hero slider, and WhatsApp-based lead capture for direct communication.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "Lucide React"],
    icon: "layers",
    features: [
      "Multi-page structure with Home, Problems, Solutions, How It Works, About, Blog, and Contact",
      "Animated hero slider with agriculture-focused visuals and CTA buttons",
      "Problem-solution storytelling for agricultural transport and post-harvest loss issues",
      "Detailed 6-step rail logistics flow from farm collection to urban market delivery",
      "Mission, vision, story, values, and team showcase page",
      "WhatsApp-powered contact form plus direct phone and email conversion paths",
      "Responsive gradients, cards, and section reveal animations using Intersection Observer",
      "Strong green-blue brand direction tailored to agri-tech and logistics communication",
    ],
    github: "https://github.com/Sajidhasan544/AgroPorject",
    live: "https://www.agrorailbd.com/",
    accent: "from-green-500 via-emerald-400 to-sky-300",
    image: "https://www.agrorailbd.com/1.jpg",
    metrics: [
      { label: "Core Process", value: "6 Steps" },
      { label: "Rail Timeline", value: "24 Hours" },
      { label: "Fresh Delivery", value: "95%+" },
      { label: "Primary CTA", value: "WhatsApp" },
    ],
    pages: [
      "Hero landing page with animated overview sections",
      "Problems page focused on spoilage, delays, and cost issues",
      "Solutions page presenting cold-chain rail logistics",
      "How It Works page with step-by-step transport process",
      "About page with mission, vision, values, and team",
      "Contact page with WhatsApp-based lead submission",
    ],
  },
];

export const contactCards = [
  {
    title: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    title: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: "phone",
  },
  {
    title: "Location",
    value: profile.location,
    href: "https://maps.google.com/?q=Dhaka,Bangladesh",
    icon: "map",
  },
  {
    title: "Availability",
    value: profile.availability,
    href: null,
    icon: "spark",
  },
];
