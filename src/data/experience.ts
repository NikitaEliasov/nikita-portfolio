export type Section = {
  heading?: string;
  paragraphs: string[];
  media?: Media[];
  video?: { src: string; poster?: string; caption?: string };
};

export type Media = {
  src: string;
  alt: string;
  caption?: string;
};

export type Experience = {
  slug: string;
  order: number;
  title: string;
  org: string;
  location: string;
  dates: string;
  summary: string;
  tags: string[];
  logo: Media;
  logoTone: "dark" | "light";
  photo: Media;
  sections: Section[];
};

export const experience: Experience[] = [
  {
    slug: "shield-x-hip-lab",
    order: 1,
    title: "Engineer Co-op",
    org: "Shield-X Technologies, Head Injury Prevention Lab",
    location: "Surrey, BC",
    dates: "Sep 2026 to Present",
    summary:
      "Making helmet impact testing more trustworthy: sensor troubleshooting, impact-speed calculation, and daily drop tests that feed concussion-risk scoring.",
    tags: [
      "Sensor troubleshooting",
      "LabVIEW",
      "DAQ",
      "Impact testing",
      "Research",
    ],
    logo: {
      src: "/images/shield-x/01-logo-card.png",
      alt: "Shield-X Technologies logo",
    },
    logoTone: "dark",
    photo: {
      src: "/images/shield-x/02-helmet-scan.jpg",
      alt: "Helmet on a scan turntable with a live mesh on a laptop",
    },
    sections: [
      {
        heading: "The lab",
        paragraphs: [
          "I joined Shield-X's Head Injury Prevention Lab to help make helmet impact testing more trustworthy. Day to day that means chasing down sensor faults, cleaning up how we calculate impact speed, and supporting drop tests that feed into injury-risk scoring.",
        ],
        media: [
          {
            src: "/images/shield-x/02-helmet-scan.jpg",
            alt: "Helmet on a scan turntable with a live mesh on a laptop",
            caption: "Helmet Scan",
          },
        ],
      },
      {
        heading: "Sensor and speed",
        paragraphs: [
          "One of the first problems was an optical speed system that was not returning clean readings. I checked the sensor circuit with a DMM, traced the bad DAQ signal to a missing ground reference, and brought the levels back into the expected 0 to 5 V range.",
          "After that I redesigned the LabVIEW speed program so the kinematic calculation for helmet impact speed matched what we were actually measuring.",
        ],
        media: [
          {
            src: "/images/shield-x/03-helmet-scan-prep.jpg",
            alt: "Primed helmet with positioning targets for 3D digitizing",
            caption: "Scan Preparation",
          },
        ],
      },
      {
        heading: "Testing and research",
        paragraphs: [
          "Alongside the hardware work I have been reading and framing research on reduced-order impact models and machine learning approaches that could predict helmet kinematics with fewer destructive tests.",
          "On the floor, I help run multi-velocity oblique drop impacts at standardized locations used for Virginia Tech STAR scoring and concussion risk evaluation.",
        ],
      },
    ],
  },
  {
    slug: "greenlight-innovation",
    order: 2,
    title: "Commissioning Project Support Co-op",
    org: "Greenlight Innovation",
    location: "Burnaby, BC",
    dates: "Aug 2024 to Jun 2025",
    summary:
      "Commissioning support for hydrogen fuel cell and electrolyzer test stations, mixing electrical troubleshooting with the parts, issues, and paperwork that keep a line moving.",
    tags: [
      "Commissioning",
      "Fuel cells",
      "Electrical troubleshooting",
      "Power Query",
      "SAP",
    ],
    logo: {
      src: "/images/greenlight/01-logo-card.png",
      alt: "Greenlight Innovation logo",
    },
    logoTone: "light",
    photo: {
      src: "/images/greenlight/02-team-floor.jpg",
      alt: "Greenlight team on the shop floor beside a test station",
    },
    sections: [
      {
        heading: "The role",
        paragraphs: [
          "At Greenlight I supported commissioning for hydrogen fuel cell and electrolyzer test stations. The role mixed hands-on electrical troubleshooting with the project glue that keeps a production line moving: parts, issues, shipping, and handoff paperwork.",
        ],
        media: [
          {
            src: "/images/greenlight/02-team-floor.jpg",
            alt: "Team photo in front of a Greenlight test station on the shop floor",
            caption: "Shop Floor",
          },
        ],
      },
      {
        heading: "The stations",
        paragraphs: [
          "I helped coordinate production, shipment, and commissioning support across 23 stations, tracking engineering changes, parts, and Factory Acceptance Tests. When stations failed sensors or actuators, I tested panels with a DMM, worked remotely with onsite technicians to isolate bad parts, and pushed purchase orders so repairs did not stall on site.",
          "I also read P&IDs, electrical drawings, and BOMs to build repair plans for high-pressure and high-temperature systems.",
        ],
      },
      {
        heading: "The systems",
        paragraphs: [
          "A lot of the win was operational. I automated KPI collection with Power Query and VBA, built an Excel issue dashboard that cut missed issues and parts dramatically, and used Power Automate to streamline commissioning shipping.",
          "I also helped roll out SAP for the department with SOPs and training so the team adopted the new workflow faster. In November 2024 I completed Greenlight's Commissioning Support and Station Operation training certificate.",
        ],
        media: [
          {
            src: "/images/greenlight/03-certificate.jpg",
            alt: "Commissioning Support Certificate, 7 November 2024",
            caption: "Training Certificate",
          },
        ],
      },
    ],
  },
];

export function getExperience(slug: string) {
  return experience.find((item) => item.slug === slug);
}
