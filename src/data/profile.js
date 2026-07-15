// All content sourced from the three uploaded CVs (merged — flagged items noted in chat).
export const profile = {
  name: "Abdurrahman Opeyemi Adesanya",
  alias: "Web ghost",
  role: "Full-Stack & Web3 Developer",
  location: "Lagos, Nigeria",
  phone: "09073300681",
  email: "Webghost1702@gmail.com",
  telegram: "@agbacoder01",
  github: "github.com/Webghost01-NG",
  githubUrl: "https://github.com/Webghost01-NG",
  linkedinUrl: "#",
  summary:
    "Full-stack and Web3 developer building decentralised applications, payment protocols, and interactive web platforms. Proficient in React, JavaScript, Solidity, Foundry, and Next.js, with a track record of shipping production-ready projects under hackathon deadlines. Currently pursuing a BSc in Physics at Lagos State University while seeking a full-time software engineering role.",
};

export const stats = [
  { label: "Hackathons shipped", value: "4" },
  { label: "1st place finish", value: "1" },
  { label: "Certifications", value: "9" },
  { label: "Prize pool competed for", value: "$10K+" },
];

export const skills = {
  Languages: ["JavaScript (ES6+)", "Solidity", "Python", "Vyper", "HTML5", "CSS3"],
  Frontend: ["React.js", "Next.js", "Redux", "Vite", "React Router"],
  Backend: ["Node.js", "Express.js"],
  "Web3 / Blockchain": [
    "Ethers.js",
    "Viem",
    "Foundry",
    "Smart Contracts",
    "Chainlink",
    "Lit Protocol",
    "Filecoin / Lighthouse",
    "Stellar SDK",
    "Freighter Wallet",
    "MetaMask",
  ],
  "Tools & DevOps": ["Linux/Unix", "Git", "GitHub", "Docker", "Vercel", "npm"],
};

export const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Edubridge Consultant, Lagos",
    period: "Late 2023 – Mid 2024",
    points: [
      "Completed an intensive 6-month internship focused on modern frontend development with React and JavaScript.",
      "Revamped the company's official website, improving UI/UX and overall user experience.",
      "Awarded Overall Best Performer of the programme, receiving a laptop as recognition.",
      "Won the 4-day EduBridge Digital Literacy Programme (Software Engineering track) out of all participants.",
    ],
  },
  {
    role: "Website Developer Intern",
    company: "Fruitplus, Lagos",
    period: "2023",
    points: [
      "Led a full revamp of the company's website, modernising design, layout, and functionality.",
      "Collaborated with stakeholders to translate business requirements into a polished web presence.",
    ],
  },
];

export const projects = [
  {
    slug: "kwala-mcp",
    name: "Kwala-MCP",
    tagline: "MCP server for AI-native blockchain automation",
    status: "1st Place",
    block: "0x01",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "MCP", "Vercel"],
    hackathon: 'SchullTech × Kwala Hackathon — "Solve for Africa" (48hr virtual, April 2026)',
    liveUrl: "https://kwala-ai.xyz",
    githubUrl: null,
    description:
      "Built the frontend for an MCP server enabling AI agents (Claude, Cursor, Windsurf) to create, deploy, and monitor Kwalang YAML blockchain automations via natural language.",
    points: [
      "Developed the full Next.js frontend: landing page, interactive tool catalog (18 tools, 5 categories), live chat demo, multi-chain display (12 chains), and one-command install UI.",
      "Implemented smooth animations with Framer Motion, SWR for data fetching, and Lucide React icons; deployed on Vercel.",
      "Product live at kwala-ai.xyz; MCP server installable via a single CLI command across 6+ AI clients.",
    ],
  },
  {
    slug: "mindvault",
    name: "MindVault",
    tagline: "Self-sovereign, wallet-authenticated knowledge vault",
    status: "Shipped",
    block: "0x02",
    stack: ["React", "Node.js", "Ethers.js", "Lit Protocol", "Filecoin"],
    hackathon: "PL Genesis: Frontiers of Collaboration Hackathon (2026)",
    liveUrl: null,
    githubUrl: null,
    description:
      "A self-sovereign knowledge management dApp on Web3 — no email, no password, just a wallet.",
    points: [
      "Users authenticate via MetaMask wallet; notes are encrypted client-side with Lit Protocol before permanent storage on Filecoin via Lighthouse.",
      "Implemented a vault chat interface allowing users to query their stored notes conversationally.",
      "Full monorepo: React + Vite frontend with a Node.js/Express backend; deployed on Vercel.",
    ],
  },
  {
    slug: "waqafa",
    name: "Waqafa (Tadabur)",
    tagline: "Quran companion web app",
    status: "Shipped",
    block: "0x03",
    stack: ["React 18", "Vite", "Quran Foundation API", "Vercel"],
    hackathon: "Quran Foundation × Provision Launch Hackathon 2026 ($10,000 prize pool)",
    liveUrl: null,
    githubUrl: null,
    description: "A fully featured Quran companion web app built for a $10K hackathon.",
    points: [
      "Full Quran browser (114 Surahs), per-verse audio recitation (Alafasy), on-demand Tafsir (Ibn Kathir), bookmarks, reading streaks, and daily goals, plus an admin analytics dashboard.",
      "Implemented verse reflections and smart reading suggestions via a serverless proxy on Vercel.",
      "Integrated Quran Foundation's Content and User APIs; localStorage data layer with Supabase/MongoDB planned.",
    ],
  },
  {
    slug: "stellarread",
    name: "StellarRead (PayWell)",
    tagline: "Pay-per-article reading with real testnet micropayments",
    status: "Shipped",
    block: "0x04",
    stack: ["React 18", "Stellar SDK", "Freighter", "Vercel"],
    hackathon: "Stellar Agents × x402 × Stripe MPP Hackathon on DoraHacks",
    liveUrl: null,
    githubUrl: null,
    description:
      "A pay-per-article platform using real Stellar testnet micropayments and the x402 protocol.",
    points: [
      "Users connect a Freighter wallet, pay 1 XLM per article, and content unlocks instantly after on-chain confirmation (under 5 seconds).",
      "Implemented the x402 HTTP 402 micropayment flow end-to-end: wallet connection, transaction building/signing, Stellar Horizon submission, and tx hash verification.",
    ],
  },
];

export const education = [
  {
    school: "Lagos State University (LASU), Ojo — Lagos",
    degree: "BSc Physics",
    period: "2022 – 2027 (Expected)",
    note: "Studying alongside active software development.",
  },
  {
    school: "Golden Mind College, Agege — Lagos",
    degree: "WASSCE",
    period: "Completed",
    note: null,
  },
];

export const certifications = [
  { name: "Smart Contract Developer", issuer: "Cyfrin Updraft", date: "2025", id: null, flagged: true },
  { name: "Chainlink Fundamentals", issuer: "Cyfrin Updraft", date: "Jan 2026", id: "CLF-LU9VL7HEIZL2L" },
  { name: "Full-Stack Web3 & Blockchain Development", issuer: "Cyfrin Updraft", date: "Dec 2025", id: "2FVFFG0CRIDP" },
  { name: "Introduction to Python and Vyper", issuer: "Cyfrin Updraft", date: "Dec 2025", id: "2A9Q9V5U6UMG" },
  { name: "Advanced Foundry", issuer: "Cyfrin Updraft", date: "Nov 2025", id: "K0VGFNLHHZFM" },
  { name: "Foundry Fundamentals", issuer: "Cyfrin Updraft", date: "Oct 2025", id: "OJHAYTAPH80M" },
  { name: "Solidity Smart Contract Development", issuer: "Cyfrin Updraft", date: "Aug 2025", id: "UNFYBBAT9ULK" },
  { name: "Blockchain Basics", issuer: "Cyfrin Updraft", date: "Aug 2025", id: "YFVRH7P2VMOHA" },
  { name: "Full Stack Web Development", issuer: "freeCodeCamp", date: "2024", id: null, flagged: true },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "Dec 2023", id: null },
];

export const achievements = [
  { title: "1st Place — SchullTech × Kwala Hackathon \"Solve for Africa\"", date: "April 2026" },
  { title: "Overall Best Performer — EduBridge Digital Literacy Programme", date: "2024" },
  { title: "Hackathon — PL Genesis: Frontiers of Collaboration Hackathon (MindVault)", date: "2026" },
  { title: "Hackathon — Quran Foundation × Provision Launch Hackathon ($10K prize pool · Waqafa)", date: "2026" },
  { title: "Hackathon — Stellar Agents × x402 × Stripe MPP Hackathon on DoraHacks (StellarRead)", date: "2026" },
];

// Formspree endpoint placeholder — replace with your real form ID from formspree.io
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
