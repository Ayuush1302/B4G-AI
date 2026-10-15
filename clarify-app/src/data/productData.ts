export interface ProductFeature {
  title: string;
  description: string;
  tag: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyChoosePoint {
  title: string;
  description: string;
}

export interface ProductMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  eyebrow: string;
  heroDescription: string;
  badge: string;
  iconName: string;
  problem: {
    headline: string;
    subheadline: string;
    points: Array<{ title: string; description: string }>;
  };
  solution: {
    headline: string;
    description: string;
    capabilities: string[];
  };
  howItWorks: HowItWorksStep[];
  features: ProductFeature[];
  whyChoose: WhyChoosePoint[];
  metrics: ProductMetric[];
  useCases: Array<{ title: string; industry: string; description: string }>;
  mockupData: {
    title: string;
    subtitle: string;
    stats: Array<{ label: string; value: string }>;
    activityLog: Array<{ time: string; action: string; status: string }>;
  };
}

export const productsData: Record<string, ProductDetail> = {
  'b4g-social': {
    id: 'b4g-social',
    name: 'B4G Social',
    eyebrow: 'Autonomous Social Growth',
    badge: 'Social Media Intelligence',
    iconName: 'Share2',
    tagline: 'Automate your social media presence with AI-powered content creation, scheduling, and engagement tools.',
    heroDescription:
      'Scale your multi-channel brand presence with an autonomous AI engine that discovers emerging trends, crafts platform-native carousels and posts in your exact brand voice, schedules for maximum algorithmic reach, and engages with your audience 24/7.',
    problem: {
      headline: 'The Friction in Modern Social Management',
      subheadline: 'Enterprise marketing teams are suffocating under relentless content treadmill demands.',
      points: [
        {
          title: 'Manual Content Bottlenecks',
          description: 'Writing, designing, and repurposing copy across 5+ platforms takes 25+ hours per creator every week.',
        },
        {
          title: 'Inconsistent Brand Voice',
          description: 'Fragmented team members and outside agencies cause erratic tone and messaging inconsistencies.',
        },
        {
          title: 'Delayed Audience Engagement',
          description: 'Comments, DMs, and viral brand mentions go unanswered for hours, causing lost conversion opportunities.',
        },
        {
          title: 'Guesswork Scheduling',
          description: 'Publishing at static times misses shifting peak audience activity windows and algorithm preference shifts.',
        },
      ],
    },
    solution: {
      headline: 'Autonomous Brand Intelligence & Content Velocity',
      description:
        'B4G Social acts as a dedicated 24/7 AI social media director. It continuously analyzes top-performing competitor content, converts internal documents and podcasts into platform-optimized threads and carousels, and monitors community sentiment in real time.',
      capabilities: [
        'Multi-Modal Asset Generation: Auto-generates captions, carousel visuals, and video scripts.',
        'Algorithmic Peak-Time Dispatch: Dynamically schedules based on live follower density patterns.',
        'Context-Aware Community Replies: Responds to inquiries while escalating critical PR risks.',
        'Continuous Voice Fine-Tuning: Trains on your historical high-performing posts to match nuances.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Brand DNA & Content Ingestion',
        description: 'Connect your accounts and upload style guides, past content, and knowledge bases to establish strict tone guardrails.',
      },
      {
        step: '02',
        title: 'Trend Synthesizing & Content Ideation',
        description: 'AI monitors real-time market signals and drafts platform-specific post variations with creative image hooks.',
      },
      {
        step: '03',
        title: 'One-Click Review or Full Autopilot',
        description: 'Approve drafted content batches in your interactive queue or enable full autonomous publishing with safety locks.',
      },
      {
        step: '04',
        title: 'Real-Time Engagement & Feedback Loop',
        description: 'The engine handles first-touch replies, tracks engagement metrics, and iteratively refines future post performance.',
      },
    ],
    features: [
      {
        title: 'Autonomous Multi-Platform Publishing',
        description: 'Native publishing APIs for LinkedIn, X (Twitter), Instagram, Threads, YouTube Shorts, and TikTok.',
        tag: 'Omnichannel',
      },
      {
        title: 'Brand Voice Guardrails',
        description: 'Enforces corporate terminology, banned keywords, legal disclaimers, and executive persona tone.',
        tag: 'Governance',
      },
      {
        title: 'Smart Carousel & Graphic Generator',
        description: 'Turns long-form case studies and articles into visually stunning slide decks and infographic banners.',
        tag: 'Visual AI',
      },
      {
        title: 'Real-Time Sentiment Monitoring',
        description: 'Flags emerging negative sentiment or customer support inquiries and routes them instantly to human agents.',
        tag: 'Protection',
      },
      {
        title: 'Dynamic A/B Headline Testing',
        description: 'Tests post variations and hooks with initial follower segments to maximize virality and impressions.',
        tag: 'Growth',
      },
      {
        title: 'Executive Ghostwriting Mode',
        description: 'Empowers founders and C-suite leaders to maintain active thought leadership with zero time commitment.',
        tag: 'Personal Branding',
      },
    ],
    whyChoose: [
      {
        title: '100% Brand-Fidelity Guarantee',
        description: 'Unlike generic prompt wrappers, our proprietary verification layer ensures zero off-brand hallucinations.',
      },
      {
        title: 'Enterprise Workflow Approvals',
        description: 'Role-based access controls (RBAC) and compliance review queues tailored for regulated industries.',
      },
      {
        title: 'Continuous Reinforcement Learning',
        description: 'The system learns which hooks resonate with your exact audience, continuously multiplying engagement.',
      },
      {
        title: 'Deep Analytics & Attribution',
        description: 'Track how organic social posts convert into direct website pipeline and enterprise demo bookings.',
      },
    ],
    metrics: [
      { value: '+340%', label: 'Average Organic Reach', detail: 'Measured across 90 days of autonomous scheduling' },
      { value: '25 hrs', label: 'Saved Weekly per Creator', detail: 'Eliminating manual copywriting and asset resizing' },
      { value: '< 90s', label: 'Average Community Reply Time', detail: 'Instant first-touch response to customer questions' },
    ],
    useCases: [
      {
        industry: 'B2B SaaS',
        title: 'Product Launch & Feature Velocity',
        description: 'Transforming changelogs and GitHub releases into weekly customer-facing demo threads and product carousels.',
      },
      {
        industry: 'Executive Leadership',
        title: 'Founder & C-Suite Thought Leadership',
        description: 'Maintaining authoritative LinkedIn commentary on market events without pulling executives from core operations.',
      },
      {
        industry: 'Consumer Brands',
        title: '24/7 Community Cultivation',
        description: 'Instant witty replies and proactive customer support across Instagram and X during high-traffic viral moments.',
      },
    ],
    mockupData: {
      title: 'B4G Social Autopilot Suite',
      subtitle: 'Live Channel Dispatch & Sentiment Stream',
      stats: [
        { label: 'Weekly Posts Dispatched', value: '48' },
        { label: 'Engagement Rate', value: '4.8%' },
        { label: 'Sentiment Index', value: '98.2% Pos' },
      ],
      activityLog: [
        { time: '2m ago', action: 'LinkedIn Carousel Published: "Building Scalable AI Workflows"', status: 'Optimal Reach' },
        { time: '14m ago', action: 'Auto-Replied to 12 comments on X post about quarterly earnings', status: 'Resolved' },
        { time: '45m ago', action: 'Generated 4 variations for upcoming Product Hunt launch', status: 'Queued' },
      ],
    },
  },

  'ai-agents': {
    id: 'ai-agents',
    name: 'AI Agents',
    eyebrow: 'Autonomous Enterprise Workforce',
    badge: 'Multi-Agent Orchestration',
    iconName: 'Bot',
    tagline: 'Deploy autonomous agents that handle complex business tasks end-to-end without human intervention.',
    heroDescription:
      'Supercharge your operational throughput with self-directed AI agents equipped with episodic memory, dynamic tool calling, and cross-system execution capabilities across your ERP, CRM, and internal APIs.',
    problem: {
      headline: 'The Limitations of Legacy Automation',
      subheadline: 'RPA and rigid rule-based scripts shatter the moment an edge case arises.',
      points: [
        {
          title: 'Fragile Scripting Architectures',
          description: 'Traditional bots break when UI elements shift or unstructured data formats vary unexpectedly.',
        },
        {
          title: 'Costly Human Supervision',
          description: 'Workers waste up to 40% of their day handling mundane data transfer and validation between legacy portals.',
        },
        {
          title: 'Siloed System Blind Spots',
          description: 'Information trapped in emails, spreadsheets, and internal databases fails to trigger necessary business actions.',
        },
        {
          title: 'Inability to Reason Through Errors',
          description: 'When exceptions occur, legacy scripts fail loudly and dump tickets back onto already strained human teams.',
        },
      ],
    },
    solution: {
      headline: 'Self-Directed Cognitive Execution',
      description:
        'B4G AI Agents combine advanced cognitive architectures (ReAct, hierarchical planning, and verification loops) with enterprise-grade sandboxing. They autonomously plan steps, navigate software, run code, query databases, and heal from runtime exceptions.',
      capabilities: [
        'Hierarchical Swarm Orchestration: Specialist agents supervised by goal-oriented director agents.',
        'Persistent Episodic Memory: Remembers past edge cases, user preferences, and business context.',
        'Deterministic Tool Integration: Safely executes SQL queries, REST APIs, and file manipulation.',
        'Self-Healing Error Recovery: Diagnoses unexpected API responses and recalculates alternative paths.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Define Mission & Governance Guardrails',
        description: 'Specify the agent goal in plain English, assign authorized tools, and set budgetary and permission limits.',
      },
      {
        step: '02',
        title: 'Multi-Stage Strategic Planning',
        description: 'The agent decomposes the objective into discrete, verifiable sub-tasks and queries internal knowledge stores.',
      },
      {
        step: '03',
        title: 'Autonomous Tool Execution',
        description: 'The agent interacts with internal databases, drafts emails, reconciles records, and verifies outputs.',
      },
      {
        step: '04',
        title: 'Telemetry & Verification Logging',
        description: 'Every decision trace, tool invocation, and token consumption metric is streamed to your audit log for review.',
      },
    ],
    features: [
      {
        title: 'Swarm Orchestration Protocol',
        description: 'Coordinate dozens of specialized agents working cooperatively on multi-faceted business workflows.',
        tag: 'Architecture',
      },
      {
        title: 'Secure Sandboxed Execution',
        description: 'Isolated container runtimes ensure agents never execute unauthorized operations or leak sensitive data.',
        tag: 'Security',
      },
      {
        title: 'Deterministic State Rollback',
        description: 'Instant checkpoint restoration allows you to undo agent actions in the event of upstream system failures.',
        tag: 'Resilience',
      },
      {
        title: 'Deep API & Database Tooling',
        description: 'Equip agents with native access to PostgreSQL, Snowflake, Salesforce, Jira, SAP, and custom REST APIs.',
        tag: 'Integration',
      },
      {
        title: 'Human-in-the-Loop Thresholds',
        description: 'Set configurable confidence thresholds that request manager approval before high-stakes actions.',
        tag: 'Compliance',
      },
      {
        title: 'Continuous Self-Correction',
        description: 'Agents test their own outputs against programmatic unit tests and business criteria before final submission.',
        tag: 'Quality',
      },
    ],
    whyChoose: [
      {
        title: 'Enterprise-Grade Reliability',
        description: 'Engineered for 99.9% task completion rates with deterministic verification safeguards.',
      },
      {
        title: 'Zero Code Bloat',
        description: 'Replace thousands of fragile brittle RPA scripts with flexible, reasoning-driven cognitive agents.',
      },
      {
        title: 'Complete Auditability',
        description: 'Full video and token telemetry of every single mouse click, API request, and decision tree.',
      },
      {
        title: 'VPC & On-Premises Isolation',
        description: 'Deploy inside your own AWS, Azure, or GCP infrastructure with zero external telemetry leakage.',
      },
    ],
    metrics: [
      { value: '94.2%', label: 'Autonomous Task Completion', detail: 'Tasks finished without human intervention' },
      { value: '68%', label: 'Operational Cost Reduction', detail: 'Across complex multi-system back-office workflows' },
      { value: '< 450ms', label: 'Decision Cycle Latency', detail: 'Rapid multi-step planning and tool dispatch' },
    ],
    useCases: [
      {
        industry: 'FinTech & Banking',
        title: 'Autonomous KYC & Fraud Triage',
        description: 'Investigating customer documents, cross-referencing sanction lists, and summarizing risk scores.',
      },
      {
        industry: 'Supply Chain',
        title: 'Discrepancy Resolution & Re-ordering',
        description: 'Detecting warehouse shipment delays, contacting alternative vendors, and updating ERP delivery schedules.',
      },
      {
        industry: 'IT & DevOps',
        title: 'Automated Incident Remediation',
        description: 'Diagnosing server memory leaks, inspecting logs, running diagnostic scripts, and notifying on-call engineers.',
      },
    ],
    mockupData: {
      title: 'Agent Orchestration Console',
      subtitle: 'Active Swarms: 14 | System Health: 100%',
      stats: [
        { label: 'Tasks Resolved Today', value: '1,420' },
        { label: 'Autonomy Level', value: '98.4%' },
        { label: 'Avg Execution Time', value: '18.2s' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Agent #04: Reconciled 420 discrepancies between NetSuite & Stripe', status: 'Success' },
        { time: '4m ago', action: 'Agent #11: Verified supplier compliance certificate with FDA portal', status: 'Success' },
        { time: '12m ago', action: 'Agent #02: Generated weekly cross-departmental KPI synthesis report', status: 'Dispatched' },
      ],
    },
  },

  'ai-chatbots': {
    id: 'ai-chatbots',
    name: 'AI Chatbots',
    eyebrow: 'Hyper-Contextual Conversations',
    badge: 'Conversational Intelligence',
    iconName: 'MessageSquare',
    tagline: 'Intelligent conversational AI that handles customer inquiries, support tickets, and sales 24/7.',
    heroDescription:
      'Elevate customer experience with generative conversational agents that deeply understand your entire product knowledge base, take real-time account actions, and resolve complex inquiries in 95+ languages without canned scripts.',
    problem: {
      headline: 'The Customer Service Crisis',
      subheadline: 'Customers expect instant answers, but support infrastructure is breaking at the seams.',
      points: [
        {
          title: 'Frustrating Legacy Chatbots',
          description: 'Clunky decision trees trap users in loops: "I did not understand your question. Did you mean...?"',
        },
        {
          title: 'Astronomical Ticket Costs',
          description: 'Tier-1 support costs between $12 to $25 per human-handled interaction, eating away at operating margins.',
        },
        {
          title: 'Overwhelmed Support Teams',
          description: 'Agents burn out answering the same password reset and shipping status queries hundreds of times daily.',
        },
        {
          title: 'Slow Off-Hours Resolution',
          description: 'Global customers wait hours or days for replies outside standard business time zones, harming CSAT.',
        },
      ],
    },
    solution: {
      headline: 'Zero-Hallucination Enterprise Dialogue',
      description:
        'B4G AI Chatbots connect directly into your documentation, help centers, CRM records, and backend APIs. They converse naturally, provide verified citations, execute complex actions like order cancellations or account upgrades, and know exactly when to loop in a human specialist.',
      capabilities: [
        'Dynamic RAG Knowledge Grounding: Verifies every response against official company documentation.',
        'In-Chat Action Execution: Performs account updates, processes refunds, and books meetings live.',
        'Emotion & Frustration Detection: Detects agitated sentiment and prioritizes urgent escalation.',
        '95+ Language Real-Time Fluency: Answers global customers in their native language effortlessly.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Sync Knowledge & Tool Integrations',
        description: 'Point the chatbot to your Notion, Zendesk, PDF catalogs, databases, and authentication endpoints.',
      },
      {
        step: '02',
        title: 'Define Tone & Policy Guardrails',
        description: 'Configure conversational personality, escalation triggers, refund authority limits, and compliance checks.',
      },
      {
        step: '03',
        title: 'Embed Across All Customer Touchpoints',
        description: 'Deploy via our modern web widget, React SDK, mobile apps, WhatsApp, Slack, or Microsoft Teams.',
      },
      {
        step: '04',
        title: 'Observe & Continuously Refine',
        description: 'Analyze conversation drop-offs, inspect unresolved queries, and auto-generate new help documentation.',
      },
    ],
    features: [
      {
        title: 'Deep API Action Execution',
        description: 'Empower the bot to look up tracking numbers, issue credits, change subscription tiers, and update user settings.',
        tag: 'Actions',
      },
      {
        title: 'Multi-Turn Contextual Memory',
        description: 'Maintains conversational thread coherence across long, nuanced problem-solving dialogues.',
        tag: 'Reasoning',
      },
      {
        title: 'Source Citations & Footnotes',
        description: 'Builds customer trust by linking directly to supporting documentation for every claim made.',
        tag: 'Transparency',
      },
      {
        title: 'Warm Human Handoff',
        description: 'Transfers live chats to human agents with a concise internal AI summary so customers never repeat themselves.',
        tag: 'Collaboration',
      },
      {
        title: 'Proactive Lead Qualification',
        description: 'Identifies high-intent website visitors, asks qualification questions, and schedules sales meetings on the spot.',
        tag: 'Sales',
      },
      {
        title: 'Enterprise Analytics Dashboard',
        description: 'Real-time visibility into top customer friction points, resolution rates, and sentiment trends.',
        tag: 'Insights',
      },
    ],
    whyChoose: [
      {
        title: 'Zero Hallucinations Guarantee',
        description: 'Our dual-stage verification filters block unsupported statements, ensuring 100% policy compliance.',
      },
      {
        title: 'Instant 1-Day Integration',
        description: 'Plug-and-play connectors for Zendesk, Freshdesk, Intercom, Salesforce Service Cloud, and HubSpot.',
      },
      {
        title: 'Native Multilingual Support',
        description: 'No clumsy Google Translate APIs. High-fidelity native nuance across 95+ languages.',
      },
      {
        title: 'Highest Verified CSAT',
        description: 'Consistently scores 4.8+/5 in customer satisfaction by eliminating wait times and solving issues on the spot.',
      },
    ],
    metrics: [
      { value: '82%', label: 'First-Contact Resolution', detail: 'Resolved completely without human agent involvement' },
      { value: '< 1.4s', label: 'Average Response Time', detail: 'Immediate conversational answer generation' },
      { value: '4.85 / 5', label: 'Average Customer CSAT', detail: 'Rated by over 250,000 satisfied enterprise users' },
    ],
    useCases: [
      {
        industry: 'E-Commerce & Retail',
        title: 'Order Status & Return Processing',
        description: 'Handling exchange requests, checking real-time warehouse inventory, and printing return labels automatically.',
      },
      {
        industry: 'SaaS & Technology',
        title: 'Technical Troubleshooting & Docs',
        description: 'Walking developers through API authentication errors and diagnosing code snippets directly in chat.',
      },
      {
        industry: 'Healthcare & Wellness',
        title: 'Patient Intake & Appointment Booking',
        description: 'Collecting intake questionnaires, confirming insurance eligibility, and booking clinic appointments.',
      },
    ],
    mockupData: {
      title: 'Conversational Intelligence Center',
      subtitle: 'Active Live Sessions: 240 | Queue Time: 0s',
      stats: [
        { label: 'Deflection Rate', value: '84.6%' },
        { label: 'CSAT Score', value: '96.8%' },
        { label: 'Escalations', value: '3.2%' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Processed $120 subscription credit for Enterprise client', status: 'Completed' },
        { time: '1m ago', action: 'Resolved multi-turn OAuth token configuration query', status: 'Resolved (CSAT 5/5)' },
        { time: '3m ago', action: 'Warm handoff to Tier 2 Engineer with pre-diagnostic summary', status: 'Handed Off' },
      ],
    },
  },

  'voicebots': {
    id: 'voicebots',
    name: 'Voicebots',
    eyebrow: 'Ultra-Low Latency Voice AI',
    badge: 'Neural Speech Platform',
    iconName: 'Mic',
    tagline: 'Natural voice assistants for inbound and outbound calls that sound human and convert leads.',
    heroDescription:
      'Transform your phone support and outbound campaigns with voice agents that speak with natural inflection, respond in sub-300ms, handle live interruptions effortlessly, and resolve telephony inquiries at scale.',
    problem: {
      headline: 'The Frustration of Traditional Telephony',
      subheadline: 'Endless hold music and robotic IVR menus are driving your customers to competitors.',
      points: [
        {
          title: 'High Inbound Abandonment',
          description: 'Over 60% of callers hang up after waiting on hold for more than 2 minutes in peak queues.',
        },
        {
          title: 'Crushing Call Center Overhead',
          description: 'Hiring, training, and staffing 24/7 call centers costs millions and yields high turnover.',
        },
        {
          title: 'Robotic, Brittle IVR Menus',
          description: '"Press 1 for Sales, Press 2 for Support" fails to capture nuanced caller requests and causes user fury.',
        },
        {
          title: 'Inconsistent Agent Compliance',
          description: 'Human call center agents frequently forget mandatory compliance disclaimers and verification protocols.',
        },
      ],
    },
    solution: {
      headline: 'Human-Parity Telephony Intelligence',
      description:
        'B4G Voicebots combine ultra-fast speech-to-text, cognitive reasoning models, and neural voice synthesis into an end-to-end pipeline running under 300ms latency. Callers experience natural, expressive conversation with real-time barge-in capability.',
      capabilities: [
        'Sub-300ms Total Latency: Zero awkward pauses or latency friction during live phone calls.',
        'Active Interruption Handling (Barge-in): Immediately stops talking when the caller interrupts.',
        'Carrier-Grade SIP Integration: Seamlessly connects to Twilio, Genesys, Avaya, Cisco, and Asterisk.',
        'PCI-DSS Compliant Payment Intake: Securely collect card details over phone lines with zero agent exposure.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Select Voice & Acoustic Persona',
        description: 'Choose from 50+ warm, natural neural voices or clone your brand spokesperson with full inflection control.',
      },
      {
        step: '02',
        title: 'Map Telephony Call Flows',
        description: 'Configure conversational objectives, knowledge sources, qualification scripts, and transfer rules.',
      },
      {
        step: '03',
        title: 'Connect Phone Numbers or SIP Trunks',
        description: 'Route your toll-free numbers or existing PBX lines into the B4G voice gateway in minutes.',
      },
      {
        step: '04',
        title: 'Launch Inbound & Outbound Sprints',
        description: 'Handle thousands of simultaneous calls with real-time recording, transcription, and CRM sync.',
      },
    ],
    features: [
      {
        title: 'Sub-300ms End-to-End Latency',
        description: 'Proprietary streaming architecture eliminates awkward dead air, delivering instantaneous verbal replies.',
        tag: 'Speed',
      },
      {
        title: 'Full Duplex & Barge-In Support',
        description: 'Callers can interject or change topic mid-sentence; the bot listens continuously and pivots fluidly.',
        tag: 'Natural Flow',
      },
      {
        title: 'Voice Biometrics & Verification',
        description: 'Verify returning callers by their acoustic voiceprint for high-security banking and healthcare calls.',
        tag: 'Security',
      },
      {
        title: 'Automated CRM Call Logging',
        description: 'Instantly pushes structured call notes, sentiment scores, and action items directly into Salesforce or HubSpot.',
        tag: 'Sync',
      },
      {
        title: 'Seamless Live Agent Warm Transfer',
        description: 'Transfers high-priority calls to human phone queues with caller intent and account context pre-loaded.',
        tag: 'Escalation',
      },
      {
        title: 'High-Volume Outbound Campaigns',
        description: 'Conduct appointment confirmation, debt reminder, or event RSVP campaigns reaching 10,000+ callers in minutes.',
        tag: 'Outbound',
      },
    ],
    whyChoose: [
      {
        title: 'Indistinguishable From Humans',
        description: 'Features natural breathing cues, emotional modulation, and expressive tonality that keeps callers engaged.',
      },
      {
        title: 'Infinitely Scalable Telephony',
        description: 'Spikes from 10 to 50,000 concurrent calls without a second of hold time or dropped connections.',
      },
      {
        title: 'Full Regulatory Telephony Compliance',
        description: 'Strict adherence to STIR/SHAKEN, TCPA, HIPAA, and recording disclosure requirements.',
      },
      {
        title: '80% Lower Cost per Inbound Minute',
        description: 'Reduces typical call handling costs from $3.50/minute to pennies while boosting resolution satisfaction.',
      },
    ],
    metrics: [
      { value: '< 290ms', label: 'Spoken Response Latency', detail: 'End-to-end speech processing & synthesis' },
      { value: '78%', label: 'Inbound Call Deflection', detail: 'Resolved completely without human transfer' },
      { value: '3.6x', label: 'Outbound Conversion Rate', detail: 'Compared to static SMS or automated voice broadcasts' },
    ],
    useCases: [
      {
        industry: 'Healthcare Clinics',
        title: 'Appointment Scheduling & Reminders',
        description: 'Rescheduling patient visits, verifying insurance details, and answering pre-operative prep questions.',
      },
      {
        industry: 'Insurance & Claims',
        title: 'First Notice of Loss (FNOL)',
        description: 'Collecting accident details, generating claim numbers, and dispatching roadside assistance immediately.',
      },
      {
        industry: 'Financial Services',
        title: 'Card Activation & Balance Inquiries',
        description: 'Verifying caller identity, unlocking frozen debit cards, and explaining recent transaction charges.',
      },
    ],
    mockupData: {
      title: 'Neural Telephony Switchboard',
      subtitle: 'Active Trunks: 64 | Concurrent Calls: 412',
      stats: [
        { label: 'Avg Call Duration', value: '2m 14s' },
        { label: 'Zero-Wait Calls', value: '100%' },
        { label: 'Voice Latency', value: '274ms' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Inbound call: Rescheduled MRI appointment for patient #4891', status: 'Completed' },
        { time: '40s ago', action: 'Outbound campaign: Confirmed 120 delivery appointments', status: 'In Progress' },
        { time: '2m ago', action: 'Transferred escalated billing dispute to Tier 3 Lead with summary', status: 'Transferred' },
      ],
    },
  },

  'ai-marketplace': {
    id: 'ai-marketplace',
    name: 'AI Marketplace',
    eyebrow: 'Curated Enterprise Ecosystem',
    badge: 'Pre-Trained AI Catalog',
    iconName: 'Store',
    tagline: 'Browse and deploy pre-built AI solutions tailored for specific industries and use cases.',
    heroDescription:
      'Skip multi-month machine learning development cycles. Browse our enterprise-grade catalog of 150+ pre-vetted, benchmarked, and production-ready models and workflow bundles tailored for finance, legal, logistics, and healthcare.',
    problem: {
      headline: 'The Staggering Cost of Custom AI R&D',
      subheadline: 'Building specialized enterprise models from scratch is expensive, slow, and risky.',
      points: [
        {
          title: '9-12 Month Development Timelines',
          description: 'Hiring ML engineers, gathering data, training, and red-teaming specialized models delays time-to-market.',
        },
        {
          title: 'Runaway GPU Compute Budgets',
          description: 'Training and hosting proprietary foundational models consumes millions before generating a dollar of value.',
        },
        {
          title: 'Generalized Model Inaccuracy',
          description: 'Standard off-the-shelf LLMs fail at deep domain tasks like medical billing codes or maritime shipping manifests.',
        },
        {
          title: 'Complex Security & Compliance Audits',
          description: 'Procuring open-source weights or obscure vendor models risks enterprise IP leakage and licensing lawsuits.',
        },
      ],
    },
    solution: {
      headline: 'Instant Access to Battle-Tested Models',
      description:
        'B4G AI Marketplace gives your teams instant access to verified, specialized models that have been pre-trained and fine-tuned on hundreds of thousands of domain-specific records. Test in safe sandboxes and deploy into your private cloud with one click.',
      capabilities: [
        '150+ Verified Industry Models: Pre-trained for fintech, legal discovery, medical claims, and supply chain.',
        'Interactive In-Browser Sandboxes: Test performance against your own sample data before deployment.',
        '1-Click Private VPC Deployment: Runs completely isolated inside your AWS, Azure, or GCP tenancy.',
        'Unified Governance & Licensing: Single consolidated invoice with clear commercial IP indemnification.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Discover Industry Solutions',
        description: 'Filter our catalog by industry, input modality (text, audio, vision), latency profile, and compliance needs.',
      },
      {
        step: '02',
        title: 'Evaluate in Safe Sandboxes',
        description: 'Upload anonymized sample data to benchmark accuracy, latency, and token cost side-by-side.',
      },
      {
        step: '03',
        title: 'One-Click Private Deployment',
        description: 'Deploy to your dedicated VPC cluster or access via enterprise API endpoints with guaranteed SLAs.',
      },
      {
        step: '04',
        title: 'Monitor & Fine-Tune',
        description: 'Track endpoint usage, monitor drift, and upload internal feedback to continually fine-tune weights.',
      },
    ],
    features: [
      {
        title: 'Enterprise Benchmarking Metrics',
        description: 'Every solution includes verifiable accuracy scores, F1 ratings, latency distributions, and cost comparisons.',
        tag: 'Verification',
      },
      {
        title: 'Private Cloud Isolation',
        description: 'Zero data retention on public infrastructure. Models deploy directly into your private VPC network.',
        tag: 'Security',
      },
      {
        title: 'Legal IP Indemnification',
        description: 'Full commercial enterprise backing guaranteeing that training datasets contain zero copyrighted or illicit material.',
        tag: 'Legal',
      },
      {
        title: 'Plug-and-Play Workflow Connectors',
        description: 'Pre-built integration templates for Python, Node.js, LangChain, LlamaIndex, Zapier, and enterprise iPaaS.',
        tag: 'Developer',
      },
      {
        title: 'Continuous Model Upgrades',
        description: 'Subscribe to automatic version updates ensuring your applications always benefit from state-of-the-art weights.',
        tag: 'Maintenance',
      },
      {
        title: 'Custom Model Publishing',
        description: 'Package your internal proprietary models to securely distribute across your own global subsidiary units.',
        tag: 'Enterprise',
      },
    ],
    whyChoose: [
      {
        title: '10x Faster Time-to-Market',
        description: 'Go from concept to production-grade deployment in hours instead of quarters.',
      },
      {
        title: 'Rigorous 5-Stage Red Teaming',
        description: 'Every model undergoes strict bias, toxicity, prompt injection, and regulatory compliance screening.',
      },
      {
        title: 'Predictable Consumption Pricing',
        description: 'No surprise GPU server rental bills. Transparent pay-as-you-scale enterprise contracts.',
      },
      {
        title: 'Dedicated Engineering Support',
        description: 'Access our solution architects to customize and fine-tune models to your precise organizational needs.',
      },
    ],
    metrics: [
      { value: '150+', label: 'Pre-Trained Industry Solutions', detail: 'Ready for immediate enterprise deployment' },
      { value: '10x', label: 'Faster Implementation Cycle', detail: 'Slashing development from 9 months to 48 hours' },
      { value: '0%', label: 'Data Retention or Leakage', detail: 'Guaranteed with strict private VPC isolation' },
    ],
    useCases: [
      {
        industry: 'Legal Services',
        title: 'Contract Analysis & M&A Due Diligence',
        description: 'Deploying fine-tuned legal LLMs that redline indemnification clauses and extract non-standard covenants.',
      },
      {
        industry: 'Healthcare & Pharma',
        title: 'Clinical Trial Patient Matching',
        description: 'Analyzing electronic health records against inclusion criteria to accelerate clinical trial recruitment.',
      },
      {
        industry: 'Insurance',
        title: 'Automated Underwriting Assessment',
        description: 'Evaluating property inspection photos and claims histories to generate automated risk scores.',
      },
    ],
    mockupData: {
      title: 'B4G Solution Registry',
      subtitle: 'Catalog: 154 Active Models | Cluster: US-East-1 (Private VPC)',
      stats: [
        { label: 'Deployed Instances', value: '18' },
        { label: 'Daily API Calls', value: '4.2M' },
        { label: 'Model Uptime', value: '99.99%' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Deployed "BioMed-NER-v4" into Healthcare VPC sandbox', status: 'Healthy' },
        { time: '8m ago', action: 'Completed benchmark run: LegalRedline model scored 99.1% F1', status: 'Verified' },
        { time: '24m ago', action: 'Auto-scaled FinBERT Sentiment Cluster to handle market open spike', status: 'Scaled' },
      ],
    },
  },

  'ai-surveillance': {
    id: 'ai-surveillance',
    name: 'AI Surveillance',
    eyebrow: 'Computer Vision & Edge Intelligence',
    badge: 'Real-Time Monitoring',
    iconName: 'Eye',
    tagline: 'Real-time intelligent monitoring with automated incident detection and smart alerting.',
    heroDescription:
      'Transform passive camera networks into active safety guardians. Our neural vision engine monitors workplace safety, detects perimeter breaches, identifies equipment hazards, and dispatches automated alerts in sub-2 seconds.',
    problem: {
      headline: 'The Blind Spots of Passive Monitoring',
      subheadline: 'Human operators cannot physically watch dozens of video feeds simultaneously without missing critical threats.',
      points: [
        {
          title: 'Human Visual Fatigue',
          description: 'Studies show operators miss up to 95% of screen activity after just 20 minutes of continuous monitoring.',
        },
        {
          title: 'Endless False Alarm Noise',
          description: 'Basic legacy motion sensors trigger constantly on wind, rain, insects, and headlights, creating alarm fatigue.',
        },
        {
          title: 'Costly Workplace Safety Violations',
          description: 'Unenforced PPE requirements and forklift collisions cause severe physical injuries and heavy OSHA penalties.',
        },
        {
          title: 'Post-Incident Forensic Lag',
          description: 'Teams spend days manually scrubbing through hours of CCTV footage after a theft or safety breach occurs.',
        },
      ],
    },
    solution: {
      headline: 'Autonomous Real-Time Visual Intelligence',
      description:
        'B4G AI Surveillance connects seamlessly to your existing IP cameras and NVRs without expensive hardware retrofits. Advanced edge and cloud models analyze video streams in real-time, detecting safety violations, unauthorized intrusions, and smoke hazards instantly.',
      capabilities: [
        'Universal RTSP & ONVIF Compatibility: Works with your existing Hikvision, Axis, Dahua, or Hanwha cameras.',
        'Sub-2s Real-Time Smart Alerts: Pushes annotated video clips to security officers via mobile app and SMS.',
        'Zero-False-Alarm Precision Filtering: Distinguishes between humans, vehicles, animals, and background movement.',
        'Automated Privacy Anonymization: Real-time facial and license plate blurring for strict GDPR compliance.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Connect Existing Camera Feeds',
        description: 'Provide RTSP URLs or connect our lightweight on-prem edge gateway to your local security network.',
      },
      {
        step: '02',
        title: 'Configure Detection Zones & Rules',
        description: 'Draw virtual tripwires, establish prohibited zones, and toggle safety rules (hard hat, vest, slip detection).',
      },
      {
        step: '03',
        title: 'Real-Time Edge/Cloud Inference',
        description: 'Visual models process frames locally with sub-second response times, sending only metadata off-premises.',
      },
      {
        step: '04',
        title: 'Instant Incident Dispatch & Audit',
        description: 'Security leads receive push notifications with 5-second video clips, location tags, and response checklists.',
      },
    ],
    features: [
      {
        title: 'Industrial PPE & Safety Enforcement',
        description: 'Detect missing hard hats, reflective vests, protective eyewear, and safety harnesses in construction and industrial sites.',
        tag: 'Safety (EHS)',
      },
      {
        title: 'Virtual Tripwires & Perimeter Defense',
        description: 'Accurate boundary surveillance detecting humans crossing fences after hours with zero false alarms from wildlife.',
        tag: 'Perimeter',
      },
      {
        title: 'Slip, Fall & Medical Distress Detection',
        description: 'Instantly identifies fallen workers in remote warehouses or hazardous zones and sounds emergency alarms.',
        tag: 'Emergency',
      },
      {
        title: 'Early Smoke & Thermal Anomaly Detection',
        description: 'Detects visible smoke plumes and rapid heat accumulation minutes before conventional sprinkler heads activate.',
        tag: 'Hazard',
      },
      {
        title: 'Vehicle & Forklift Traffic Analytics',
        description: 'Monitors blind-spot pedestrian crossings, speeding forklifts, and unauthorized parking in loading bays.',
        tag: 'Logistics',
      },
      {
        title: 'Natural Language Video Search',
        description: 'Search months of historical footage using natural queries like "Find red forklift near Dock 4 yesterday afternoon".',
        tag: 'Forensics',
      },
    ],
    whyChoose: [
      {
        title: 'Zero Hardware Replacement',
        description: 'Leverage 100% of your existing camera infrastructure—no costly rewiring or new proprietary sensors needed.',
      },
      {
        title: '94% Drop in False Alarms',
        description: 'Eliminate alarm fatigue with neural object classification that ignores wind, shadows, rain, and headlights.',
      },
      {
        title: 'Edge-First Bandwidth Efficiency',
        description: 'Processes video locally on edge servers; only lightweight event metadata and incident clips use network bandwidth.',
      },
      {
        title: 'GDPR & Privacy-By-Design',
        description: 'Complies with employee privacy laws via real-time automatic facial and license plate obfuscation.',
      },
    ],
    metrics: [
      { value: '< 1.8s', label: 'Incident Detection to Alert', detail: 'Instant push notifications to security radios and phones' },
      { value: '94%', label: 'Reduction in False Alarms', detail: 'Drastic drop compared to conventional motion detectors' },
      { value: '99.4%', label: 'Safety Compliance Accuracy', detail: 'Verified across heavy industrial and manufacturing sites' },
    ],
    useCases: [
      {
        industry: 'Construction & Industrial',
        title: 'Active Jobsite Safety Enforcement',
        description: 'Preventing catastrophic falls and ensuring 100% PPE adherence around active machinery and scaffolding.',
      },
      {
        industry: 'Warehousing & Logistics',
        title: 'Loading Bay & Forklift Traffic Safety',
        description: 'Enforcing pedestrian clear zones and preventing multi-ton forklift collisions in busy distribution hubs.',
      },
      {
        industry: 'Commercial Real Estate',
        title: 'After-Hours Perimeter Security',
        description: 'Protecting corporate campuses, parking structures, and rooftop infrastructure from unauthorized intruders.',
      },
    ],
    mockupData: {
      title: 'Vision AI Operations Center',
      subtitle: 'Active Feeds: 128 | Threat Level: Low | System Status: Active',
      stats: [
        { label: 'Feeds Analyzed', value: '128' },
        { label: 'PPE Compliance', value: '98.9%' },
        { label: 'Alert Latency', value: '1.4s' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Zone 4 Warehouse: Missing hard hat detected on worker', status: 'Alert Sent' },
        { time: '6m ago', action: 'Perimeter North: Human detected near fence line (After Hours)', status: 'Security Dispatched' },
        { time: '18m ago', action: 'Dock B: Forklift speeding violation recorded (18 km/h)', status: 'Logged' },
      ],
    },
  },

  'invoice-processing': {
    id: 'invoice-processing',
    name: 'Invoice Processing',
    eyebrow: 'Cognitive Accounts Payable',
    badge: 'Document Intelligence',
    iconName: 'Receipt',
    tagline: 'Automate invoice handling, data extraction, validation, and payment processing workflows.',
    heroDescription:
      'Eliminate manual data entry from your Accounts Payable cycle. Our multimodal vision-language engine extracts line items, validates tax calculations, performs 3-way PO matching, and syncs directly into your ERP in under 5 seconds.',
    problem: {
      headline: 'The Hidden Cost of Manual Accounts Payable',
      subheadline: 'Manual keying of invoice data is slow, error-prone, and burns hundreds of staff hours.',
      points: [
        {
          title: '3-5% Error Rate in Manual Entry',
          description: 'Typing invoice numbers, line items, and tax amounts into ERPs leads to overpayments and ledger reconciliation nightmares.',
        },
        {
          title: 'Weeks-Long Approval Lag',
          description: 'Paper and email invoices sit in approver inboxes, causing lost early-payment vendor discounts and late fee penalties.',
        },
        {
          title: 'Brittle OCR Templates',
          description: 'Legacy OCR software requires tedious custom coordinate templates for every single supplier layout.',
        },
        {
          title: 'Duplicate Payment Vulnerability',
          description: 'Invoices submitted multiple times across departments slip through manual review, bleeding corporate cash.',
        },
      ],
    },
    solution: {
      headline: 'Zero-Template Cognitive Document Extraction',
      description:
        'B4G Invoice Processing uses multimodal transformer models that read invoices like a human accountant. It understands messy scans, multiple currencies, hand-annotated receipts, and international tax tables without requiring any pre-configured templates.',
      capabilities: [
        'Zero-Template Extraction: Reads invoices from any supplier worldwide with zero upfront layout training.',
        'Automated 3-Way Matching: Verifies invoice line items against original purchase orders and warehouse receipts.',
        'Fraud & Duplicate Detection: Flags anomalous vendor bank details, altered totals, and duplicate submissions.',
        'Native ERP Integration: Pushes validated vouchers into SAP, Oracle NetSuite, Dynamics, and QuickBooks.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Universal Ingestion',
        description: 'Invoices flow in automatically from AP inbox monitoring, vendor portal uploads, or batch PDF scans.',
      },
      {
        step: '02',
        title: 'Cognitive Extraction & Validation',
        description: 'AI extracts header data, line items, tax IDs, and verifies mathematical totals with 99.2% accuracy.',
      },
      {
        step: '03',
        title: 'Automated 3-Way Matching',
        description: 'Matches quantities and unit costs against your ERP purchase orders and receiving receipts instantly.',
      },
      {
        step: '04',
        title: 'ERP Sync & Payment Scheduling',
        description: 'Approved invoices are coded to GL accounts and scheduled for payment to maximize early-pay discounts.',
      },
    ],
    features: [
      {
        title: 'Complex Multi-Line Item Extraction',
        description: 'Accurately parses 100+ line items across multi-page invoices with SKU codes, unit descriptions, and discounts.',
        tag: 'Extraction',
      },
      {
        title: '2-Way & 3-Way PO Matching',
        description: 'Auto-reconciles invoice totals against original purchase order numbers and warehouse receipt quantities.',
        tag: 'Reconciliation',
      },
      {
        title: 'GL Code Prediction & Allocation',
        description: 'Machine learning predicts appropriate general ledger expense codes based on historical company accounting patterns.',
        tag: 'Accounting',
      },
      {
        title: 'Vendor Bank Account Fraud Shield',
        description: 'Detects unauthorized changes to vendor payment details before funds are dispatched, preventing wire fraud.',
        tag: 'Security',
      },
      {
        title: 'Multi-Currency & VAT Compliance',
        description: 'Handles 120+ global currencies and calculates complex cross-border VAT, GST, and sales tax rules.',
        tag: 'Global',
      },
      {
        title: 'Exception & Discrepancy Queue',
        description: 'Only surfaces invoices with price mismatches or missing POs for quick human review with highlighted diffs.',
        tag: 'Workflow',
      },
    ],
    whyChoose: [
      {
        title: 'Zero Template Setup Time',
        description: 'Works out of the box with your 5,000th vendor just as accurately as your 1st. No manual bounding boxes.',
      },
      {
        title: 'Sub-5-Second Processing Speed',
        description: 'Cut end-to-end invoice turnaround time from 14 days down to 4.2 seconds.',
      },
      {
        title: 'Certified ERP Integrations',
        description: 'Seamless two-way synchronization with SAP S/4HANA, NetSuite, Microsoft Dynamics 365, and Workday.',
      },
      {
        title: '85% Operating Cost Reduction',
        description: 'Slash processing costs from $15.00+ per manual invoice to under $0.75 per touchless document.',
      },
    ],
    metrics: [
      { value: '99.2%', label: 'Line-Item Extraction Accuracy', detail: 'Verified across multi-page scanned & digital invoices' },
      { value: '< 4.2s', label: 'Average Processing Speed', detail: 'From email ingestion to ERP voucher posting' },
      { value: '82%', label: 'Touchless Straight-Through Rate', detail: 'Approved and posted with zero human intervention' },
    ],
    useCases: [
      {
        industry: 'Manufacturing & Distribution',
        title: 'High-Volume Supplier AP Automation',
        description: 'Processing tens of thousands of complex multi-line raw material bills against warehouse packing slips.',
      },
      {
        industry: 'Hospitality & Retail',
        title: 'Store-Level Receipt & Invoice Ingestion',
        description: 'Capturing distributed branch expenses, utility bills, and food supply deliveries into unified headquarters accounting.',
      },
      {
        industry: 'Professional Services',
        title: 'Contractor & Vendor Invoice Auditing',
        description: 'Matching subcontractor hours and expense line items against statement of work project budgets.',
      },
    ],
    mockupData: {
      title: 'Cognitive AP Processing Pipeline',
      subtitle: 'Today: 840 Invoices Processed | Straight-Through Rate: 84.2%',
      stats: [
        { label: 'Pending Review', value: '4' },
        { label: 'Auto-Approved', value: '836' },
        { label: 'Savings This Month', value: '$42,800' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Invoice #INV-9821: 3-way match verified with PO-4412 ($24,500.00)', status: 'Approved' },
        { time: '1m ago', action: 'Invoice #AC-102: Missing PO number flagged for AP clerk review', status: 'In Review' },
        { time: '3m ago', action: 'Synced 48 approved vouchers to NetSuite GL batch #4812', status: 'Synced' },
      ],
    },
  },

  'software-aggregator': {
    id: 'software-aggregator',
    name: 'Software Aggregator',
    eyebrow: 'Unified SaaS Governance & Optimization',
    badge: 'SaaS License Intelligence',
    iconName: 'LayoutGrid',
    tagline: 'Unified dashboard to manage all your SaaS tools, licenses, and subscriptions in one place.',
    heroDescription:
      'Gain total visibility and control over your enterprise software sprawl. Detect hidden shadow IT, eliminate unused license seats, automate contract renewal alerts, and reclaim up to 30% of your annual software budget.',
    problem: {
      headline: 'The Rampant Chaos of SaaS Sprawl',
      subheadline: 'Organizations are bleeding cash on forgotten, underutilized, and unmonitored software subscriptions.',
      points: [
        {
          title: '30% Waste in Unused Licenses',
          description: 'Companies pay thousands monthly for seats assigned to former employees or workers who have not logged in for months.',
        },
        {
          title: 'Proliferation of Shadow IT',
          description: 'Employees expense unauthorized AI and SaaS tools, creating severe security vulnerabilities and compliance gaps.',
        },
        {
          title: 'Auto-Renewal Traps',
          description: 'SaaS vendors slip automatic multi-year renewals through with punitive cancellation notification windows.',
        },
        {
          title: 'Redundant Tool Overlap',
          description: 'Different departments simultaneously subscribe to Asana, Monday, and ClickUp without IT centralization.',
        },
      ],
    },
    solution: {
      headline: 'Continuous Autonomous SaaS Governance',
      description:
        'B4G Software Aggregator integrates with your Identity Providers (Okta, Azure AD, Google Workspace), expense platforms, and contract archives. It establishes a real-time single source of truth for every tool, tracking active user engagement and automatically reclaiming idle licenses.',
      capabilities: [
        'Automated Shadow IT Discovery: Scans expense feeds and browser sign-ins to map all active software.',
        'Real-Time Utilization Tracking: Measures actual usage depth—not just whether a user is assigned an account.',
        'Autonomous License Reclaiming: Automatically deprovisions licenses for users inactive for 30+ days.',
        'AI Contract Negotiation Intelligence: Compares your pricing benchmarks against anonymized peer rates.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Connect Identity & Expense Feeds',
        description: 'One-click integrations for Okta, Google Workspace, Microsoft 365, Brex, Ramp, and corporate credit cards.',
      },
      {
        step: '02',
        title: 'Instant Discovery & Categorization',
        description: 'AI categorizes your software ecosystem, flags duplicate apps, and calculates overall utilization rates.',
      },
      {
        step: '03',
        title: 'Activate Automated Reclaim Policies',
        description: 'Set rules to automatically reallocate or cancel seats when team members leave or stop utilizing tools.',
      },
      {
        step: '04',
        title: 'Proactive Renewal Negotiations',
        description: 'Receive alerts 90 days before contract renewals with AI-generated market rate benchmarking insights.',
      },
    ],
    features: [
      {
        title: 'Complete Shadow IT Audit',
        description: 'Surfaces unsanctioned applications and third-party OAuth access tokens that put corporate data at risk.',
        tag: 'Security',
      },
      {
        title: 'Granular Activity Observability',
        description: 'Differentiates between a user who opens an app once versus daily active workflows to detect true utility.',
        tag: 'Analytics',
      },
      {
        title: 'Automated Offboarding Deprovisioning',
        description: 'Instantly revokes access across 100+ platforms when an employee departs, closing security backdoors.',
        tag: 'Compliance',
      },
      {
        title: 'Contract & Renewal Calendar',
        description: 'Centralizes all master service agreements, renewal deadlines, and notice windows with custom alerts.',
        tag: 'Contracts',
      },
      {
        title: 'Redundant Tool Consolidation',
        description: 'Identifies feature overlaps across teams (e.g. 3 different video recording tools) to standardize software.',
        tag: 'Savings',
      },
      {
        title: 'App Store for Internal Employees',
        description: 'Provides a self-serve portal where team members can request pre-approved software with manager sign-off.',
        tag: 'Productivity',
      },
    ],
    whyChoose: [
      {
        title: 'Instant ROI Within 14 Days',
        description: 'Most enterprises recover 5x to 10x the cost of our platform within the first two weeks of license discovery.',
      },
      {
        title: 'Agentless Zero-Friction Setup',
        description: 'No local software agents to install on employee laptops. Pure API-driven discovery via SSO and expense tools.',
      },
      {
        title: 'Data-Backed Vendor Negotiation Leverage',
        description: 'Arm your procurement team with real-world benchmark pricing data so you never overpay for SaaS renewals.',
      },
      {
        title: 'SOC2 & ISO 27001 Access Compliance',
        description: 'Automates quarterly access review evidence generation, saving IT leads dozens of audit preparation hours.',
      },
    ],
    metrics: [
      { value: '$184k', label: 'Average Annual Cost Savings', detail: 'Reclaimed licenses and eliminated duplicate tools' },
      { value: '100%', label: 'Shadow IT Visibility', detail: 'Instant detection of unauthorized employee cloud apps' },
      { value: '31%', label: 'Average Seat Reclaim Rate', detail: 'Idle licenses identified and de-allocated automatically' },
    ],
    useCases: [
      {
        industry: 'Rapidly Growing Scale-Ups',
        title: 'Onboarding & Offboarding Sprawl Control',
        description: 'Preventing runaway SaaS billing as headcount expands and ensuring departed employees lose all access immediately.',
      },
      {
        industry: 'Enterprise IT & FinOps',
        title: 'Annual Budget Rationalization',
        description: 'Consolidating multiple project management and video conferencing vendors into enterprise master agreements.',
      },
      {
        industry: 'Security & Compliance',
        title: 'Third-Party Risk & SOC2 Access Reviews',
        description: 'Tracking which cloud services have access to customer data and automating user entitlement certifications.',
      },
    ],
    mockupData: {
      title: 'SaaS License Optimization Hub',
      subtitle: 'Tracked Apps: 142 | Total Annual Spend: $1.84M | Health: Strong',
      stats: [
        { label: 'Unused Seats', value: '318' },
        { label: 'Immediate Savings', value: '$46,200/yr' },
        { label: 'Renewals in 60d', value: '8' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Reclaimed 42 idle Figma Enterprise seats (no login in 45 days)', status: 'Reclaimed' },
        { time: '12m ago', action: 'Flagged unauthorized generative AI app expensed by marketing team', status: 'Flagged' },
        { time: '1h ago', action: 'Renewal notice: Salesforce contract up in 75 days (AI benchmark ready)', status: 'Alert Sent' },
      ],
    },
  },

  'intelligent-sourcing': {
    id: 'intelligent-sourcing',
    name: 'Intelligent Sourcing',
    eyebrow: 'Autonomous Procurement Intelligence',
    badge: 'Strategic Sourcing Platform',
    iconName: 'Handshake',
    tagline: 'AI-powered procurement platform that finds the best vendors and negotiates.',
    heroDescription:
      'Transform traditional procurement from a slow, adversarial cost center into an agile strategic advantage. Our autonomous sourcing engine evaluates global supplier capacity, generates detailed RFPs from natural language, and negotiates optimal pricing.',
    problem: {
      headline: 'The Inefficiencies of Manual Procurement',
      subheadline: 'Sourcing cycles take months, relying on static spreadsheets and manual phone calls.',
      points: [
        {
          title: '8-12 Week RFP Cycles',
          description: 'Writing technical specifications, vetting vendors, and collecting quotes delays critical business projects.',
        },
        {
          title: 'Lack of True Market Price Transparency',
          description: 'Procurement teams have no visibility into what peer companies pay, leading to 15-25% overpayment.',
        },
        {
          title: 'Fragile Single-Source Dependencies',
          description: 'Relying on legacy vendors without real-time financial health monitoring risks severe supply disruptions.',
        },
        {
          title: 'Fragmented Vendor Negotiations',
          description: 'Contract redlines, SLA adjustments, and payment terms stall in long email chains between suppliers and legal.',
        },
      ],
    },
    solution: {
      headline: 'Autonomous Global Sourcing & Market Intelligence',
      description:
        'B4G Intelligent Sourcing indexes global supplier networks, pricing indices, and shipping capacity in real time. Input your project requirements in plain language: our engine generates comprehensive RFPs, matches optimal vendors, and runs automated negotiation loops to lock in best terms.',
      capabilities: [
        'Instant AI-Generated RFPs: Converts project briefs into professional, comprehensive RFPs and SOWs in seconds.',
        'Verified Supplier Risk Scoring: Evaluates vendor financial stability, ESG compliance, and historical delivery reliability.',
        'Autonomous Multi-Bid Matrix: Normalizes competing quotes across price, warranty, delivery timeline, and quality.',
        'AI-Assisted Contract Redlining: Compares vendor contract clauses against your corporate legal playbook.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Describe Sourcing Requirement',
        description: 'Provide your project needs, budget constraints, technical specs, and required delivery timeline in natural text.',
      },
      {
        step: '02',
        title: 'Automated RFP Generation & Dispatch',
        description: 'The platform drafts structured tender packages and invites verified, high-matching global suppliers.',
      },
      {
        step: '03',
        title: 'Bid Normalization & Comparison',
        description: 'AI extracts incoming proposals into an objective comparison matrix evaluating total cost of ownership (TCO).',
      },
      {
        step: '04',
        title: 'Autonomous Negotiation & Award',
        description: 'Engine runs iterative counter-offer rounds based on target pricing thresholds and drafts the final contract.',
      },
    ],
    features: [
      {
        title: 'Global Verified Supplier Database',
        description: 'Access 45,000+ pre-vetted direct and indirect suppliers with validated factory capacity and certifications.',
        tag: 'Network',
      },
      {
        title: 'Dynamic Market Price Indexing',
        description: 'Real-time commodity, freight, and service market benchmarks show you exactly where supplier bids stand.',
        tag: 'Pricing',
      },
      {
        title: 'Autonomous Counter-Offer Engine',
        description: 'Generates data-backed negotiation letters that push suppliers on volume discounts and extended payment terms.',
        tag: 'Negotiation',
      },
      {
        title: 'ESG & Sustainability Tracking',
        description: 'Filters and scores vendors based on carbon footprint, ethical labor practices, and regulatory diversity targets.',
        tag: 'Compliance',
      },
      {
        title: 'Predictive Supply Chain Alerts',
        description: 'Monitors geopolitical, port congestion, and financial distress signals to warn of supplier risks weeks in advance.',
        tag: 'Risk',
      },
      {
        title: 'ERP & Purchase Order Auto-Creation',
        description: 'Instantly converts awarded contracts into approved vendor master records and PO requisitions in SAP or Coupa.',
        tag: 'Automation',
      },
    ],
    whyChoose: [
      {
        title: '85% Faster Sourcing Velocity',
        description: 'Collapse standard 2-month sourcing cycles down to under 48 hours from brief to awarded contract.',
      },
      {
        title: 'Average 18.4% Hard Cost Savings',
        description: 'Uncover competitive market alternatives and data-backed negotiation leverage on every procurement event.',
      },
      {
        title: 'Zero Supplier Collusion Risk',
        description: 'Clean, auditable, blind tender workflows that eliminate favoritism and ensure complete organizational compliance.',
      },
      {
        title: 'Direct Strategic Spend Visibility',
        description: 'Executive dashboards showing upcoming renewals, category spend distribution, and realized savings.',
      },
    ],
    metrics: [
      { value: '18.4%', label: 'Average Cost Savings', detail: 'Achieved through competitive multi-bid AI negotiation' },
      { value: '48 hrs', label: 'Average Time to Award', detail: 'From natural language brief to completed vendor RFP' },
      { value: '45k+', label: 'Pre-Vetted Global Suppliers', detail: 'Across direct manufacturing, hardware, logistics, and IT' },
    ],
    useCases: [
      {
        industry: 'Hardware & Manufacturing',
        title: 'Component Sourcing & Precision Machining',
        description: 'Sourcing custom CNC parts, PCBAs, and packaging materials across certified tier-1 global suppliers.',
      },
      {
        industry: 'Enterprise IT & Telecommunications',
        title: 'Hardware Infrastructure & Cloud Contracts',
        description: 'Benchmarking enterprise server rack procurement and negotiating fiber-optic carrier contracts.',
      },
      {
        industry: 'Construction & Real Estate',
        title: 'Subcontractor Tendering & Materials',
        description: 'Running competitive bidding events for electrical, HVAC, and steel fabrication for commercial developments.',
      },
    ],
    mockupData: {
      title: 'Autonomous Sourcing Command Center',
      subtitle: 'Active Tenders: 8 | Live Supplier Bids: 34 | Target Savings: 19.2%',
      stats: [
        { label: 'Avg Cycle Time', value: '42 hrs' },
        { label: 'Realized Savings', value: '$312,000' },
        { label: 'Suppliers Vetted', value: '100%' },
      ],
      activityLog: [
        { time: 'Just now', action: 'RFP #704: Supplier Apex Precision matched counter-offer (-14.2% unit cost)', status: 'Negotiated' },
        { time: '20m ago', action: 'Dispatched automated tender for Cloud Infrastructure to 6 verified vendors', status: 'Dispatched' },
        { time: '1h ago', action: 'Awarded logistics freight contract with 30-day extended payment terms', status: 'Contract Ready' },
      ],
    },
  },
};
