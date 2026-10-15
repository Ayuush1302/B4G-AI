export interface SolutionFeature {
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

export interface SolutionMetric {
  value: string;
  label: string;
  detail: string;
}

export interface SolutionDetail {
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
  features: SolutionFeature[];
  whyChoose: WhyChoosePoint[];
  metrics: SolutionMetric[];
  useCases: Array<{ title: string; sector: string; description: string }>;
  mockupData: {
    title: string;
    subtitle: string;
    stats: Array<{ label: string; value: string }>;
    activityLog: Array<{ time: string; action: string; status: string }>;
  };
}

export const solutionsData: Record<string, SolutionDetail> = {
  'retail-ecommerce': {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    eyebrow: 'Autonomous Retail Transformation',
    badge: 'Omnichannel Commerce AI',
    iconName: 'ShoppingBag',
    tagline: 'Boost sales with AI chatbots, automate customer support, and personalize shopping experiences.',
    heroDescription:
      'Scale your retail and e-commerce business with an autonomous AI commerce engine. Deploy multi-modal conversational shopping assistants that guide product discovery, recover abandoned carts, automate order returns and tracking, and personalize shopping journeys across web, mobile, and social 24/7.',
    problem: {
      headline: 'The Pressing Pressures of Modern E-Commerce',
      subheadline: 'Skyrocketing customer acquisition costs and support surges are eroding digital retail margins.',
      points: [
        {
          title: 'High Cart Abandonment',
          description: 'Over 70% of digital shoppers abandon carts due to unanswered sizing, compatibility, or delivery queries.',
        },
        {
          title: 'Crushing Support Surges',
          description: 'Peak seasonal traffic and flash sales overwhelm human support teams, causing lost sales and frustrated shoppers.',
        },
        {
          title: 'Generic, Impersonal Discovery',
          description: 'Static category filters fail to capture customer intent, resulting in lower conversion and lower Average Order Value.',
        },
        {
          title: 'Costly Post-Purchase Returns',
          description: 'Manual exchange and refund processing costs retailers up to $15 per return while damaging brand loyalty.',
        },
      ],
    },
    solution: {
      headline: 'Autonomous Commerce Acceleration & 24/7 Shopper Care',
      description:
        'B4G Retail & E-Commerce combines conversational AI chatbots, social shopping engines, and voicebots into a single unified customer lifecycle. From real-time sizing advice to instant one-click returns, shoppers enjoy effortless concierge service.',
      capabilities: [
        'AI Personal Shopping Assistants: Understands style, sizing, and inventory availability in real-time.',
        'Zero-Touch Returns & Exchanges: Issues return labels, verifies policy rules, and updates ERP inventory.',
        'Social Commerce Integration: Converts comment questions on Instagram and TikTok directly into checkout links.',
        'Proactive Abandoned Cart Recovery: Engages hesitant shoppers with context-aware incentives before they leave.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Catalog & Storefront Ingestion',
        description: 'Connect Shopify, Magento, BigCommerce, or custom APIs to sync inventory, sizing guides, and return policies.',
      },
      {
        step: '02',
        title: 'Deploy Omnichannel Assistants',
        description: 'Launch conversational agents across web chat, WhatsApp, Instagram DM, SMS, and telephone support lines.',
      },
      {
        step: '03',
        title: 'Autonomous In-Session Conversion',
        description: 'AI assists shoppers with recommendations, applies promotional codes, and facilitates in-chat checkout.',
      },
      {
        step: '04',
        title: 'Continuous Revenue Optimization',
        description: 'Track conversion lift, analyze recurring product questions, and auto-tune recommendation algorithms.',
      },
    ],
    features: [
      {
        title: 'Conversational Guided Selling',
        description: 'Recommends products based on natural language queries like "Find a waterproof hiking jacket under $150".',
        tag: 'Conversion',
      },
      {
        title: 'Instant Order Tracking & Status',
        description: 'Answers "Where is my order?" in seconds by pulling real-time carrier telemetry and delivery estimates.',
        tag: 'Support',
      },
      {
        title: 'Automated 1-Click Exchanges',
        description: 'Allows shoppers to swap shoe sizes or colors in-chat without waiting for human customer service agents.',
        tag: 'Post-Purchase',
      },
      {
        title: 'Social DM to Cart Conversion',
        description: 'Monitors viral social media posts and DMs interested buyers direct links with pre-loaded shopping carts.',
        tag: 'Social',
      },
      {
        title: 'Dynamic Personalized Cross-Selling',
        description: 'Suggests complementary accessories and consumables based on cart contents and past customer purchase history.',
        tag: 'AOV Boost',
      },
      {
        title: 'Multilingual Global Commerce',
        description: 'Sell seamlessly across global markets with real-time translation and localized currency formatting.',
        tag: 'Global',
      },
    ],
    whyChoose: [
      {
        title: 'Direct Bottom-Line Revenue Lift',
        description: 'Clients experience an average 28% increase in average order value and 3.4x higher cart-to-checkout rates.',
      },
      {
        title: 'Zero Latency During Black Friday',
        description: 'Effortlessly scales to handle millions of simultaneous shoppers without downtime or queuing delays.',
      },
      {
        title: 'PCI-DSS Level 1 Security',
        description: 'Safely processes credit cards, Apple Pay, and digital wallets with bank-grade encryption compliance.',
      },
      {
        title: 'Turnkey E-Commerce Connectors',
        description: 'Native integration with Shopify Plus, Klaviyo, Gorgias, Zendesk, Salesforce Commerce Cloud, and NetSuite.',
      },
    ],
    metrics: [
      { value: '+28%', label: 'Average Order Value (AOV)', detail: 'Driven by conversational cross-selling recommendations' },
      { value: '86%', label: 'Support Ticket Deflection', detail: 'Inquiries resolved instantly without human intervention' },
      { value: '3.4x', label: 'Cart Conversion Lift', detail: 'Compared to static product detail pages' },
    ],
    useCases: [
      {
        sector: 'Fashion & Apparel',
        title: 'Sizing & Fit Consultation',
        description: 'Reducing return rates by matching shopper body measurements to precise brand size cuts in real-time.',
      },
      {
        sector: 'Consumer Electronics',
        title: 'Technical Compatibility Guidance',
        description: 'Verifying that replacement parts, chargers, and accessories match the exact model number of customer devices.',
      },
      {
        sector: 'Beauty & Cosmetics',
        title: 'Skin-Tone & Routine Recommendation',
        description: 'Recommending tailored skincare routines and matching shade tones from user-uploaded selfies.',
      },
    ],
    mockupData: {
      title: 'E-Commerce Intelligence Hub',
      subtitle: 'Storefront: Global Flagship | Active Shoppers: 1,840 | Status: Healthy',
      stats: [
        { label: 'Cart Recovery Rate', value: '34.2%' },
        { label: 'Avg In-Chat Sale', value: '$148.50' },
        { label: 'Deflection Rate', value: '88.4%' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Recovered $210 abandoned cart: Applied 10% flash voucher', status: 'Converted' },
        { time: '40s ago', action: 'Processed instant size exchange (M to L) for Order #SH-48912', status: 'Exchanged' },
        { time: '2m ago', action: 'Answered waterproof rating query on X; customer added to bag', status: 'In Cart' },
      ],
    },
  },

  'financial-services': {
    id: 'financial-services',
    name: 'Financial Services',
    eyebrow: 'Intelligent Banking & Capital Markets',
    badge: 'FinTech & Wealth Management AI',
    iconName: 'Building2',
    tagline: 'Automate compliance, streamline client onboarding, and enhance fraud detection with AI.',
    heroDescription:
      'Transform financial operations across retail banking, wealth management, insurance, and fintech. Deploy autonomous cognitive agents that compress KYC/AML onboarding from weeks into seconds, detect anomalous transaction fraud in sub-50ms, and generate audit-proof regulatory reports.',
    problem: {
      headline: 'The High Cost of Financial Bureaucracy',
      subheadline: 'Manual compliance checks and legacy infrastructure are strangling financial institutional growth.',
      points: [
        {
          title: 'Prolonged Client Onboarding',
          description: 'Institutional and wealth onboarding takes 7 to 14 business days, resulting in lost high-net-worth accounts.',
        },
        {
          title: 'Escalating Compliance Costs',
          description: 'Banks spend up to 10% of annual revenue on armies of manual compliance analysts and audit reconciliation.',
        },
        {
          title: 'Sophisticated Synthetic Fraud',
          description: 'Legacy rule-based fraud detection fails to catch AI-generated synthetic identities and distributed money laundering.',
        },
        {
          title: 'Fragmented Legacy Core Banking',
          description: 'Mainframe siloes prevent unified risk assessment and create customer friction across lending and deposits.',
        },
      ],
    },
    solution: {
      headline: 'Autonomous Compliance & Instant Financial Velocity',
      description:
        'B4G Financial Services integrates computer vision document verification, behavioral fraud detection, and regulatory reporting agents into your core banking stack. Accelerate customer acquisition while maintaining 100% regulatory compliance.',
      capabilities: [
        'Instant Touchless KYC & AML: Verifies passports, corporate articles, and sanction lists in sub-3 seconds.',
        'Real-Time Fraud Interception: Evaluates transactions using deep behavioral neural models in under 50ms.',
        'Autonomous Regulatory Filings: Auto-compiles SARs, CTRs, and audit packets for SEC, FINRA, and FCA.',
        'Wealth Portfolio Summaries: Translates complex quarterly financial reports into personalized client briefings.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Core Banking & Ledger Connection',
        description: 'Connect securely via dedicated VPC endpoints to FIS, Fiserv, Temenos, Jack Henry, or custom modern APIs.',
      },
      {
        step: '02',
        title: 'Configure Regulatory Rulebooks',
        description: 'Establish jurisdictional compliance parameters for BSA/AML, FinCEN, MiFID II, and local central bank mandates.',
      },
      {
        step: '03',
        title: 'Automated Real-Time Execution',
        description: 'Cognitive agents verify client identity, score lending risk, detect fraud anomalies, and post GL journal entries.',
      },
      {
        step: '04',
        title: 'Continuous Audit Telemetry',
        description: 'Immutable cryptographically signed logs capture every decision, risk score, and document verification.',
      },
    ],
    features: [
      {
        title: 'Cognitive KYC/KYB Verification',
        description: 'Extracts and verifies passports, tax IDs, beneficial ownership structures, and articles of incorporation instantly.',
        tag: 'Onboarding',
      },
      {
        title: 'Sub-50ms Transaction Fraud Scoring',
        description: 'Stops account takeovers and fraudulent wire transfers with real-time neural anomaly detection.',
        tag: 'Risk',
      },
      {
        title: 'Automated Loan Underwriting Triage',
        description: 'Parses business tax returns, bank statements, and debt ratios to calculate pre-approval credit limits in seconds.',
        tag: 'Lending',
      },
      {
        title: 'Regulatory SAR & CTR Reporting',
        description: 'Generates structured Suspicious Activity Reports with supporting evidence narratives ready for compliance officer sign-off.',
        tag: 'Compliance',
      },
      {
        title: 'Voice Biometrics for Telephone Banking',
        description: 'Authenticates high-value phone callers by vocal acoustic resonance, preventing social engineering attacks.',
        tag: 'Security',
      },
      {
        title: 'Corporate Treasury & Cash Flow Forecasting',
        description: 'Predicts enterprise liquidity requirements and auto-reconciles multi-currency accounts across global banks.',
        tag: 'Treasury',
      },
    ],
    whyChoose: [
      {
        title: 'Bank-Grade Security Architecture',
        description: 'SOC 2 Type II, ISO 27001, GLBA, and FINRA/SEC Rule 17a-4 certified. Dedicated private cloud isolation.',
      },
      {
        title: '94% Faster Client Time-to-Fund',
        description: 'Convert institutional and wealth clients in minutes instead of weeks, radically improving close rates.',
      },
      {
        title: '82% Drop in False Fraud Flags',
        description: 'Stop blocking legitimate customer credit card transactions with precision behavioral intelligence.',
      },
      {
        title: '100% Cryptographic Audit Trail',
        description: 'Provide examiners and external auditors with deterministic explanations for every automated decision.',
      },
    ],
    metrics: [
      { value: '94%', label: 'Faster Onboarding Cycle', detail: 'From 12 business days down to under 3 minutes' },
      { value: '82%', label: 'Reduction in False-Positive Fraud', detail: 'Preventing unnecessary card blocks on valid purchases' },
      { value: '< 50ms', label: 'Fraud Decisioning Latency', detail: 'In-flight transaction authorization and scoring' },
    ],
    useCases: [
      {
        sector: 'Commercial Banking',
        title: 'Corporate Account Opening',
        description: 'Verifying corporate registries, beneficial owners, and cross-checking global sanction databases in seconds.',
      },
      {
        sector: 'Private Wealth & Asset Management',
        title: 'Personalized Client Portfolio Insights',
        description: 'Auto-generating quarterly performance summaries and risk assessments tailored to individual investor risk profiles.',
      },
      {
        sector: 'Insurance Underwriting',
        title: 'Claims Triaging & Settlement',
        description: 'Analyzing repair estimates, medical receipts, and police reports to authorize straight-through claim payouts.',
      },
    ],
    mockupData: {
      title: 'Banking Compliance & Risk Console',
      subtitle: 'Cluster: US-Financial-VPC | Live Stream: Active | Compliance: 100%',
      stats: [
        { label: 'KYC Verified Today', value: '428' },
        { label: 'Fraud Intercepted', value: '$840,000' },
        { label: 'Audit Readiness', value: '100%' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Approved KYB verification for Apex Holdings LLC: Beneficial owners cleared', status: 'Approved' },
        { time: '18s ago', action: 'Flagged suspicious wire transfer ($120k) due to IP & device anomaly', status: 'Held' },
        { time: '1m ago', action: 'Generated quarterly FinCEN compliance packet with 100% data audit', status: 'Ready' },
      ],
    },
  },

  'healthcare': {
    id: 'healthcare',
    name: 'Healthcare',
    eyebrow: 'Clinical AI & Patient Engagement',
    badge: 'HIPAA-Compliant Healthcare Suite',
    iconName: 'Activity',
    tagline: 'Improve patient engagement with appointment scheduling, FAQ bots, and care coordination.',
    heroDescription:
      'Alleviate clinical staff burnout and modernize patient access. Deploy HIPAA-compliant voice and conversational AI that automates multi-provider scheduling, streamlines pre-visit intake, answers medical FAQs, and coordinates post-discharge care 24/7.',
    problem: {
      headline: 'The Administrative Crisis in Healthcare',
      subheadline: 'Physicians and clinic staff are drowning in administrative paperwork instead of treating patients.',
      points: [
        {
          title: 'Severe Administrative Burnout',
          description: 'Clinicians spend up to 2 hours on EHR data entry and insurance paperwork for every 1 hour spent with patients.',
        },
        {
          title: 'High Patient No-Show Rates',
          description: 'Missed medical appointments cost the US healthcare system over $150 billion annually and disrupt care plans.',
        },
        {
          title: 'Endless Phone Queue Times',
          description: 'Patients wait 15+ minutes on hold just to schedule visits, ask medication questions, or request prescription refills.',
        },
        {
          title: 'Prior Authorization Delays',
          description: 'Manual prior authorizations take weeks of phone and fax coordination, dangerously delaying urgent patient care.',
        },
      ],
    },
    solution: {
      headline: 'Human-Centered Clinical Automation & Patient Access',
      description:
        'B4G Healthcare integrates conversational voicebots, medical document intake, and patient triage into your existing EHR. Patients get immediate phone and web access to book appointments, review prep instructions, and check prescription status safely.',
      capabilities: [
        'HIPAA-Compliant 24/7 Scheduling: Direct two-way calendar sync with Epic, Cerner, and Athenahealth.',
        'Pre-Visit Digital Patient Intake: Digitizes medical histories and insurance cards before patient arrival.',
        'Proactive Post-Discharge Follow-Up: Natural voice calls to verify medication adherence and monitor recovery.',
        'Automated Prior Authorization Packaging: Assembles clinical notes and ICD-10/CPT codes for insurance submission.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'EHR & Telephony Integration',
        description: 'Connect via HL7/FHIR APIs directly into Epic, Cerner, AthenaHealth, or NextGen with a signed BAA.',
      },
      {
        step: '02',
        title: 'Configure Clinical Protocols',
        description: 'Establish scheduling provider rules, appointment durations, triage escalation criteria, and prep instructions.',
      },
      {
        step: '03',
        title: 'Launch Patient Access Gateways',
        description: 'Deploy toll-free conversational voice agents and web triage portals available 24/7 in 40+ languages.',
      },
      {
        step: '04',
        title: 'Automated Clinical Sync',
        description: 'Appointments, intake forms, and call summaries sync directly into patient EHR charts automatically.',
      },
    ],
    features: [
      {
        title: 'Multi-Provider Calendar Scheduling',
        description: 'Handles doctor availability rules, specialty visit requirements, and clinic room allocations smoothly.',
        tag: 'Access',
      },
      {
        title: 'Pre-Visit Intake & Insurance Verification',
        description: 'Captures insurance card photos, runs real-time eligibility checks, and collects medical intake forms.',
        tag: 'Intake',
      },
      {
        title: 'Natural Voice Refill & FAQ Line',
        description: 'Voicebot answers questions about pre-op fasting, clinic parking, and routes pharmacy refill requests.',
        tag: 'Voice',
      },
      {
        title: 'Chronic Care & Post-Op Monitoring',
        description: 'Proactively calls discharged patients to monitor pain levels, vital signs, and medication adherence.',
        tag: 'Care Management',
      },
      {
        title: 'Urgent Clinical Triage Escalation',
        description: 'Detects red-flag emergency symptoms (chest pain, shortness of breath) and instantly directs patients to 911.',
        tag: 'Safety',
      },
      {
        title: 'Medical Translation in 40+ Languages',
        description: 'Ensures equitable healthcare access for non-English speaking patients with native linguistic fluency.',
        tag: 'Inclusion',
      },
    ],
    whyChoose: [
      {
        title: 'Strict HIPAA Compliance & BAA',
        description: 'Enterprise Business Associate Agreements (BAA) provided with end-to-end data encryption and zero retention.',
      },
      {
        title: '42% Reduction in Patient No-Shows',
        description: 'Automated multi-channel SMS and natural voice reminders allow patients to reschedule with a single tap or phrase.',
      },
      {
        title: 'Certified EHR Interoperability',
        description: 'Bi-directional FHIR-based integration with Epic MyChart, Cerner Millennium, and AthenaHealth.',
      },
      {
        title: '85% Deflection of Scheduling Calls',
        description: 'Free up clinic front-desk receptionists to focus on providing compassionate in-person patient care.',
      },
    ],
    metrics: [
      { value: '42%', label: 'Reduction in No-Show Rates', detail: 'Through conversational appointment reminders & 1-click rescheduling' },
      { value: '< 30s', label: 'Average Scheduling Time', detail: 'Instant booking without hold times or human transfer' },
      { value: '85%', label: 'Front-Desk Call Deflection', detail: 'Routine scheduling and FAQs resolved automatically' },
    ],
    useCases: [
      {
        sector: 'Specialty Medical Clinics',
        title: 'Complex Multi-Specialty Booking',
        description: 'Coordinating multi-stage diagnostic imaging appointments (MRI, CT) with preliminary lab bloodwork.',
      },
      {
        sector: 'Hospital Health Systems',
        title: 'Post-Surgical Recovery Monitoring',
        description: 'Automated daily check-in calls to joint replacement patients to catch early surgical site infections.',
      },
      {
        sector: 'Dental & Eye Care',
        title: 'Annual Hygiene & Checkup Recalls',
        description: 'Re-engaging inactive patients via friendly conversational voice outreach to fill open schedule gaps.',
      },
    ],
    mockupData: {
      title: 'Clinical Patient Access Gateway',
      subtitle: 'Health System: MetroHealth | Active Trunks: 32 | Status: HIPAA Certified',
      stats: [
        { label: 'Visits Scheduled Today', value: '312' },
        { label: 'No-Show Reduction', value: '44.8%' },
        { label: 'Avg Hold Time', value: '0.0s' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Scheduled Cardiology Follow-Up with Dr. Reynolds (EHR Synced)', status: 'Confirmed' },
        { time: '35s ago', action: 'Verified BlueCross eligibility for patient #9012 ($20 Copay)', status: 'Verified' },
        { time: '2m ago', action: 'Dispatched pre-colonoscopy prep instructions via SMS link', status: 'Delivered' },
      ],
    },
  },

  'manufacturing': {
    id: 'manufacturing',
    name: 'Manufacturing',
    eyebrow: 'Autonomous Industrial Operations',
    badge: 'Smart Factory & Industry 4.0',
    iconName: 'Factory',
    tagline: 'Optimize operations with predictive maintenance, quality control, and supply chain automation.',
    heroDescription:
      'Transform factory floor productivity, industrial safety, and supply chain resilience. Deploy edge computer vision for high-speed assembly defect detection, predictive AI models that prevent machine downtime, and automated invoice matching for raw material suppliers.',
    problem: {
      headline: 'The Cost of Factory Downtime & Defects',
      subheadline: 'Unplanned equipment failures and defect escapes cost industrial leaders millions every year.',
      points: [
        {
          title: 'Astronomical Unplanned Downtime',
          description: 'Factory floor assembly line stoppages cost automotive and heavy manufacturing plants up to $22,000 per minute.',
        },
        {
          title: 'Manual Visual Inspection Escapes',
          description: 'Fatigued human inspectors miss microscopic surface cracks and solder defects, causing expensive warranty recalls.',
        },
        {
          title: 'Raw Material Supply Chain Halts',
          description: 'Delayed supplier deliveries and invoice discrepancies halt production lines when components are missing.',
        },
        {
          title: 'Hazardous Jobsite Safety Incidents',
          description: 'Forklift collisions and unenforced PPE compliance lead to severe worker injuries and heavy regulatory fines.',
        },
      ],
    },
    solution: {
      headline: 'Cognitive Factory Floor Operations',
      description:
        'B4G Manufacturing bridges physical factory machinery with enterprise AI. Deploy edge vision cameras that detect micro-defects at line speed, acoustic vibration sensors that predict motor failure 72 hours in advance, and automated supplier AP invoice reconciliation.',
      capabilities: [
        'Edge Computer Vision Inspection: Classifies defects at 60+ FPS on high-speed conveyor belts.',
        'Predictive Machinery Maintenance: Forecasts bearing and pump failures days before catastrophic breakdown.',
        'Automated 3-Way AP Invoice Matching: Reconciles supplier raw material shipments with purchase orders.',
        'OSHA PPE & Forklift Proximity Defense: Real-time safety alerting to prevent pedestrian collisions.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Deploy Edge Sensors & Cameras',
        description: 'Connect existing industrial cameras, vibration sensors, and PLC/SCADA feeds to our hardened edge gateway.',
      },
      {
        step: '02',
        title: 'Train on Golden Product Samples',
        description: 'Visual models learn exact component tolerances and baseline acoustic vibration frequencies in days.',
      },
      {
        step: '03',
        title: 'Real-Time Edge Inference',
        description: 'Cameras inspect every manufactured unit and trigger robotic ejection arms when defects are spotted.',
      },
      {
        step: '04',
        title: 'Enterprise ERP & MES Synchronization',
        description: 'Defect analytics, maintenance tickets, and raw material replenishment orders sync directly to SAP or Oracle.',
      },
    ],
    features: [
      {
        title: 'Sub-Millimeter Defect Classification',
        description: 'Detects scratches, dents, misalignments, and solder bridging on electronics, plastics, and precision metals.',
        tag: 'Quality',
      },
      {
        title: 'Acoustic & Thermal Predictive Maintenance',
        description: 'Identifies bearing wear, lubrication breakdown, and motor imbalance before physical failure occurs.',
        tag: 'Uptime',
      },
      {
        title: 'Automated Raw Material AP Invoicing',
        description: 'Extracts 100+ line items from supplier delivery manifests and matches them against PO numbers in SAP.',
        tag: 'Supply Chain',
      },
      {
        title: 'Forklift & Pedestrian Zone Safety',
        description: 'Alerts vehicle operators and sounds audible horns when workers enter dangerous blind-spot zones.',
        tag: 'Safety',
      },
      {
        title: 'Real-Time Overall Equipment Effectiveness (OEE)',
        description: 'Live dashboards tracking factory availability, operational speed, and quality output across global plants.',
        tag: 'Analytics',
      },
      {
        title: 'Automated Spare Parts Reordering',
        description: 'Triggers supplier RFPs for replacement components as soon as machine health telemetry drops below threshold.',
        tag: 'Procurement',
      },
    ],
    whyChoose: [
      {
        title: '45% Drop in Unplanned Downtime',
        description: 'Schedule maintenance during planned changeovers rather than enduring emergency line stoppages.',
      },
      {
        title: '99.7% Defect Catch Rate',
        description: 'Outperforms human visual inspection by a factor of 10 while operating continuously at high production speeds.',
      },
      {
        title: 'Edge-First Air-Gapped Deployment',
        description: 'Runs completely on-premises with zero dependence on cloud internet connectivity for uninterrupted manufacturing.',
      },
      {
        title: 'Universal Industrial Compatibility',
        description: 'Certified connectors for Siemens MindSphere, Rockwell Automation, SAP Manufacturing, and GE Digital.',
      },
    ],
    metrics: [
      { value: '45%', label: 'Reduction in Unplanned Downtime', detail: 'Through predictive vibration & thermal anomaly detection' },
      { value: '99.7%', label: 'Quality Inspection Accuracy', detail: 'Verified at high line speeds across automotive & electronics' },
      { value: '< 2.0s', label: 'Safety Violation Dispatch', detail: 'Instant proximity warnings to forklift drivers and workers' },
    ],
    useCases: [
      {
        sector: 'Automotive Assembly',
        title: 'Paint & Body Surface Inspection',
        description: 'Scanning vehicle chassis for microscopic paint bubbles, orange peel, and weld seam irregularities.',
      },
      {
        sector: 'Electronics & PCBA',
        title: 'Automated Optical Inspection (AOI)',
        description: 'Verifying micro-resistor placements, solder joint integrity, and orientation on printed circuit boards.',
      },
      {
        sector: 'Food & Beverage Packaging',
        title: 'Label, Cap & Fill-Level Verification',
        description: 'Inspecting 1,200 bottles per minute for seal integrity, expiration date printing, and proper liquid fill heights.',
      },
    ],
    mockupData: {
      title: 'Smart Factory Floor Telemetry',
      subtitle: 'Plant: Detroit Assembly #3 | Lines Active: 8 | OEE: 91.4%',
      stats: [
        { label: 'Units Inspected', value: '48,210' },
        { label: 'Defects Ejected', value: '14' },
        { label: 'Line Uptime', value: '99.8%' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Line 2 Vision: Ejected PCB with solder bridge defect', status: 'Defect Caught' },
        { time: '1m ago', action: 'Pump #4 Acoustic: Bearing anomaly detected; scheduled maintenance', status: 'Ticket Opened' },
        { time: '8m ago', action: 'PO-9821 matched with supplier delivery of 4,000 sheet metal brackets', status: 'AP Approved' },
      ],
    },
  },

  'professional-services': {
    id: 'professional-services',
    name: 'Professional Services',
    eyebrow: 'Knowledge Work & Firm Productivity',
    badge: 'Legal, Accounting & Consulting AI',
    iconName: 'Briefcase',
    tagline: 'Streamline client management, automate intake processes, and accelerate project delivery with autonomous agent workflows.',
    heroDescription:
      'Elevate realization rates and accelerate client deliverables for law firms, accounting practices, management consultancies, and marketing agencies. Deploy autonomous cognitive agents that review contracts, automate new client intake, reconcile timesheets, and draft briefings without expanding headcount.',
    problem: {
      headline: 'The Billable Hour Trap & Administrative Overhead',
      subheadline: 'High-cost partners and senior consultants spend up to 35% of their time on manual administrative tasks.',
      points: [
        {
          title: 'Severe Billable Hour Leakage',
          description: 'Professionals fail to log incidental client emails, research tasks, and phone calls, losing thousands monthly.',
        },
        {
          title: 'Slow Client Intake & Conflict Checks',
          description: 'Clearing conflicts, drafting engagement letters, and gathering client documents takes days, delaying deal kickoff.',
        },
        {
          title: 'Document & Contract Audit Burden',
          description: 'Reviewing hundreds of complex agreements, tax returns, and corporate filings burns junior associates out.',
        },
        {
          title: 'Inconsistent Deliverable Polish',
          description: 'Siloed institutional knowledge causes teams to duplicate research and deliver uneven presentation decks.',
        },
      ],
    },
    solution: {
      headline: 'Autonomous Cognitive Firm Intelligence',
      description:
        'B4G Professional Services equips your practitioners with dedicated AI co-counsels and analytical agents. Automate contract redlining against your firm’s playbook, conduct comprehensive conflict checks in seconds, and capture every billable minute automatically.',
      capabilities: [
        'Contract Redlining & Clause Extraction: Compares agreements against firm precedent and flags non-standard liabilities.',
        'Automated Client Conflict Clearance: Searches internal CRM, matters, and adverse party registries instantly.',
        'Touchless Time & Billing Capture: Tracks background work and drafts detailed billing entries for partner review.',
        'Executive Research & Brief Synthesis: Synthesizes regulatory changes, case law, and market benchmarks in minutes.',
      ],
    },
    howItWorks: [
      {
        step: '01',
        title: 'Upload Firm Knowledge & Playbooks',
        description: 'Securely ingest precedent contracts, standard clauses, engagement templates, and compliance guidelines.',
      },
      {
        step: '02',
        title: 'Practice Management Integration',
        description: 'Connect into Clio, Thomson Reuters, iManage, NetDocuments, QuickBooks, or custom practice management ERPs.',
      },
      {
        step: '03',
        title: 'Autonomous Document & Intake Automation',
        description: 'Agents draft engagement packages, analyze incoming contracts, and assemble initial research memos.',
      },
      {
        step: '04',
        title: 'Review, Polish & Bill',
        description: 'Partners review high-confidence AI deliverables in minutes and publish polished deliverables to clients.',
      },
    ],
    features: [
      {
        title: 'Playbook-Driven Contract Redlining',
        description: 'Identifies unfavorable indemnities, uncapped liabilities, and non-standard governing law provisions automatically.',
        tag: 'Legal',
      },
      {
        title: 'Automated Conflict & Intake Clearance',
        description: 'Runs instant background searches across active and historical corporate matters before taking on new clients.',
        tag: 'Intake',
      },
      {
        title: 'Passive Billable Time Capture',
        description: 'Analyzes calendar events, sent emails, and document edits to draft descriptive billing entries automatically.',
        tag: 'Billing',
      },
      {
        title: 'Complex Tax & Financial Audit Extraction',
        description: 'Extracts schedules, balance sheet line items, and footnotes from client tax returns and audit reports.',
        tag: 'Accounting',
      },
      {
        title: 'Client Deliverable Slide & Memo Generator',
        description: 'Converts quantitative spreadsheet data and consulting notes into polished executive-ready slide decks.',
        tag: 'Consulting',
      },
      {
        title: 'Secure Client-Isolated Enclaves',
        description: 'Every client matter is completely partitioned in isolated memory to guarantee attorney-client privilege.',
        tag: 'Confidentiality',
      },
    ],
    whyChoose: [
      {
        title: '+35% Realized Billable Efficiency',
        description: 'Recapture lost administrative hours and enable senior talent to focus strictly on strategic advisory work.',
      },
      {
        title: 'Strict Privilege & Confidentiality',
        description: 'Zero data retention, no multi-tenant cross-contamination, and SOC 2 Type II certified infrastructure.',
      },
      {
        title: '90% Faster Document Review Timelines',
        description: 'Turn around M&A due diligence, lease abstractions, and tax audits in hours instead of weeks.',
      },
      {
        title: '5x Faster Client Onboarding',
        description: 'Impress prospective clients by issuing engagement letters and collecting retainers the same day.',
      },
    ],
    metrics: [
      { value: '+35%', label: 'Billable Efficiency Lift', detail: 'Recaptured from non-billable administrative tasks' },
      { value: '90%', label: 'Faster Contract Review', detail: 'Compared to manual first-pass associate redlining' },
      { value: '5x', label: 'Faster Client Intake', detail: 'From inquiry to signed engagement letter & retainer' },
    ],
    useCases: [
      {
        sector: 'Corporate Law Firms',
        title: 'M&A Due Diligence & Contract Abstraction',
        description: 'Auditing 500+ commercial supplier contracts to extract change-of-control clauses and assignability covenants.',
      },
      {
        sector: 'Accounting & Tax Advisory',
        title: 'Trial Balance & Schedule Reconciliation',
        description: 'Automating cross-reconciliation between general ledger accounts and external bank statements for annual audits.',
      },
      {
        sector: 'Management Consulting',
        title: 'Market Research & Competitor Benchmarking',
        description: 'Synthesizing hundreds of earnings call transcripts, analyst reports, and industry publications into executive memos.',
      },
    ],
    mockupData: {
      title: 'Practice Management & AI Co-Counsel',
      subtitle: 'Firm: Morrison & Sterling LLP | Active Matters: 84 | Security: Isolated',
      stats: [
        { label: 'Unbilled Hours Captured', value: '42.5 hrs' },
        { label: 'Contracts Redlined', value: '18' },
        { label: 'Intake Completed', value: '6' },
      ],
      activityLog: [
        { time: 'Just now', action: 'Redlined Master Services Agreement: Flagged uncapped indemnity clause', status: 'Redline Ready' },
        { time: '15m ago', action: 'Cleared conflict check for Horizon Partners acquisition matter', status: 'Cleared' },
        { time: '40m ago', action: 'Captured 2.4 unbilled hours from partner email thread & client memo', status: 'Added to Draft Bill' },
      ],
    },
  },
};
