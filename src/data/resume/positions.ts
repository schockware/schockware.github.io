import type { Position } from "../../types/resume";

// Real content is authored from private history/ material and pasted
// in here -- history/ itself is never referenced from this repo.
// See design/ARCHITECTURE.md ("Open Items Not Yet Decided").
export const positions: Position[] = [
  {
    id: "independent-projects-health-break",
    employer: "Independent / Open Source",
    title: "Health Recovery Break & Independent Projects",
    start: "2026-04",
    end: "present",
    highlights: [
      {
        id: "independent-mssql-tooling-generalization",
        context:
          "A deliberate, purposeful break for health recovery following a sustained pattern of overcommitment across mission-driven roles, used for family time, creative writing, and self-directed technical growth.",
        action:
          "Generalized and open-sourced the SQL Server query-plan diagnostic methodology built at Red Rover K12 into standalone public tooling (mssql-query-plan-analyzer, mssql-performance-kit), continuing to develop and refine it independently of any employer.",
        result:
          "Produced concrete, ongoing evidence that the Red Rover diagnostic tooling reflects a genuine, sustained technical interest rather than a one-off employer-specific project.",
        keywords: ["SQL Server", "Open source", "Developer tooling", "Query plan analysis"],
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: false },
        ],
      },
    ],
  },
  {
    id: "red-rover-k12",
    employer: "Red Rover K12",
    title: "Senior Software Engineer",
    start: "2022-09",
    end: "2026-04",
    highlights: [
      {
        id: "red-rover-query-compile-diagnosis",
        context:
          "A large-scale HR platform serving school districts nationwide was suffering recurring, system-wide weekly outages, with hardware scaling (up to 80 cores) as the initial mitigation.",
        action:
          "Identified the root cause as a custom GraphQL-over-Entity-Framework-6 framework, and built DMV-query-based evidence to prove the connection. Proposed and implemented interim mitigations (splitting reporting and read-only load onto separate databases, repurposing existing Hyperscale HA replicas), then validated the combined long-term fix contributed by two colleagues (an EF 8 upgrade plus a custom EF Expression extension forcing OPENJSON/parameterization).",
        result:
          "Eliminated the recurring weekly outages driving a systemic RESOURCE_SEMAPHORE_QUERY_COMPILE crisis, by establishing the root cause with query-level evidence.",
        keywords: [
          "SQL Server",
          "Entity Framework",
          "GraphQL",
          "Performance diagnostics",
          "Query plan analysis",
          "Incident response",
        ],
        tiers: [
          { tier: "principal", include: true, emphasis: "lead" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "support" },
        ],
      },
      {
        id: "red-rover-contention-cluster",
        context:
          "The same platform faced an interconnected cluster of SQL Server contention issues (PAGELATCH, PAGEIOLATCH, WRITELOG wait types) threatening stability ahead of a planned architectural overhaul.",
        action:
          "Diagnosed the cluster of contention issues as related manifestations of a single underlying design deficit, then implemented targeted tactical fixes to relieve the contention.",
        result: "Extended system stability by approximately one year ahead of planned architectural changes.",
        keywords: ["SQL Server", "Performance diagnostics", "Query plan analysis"],
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "red-rover-remediation-program",
        context:
          "Roughly half of a 3.5-year tenure was spent addressing performance problems traced back to a monolithic database architecture carried across the company's Pre-seed, Seed, and Series A growth stages.",
        action:
          "Drove a systemic diagnosis identifying 13 distinct performance issues as manifestations of the same underlying scaling-architecture deficit, then led the remediation program addressing them.",
        result:
          "Resolved a systemic performance crisis spanning 13 distinct issues by fixing the shared architectural root cause rather than treating each symptom individually.",
        keywords: ["SQL Server", "Performance diagnostics", "Systems architecture", "Technical leadership"],
        tiers: [
          { tier: "principal", include: true, emphasis: "lead" },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: false },
        ],
      },
      {
        id: "red-rover-mcp-diagnostic-pipeline",
        context:
          "SQL Server query-plan diagnosis was a hard-won skill that normally takes months to years of hands-on practice to build, making expert diagnosis a bottleneck during an ongoing performance crisis.",
        action:
          "Codified a multi-pattern SQL Server query-plan diagnostic methodology into an automated pipeline integrated with a Model Context Protocol (MCP) server, letting an AI assistant apply the methodology directly against a given query plan.",
        result:
          "Reduced a ~15-minute manual diagnostic process to seconds and made expert-level diagnosis accessible to non-specialist team members without months-long cross-training. Continued and generalized independently as open-source projects (mssql-query-plan-analyzer, mssql-performance-kit) after the role ended.",
        keywords: [
          "SQL Server",
          "Model Context Protocol",
          "MCP",
          "Claude AI",
          "C#",
          "Query plan analysis",
          "Developer tooling",
        ],
        tiers: [
          { tier: "principal", include: true, emphasis: "lead" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "support" },
        ],
      },
      {
        id: "red-rover-hiring-mentorship",
        context:
          "As the company scaled rapidly, new engineers needed both technical vetting and onboarding into a system with limited written documentation of its design decisions.",
        action:
          "Screened engineering candidates for technical skill and culture fit, and became a default point of contact for new hires trying to understand how existing systems actually worked, including pair-programming to ramp new hires up and identify individual strengths.",
        result: "Maintained approximately 80% engineering retention over an 18-month period.",
        keywords: ["Hiring", "Mentorship", "Technical leadership", "Onboarding"],
        narrative: {
          principal: {
            result:
              "Sustained an organizational knowledge-transfer function informally -- keeping engineering retention at approximately 80% over 18 months through a rapid scaling period.",
          },
        },
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
    ],
  },
  {
    id: "quotewizard-lendingtree",
    employer: "QuoteWizard / LendingTree",
    title: "Senior Software Engineer",
    start: "2020-03",
    end: "2021-10",
    highlights: [
      {
        id: "qw-elm-architecture-correction",
        context:
          "A greenfield direct-to-customer car insurance product's backend was planned around gRPC and Akka.NET running in Windows Azure Web App containers, which only supported HTTP/1.0 at the time.",
        action:
          "Documented the technical incompatibility concretely and demonstrated why the approach couldn't work, moving the team to a viable design before it cost further schedule.",
        result:
          "Corrected the architecture early, keeping the greenfield product's delivery schedule intact.",
        keywords: ["Architecture review", "gRPC", "Azure", ".NET", "Technical leadership"],
        narrative: {
          senior: {
            action:
              "Personally tested the proposed gRPC/Akka.NET approach against Windows Azure Web App containers, confirmed the HTTP/1.0 limitation firsthand, and wrote up the concrete incompatibility so the team could move off it without more schedule loss.",
          },
        },
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "qw-carrier-integration-rescue",
        context:
          "The product's entire economic model routed through a sister team's carrier-integration API layer -- for roughly three months, essentially zero integration calls succeeded end to end.",
        action:
          "Worked with the team's backend developer on the integration's actual goal, diagnosed the existing code as hand-built XML without formal contracts, and got a proper contract-based rebuild to a working model within three days by sharing established contract patterns from his own team.",
        result:
          "Unblocked the product's revenue-critical integration path, turning a three-month stall of zero successful end-to-end calls into a working model within days.",
        keywords: ["C#", "API integration", "Systems architecture", "Cross-team collaboration"],
        narrative: {
          principal: {
            context:
              "A sister team's carrier-integration layer -- the literal revenue funnel for a greenfield product's entire economic model -- had produced essentially zero successful end-to-end calls for three months.",
            action:
              "Diagnosed the systemic failure mode behind the stall (integration code without formal contracts) as an org-level risk to the product's viability, not just a bug, and drove the team toward a contract-based standard by transferring his own team's existing patterns.",
            result:
              "Converted a three-month, zero-success revenue-path failure into a working model within three days, protecting the product's core economic dependency without waiting for a formal cross-team escalation.",
          },
        },
        tiers: [
          { tier: "principal", include: true, emphasis: "lead" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "support" },
        ],
      },
      {
        id: "qw-vendor-doc-drift-fixes",
        context:
          "Two other dependent teams (SMS and email delivery, both built on Salesforce) faced integration blockers: one because Salesforce's own published documentation was a full version behind the software actually running on their servers, the other navigating Salesforce's marketing-automation tooling.",
        action:
          "Reverse-engineered the correct API version directly from the SMS team's source code and built a corrected integration; separately, paired directly with the email team to lock correct automation commands into source code instead of leaving them ad hoc.",
        result:
          "Resolved vendor-documentation drift blocking a dependent delivery channel, and stabilized a second team's automation integration through direct, hands-on collaboration.",
        keywords: ["Vue.js", "Salesforce", "API integration", "Cross-team collaboration", "Mentorship"],
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "qw-sox-guardrails",
        context:
          "Internal pressure to hit aggressive CI/CD speed targets repeatedly risked breaching SOX compliance protocols on a fintech-adjacent product.",
        action:
          "Worked directly with the DevOps team to build approval workflows that structurally prevented breaching SOX controls even under delivery pressure.",
        result:
          "Produced an unusually clean SOX compliance transition that became a reference model other teams in the organization adopted for their own audits.",
        keywords: ["SOX compliance", "CI/CD", "DevOps", "Fintech", "Systems architecture"],
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "support" },
        ],
      },
      {
        id: "qw-force-multiplier",
        context:
          "The organization lacked a commercial reporting/troubleshooting layer to catch simple root causes buried deep in individual teams' codebases across a wide product surface.",
        action:
          "Operated as an org-wide troubleshooting resource across four dependent teams beyond his own, pairing directly with engineers to find and fix root causes.",
        result:
          "Became a recognized cross-team force multiplier, credited by other teams' leadership with resolving blockers outside his own team's formal scope; declined both a Staff Software Engineer and a Development Manager offer at the company.",
        keywords: ["Technical leadership", "Cross-team collaboration", "Mentorship", "Node.js"],
        tiers: [
          { tier: "principal", include: true, emphasis: "lead" },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: false },
        ],
      },
    ],
  },
  {
    id: "dps-return-senior-developer",
    employer: "Denver Public Schools",
    title: "Senior Software Developer",
    start: "2021-10",
    end: "2022-07",
    resumeDetail: "brief",
    highlights: [
      {
        id: "dps-return-full-lifecycle-delivery",
        context:
          "A district that had just eliminated roughly 150 central-administration positions had a thin technical bench relative to its workload, and needed a generalist who could own mid-sized projects end to end on short notice.",
        action:
          "Designed and delivered two mid-sized educational-technology projects (Summer Connections and Assistive Technology Part 1) full-stack from ideation through release, while mentoring junior and mid-level developers throughout, and extended several ~8-year-old legacy systems spanning Java, C#, SharePoint, and SSIS rather than treating them as replaceable.",
        result:
          "Delivered full-lifecycle ownership on two concrete projects despite significant post-reduction-in-force understaffing, demonstrating a repeatable pattern of rapid legacy-system triage and generalist delivery under pressure.",
        keywords: ["Vue.js", "C#", "Java", "Microservices", "SQL Server", "Mentorship", "Systems architecture"],
        tiers: [
          { tier: "principal", include: false },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
    ],
  },
  {
    id: "dealer360-bcit",
    employer: "Dealer360 (BCIT)",
    title: "Senior Software Developer",
    start: "2018-09",
    end: "2020-02",
    highlights: [
      {
        id: "bcit-ransomware-recovery",
        context:
          "A company-wide ransomware incident required a large-scale technical recovery.",
        action: "Co-led the technical recovery from a company-wide ransomware incident.",
        result: "The recovery absorbed a large part of my time there.",
        keywords: ["Incident response", "Technical leadership"],
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "support" },
        ],
      },
      {
        id: "bcit-pangea-offline-pwa",
        context:
          "A dealership-audit product for the Canadian market required traveling managers to record and report findings on-site, in regions with spotty rural internet connectivity.",
        action:
          "Built an offline-first Progressive Web App using TypeScript and Vue.js, backed by Azure with IdentityServer3 for auth, designed around real-world connectivity constraints rather than treating offline mode as a nice-to-have.",
        result:
          "Delivered a reliable field-audit tool for a traveling workforce operating in areas without dependable internet access.",
        keywords: ["TypeScript", "Vue.js", "Progressive Web App", "Azure", "Offline-first architecture"],
        tiers: [
          { tier: "principal", include: false },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
    ],
  },
  {
    id: "denver-county-court",
    employer: "Denver County Court",
    title: "Associate Software Developer",
    start: "2017-03",
    end: "2018-09",
    resumeDetail: "brief",
    highlights: [
      {
        id: "county-court-efile-queue-fix",
        context:
          "An in-progress internal E-File system, built to replace a third-party document-filing vendor, was processing filings synchronously, causing system crashes under load on a legacy PowerBuilder/MSSQL 2000 core roughly a decade behind current practice.",
        action:
          "Diagnosed the synchronous processing as the structural cause of the crashes, recommended a queue-based architecture, and built a Windows Service (DocumentQUploader) to implement it alongside finishing and managing the broader E-File system (jQuery, ASP.NET MVC, MSSQL).",
        result:
          "Resolved a recurring production-crash pattern by re-architecting the filing pipeline around a queue, while also becoming a de facto mentor to the wider team despite holding the most junior title on it.",
        keywords: ["ASP.NET", "MSSQL", "Systems architecture", "Queue-based architecture", "Mentorship"],
        tiers: [
          { tier: "principal", include: false },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
    ],
  },
  {
    id: "jeffco-lead-developer",
    employer: "Jefferson County Public Schools",
    title: "Lead Developer",
    start: "2016-02",
    end: "2017-03",
    resumeDetail: "brief",
    highlights: [
      {
        id: "jeffco-strapp-rebuild",
        context:
          "A district's Special Education state reporting had lacked an in-house understanding of how the underlying third-party system worked, leaving an estimated $1M-$5M of $15M in annual funding unclaimed.",
        action:
          "Led a full, properly-resourced rebuild of a from-scratch state reporting and compliance system (AngularJS, ASP.NET Web API, MSSQL), working directly with the district's Special Education manager to get accurate domain requirements firsthand.",
        result:
          "Correct reporting produced approximately $2M/year in recurring funding at a mature, steady state, growing from roughly $200K captured in the first year -- a byproduct of building the system right, not a revenue-hunting goal.",
        keywords: ["AngularJS", "C#", ".NET", "SQL Server", "Systems architecture", "Compliance reporting"],
        narrative: {
          senior: {
            action:
              "Built the rebuild's AngularJS front end and ASP.NET Web API/MSSQL backend directly, sitting with the district's Special Education manager to translate real eligibility rules into the system's reporting logic.",
          },
        },
        tiers: [
          { tier: "principal", include: true, emphasis: "lead" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "support" },
        ],
      },
      {
        id: "jeffco-internal-platform-build",
        context:
          "A 3-5 person team was absorbing an estimated 90% of all custom report/application requests across a district-wide pool of roughly 30 people on report-adjacent teams, without commercial reporting tooling available.",
        action:
          "Built an internal application repository (ORCA) plus a from-scratch report-request management service and a companion WebAPI, so other district teams could integrate request-management functionality into their own tooling rather than duplicating it.",
        result:
          "Delivered a self-built internal platform in place of commercial tooling, adopted by other teams district-wide as reusable infrastructure rather than a one-off internal tool.",
        keywords: ["C#", "ASP.NET", "Microservices", "Web API", "Systems architecture", "Developer tooling"],
        narrative: {
          principal: {
            context:
              "Without commercial reporting tooling (e.g. Tableau) available, a single team was structurally positioned to become the district's only source of custom reporting capability, or to fail visibly under demand it couldn't meet.",
            action:
              "Set the technical direction to build reusable, service-based infrastructure instead of one-off internal tooling -- a request-management platform (ORCA) plus a WebAPI other district teams could integrate against directly rather than depend on his team's UI.",
            result:
              "Established a piece of shared district infrastructure other teams adopted directly, turning a tooling constraint into a reusable internal platform rather than a bottlenecked single-team dependency.",
          },
        },
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "jeffco-team-leadership",
        context:
          "The overwhelming majority of the district's custom report and application demand was routed to his team of 3-5 developers.",
        action:
          "Led the team responsible for absorbing that demand while functioning as a de facto development manager and project manager on top of hands-on lead development duties.",
        result:
          "Delivered an estimated 90% of all custom report/application work produced across a district-wide pool of roughly 30 people on report-adjacent teams.",
        keywords: ["Technical leadership", "Team leadership", "Project management"],
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
    ],
  },
  {
    id: "jeffco-systems-analyst",
    employer: "Jefferson County Public Schools",
    title: "Systems Analyst",
    start: "2012-11",
    end: "2016-02",
    resumeDetail: "brief",
    highlights: [
      {
        id: "jeffco-strapp-first-build",
        context:
          "During a transition between two third-party Special Education systems, it became clear no one at the district understood how the outgoing system's state reporting actually worked internally.",
        action:
          "Built the first version of a custom Special Education state reporting and compliance application from scratch, without dedicated project budget, to replace guesswork-driven reporting.",
        result: "Directly responsible for approximately $200K in recurring funding captured in the first year.",
        keywords: ["C#", "ASP.NET", "SQL Server", "Compliance reporting", "Systems architecture"],
        narrative: {
          principal: {
            context:
              "A district's Special Education state reporting had been run as guesswork for years, with no one on staff understanding how the underlying third-party system actually worked -- a compliance and funding-accuracy risk with no owner.",
            result:
              "Established the first accurate account of the district's actual reporting obligations, worth approximately $200K in recovered recurring funding in year one -- the diagnostic groundwork that the later, fully-resourced rebuild scaled to $2M/year.",
          },
        },
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "jeffco-engineering-turnaround",
        context:
          "A severely under-resourced team was carrying a reported 1,500-ticket backlog and per-release defect rates around 35%.",
        action:
          "Protected two strong new hires' time for high-value work, and led renegotiation of ticket scope directly with requesting groups rather than grinding through every ticket as originally scoped.",
        result:
          "Reduced a 1,500-ticket backlog to zero on a sustainable basis and cut per-release defect rates from roughly 35% to 4%.",
        keywords: ["Technical leadership", "Team leadership", "Process improvement", "Mentorship"],
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "jeffco-connect-scale",
        context:
          "A parent registration system serving roughly 200,000 parents/guardians year-round, with the overwhelming majority of load concentrated in a short seasonal peak window at the end of summer break, had known defects in its original build.",
        action:
          "Stabilized and extended the existing ASP.NET/MSSQL system's functionality under a hard seasonal deadline, rather than rebuilding from scratch.",
        result:
          "Sustained a high-traffic, sharply seasonal system serving roughly 200,000 users through repeated peak registration windows.",
        keywords: ["ASP.NET", "SQL Server", "Systems architecture", "Performance diagnostics"],
        tiers: [
          { tier: "principal", include: false },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "jeffco-cross-team-collaboration",
        context:
          "Chronic cross-team friction over shared APIs limited collaboration between teams.",
        action:
          "Started recurring, deliberately agenda-less informal working sessions, gradually inviting members of other teams into low-stakes discussions to build rapport before addressing the shared APIs causing friction.",
        result:
          "Converted a chronic cross-team API conflict into working solutions for both sides through sustained, informal collaboration.",
        keywords: ["Cross-team collaboration", "Technical leadership", "Process improvement"],
        tiers: [
          { tier: "principal", include: false },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
    ],
  },
  {
    id: "dps-process-analyst",
    employer: "Denver Public Schools",
    title: "Process Analyst",
    start: "2010-03",
    end: "2012-11",
    resumeDetail: "brief",
    highlights: [
      {
        id: "dps-eep-rebuild",
        context:
          "An early education program's application intake ran through a double-manual-entry, hand-calculated process across two teams -- a raw Access database, hand calculation, a scan/handoff, then re-entry into a second system -- causing both compliance errors and late billing.",
        action:
          "Mapped the team's actual workflow using Lean Six Sigma, then replaced the process with a single-entry ASP.NET/MSSQL system with automated SSRS reporting, eliminating the hand-off and re-entry chain entirely.",
        result:
          "Recovered approximately $190,000 in combined tuition and state/city revenue in year one by eliminating a compounding manual-entry and late-filing problem.",
        keywords: ["ASP.NET", "SQL Server", "Lean Six Sigma", "Process improvement", "Compliance reporting"],
        tiers: [
          { tier: "principal", include: false },
          { tier: "staff", include: true, emphasis: "support" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "dps-october-count-prevention",
        context:
          "A $500M/year state-funding process was operating reactively -- scrambling to find documentation only after an audit was triggered -- with $1.3M-$1.5M/year in funding at risk and no clear standard for what school secretaries needed to provide.",
        action:
          "Used Lean Six Sigma to quantify and isolate the source of audit risk, redesigned secretary training from an adversarial to a collaborative model based on direct survey feedback, and built risk-assessment software identifying exactly which physical document was needed per student.",
        result:
          "Eliminated an estimated $1.3M-$1.5M/year in audit risk entirely and captured $60,000-$80,000 in additional revenue from what was still a prototype-stage system, while driving manual documentation error rates from a 45% baseline down to near-zero (5-sigma) with tooling applied.",
        keywords: ["Lean Six Sigma", "Risk analysis", "Process improvement", "ASP.NET", "SQL Server"],
        narrative: {
          principal: {
            action:
              "Reframed a $500M/year state-funding process from reactive audit-survival to proactive risk elimination -- quantifying exposure for the first time, redesigning the human process (secretary training) alongside the technical one, and building risk-assessment tooling to close the gap.",
            result:
              "Eliminated $1.3M-$1.5M/year in audit risk on a $500M/year funding process entirely, converting a chronic, unquantified organizational exposure into a measured, prevented one.",
          },
        },
        tiers: [
          { tier: "principal", include: true, emphasis: "support" },
          { tier: "staff", include: true, emphasis: "lead" },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
      {
        id: "dps-secondary-ed-revenue",
        context:
          "Secondary Education programs faced the same error-prone, manual-entry revenue losses already diagnosed and fixed in Early Education Processing.",
        action:
          "Applied the same Lean Six Sigma diagnosis and automated-forms pattern to a colleague's Secondary Education engagement, reducing manual data-entry errors.",
        result: "Captured an estimated $130,000-$200,000 in additional revenue previously missed to form/process errors.",
        keywords: ["Lean Six Sigma", "Process improvement", "Mentorship"],
        tiers: [
          { tier: "principal", include: false },
          { tier: "staff", include: false },
          { tier: "senior", include: true, emphasis: "lead" },
        ],
      },
    ],
  },
  {
    id: "dps-research-analyst",
    employer: "Denver Public Schools",
    title: "Research Analyst",
    start: "2009-02",
    end: "2010-03",
    resumeDetail: "brief",
    highlights: [
      {
        id: "dps-october-count-first-tool",
        context:
          "Year-over-year state audits of \"October Count,\" the process determining roughly $500M in annual district state funding, were costing an estimated $1.3M-$5M annually in unsubstantiated students -- with no formal reporting discipline yet in place to measure the problem.",
        action:
          "Built the first version of software to search district records for documentation substantiating a given student's audit requirement, turning an ad hoc, manual documentation hunt into a systematic process, while also operating past the report-generation scope of the posted title.",
        result:
          "Directly targeted a $1.3M-$5M annual funding-audit exposure with the district's first systematic documentation-search tooling, laying the groundwork for the quantified prevention program built in the following role.",
        keywords: ["SQL Server", "ASP.NET", "SSRS", "Compliance reporting", "Systems architecture"],
        tiers: [
          { tier: "principal", include: false },
          { tier: "staff", include: false },
          { tier: "senior", include: true, emphasis: "support" },
        ],
      },
    ],
  },
];
