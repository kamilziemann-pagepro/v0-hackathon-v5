/**
 * Sanity Content Migration Script
 *
 * This script migrates content from the Figma design to Sanity CMS.
 *
 * Usage:
 * 1. Make sure you have the Sanity CLI installed: npm install -g @sanity/cli
 * 2. Configure your Sanity project ID and dataset in the .env file
 * 3. Run this script: node scripts/migrate-content.js
 */

const { createClient } = require("@sanity/client");
const dotenv = require("dotenv");

dotenv.config();

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  token: process.env.SANITY_API_TOKEN, // Need a write token
  useCdn: false,
});

// Content to migrate
const content = {
  navbar: {
    _type: "navbar",
    logo: {
      _type: "image",
      alt: "Wealth Data Box Logo",
    },
    menuItems: [
      {
        title: "About",
        link: "/about",
      },
      {
        title: "Pricing",
        link: "/pricing",
      },
      {
        title: "Institutions",
        link: "/institutions",
      },
    ],
    ctaButton: {
      text: "Try For Free",
      link: "/signup",
    },
  },
  hero: {
    _type: "hero",
    title: "Unlocking the power of data for wealth creation",
    subtitle:
      "Single source of trusted data to make wiser, better, and faster investment decisions.",
    ctaButton: {
      text: "Try for free",
      link: "/signup",
    },
  },
  search: {
    _type: "search",
    title:
      "Let Wealth Data Box connect you to your favorite custodian and data source and handle your data quality:",
    institutions: [
      {
        name: "Morgan Stanley",
        logo: {
          _type: "image",
          alt: "Morgan Stanley Logo",
        },
      },
      {
        name: "UBS",
        logo: {
          _type: "image",
          alt: "UBS Logo",
        },
      },
      {
        name: "Credit Suisse",
        logo: {
          _type: "image",
          alt: "Credit Suisse Logo",
        },
      },
      {
        name: "JP Morgan",
        logo: {
          _type: "image",
          alt: "JP Morgan Logo",
        },
      },
    ],
  },
  dataTrust: {
    _type: "dataTrust",
    leftTitle: "Data you can trust",
    leftContent:
      "Wealth Data Box automatically connects you to your most needed custodians and data sources, aggregating your investment data, cleaning, reconciling, verifying, vetting to the highest quality, and delivering as a trusted data seamlessly to your AI and wealth-tech applications, so you can take wiser, better, and faster decisions.",
    leftLink: {
      text: "Learn more",
      url: "/data-trust",
    },
    rightTitle: "Why Wealth Data Box?",
    rightContent:
      "In wealth management, seamless access to multiple sources of data and data quality drive success but also present one of the greatest challenges. Accurate and complete data is the foundation of effective wealth management and AI-powered insights. Data quality is the single most important factor for wealth creation.",
    rightLink: {
      text: "Learn more",
      url: "/why-wealth-data-box",
    },
  },
  statistics: {
    _type: "statistics",
    title: "Our coverage includes over:",
    institutions: {
      count: "130",
      label: "Institutions",
    },
    aum: {
      count: "22",
      label: "AuM",
    },
    accounts: {
      count: "6,000",
      label: "Accounts",
    },
  },
  howItWorks: {
    _type: "howItWorks",
    title: "How it works",
    steps: [
      {
        icon: "globe",
        title: "Data Sources",
        description:
          "Wealth Data Box connects to your custodians, data providers, asset managers, and trading platforms.",
      },
      {
        icon: "database",
        title: "Data Processing",
        description:
          "Investment data liquid and illiquid is unified, aggregated, cleaned, reconciled, verified, and available via Rest API or SFTP server.",
      },
      {
        icon: "barChart",
        title: "Data Integration",
        description:
          "The clean and trusted data can be loaded directly into your AI wealth-tech application, asset reporting, portfolio management system, risk management, accounting, fund management, BI platform or any wealth-tech solution.",
      },
    ],
  },
  dataProcessing: {
    _type: "dataProcessing",
    steps: [
      {
        icon: "download",
        title: "Data Access",
        description:
          "Data is automatically downloaded and via modern secure data access mechanisms.",
      },
      {
        icon: "refreshCw",
        title: "Normalization",
        description:
          "Data is normalized to a unified data model using advanced machine learning techniques.",
      },
      {
        icon: "fileCheck",
        title: "Reconciliation",
        description:
          "Automated data cleaning process supported by AI mapping, ensures 100% (99.87%) data accuracy.",
      },
      {
        icon: "upload",
        title: "Secure Delivery",
        description:
          "Downstream systems access data through modern data delivery mechanisms (REST API).",
      },
    ],
  },
  ourEdge: {
    _type: "ourEdge",
    title: "Our edge and your benefits",
    subtitle:
      "Built to market-leading technology and cybersecurity standards, Wealth Data Box offers concrete benefits and value enhancement to clients:",
    benefits: [
      {
        icon: "clock",
        title:
          "Quality, speed, and simplicity for your daily investment decisions",
      },
      {
        icon: "brain",
        title: "A solid foundation for any AI wealth-tech applications",
      },
      {
        icon: "checkCircle",
        title:
          "Unique data reconciliation engine with near 100% data accuracy (99.87%)",
      },
      {
        icon: "trendingUp",
        title: "Boosts efficiency and reduces costs",
      },
      {
        icon: "refreshCw",
        title: "Automated data aggregation, processing, and delivery",
      },
      {
        icon: "shield",
        title: "Provides an independent source of trusted and secured data",
      },
      {
        icon: "layers",
        title:
          "System-agnostic design lets you choose your wealth-tech solutions or platforms",
      },
      {
        icon: "workflow",
        title: "Seamless and faster onboarding of new data sources/custodians",
      },
      {
        icon: "barChart",
        title:
          "Ready to use data & analytics for prospecting, increasing client wallet share…",
      },
    ],
  },
  whoWeServe: {
    _type: "whoWeServe",
    title: "Who we serve",
    subtitle:
      "Our platform is designed to benefit a wide range of stakeholders and service providers across the wealth management industry.",
    categories: [
      {
        title: "Fintech Providers",
        items: [
          "AI wealth-tech applications",
          "Portfolio management systems",
          "CRM for financial advisors",
          "Asset reporting systems",
          "Accounting / general ledgers",
          "Core-banking systems",
          "Trading platforms",
          "Asset aggregator",
        ],
      },
      {
        title: "Asset Advisors",
        items: [
          "Wealth Managers",
          "Asset Managers",
          "Multi-Family Offices",
          "Trustees",
          "Private Banks",
          "Independent Fund Administrators",
          "VC, Private Equity, or multi-strategy funds",
          "Foundations",
        ],
      },
      {
        title: "Asset Owners",
        items: [
          "Single Family Offices",
          "UHNWIs",
          "Private active investors",
          "Tech entrepreneurs",
        ],
      },
    ],
  },
  ecosystem: {
    _type: "ecosystem",
    title: "Ecosystem",
    partners: [
      {
        title: "Microsoft Azure",
        description:
          "As a Solutions Partner for Data & AI (Azure), we demonstrate our broad capability to help customers manage their data across multiple systems to build data solutions.",
        link: {
          text: "Learn more",
          url: "/partners/microsoft-azure",
        },
      },
      {
        title: "WealthArc",
        description:
          "Wealth Data Box has been powering the WealthArc Portfolio Management System. WealthArc is a personalized wealth management platform built for the next generation of Family Offices, Wealth Managers and Private Banks.",
        link: {
          text: "Learn more",
          url: "/partners/wealtharc",
        },
      },
    ],
  },
  footer: {
    _type: "footer",
    copyright: "© WealthArc 2024",
    privacyPolicy: {
      text: "Privacy Policy",
      url: "/privacy-policy",
    },
    locations: [
      {
        title: "Washington, D.C. metro area",
        address: [
          "WealthArc Inc.",
          "966 Hungerford Drive, Suite 3B",
          "Rockville, MD 20850",
          "United States",
        ],
      },
      {
        title: "Zurich",
        address: ["WealthArc AG", "Dufourstrasse 49, CH-8008", "Switzerland"],
      },
      {
        title: "Warsaw",
        address: [
          "WealthArc sp. z o.o.",
          "Krakowskie Przedmieście 13,",
          "00-071,",
          "Poland",
        ],
      },
    ],
    ctaButton: {
      text: "Try For Free",
      link: "/signup",
    },
  },
};

// Function to create or update a document
async function createOrUpdateDocument(doc) {
  try {
    // Check if document exists
    const existingDoc = await client.fetch(
      `*[_type == "${doc._type}" && _id == "${doc._id}"][0]`
    );

    if (existingDoc) {
      // Update existing document
      console.log(`Updating ${doc._type} document...`);
      return await client.patch(existingDoc._id).set(doc).commit();
    } else {
      // Create new document
      console.log(`Creating new ${doc._type} document...`);
      return await client.create(doc);
    }
  } catch (error) {
    console.error(`Error creating/updating ${doc._type}:`, error);
    throw error;
  }
}

// Main migration function
async function migrateContent() {
  console.log("Starting content migration to Sanity...");

  try {
    // Migrate each content type
    for (const [key, value] of Object.entries(content)) {
      console.log(`Migrating ${key}...`);
      await createOrUpdateDocument(value);
    }

    console.log("Content migration completed successfully!");
  } catch (error) {
    console.error("Migration failed:", error);
  }
}

// Run the migration
migrateContent();
