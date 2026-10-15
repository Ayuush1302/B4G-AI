export interface Service {
  title: string;
  description: string;
  bulletPoints?: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface SiteCopy {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    links: string[];
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
  };
  divider: {
    beats: [string, string, string];
  };
  services: {
    eyebrow: string;
    headline: string;
    items: Service[];
  };
  stats: {
    eyebrow: string;
    headline: string;
    metric1: string;
    metric1Label: string;
    metric2: string;
    metric2Label: string;
    metric3: string;
    metric3Label: string;
  };
  pricing: {
    eyebrow: string;
    headline: string;
    tiers: PricingTier[];
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    items: Testimonial[];
  };
  contact: {
    headline: string;
    subheadline: string;
    formInputs: {
      name: string;
      email: string;
      company: string;
      message: string;
      submitBtn: string;
    };
    formSuccess: string;
    formError: string;
  };
  approach: {
    eyebrow: string;
    headline: string;
    steps: Array<{
      number: string;
      title: string;
      highlightedTitleWord: string;
      description: string;
    }>;
  };
  twoUpValues: {
    block1: {
      headline: string;
      highlightedWord: string;
      paragraph1: string;
      paragraph2: string;
    };
    block2: {
      headline: string;
      highlightedWord: string;
      paragraph1: string;
      paragraph2: string;
    };
  };
  footer: {
    copyright: string;
    links: string[];
  };
}

export const copy: SiteCopy = {
  meta: {
    title: "Clarify | Enterprise Digital Strategy & Insight",
    description: "Transform complex enterprise telemetry into decisive executive action with our premier digital strategy frameworks.",
  },
  navigation: {
    links: ["About", "Services", "Testimonials", "Team", "Pricing"],
    cta: "Request Audit",
  },
  hero: {
    eyebrow: "Strategic Advisory",
    headline: "Intelligence over intuition. Precision for the enterprise.",
    subheadline: "We synthesize your fragmented organizational data into high-conviction roadmaps, empowering executives to act with absolute certainty in volatile markets.",
    primaryCta: "Initiate Consultation",
    secondaryCta: "Review Capabilities",
    stat1Label: "Capital Directed",
    stat1Value: "$[REAL NUMBER]B+",
    stat2Label: "Executive Consensus",
    stat2Value: "[REAL NUMBER]%",
  },
  divider: {
    beats: ["Analyze.", "Synthesize.", "Execute."],
  },
  services: {
    eyebrow: "Core Capabilities",
    headline: "Engineered to dismantle structural ambiguity.",
    items: [
      {
        title: "Executive Decision Architectures",
        description: "Deploying centralized intelligence cockpits that distill multi-source enterprise data into prioritized, board-ready strategic action items.",
      },
      {
        title: "Signal Synthesis Models",
        description: "Cutting through organizational noise by translating massive, unstructured data lakes into high-conviction predictive roadmaps.",
      },
      {
        title: "Capital Allocation Audits",
        description: "Quantitative risk assessments and market exposure stress-testing designed to safeguard and optimize large-scale investments.",
      },
      {
        title: "Friction Point Diagnostics",
        description: "Systematically identifying and eliminating operational bottlenecks across divisions to recapture lost velocity and capital.",
      },
    ],
  },
  stats: {
    eyebrow: "Proven Velocity",
    headline: "Empirical results driven by uncompromising standards.",
    metric1: "[REAL NUMBER]",
    metric1Label: "Global Enterprise Partners",
    metric2: "[REAL NUMBER]",
    metric2Label: "Strategic Implementations",
    metric3: "[REAL NUMBER]%",
    metric3Label: "Year-Over-Year Optimization",
  },
  pricing: {
    eyebrow: "Engagement Models",
    headline: "Predictable advisory structures for enterprise scale.",
    tiers: [
      {
        name: "Diagnostic Sprint",
        price: "$[REAL NUMBER]",
        description: "A highly focused, four-week analytical deep dive to identify immediate structural inefficiencies.",
        features: [
          "Comprehensive systems audit",
          "Executive synthesis briefing",
          "Prioritized action matrix",
          "Risk exposure modeling"
        ]
      },
      {
        name: "Strategic Partnership",
        price: "$[REAL NUMBER]/mo",
        description: "Continuous intelligence synthesis and dedicated advisory for senior leadership teams.",
        isFeatured: true,
        features: [
          "Real-time decision cockpit",
          "Bi-weekly C-suite briefings",
          "Dedicated principal analyst",
          "Quarterly board presentations",
          "Priority implementation support"
        ]
      },
      {
        name: "Enterprise Governance",
        price: "Custom",
        description: "Bespoke data consolidation and proprietary modeling for multinational corporations.",
        features: [
          "Multi-entity data alignment",
          "Custom AI predictive models",
          "On-site strategic workshops",
          "Regulatory compliance mapping",
          "Unrestricted principal access"
        ]
      }
    ]
  },
  testimonials: {
    eyebrow: "Executive Perspectives",
    headline: "Trusted by the vanguard of global industry leaders.",
    items: [
      {
        quote: "[REAL TESTIMONIAL ABOUT STRATEGIC CLARITY AND OPERATIONAL VELOCITY]",
        author: "[REAL NAME]",
        role: "[REAL TITLE, REAL COMPANY]"
      },
      {
        quote: "[REAL TESTIMONIAL HIGHLIGHTING CONFIDENT DECISION-MAKING FROM DATA]",
        author: "[REAL NAME]",
        role: "[REAL TITLE, REAL COMPANY]"
      }
    ]
  },
  contact: {
    headline: "Secure your competitive advantage.",
    subheadline: "Schedule a confidential preliminary diagnostic with our principal strategists.",
    formInputs: {
      name: "Full Name",
      email: "Corporate Email",
      company: "Organization",
      message: "Strategic Objective",
      submitBtn: "Submit Inquiry"
    },
    formSuccess: "Inquiry received. A principal strategist will contact you within 24 hours.",
    formError: "Unable to process your request. Please verify your details or contact us directly."
  },
  approach: {
    eyebrow: "Methodology",
    headline: "A systematic framework for operational excellence.",
    steps: [
      {
        number: "01",
        title: "Enterprise",
        highlightedTitleWord: "Audit",
        description: "We deploy proprietary diagnostic tools to map your organizational data structures and identify critical vulnerabilities."
      },
      {
        number: "02",
        title: "Strategic",
        highlightedTitleWord: "Synthesis",
        description: "Raw telemetry is translated into coherent, predictive models that uncover hidden operational velocity."
      },
      {
        number: "03",
        title: "Decisive",
        highlightedTitleWord: "Execution",
        description: "We partner with your C-suite to implement targeted frameworks that lock in capital efficiency and growth."
      }
    ]
  },
  twoUpValues: {
    block1: {
      headline: "Clarity out of",
      highlightedWord: "Complexity.",
      paragraph1: "Modern enterprises generate more data than they can process, leading to strategic paralysis. We specialize in cutting through this noise to reveal clear, actionable pathways.",
      paragraph2: "By restructuring how your leadership team consumes and interprets operational metrics, we eliminate guesswork and restore absolute confidence in major capital decisions."
    },
    block2: {
      headline: "Built for",
      highlightedWord: "Scale.",
      paragraph1: "Our advisory models are explicitly designed to integrate with global, multi-national organizational structures without disrupting daily operations.",
      paragraph2: "From localized efficiency sprints to complete enterprise-wide data governance overhauls, our frameworks adapt to the precise maturity level of your business."
    }
  },
  footer: {
    copyright: "© 2026 Clarify Advisory. All rights reserved.",
    links: ["Privacy Policy", "Terms of Service", "Disclosures"]
  }
};
