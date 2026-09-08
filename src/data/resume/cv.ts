import type { SkillGroup, Certification, IndependentProject } from "../../types/resume";

// CV-only content -- summary, skills inventory, certifications, and
// independent projects. See src/types/resume.ts's "CV-only content" note
// and specs/extensions/RESUME_FRAMEWORK_CHOICE.md ("CV Stays Separate").

export const summary =
  "Software engineer with 15+ years across public-sector EdTech and fintech/insurance, specializing in diagnosing and fixing systemic performance and architecture problems that others had misdiagnosed or given up on. Recurring pattern: identify a root cause against initial resistance, build the evidence to prove it, then either fix it directly or drive the organizational remediation. Comfortable operating from hands-on SQL Server internals up through cross-team architectural governance.";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C#", "TypeScript", "JavaScript", "SQL", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "React Native",
      "Vue.js",
      "AngularJS",
      ".NET / .NET Framework",
      "Entity Framework",
      "GraphQL",
      "ASP.NET (Web Forms, MVC, Web API)",
    ],
  },
  {
    category: "Data & Reporting",
    skills: ["SQL Server (MSSQL)", "Query plan / performance diagnostics", "SSRS", "SSAS", "Cosmos DB"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "Azure (Web Apps, Service Bus, Event Hub/Grid, App Insights, B2C)",
      "Model Context Protocol (MCP)",
      "Windows domain infrastructure / PXE imaging",
      "CI/CD (Azure DevOps, Octopus Deploy)",
    ],
  },
  {
    category: "Practices & Methodology",
    skills: [
      "Incident response / crisis leadership",
      "Lean Six Sigma process analysis",
      "SOX-compliant CI/CD",
      "Message brokering / pub-sub architecture",
      "Mentorship & technical hiring",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Lean Six Sigma Green Belt",
    year: "2009",
    note: "Process analysis and quantitative risk/impact measurement; historical credential, not an active practice since ~2012.",
  },
];

export const independentProjects: IndependentProject[] = [
  {
    name: "mssql-query-plan-analyzer",
    description:
      "Open-source generalization of the SQL Server query-plan diagnostic methodology built at Red Rover K12, automating pattern detection across query plans.",
    url: "https://github.com/schockware/mssql-query-plan-analyzer",
  },
  {
    name: "mssql-performance-kit",
    description: "Companion SQL Server performance diagnostic tooling.",
    url: "https://github.com/schockware/mssql-performance-kit",
  },
];
