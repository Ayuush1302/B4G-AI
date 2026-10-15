export interface PartnerTier {
  tierName: string;
  qualification: string;
  benefits: string;
  margin: string;
}

export interface PartnerPillar {
  title: string;
  description: string;
}

export interface PartnerProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PartnerProgramDetail {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  eyebrow: string;
  heroDescription: string;
  badge: string;
  iconName: string;
  selectValue: string;
  overview: {
    headline: string;
    description: string;
    highlights: string[];
  };
  howItSolves: {
    problemHeadline: string;
    problemDescription: string;
    solutionHeadline: string;
    solutionDescription: string;
    pillars: PartnerPillar[];
  };
  whyChoose: Array<{ title: string; description: string }>;
  economics: {
    headline: string;
    subheadline: string;
    metrics: Array<{ value: string; label: string; detail: string }>;
    tiers: PartnerTier[];
  };
  processSteps: PartnerProcessStep[];
  whoItIsFor: Array<{ persona: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const partnerProgramsData: Record<string, PartnerProgramDetail> = {
  'white-label': {
    id: 'white-label',
    name: 'White Label Partners',
    shortName: 'White Label',
    tagline: 'Deliver Enterprise AI Under Your Own Brand, Domain, and Pricing',
    eyebrow: 'Turnkey Agency & MSP Platform',
    heroDescription:
      'Rebrand the entire B4G AI autonomous agent suite, voicebot infrastructure, and workflow studio under your custom logo, domain, and styling. Deliver state-of-the-art enterprise artificial intelligence while maintaining 100% client ownership and healthy recurring margins.',
    badge: '100% Unbranded Infrastructure',
    iconName: 'Palette',
    selectValue: 'White Label Partners',
    overview: {
      headline: 'Instant AI Agency Capabilities Without Years of R&D Overhead',
      description:
        'Building sovereign conversational agents, low-latency voice models, and autonomous business workflows requires millions in GPU compute and deep ML engineering talent. B4G White Label gives you an instant, battle-tested AI portfolio ready to be packaged and sold to your existing client roster.',
      highlights: [
        'Custom domain with automated SSL provisioning (ai.youragency.com)',
        'Full brand styling: hex codes, custom CSS, client-facing logos, and bespoke email templates',
        'Isolated multi-tenant or single-tenant sub-accounts for client data segregation',
        'Stripe billing integration to automate client invoicing with custom retail pricing tiers',
      ],
    },
    howItSolves: {
      problemHeadline: 'The Margin Trap of In-House AI Development',
      problemDescription:
        'Agencies and IT consultancies lose clients to AI native competitors because building multi-agent systems, SIP voice trunking, and fine-tuned LLM pipelines from scratch takes 12-18 months and burns $500k+ before the first client demo.',
      solutionHeadline: 'A Production-Ready AI Engine Ready for Immediate Deployment',
      solutionDescription:
        'B4G White Label provides a completely invisible foundation. You get access to the complete Agent Studio, Voicebot PBX, Surveillance Analytics, and Document OCR engines wrapped in your own brand identity within 48 hours.',
      pillars: [
        {
          title: 'Total Brand Discretion',
          description:
            'Zero B4G mentions in code, URLs, API responses, client portals, email disclaimers, or system documentation.',
        },
        {
          title: 'Flexible Wholesale Pricing',
          description:
            'Pay fixed wholesale wholesale rates while you set retail markups. Retain 60% to 85% gross margins on recurring ARR.',
        },
        {
          title: 'Multi-Tenant Client Hub',
          description:
            'Provision sub-accounts in seconds with role-based permissions, usage quotas, and custom client dashboards.',
        },
        {
          title: 'Continuous Engine Upgrades',
          description:
            'Benefit from automated LLM foundation model upgrades, latency optimizations, and zero-day patches without lifting a finger.',
        },
      ],
    },
    whyChoose: [
      {
        title: 'Zero Development Risk',
        description: 'Launch an enterprise AI service line in 48 hours instead of spending quarters building an unstable MVP.',
      },
      {
        title: 'Complete Client Retainer Ownership',
        description: 'You bill your clients directly. All client relationships, contracts, and IP rights remain strictly yours.',
      },
      {
        title: 'Dedicated Partner Success Architect',
        description: 'Direct Slack channel with senior B4G AI engineers to review client scopes and co-architect complex deployments.',
      },
      {
        title: 'White-Label Marketing & Pitch Vault',
        description: 'Access editable pitch decks, client proposals, ROI calculators, and case studies ready for your brand logo.',
      },
    ],
    economics: {
      headline: 'Predictable Wholesale Economics with High Gross Margins',
      subheadline: 'Structure retainers, per-seat licenses, or usage markups to maximize client lifetime value.',
      metrics: [
        { value: '72%', label: 'Average Agency Margin', detail: 'Gross profit retained on retail client pricing' },
        { value: '48h', label: 'Time to First Launch', detail: 'From approval to branded portal DNS activation' },
        { value: '$18k', label: 'Average Client ARR', detail: 'Typical annual revenue per enterprise agency client' },
      ],
      tiers: [
        {
          tierName: 'Silver Agency',
          qualification: '1-5 Active Client Accounts',
          benefits: 'Branded portal, custom domain, shared GPU cluster, standard support',
          margin: '55% Gross Margin',
        },
        {
          tierName: 'Gold Partner',
          qualification: '6-20 Active Client Accounts',
          benefits: 'Priority compute queues, custom SMTP/SMS gateways, dedicated partner architect',
          margin: '70% Gross Margin',
        },
        {
          tierName: 'Platinum Elite',
          qualification: '21+ Active Accounts / Enterprise MSP',
          benefits: 'Dedicated VPC isolation, custom fine-tuning pipeline, custom contract SLA',
          margin: '82% Gross Margin',
        },
      ],
    },
    processSteps: [
      {
        step: '01',
        title: 'Submit Partner Application',
        description: 'Complete our qualification form detailing your agency size, client profile, and target use cases.',
      },
      {
        step: '02',
        title: 'Portal White-Labeling & DNS Setup',
        description: 'Configure your custom domain, upload brand assets, and customize client onboarding sequences.',
      },
      {
        step: '03',
        title: 'Sales Enablement & Sandboxing',
        description: 'Test sandbox environments, review unbranded pitch decks, and train your delivery team with our architects.',
      },
      {
        step: '04',
        title: 'Deploy to Clients & Scale ARR',
        description: 'Provision client sub-tenants, configure retail billing, and expand recurring retainer revenue.',
      },
    ],
    whoItIsFor: [
      { persona: 'Digital & Growth Agencies', description: 'Looking to offer AI chatbots, automated content engines, and customer support bots.' },
      { persona: 'Managed Service Providers (MSPs)', description: 'Seeking high-margin recurring software add-ons for enterprise IT contracts.' },
      { persona: 'B2B Marketing & Sales Consultancies', description: 'Empowering clients with autonomous inbound voice qualification and outbound agents.' },
      { persona: 'SaaS Platforms', description: 'Embedding custom AI agent capabilities without distracting from core product roadmaps.' },
    ],
    faqs: [
      {
        question: 'Will my clients ever see the B4G AI brand name?',
        answer: 'Never. All subdomains, dashboard titles, favicon, system emails, API endpoints, and platform metadata are stripped of B4G identifiers and mapped to your brand.',
      },
      {
        question: 'How does client billing work?',
        answer: 'You have full autonomy. You can bill clients directly via your existing invoicing or connect your Stripe account through our integrated billing module.',
      },
      {
        question: 'Can we build custom integrations for our clients?',
        answer: 'Yes. You receive full API and webhook access to integrate client systems into HubSpot, Salesforce, custom SQL databases, and internal software.',
      },
    ],
  },

  implementation: {
    id: 'implementation',
    name: 'Implementation Partners',
    shortName: 'Implementation',
    tagline: 'Deploy, Integrate, and Customize B4G AI for Global Enterprises',
    eyebrow: 'Certified Systems Integration Network',
    heroDescription:
      'Join our certified ecosystem of technology consultants, system integrators, and software engineering firms. Deliver high-value advisory, custom architectural integration, and ongoing managed AI operations to Fortune 2000 enterprises.',
    badge: 'Certified Deployment Network',
    iconName: 'Wrench',
    selectValue: 'Implementation Partners',
    overview: {
      headline: 'Capture High-Value Enterprise Professional Services Revenue',
      description:
        'Large enterprises require specialized integration to connect autonomous AI agents with ERPs like SAP and Oracle, legacy databases, on-premises security controls, and complex compliance frameworks. As an Implementation Partner, you deliver the services while B4G provides the underlying platform.',
      highlights: [
        'Direct deal routing: Receive qualified enterprise implementation leads from B4G direct sales',
        'Official B4G Certified Architect & Deployment Specialist credentials and digital badges',
        '15% to 25% recurring software referral commissions on closed license contracts',
        'Tier-3 priority engineering support with direct escalation channels to core researchers',
      ],
    },
    howItSolves: {
      problemHeadline: 'The Last-Mile Enterprise Integration Barrier',
      problemDescription:
        'Enterprises are eager to deploy generative AI and autonomous workflows, but internal IT teams lack bandwidth and specialized expertise to integrate AI safely with legacy enterprise architectures.',
      solutionHeadline: 'A Certified Delivery Framework that Minimizes Risk',
      solutionDescription:
        'We arm your technical teams with reference architectures, pre-built API adapters, integration runbooks, and automated testing harnesses so your team can deliver projects on time and under budget.',
      pillars: [
        {
          title: 'Comprehensive Certification',
          description: 'Hands-on technical bootcamps covering agent orchestration, RAG pipelines, voice latency, and security.',
        },
        {
          title: 'Qualified Lead Distribution',
          description: 'We pass enterprise clients needing bespoke implementation directly to certified partners in their geography.',
        },
        {
          title: 'Co-Delivery & Architecture Review',
          description: 'B4G solution architects join your project kickoffs and conduct architectural reviews before production go-live.',
        },
        {
          title: 'High-Margin Retained Services',
          description: 'Keep 100% of your billable professional service hours, integration fees, and ongoing maintenance retainers.',
        },
      ],
    },
    whyChoose: [
      {
        title: 'Guaranteed Professional Services Revenue',
        description: 'Typical enterprise deployment projects range from $30,000 to $250,000+ in billable implementation fees.',
      },
      {
        title: 'Recurring License Commissions',
        description: 'Earn ongoing ARR commissions on every platform license your team deploys and maintains.',
      },
      {
        title: 'Enterprise Co-Selling',
        description: 'Jointly pitch Fortune 2000 prospects with B4G executive sponsorship and specialized demo environments.',
      },
      {
        title: 'Developer Sandbox & Testing Harnesses',
        description: 'Unlimited development instances and API tokens for staging, integration testing, and team training.',
      },
    ],
    economics: {
      headline: 'Expand Billable Services and Recurring Software Margins',
      subheadline: 'Combine lucrative implementation advisory with annual recurring software commissions.',
      metrics: [
        { value: '$85k', label: 'Avg Implementation Project', detail: 'Typical professional services fee per enterprise engagement' },
        { value: '20%', label: 'Recurring Software Share', detail: 'Annual license commission paid to certified implementation partners' },
        { value: '100%', label: 'Retained Service Margin', detail: 'All billable hours and change orders retained by the partner' },
      ],
      tiers: [
        {
          tierName: 'Certified Specialist',
          qualification: '2 Certified Engineers, 1 Successful Deployment',
          benefits: 'Partner directory listing, sandbox access, standard lead sharing',
          margin: '15% Software Commission + 100% Services',
        },
        {
          tierName: 'Premier Integrator',
          qualification: '5 Certified Engineers, 5+ Successful Deployments',
          benefits: 'Preferred regional lead routing, joint marketing webinars, dedicated architect',
          margin: '20% Software Commission + 100% Services',
        },
        {
          tierName: 'Global Strategic Integrator',
          qualification: '10+ Certified Engineers, Multi-Region Footprint',
          benefits: 'Executive steering committee, custom roadmap input, co-branded PR',
          margin: '25% Software Commission + 100% Services',
        },
      ],
    },
    processSteps: [
      {
        step: '01',
        title: 'Apply & Qualification Review',
        description: 'Submit your firm credentials, vertical experience, and target technical capabilities.',
      },
      {
        step: '02',
        title: 'Technical Certification Track',
        description: 'Complete the B4G Certified Architect curriculum and pass hands-on integration labs.',
      },
      {
        step: '03',
        title: 'Joint Account Mapping',
        description: 'Meet with our enterprise sales team to map shared accounts and activate lead distribution.',
      },
      {
        step: '04',
        title: 'Deliver & Scale Services',
        description: 'Deploy customer projects with B4G architect backing and earn both project and recurring revenues.',
      },
    ],
    whoItIsFor: [
      { persona: 'IT Consulting & SI Firms', description: 'Consulting groups specializing in cloud, ERP, and CRM integrations.' },
      { persona: 'Boutique AI Engineering Houses', description: 'Software engineering boutiques delivering bespoke enterprise AI applications.' },
      { persona: 'DevOps & Cloud Advisory Partners', description: 'AWS, Azure, and GCP partners building private VPC AI pipelines for enterprise clients.' },
      { persona: 'Vertical Transformation Specialists', description: 'Advisors focused on healthcare, banking, manufacturing, or supply chain modernization.' },
    ],
    faqs: [
      {
        question: 'How long does technical certification take?',
        answer: 'Our self-paced, hands-on certification path takes approximately 2 to 3 weeks for an experienced systems engineer or software architect.',
      },
      {
        question: 'Who owns the client contract?',
        answer: 'You sign the services agreement directly with the client for your implementation and advisory fees. The software license can be billed through you or directly by B4G with partner commission.',
      },
      {
        question: 'What kind of support is provided during client go-live?',
        answer: 'Premier and Global partners receive dedicated standby engineering support during major enterprise cutovers and production migrations.',
      },
    ],
  },

  technology: {
    id: 'technology',
    name: 'Technology Partner',
    shortName: 'Technology',
    tagline: 'Build Bi-Directional Connectors, Marketplace Apps, and Native Integrations',
    eyebrow: 'Ecosystem & ISV Integration Network',
    heroDescription:
      'Integrate your SaaS products, APIs, data lakes, or developer tooling with B4G AI. Build native marketplace connectors that expose your capabilities to our global enterprise user base and power autonomous agent workflows.',
    badge: 'API & Marketplace Ecosystem',
    iconName: 'PlugZap',
    selectValue: 'Technology Partner',
    overview: {
      headline: 'Turn B4G AI into a Multiplier for Your Platform Engagement',
      description:
        'Modern businesses use 100+ cloud tools. By becoming an official B4G Technology Partner, you make your software the system of record or execution engine for thousands of autonomous AI agents, driving API call volume, platform retention, and joint customer satisfaction.',
      highlights: [
        'Featured placement in the B4G AI Marketplace directory and in-app integration hub',
        'Pre-built bi-directional webhooks and SDKs for TypeScript, Python, and Go',
        'Joint product launch announcements, co-authored case studies, and co-marketing campaigns',
        'Dedicated developer sandbox accounts with enterprise quota for continuous testing',
      ],
    },
    howItSolves: {
      problemHeadline: 'The Fragmented Enterprise SaaS Stack',
      problemDescription:
        'Point solutions become shelfware when they cannot communicate intelligently with autonomous workflows. Users are exhausted from manual data entry and fragmented Zapier hacks.',
      solutionHeadline: 'Deep, Native Bi-Directional Agent Orchestration',
      solutionDescription:
        'Our Open Integration Framework lets you publish high-performance tool definitions and action schemas. B4G AI agents can read data, trigger complex state mutations, and listen to events natively in your application.',
      pillars: [
        {
          title: 'Standardized Function Calling',
          description: 'Package your APIs into validated OpenAPI tool schemas that autonomous agents can invoke with high accuracy.',
        },
        {
          title: 'Co-Engineered Connectors',
          description: 'Collaborate with our developer platform team to optimize latency, rate limits, and token usage.',
        },
        {
          title: 'Joint Go-to-Market',
          description: 'Drive pipeline through shared webinars, marketplace featured promotions, and joint sales collateral.',
        },
        {
          title: 'Security & Token Isolation',
          description: 'OAuth 2.0 and enterprise credential vaults guarantee zero credential leakage between tenants.',
        },
      ],
    },
    whyChoose: [
      {
        title: 'Rapid Developer Adoption',
        description: 'Expose your APIs directly to enterprise developers building autonomous AI agents on B4G.',
      },
      {
        title: 'Sticky Customer Retention',
        description: 'Customers that connect their core systems to automated AI workflows exhibit 3x higher retention.',
      },
      {
        title: 'Shared Revenue on Marketplace Deployments',
        description: 'Monetize premium connectors and app listings through the B4G AI Marketplace ecosystem.',
      },
      {
        title: 'Zero-Friction Sandbox Verification',
        description: 'Fast-track security review and verified publisher badge upon passing connector test suites.',
      },
    ],
    economics: {
      headline: 'Expand Platform Reach and Shared Ecosystem Value',
      subheadline: 'Drive net-new signups, deeper product stickiness, and marketplace revenue share.',
      metrics: [
        { value: '3.4x', label: 'Higher Customer LTV', detail: 'When customers integrate 2+ platform connectors' },
        { value: '150k+', label: 'Monthly Agent API Calls', detail: 'Average volume per verified technology partner integration' },
        { value: '80%', label: 'Marketplace Revenue Share', detail: 'Retained on paid connector subscriptions' },
      ],
      tiers: [
        {
          tierName: 'Registered Tech Partner',
          qualification: 'Active API / Verified SaaS Product',
          benefits: 'Developer sandbox, API documentation access, community forum badge',
          margin: 'Self-Serve Directory Listing',
        },
        {
          tierName: 'Certified Marketplace Partner',
          qualification: 'Tested Connector with OAuth 2.0 & Documentation',
          benefits: 'Featured marketplace slot, joint release blog post, verified partner badge',
          margin: 'Co-Marketing & 80% Rev Share',
        },
        {
          tierName: 'Strategic ISV Alliance',
          qualification: 'Mutual Enterprise Tier Customer Base',
          benefits: 'Native out-of-the-box integration, joint sales compensation, co-keynotes',
          margin: 'Bespoke Joint GTM Package',
        },
      ],
    },
    processSteps: [
      {
        step: '01',
        title: 'Register Developer Account',
        description: 'Request access to the B4G Developer Portal and provision your isolated sandbox.',
      },
      {
        step: '02',
        title: 'Build & Test Connector',
        description: 'Utilize our OpenAPI schema templates and test agent tool calling against your staging APIs.',
      },
      {
        step: '03',
        title: 'Security Audit & Certification',
        description: 'Submit your connector for automated regression, token safety, and security compliance verification.',
      },
      {
        step: '04',
        title: 'Publish & Co-Promote',
        description: 'Launch in the B4G Marketplace and activate joint marketing campaigns with our partner team.',
      },
    ],
    whoItIsFor: [
      { persona: 'SaaS Platforms & B2B Apps', description: 'CRMs, ERPs, ticketing tools, and marketing suites looking to add native AI agents.' },
      { persona: 'Database & Data Warehouse Vendors', description: 'Snowflake, Databricks, PostgreSQL, and vector database providers.' },
      { persona: 'Telephony & VoIP Carriers', description: 'SIP trunk providers, PBX platforms, and SMS/voice aggregators.' },
      { persona: 'Security & Compliance Providers', description: 'Identity management, DLP, and compliance monitoring software vendors.' },
    ],
    faqs: [
      {
        question: 'What protocols and formats are supported?',
        answer: 'We support RESTful APIs with OpenAPI 3.0 specs, GraphQL endpoints, Webhooks (HTTP POST with HMAC verification), and gRPC streaming.',
      },
      {
        question: 'Is there any fee to become a Technology Partner?',
        answer: 'No. Registering as a technology partner and publishing verified free connectors to our marketplace is completely free of charge.',
      },
      {
        question: 'Can we charge for our integration on the marketplace?',
        answer: 'Yes. Technology partners can offer both free connectors (requiring an account on your platform) and premium paid add-on apps.',
      },
    ],
  },

  strategic: {
    id: 'strategic',
    name: 'Strategic Partner',
    shortName: 'Strategic',
    tagline: 'Form Long-Term Alliances for Joint Ventures, Co-Development, and Global Expansion',
    eyebrow: 'Executive Corporate Alliances',
    heroDescription:
      'Partner with B4G AI at the highest corporate level. We collaborate with global consultancies, telecommunications giants, and multinational enterprise leaders on bespoke co-innovation labs, sovereign cloud deployments, and multi-region market expansion.',
    badge: 'Executive Corporate Alliance',
    iconName: 'Handshake',
    selectValue: 'Strategic Partner',
    overview: {
      headline: 'Transform Entire Industries Through Sovereign AI Co-Innovation',
      description:
        'Strategic Partnerships are reserved for industry titans looking to establish deep commercial and technological alignment. Together, we co-engineer industry-specific foundation models, deploy air-gapped sovereign instances, and execute multi-year digital transformation contracts.',
      highlights: [
        'Dedicated R&D engineering pod assigned to co-development initiatives',
        'Executive steering committee and quarterly roadmap alignment with B4G leadership',
        'Exclusive vertical or regional distribution rights in designated sectors',
        'Custom enterprise SLA, sovereign cloud deployments, and joint IP creation agreements',
      ],
    },
    howItSolves: {
      problemHeadline: 'The Scale & Sovereignty Wall',
      problemDescription:
        'Tier-1 enterprises and governments cannot adopt off-the-shelf public AI models due to strict data residency laws, proprietary domain logic, and complex regulatory scrutiny.',
      solutionHeadline: 'Bespoke Sovereign Infrastructure and Joint IP',
      solutionDescription:
        'We work side-by-side with your executive and engineering leadership to build customized, air-gapped, and fine-tuned AI foundations tailored to your specific market footprint.',
      pillars: [
        {
          title: 'Co-Innovation Labs',
          description: 'Joint research teams solving high-barrier industry challenges with proprietary datasets.',
        },
        {
          title: 'Sovereign Cloud Deployment',
          description: 'Deploy on-premises, in sovereign clouds, or inside air-gapped government-certified VPCs.',
        },
        {
          title: 'Joint RFP & Contract Pursuit',
          description: 'Unify strengths to win 8-figure enterprise and public sector tenders.',
        },
        {
          title: 'Shared Commercial IP',
          description: 'Structured licensing frameworks allowing co-ownership or exclusivity on specialized vertical models.',
        },
      ],
    },
    whyChoose: [
      {
        title: 'Executive C-Suite Alignment',
        description: 'Direct collaboration with B4G founders, chief scientists, and enterprise general managers.',
      },
      {
        title: 'Unmatched Architectural Flexibility',
        description: 'Tailored model fine-tuning, specialized inference clusters, and custom telemetry governance.',
      },
      {
        title: 'Global Scale Acceleration',
        description: 'Leverage our distributed infrastructure to deploy low-latency autonomous agents worldwide.',
      },
      {
        title: 'Defensible Vertical Moats',
        description: 'Lock in proprietary competitive advantages that generic commoditized AI platforms cannot replicate.',
      },
    ],
    economics: {
      headline: 'Transformational Commercial Scale and Equity Value',
      subheadline: 'Multi-year commitments with custom revenue share, joint venture structures, and volume incentives.',
      metrics: [
        { value: '$10M+', label: 'Strategic Pipeline', detail: 'Typical joint RFP opportunity volume within 12 months' },
        { value: '100%', label: 'Data Residency Guarantee', detail: 'Strict adherence to local sovereign governance' },
        { value: '1:1', label: 'Dedicated Engineering Pod', detail: 'Dedicated senior architects assigned to your alliance' },
      ],
      tiers: [
        {
          tierName: 'Regional Strategic Alliance',
          qualification: 'Tier-1 Regional Leader in Telco, IT, or Finance',
          benefits: 'Regional exclusivity options, dedicated solution architect, joint GTM',
          margin: 'Custom Structured Revenue Share',
        },
        {
          tierName: 'Global Co-Innovation Partner',
          qualification: 'Multinational Enterprise / Top-Tier Global Consultancy',
          benefits: 'Joint R&D lab, shared IP options, executive steering committee, sovereign VPC',
          margin: 'Enterprise JV / Revenue Share',
        },
      ],
    },
    processSteps: [
      {
        step: '01',
        title: 'Executive Exploration',
        description: 'Confidential exploratory sessions with B4G executive leadership to align on vision and market opportunities.',
      },
      {
        step: '02',
        title: 'Joint Architecture & Term Sheet',
        description: 'Define technical scope, regulatory constraints, commercial parameters, and joint governance framework.',
      },
      {
        step: '03',
        title: 'Pilot Deployment & Pod Assembly',
        description: 'Staff dedicated cross-functional engineering pods and establish sovereign staging environments.',
      },
      {
        step: '04',
        title: 'Global Commercial Rollout',
        description: 'Execute multi-region customer deployments and jointly bid on major industry RFP opportunities.',
      },
    ],
    whoItIsFor: [
      { persona: 'Global Management Consultancies', description: 'Big 4 and top-tier strategy firms executing 8-figure enterprise transformations.' },
      { persona: 'Telecommunications & Carrier Giants', description: 'Carriers bundling AI voicebots and automated PBX services across their business base.' },
      { persona: 'Defense & Government Contractors', description: 'Organizations requiring air-gapped, zero-trust autonomous agent networks.' },
      { persona: 'Private Equity Operating Groups', description: 'PE firms seeking a standardized enterprise AI acceleration platform across portfolios.' },
    ],
    faqs: [
      {
        question: 'Can B4G AI run completely disconnected from the public internet?',
        answer: 'Yes. For Strategic Partners, we support fully air-gapped on-premises deployments on NVIDIA DGX / enterprise GPU clusters with local model weights.',
      },
      {
        question: 'How are intellectual property rights handled for co-developed models?',
        answer: 'We establish clear IP boundaries in our alliance agreements. Customer proprietary training data and bespoke model adapter weights remain 100% partner property.',
      },
      {
        question: 'What is the commitment horizon for strategic partnerships?',
        answer: 'Strategic agreements typically involve a 2- to 5-year multi-phase collaborative roadmap with clear milestones and executive governance.',
      },
    ],
  },

  'sales-partner': {
    id: 'sales-partner',
    name: 'Sales Partner',
    shortName: 'Sales Partner',
    tagline: 'Refer Enterprise Clients and Earn Up to 30% Recurring Commissions',
    eyebrow: 'Affiliate & Referral Accelerator',
    heroDescription:
      'Monetize your professional network by introducing qualified enterprise clients to B4G AI. We handle product demonstrations, technical architecture reviews, contracting, and ongoing customer support, while you earn industry-leading commissions on every closed deal.',
    badge: 'Up to 30% Recurring Payouts',
    iconName: 'Percent',
    selectValue: 'Sales Partner',
    overview: {
      headline: 'Turn Your Network Into Predictable High-Margin Cash Flow',
      description:
        'C-level executives and business leaders are actively looking for trustworthy autonomous AI solutions. As a B4G Sales Partner, you act as the trusted advisor. When you introduce an account, our elite solution engineering team steps in to close the contract and guarantee customer success.',
      highlights: [
        'Earn 20% to 30% first-year commissions plus recurring annual retention bonuses',
        '90-day deal registration lock: guaranteed attribution for every introduced account',
        'Full sales support: dedicated sales engineers conduct bespoke demos for your prospects',
        'Intuitive partner dashboard with real-time deal stage tracking and automated ACH payouts',
      ],
    },
    howItSolves: {
      problemHeadline: 'The Frustration of Complex Tech Sales',
      problemDescription:
        'Independent advisors and consultants often uncover massive enterprise software opportunities but cannot monetize them because they lack a sales engineering team, legal infrastructure, and enterprise SLA backing.',
      solutionHeadline: 'B4G Enterprise Sales Engine at Your Service',
      solutionDescription:
        'Simply make the warm introduction. Our team handles the heavy lifting—from security reviews to custom enterprise POCs—ensuring the highest possible conversion rate for your referrals.',
      pillars: [
        {
          title: 'Guaranteed Attribution',
          description: 'Our deal registration system locks your account ownership for 90 days with automatic extension during active POCs.',
        },
        {
          title: 'High Average Deal Sizes',
          description: 'Enterprise B4G deployments range from $40,000 to $250,000+ ARR, resulting in substantial commission checks.',
        },
        {
          title: 'Sales Enablement Toolkit',
          description: 'One-pagers, vertical case studies, ROI calculators, and personalized referral tracking links.',
        },
        {
          title: 'Fast Automated Payouts',
          description: 'Commissions paid out within 30 days of client receipt via direct deposit, ACH, or international wire.',
        },
      ],
    },
    whyChoose: [
      {
        title: 'Zero Technical Overhead',
        description: 'You do not need to conduct technical demos or manage customer onboarding. Our team handles everything.',
      },
      {
        title: 'Reliable Recurring Income',
        description: 'Earn not just on the initial contract, but enjoy renewal bonuses as the client scales their agent usage.',
      },
      {
        title: 'Top-Tier Enterprise Conversion',
        description: 'Our solution engineers maintain a 42% close rate on qualified enterprise proof-of-concept evaluations.',
      },
      {
        title: 'Transparent Reporting',
        description: 'Real-time portal shows pipeline status, stage progression, signed contracts, and upcoming payouts.',
      },
    ],
    economics: {
      headline: 'Uncapped Earning Potential on Enterprise Contracts',
      subheadline: 'Substantial payouts designed to reward genuine business relationships and strategic introductions.',
      metrics: [
        { value: '25%', label: 'Average Commission Rate', detail: 'Paid on year 1 enterprise contract value' },
        { value: '$17,500', label: 'Average Commission / Deal', detail: 'Based on our standard $70k ARR enterprise deployment' },
        { value: '42%', label: 'Demo-to-Close Rate', detail: 'Our engineering team’s conversion on qualified introductions' },
      ],
      tiers: [
        {
          tierName: 'Associate Referral Partner',
          qualification: '1-2 Closed Deals / Year',
          benefits: 'Standard deal registration, marketing collateral, standard portal access',
          margin: '20% First Year Commission',
        },
        {
          tierName: 'Senior Sales Partner',
          qualification: '3-6 Closed Deals / Year',
          benefits: 'Dedicated demo engineer, priority pipeline reviews, 10% renewal bonus',
          margin: '25% First Year + 10% Year 2',
        },
        {
          tierName: 'Master Dealmaker',
          qualification: '7+ Closed Deals / $300k+ Pipeline',
          benefits: 'Co-selling executive sponsorship, bespoke sales collateral, customized terms',
          margin: '30% First Year + 15% Renewal',
        },
      ],
    },
    processSteps: [
      {
        step: '01',
        title: 'Sign Up as a Sales Partner',
        description: 'Fill out the rapid application to receive your partner portal login and referral agreement.',
      },
      {
        step: '02',
        title: 'Register Your Prospect Deal',
        description: 'Submit your prospect details in the portal to secure 90-day exclusive deal registration lock.',
      },
      {
        step: '03',
        title: 'Joint Pitch or Warm Handoff',
        description: 'Introduce our solution engineers via email or attend the initial discovery call with us.',
      },
      {
        step: '04',
        title: 'Collect Your Payouts',
        description: 'As soon as the contract is executed and payment is received, your commission is wired directly.',
      },
    ],
    whoItIsFor: [
      { persona: 'Independent Advisors & Consultants', description: 'Fractional executives, CTOs, and management advisors with direct enterprise access.' },
      { persona: 'B2B Sales Professionals', description: 'Enterprise account executives looking to monetize complementary software opportunities.' },
      { persona: 'Industry Influencers & Speakers', description: 'Keynote speakers and newsletter authors trusted by tech leaders.' },
      { persona: 'Procurement & Software Brokers', description: 'Firms helping enterprises navigate AI vendor evaluation and selection.' },
    ],
    faqs: [
      {
        question: 'How do I ensure I get credit for my referral?',
        answer: 'You register the deal in your partner dashboard before or immediately after making the introduction. Once verified, that account is locked to your profile.',
      },
      {
        question: 'Do I have to participate in the sales meetings?',
        answer: 'No. You can choose to be as hands-on or hands-off as you like. A warm email introduction is all our team needs to take over.',
      },
      {
        question: 'When and how are commissions paid?',
        answer: 'Commissions are disbursed on the 15th of each month for all client payments collected during the previous calendar month.',
      },
    ],
  },

  'startup-program': {
    id: 'startup-program',
    name: 'Startup Program',
    shortName: 'Startup Program',
    tagline: 'Up to $50,000 in AI Credits, Subsidized Pricing, and Elite Engineering Mentorship',
    eyebrow: 'Early-Stage Founder Launchpad',
    heroDescription:
      'We empower ambitious early-stage founders building AI-first products. Get access to heavily subsidized B4G AI infrastructure, dedicated GPU queues, hands-on office hours with AI researchers, and investor showcase opportunities.',
    badge: 'Up to $50k in Platform Credits',
    iconName: 'Rocket',
    selectValue: 'Startup Program',
    overview: {
      headline: 'Build Fast, Iterate Rapidly, and Conserve Precious Capital',
      description:
        'Founders should focus on solving user problems and achieving product-market fit—not burning angel rounds on raw GPU compute or building complex agent framework scaffolds from scratch. The B4G Startup Program gives you production infrastructure from Day 1.',
      highlights: [
        'Up to $50,000 in B4G AI platform credits for qualified seed and Series A startups',
        '80% discount on all platform tiers in Year 1; 50% discount in Year 2',
        'Monthly 1-on-1 office hours with B4G founding AI research engineers',
        'Priority GPU routing: ultra-low-latency inference for voicebots and autonomous agents',
      ],
    },
    howItSolves: {
      problemHeadline: 'The Startup AI Cash Burn Trap',
      problemDescription:
        'Early-stage teams waste up to 40% of their seed runway managing cloud GPUs, debugging LLM hallucination guards, and cobbling together brittle vector search pipelines.',
      solutionHeadline: 'Instant Enterprise AI Capabilities on Founder-Friendly Terms',
      solutionDescription:
        'We give you an all-in-one platform—autonomous agents, voicebot telephony, surveillance analytics, and document ingestion—accessible via clean SDKs so you can ship features in days.',
      pillars: [
        {
          title: 'Deep Capital Efficiency',
          description: 'Massive credit grants and steep multi-year discounts preserve your runway for hiring and user acquisition.',
        },
        {
          title: 'Production Stability',
          description: 'Enterprise 99.9% uptime SLA and auto-scaling infrastructure that effortlessly handles viral traffic spikes.',
        },
        {
          title: 'Direct Engineering Mentorship',
          description: 'Debug your prompts, optimize tool-calling schemas, and minimize token latency with our research team.',
        },
        {
          title: 'Investor Demo Days',
          description: 'Showcase your application to our network of venture capital partners investing in the applied AI landscape.',
        },
      ],
    },
    whyChoose: [
      {
        title: 'Accelerate Time to Market',
        description: 'Launch autonomous features in weeks instead of months, beating competitors to market.',
      },
      {
        title: 'Enterprise Ready on Day 1',
        description: 'SOC2 Type II and HIPAA compliance guarantees allow you to sell to enterprise customers immediately.',
      },
      {
        title: 'No Vendor Lock-In',
        description: 'Clean REST and WebSocket APIs mean your codebase remains modular and future-proof.',
      },
      {
        title: 'Founder Community',
        description: 'Join an invite-only Slack group of venture-backed AI founders sharing benchmarks and growth strategies.',
      },
    ],
    economics: {
      headline: 'Maximum Runway Conservation for Fast-Growing Ventures',
      subheadline: 'Substantial credits and tiered discounts that scale as you close subsequent venture rounds.',
      metrics: [
        { value: '$50,000', label: 'Max Credit Grant', detail: 'Provided to qualified early-stage startups' },
        { value: '80%', label: 'Year 1 Platform Discount', detail: 'Applies to all platform usage and seat licenses' },
        { value: '48h', label: 'Application Approval', detail: 'Rapid turnaround so you can start building immediately' },
      ],
      tiers: [
        {
          tierName: 'Bootstrap & Pre-Seed',
          qualification: 'Under $500k Raised or Bootstrapped',
          benefits: '$10,000 in platform credits, 80% discount Year 1, community support',
          margin: 'Subsidized Tier',
        },
        {
          tierName: 'Seed Accelerator',
          qualification: 'Raised $500k - $3M / Top Accelerator Grad',
          benefits: '$25,000 in credits, 80% discount Year 1, bi-weekly office hours, priority queues',
          margin: 'Heavily Subsidized',
        },
        {
          tierName: 'Series A Scaleup',
          qualification: 'Raised $3M - $10M in Institutional Capital',
          benefits: '$50,000 in credits, dedicated Slack channel, custom fine-tuning assistance',
          margin: 'Enterprise Growth Tier',
        },
      ],
    },
    processSteps: [
      {
        step: '01',
        title: 'Submit Founder Application',
        description: 'Tell us about your startup, funding stage, accelerator affiliation, and how you plan to leverage AI.',
      },
      {
        step: '02',
        title: 'Review & Rapid Approval',
        description: 'Our venture partnerships team reviews applications and grants credits within 48 business hours.',
      },
      {
        step: '03',
        title: 'Onboarding & Credit Provisioning',
        description: 'Access your credits in your dashboard, invite your engineers, and review our quickstart SDKs.',
      },
      {
        step: '04',
        title: 'Ship, Scale & Showcase',
        description: 'Deploy to users, optimize performance with our researchers, and participate in B4G Founder Showcase days.',
      },
    ],
    whoItIsFor: [
      { persona: 'AI-Native SaaS Startups', description: 'Founders building workflow automation, vertical CRM, or intelligent productivity tools.' },
      { persona: 'Accelerator Participants', description: 'Startups currently in or recently graduated from Y Combinator, Techstars, or similar programs.' },
      { persona: 'DeepTech & University Spinouts', description: 'Teams commercializing applied AI research seeking industrial-grade infrastructure.' },
      { persona: 'Bootstrapped Micro-SaaS Builders', description: 'Solo founders and lean teams building profitable automated software businesses.' },
    ],
    faqs: [
      {
        question: 'What are the eligibility requirements?',
        answer: 'Your startup must be less than 5 years old, have raised under $10 million in total funding, and have an active website or public GitHub repository.',
      },
      {
        question: 'Do you take equity in exchange for credits?',
        answer: 'No. The B4G Startup Program is non-dilutive. We take zero equity, warrants, or intellectual property rights.',
      },
      {
        question: 'What happens when my credits run out?',
        answer: 'You continue to receive our 80% Year 1 discount on all paid usage, transitioning seamlessly to standard founder rates without service disruption.',
      },
    ],
  },

  'royalty-program': {
    id: 'royalty-program',
    name: 'Royalty Program',
    shortName: 'Royalty Program',
    tagline: 'Publish Autonomous Agents & Vertical Workflows to Earn Perpetual Recurring Royalties',
    eyebrow: 'Creator & Domain Expert Marketplace',
    heroDescription:
      'Monetize your specialized domain expertise. Build custom autonomous agents, voicebot workflows, or vertical prompt architectures, publish them to the B4G AI Marketplace, and earn ongoing monthly royalties whenever businesses run your solution.',
    badge: 'Perpetual Monthly Royalties',
    iconName: 'Coins',
    selectValue: 'Royalty Program',
    overview: {
      headline: 'Turn Specialized Industry Knowledge Into Scalable Software IP',
      description:
        'Domain experts understand the exact nuances of real-world business processes—such as medical billing compliance, specialized commercial lease review, or supply chain customs documentation. The B4G Royalty Program allows you to package that knowledge into automated agents and earn recurring royalties from global enterprises.',
      highlights: [
        'Earn up to 70% of marketplace subscription and per-execution fees on your published agents',
        'Tamper-proof IP protection: your prompt logic, knowledge embeddings, and tools remain encrypted',
        'Built-in enterprise distribution: instant access to thousands of verified business customers',
        'Detailed creator analytics: track real-time agent invocations, revenue, and active subscriptions',
      ],
    },
    howItSolves: {
      problemHeadline: 'The Barrier to Software Monetization',
      problemDescription:
        'Consultants and industry specialists possess invaluable proprietary workflows but cannot turn them into scalable software because building SaaS billing, multi-tenancy, and security infrastructure is out of reach.',
      solutionHeadline: 'A No-Code/Low-Code Marketplace for Domain Experts',
      solutionDescription:
        'Build and configure your agent within our intuitive Agent Studio. We provide the billing engine, user authentication, customer support, and global distribution while wiring your royalties monthly.',
      pillars: [
        {
          title: 'Encrypted IP Fortress',
          description: 'Your proprietary system prompts, evaluation logic, and custom training sets are fully protected from extraction.',
        },
        {
          title: 'Automated Usage Metering',
          description: 'Choose your monetization model: monthly recurring seat subscriptions, per-execution fees, or hybrid pricing.',
        },
        {
          title: 'Global Enterprise Distribution',
          description: 'Your agents are cataloged and search-optimized in the official B4G AI Marketplace seen by thousands of enterprises.',
        },
        {
          title: 'Passive Monthly Payouts',
          description: 'Automated revenue aggregation with detailed statements and monthly electronic wire transfers.',
        },
      ],
    },
    whyChoose: [
      {
        title: 'Build Once, Earn Continuously',
        description: 'Break free from trading hours for dollars. High-performing vertical agents generate recurring monthly income for years.',
      },
      {
        title: 'Zero Infrastructure Headaches',
        description: 'B4G manages GPU uptime, latency monitoring, model updates, and customer billing support.',
      },
      {
        title: 'Verified Enterprise Trust',
        description: 'Because your agent runs on B4G SOC2/HIPAA infrastructure, risk-averse enterprises can adopt it immediately.',
      },
      {
        title: 'Creator Spotlight',
        description: 'Top-earning royalty partners are highlighted in our customer newsletter and product feature announcements.',
      },
    ],
    economics: {
      headline: 'Compounding Revenue from Recurring Marketplace Subscriptions',
      subheadline: 'Monetize high-utility agents with flexible pricing models tailored to your industry audience.',
      metrics: [
        { value: '70%', label: 'Creator Revenue Share', detail: 'Net marketplace subscription fees paid directly to you' },
        { value: '$4,200', label: 'Avg Monthly Royalty / Agent', detail: 'For top quartile published enterprise workflows' },
        { value: '100%', label: 'IP Ownership Retained', detail: 'You retain full copyright and ownership of your proprietary workflows' },
      ],
      tiers: [
        {
          tierName: 'Marketplace Creator',
          qualification: '1 Verified Published Agent',
          benefits: 'Public marketplace listing, automated billing, monthly payouts',
          margin: '60% Revenue Share',
        },
        {
          tierName: 'Pro Studio Partner',
          qualification: '3+ Published Agents / $5k Monthly Volume',
          benefits: 'Featured marketplace badge, custom creator profile page, priority beta tools',
          margin: '65% Revenue Share',
        },
        {
          tierName: 'Enterprise IP Architect',
          qualification: '10+ Published Agents / $20k+ Monthly Volume',
          benefits: 'Co-marketing promotion, direct enterprise sales rep placement, dedicated success manager',
          margin: '70% Revenue Share',
        },
      ],
    },
    processSteps: [
      {
        step: '01',
        title: 'Design Your Agent Workflow',
        description: 'Use the B4G Agent Studio to build, test, and tune your specialized vertical workflow.',
      },
      {
        step: '02',
        title: 'Define Pricing & Documentation',
        description: 'Set your monthly subscription rate or per-action fee and write a clear overview for prospective users.',
      },
      {
        step: '03',
        title: 'Pass Automated Quality Audit',
        description: 'Our verification engine checks safety, prompt injection resistance, and consistent execution quality.',
      },
      {
        step: '04',
        title: 'Publish & Collect Royalties',
        description: 'Your solution is published to the marketplace and you receive automated monthly deposits.',
      },
    ],
    whoItIsFor: [
      { persona: 'Industry Consultants & Subject Matter Experts', description: 'Legal, tax, medical billing, and logistics veterans encoding specialized business rules.' },
      { persona: 'Prompt Engineers & AI Creators', description: 'Talented builders creating complex multi-agent reasoning chains and productivity systems.' },
      { persona: 'Independent Software Vendors (ISVs)', description: 'Boutique software makers monetizing standalone functional agents.' },
      { persona: 'Operations & Process Architects', description: 'Workflow designers automating standard operating procedures across industries.' },
    ],
    faqs: [
      {
        question: 'Can end users see or copy my system prompts?',
        answer: 'No. All prompts, system instructions, and tool orchestration logic run inside protected containers and are never exposed to the client.',
      },
      {
        question: 'How do I price my agents?',
        answer: 'You have full pricing freedom. You can set a monthly subscription (e.g., $99/mo or $499/mo) or a per-task fee (e.g., $0.50 per invoice processed).',
      },
      {
        question: 'Can I update my agent after it is published?',
        answer: 'Yes. You can push version updates at any time. Subscribers are automatically migrated to your latest tested release.',
      },
    ],
  },

  'reseller-program': {
    id: 'reseller-program',
    name: 'Reseller Program',
    shortName: 'Reseller Program',
    tagline: 'Purchase Wholesale AI Licenses and Resell to Your Customer Base with Guaranteed Margins',
    eyebrow: 'Volume VAR & Hardware Distribution',
    heroDescription:
      'Engineered for Value-Added Resellers (VARs), IT hardware distributors, and regional software aggregators. Purchase B4G AI seat licenses, voice minutes, and agent credits at steep volume wholesale discounts, bundling them directly into your existing enterprise contracts.',
    badge: 'Up to 50% Wholesale Discount',
    iconName: 'PackageCheck',
    selectValue: 'Reseller Program',
    overview: {
      headline: 'Expand Your IT Catalog with High-Demand Enterprise AI Products',
      description:
        'Hardware distributors, IT hardware VARs, and corporate software procurement partners can now deliver cutting-edge autonomous AI software alongside laptops, servers, networking gear, and Microsoft/Cisco bundles. Enjoy predictable wholesale margins and automated license management.',
      highlights: [
        'Tiered volume discounts from 30% to 50% off manufacturer suggested retail price (MSRP)',
        'Centralized Partner License Portal: instantly provision, reassign, or revoke customer keys',
        'Flexible credit and payment terms (Net 30 / Net 60) for qualified authorized distributors',
        'Co-branded sales collateral, joint proposal templates, and dedicated deal registration protection',
      ],
    },
    howItSolves: {
      problemHeadline: 'The Margin Squeeze on Commoditized IT Hardware & Software',
      problemDescription:
        'Resellers struggle with paper-thin 3-5% margins on traditional hardware and standard software licenses while clients actively seek high-value AI solutions from alternative vendors.',
      solutionHeadline: 'A Sticky, High-Margin Enterprise AI Bundle',
      solutionDescription:
        'Bundle B4G autonomous agents with your hardware and IT infrastructure sales. Turn a single hardware transaction into a high-margin multi-year software relationship with guaranteed renewal commissions.',
      pillars: [
        {
          title: 'Wholesale Volume Tiers',
          description: 'Steeper discounts as your aggregated purchasing volume across all client accounts expands.',
        },
        {
          title: 'Partner License Vault',
          description: 'A single management console to generate, monitor, and configure client license seats in seconds.',
        },
        {
          title: 'Deal Registration Shield',
          description: 'Register prospective reseller bids to lock in guaranteed pricing protection and prevent vendor conflict.',
        },
        {
          title: 'Credit Line Flexibility',
          description: 'Qualified VARs access Net 30/60 billing terms matching standard enterprise procurement cycles.',
        },
      ],
    },
    whyChoose: [
      {
        title: 'Massive Margin Lift',
        description: 'Upgrade commoditized 4% hardware deals to 35%+ blended gross margin packages.',
      },
      {
        title: 'Frictionless License Provisioning',
        description: 'Generate customer license keys on-demand with zero waiting or manual approval delays.',
      },
      {
        title: 'Sticky Customer Renewals',
        description: 'Enterprise AI workflows deeply integrate into client operations, creating 95%+ annual renewal rates.',
      },
      {
        title: 'Co-Branded Marketing Funds',
        description: 'Access Market Development Funds (MDF) to co-sponsor local IT trade shows, customer dinners, and webinars.',
      },
    ],
    economics: {
      headline: 'Predictable Wholesale Pricing Built for Scale Distribution',
      subheadline: 'Volume discounts that reward commitment and give you total pricing flexibility in the market.',
      metrics: [
        { value: '40%', label: 'Average Reseller Margin', detail: 'Typical gross profit captured on enterprise software licenses' },
        { value: '95%', label: 'Annual Renewal Rate', detail: 'Predictable recurring software renewal stream for your sales team' },
        { value: 'Net 60', label: 'Credit Terms Available', detail: 'Flexible payment timelines for established enterprise distributors' },
      ],
      tiers: [
        {
          tierName: 'Authorized Reseller',
          qualification: '$25,000 Annual Wholesale Commitment',
          benefits: 'Partner portal access, standard deal registration, co-branded one-pagers',
          margin: '30% Wholesale Discount',
        },
        {
          tierName: 'Gold VAR Partner',
          qualification: '$100,000 Annual Wholesale Commitment',
          benefits: 'Net 30 terms, dedicated channel manager, priority support, MDF eligibility',
          margin: '40% Wholesale Discount',
        },
        {
          tierName: 'Platinum Global Distributor',
          qualification: '$350,000+ Annual Commitment',
          benefits: 'Net 60 terms, highest volume pricing, customized billing API, executive sponsor',
          margin: '50% Wholesale Discount',
        },
      ],
    },
    processSteps: [
      {
        step: '01',
        title: 'Submit Reseller Application',
        description: 'Provide company registration details, annual revenue, and current distribution channels.',
      },
      {
        step: '02',
        title: 'Credit Check & Agreement Execution',
        description: 'Complete our authorized reseller agreement and establish your wholesale credit line.',
      },
      {
        step: '03',
        title: 'Portal Activation & Sales Training',
        description: 'Access the Partner License Vault and attend an intensive sales enablement webinar for your team.',
      },
      {
        step: '04',
        title: 'Quote, Bundle & Invoice',
        description: 'Quote B4G AI to your clients at your chosen retail price and capture healthy upfront wholesale margins.',
      },
    ],
    whoItIsFor: [
      { persona: 'Value-Added Resellers (VARs)', description: 'Enterprise solution providers bundling hardware, cloud hosting, and software licenses.' },
      { persona: 'IT Hardware Distributors', description: 'Distributors adding high-margin software licenses to enterprise server and workstation orders.' },
      { persona: 'Regional Telecom Resellers', description: 'Carriers and telecom agents reselling voice and unified communication packages.' },
      { persona: 'Government & Education Procurement Vendors', description: 'Certified suppliers holding state, federal, or higher education purchasing contracts.' },
    ],
    faqs: [
      {
        question: 'Can we bundle B4G AI with our own professional services?',
        answer: 'Absolutely. Many resellers package B4G licenses with proprietary installation, hardware configuration, and quarterly maintenance retainers.',
      },
      {
        question: 'How do license renewals work for resellers?',
        answer: 'You maintain ownership of the customer renewal. You re-invoice the customer at renewal time and purchase the renewal licenses at your wholesale discount.',
      },
      {
        question: 'What is the deal registration policy?',
        answer: 'Resellers register opportunities in our partner portal. Approved deal registrations lock in your exclusive discount and protect you from competing quotes for 90 days.',
      },
    ],
  },
};
