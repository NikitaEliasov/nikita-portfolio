export const site = {
  name: "Nikita Eliasov",
  role: "Mechatronic Systems Engineer",
  headline: "I build things that move, sense, and stay reliable under pressure.",
  location: "Vancouver, BC",
  email: "nikita.eliasov@gmail.com",
  linkedin: "https://www.linkedin.com/in/nikita-eliasov",
  linkedinLabel: "linkedin.com/in/nikita-eliasov",
  education: {
    degree: "B.A.Sc. Mechatronic Systems Engineering",
    school: "Simon Fraser University",
    dates: "Sep 2022 to Dec 2026",
  },
  intro:
    "Mechatronics student working between hardware and software: lab testing, commissioning, wearables, PLCs, and the messy middle where drawings, sensors, and code have to agree.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects/", label: "Projects" },
    { href: "/experience/", label: "Experience" },
    { href: "/about/", label: "About" },
  ],
} as const;

export const about = {
  bio: [
    "I am a mechatronics student who likes building things that move, sense, and stay reliable under pressure. Most of my work sits somewhere between hardware and software: lab testing, commissioning, wearables, PLCs, and the messy middle where drawings, sensors, and code have to agree.",
    "I learn fastest with a real problem in front of me, whether that is a helmet impact rig, a fuel-cell test station, or a pair of glasses that has to estimate cadence without getting in the way of a run. Outside class I lead communications on SFU's satellite rover team and keep rebuilding skills on personal projects like restoring a hybrid Ford Escape.",
  ],
  focus: [
    {
      title: "Embedded and electronics",
      detail:
        "8051 firmware, PID control, PWM drive, breadboard bring-up, and scope-based validation.",
    },
    {
      title: "Test and commissioning",
      detail:
        "Fuel-cell and electrolyzer test stations, sensor troubleshooting with a DMM, P&IDs and electrical drawings, FATs.",
    },
    {
      title: "Mechanical and CAD",
      detail:
        "SolidWorks design, 3D-printed mounts and brackets, kinematics and trajectory work in MATLAB.",
    },
    {
      title: "Automation and software",
      detail:
        "PLC ladder logic, LabVIEW state machines, Python and TypeScript, Power Query and VBA for reporting.",
    },
  ],
  facts: [
    { label: "Based in", value: "Vancouver, BC" },
    { label: "Studying", value: "Mechatronic Systems Engineering, SFU" },
    { label: "Graduating", value: "Dec 2026" },
    { label: "Interests", value: "Wearables, controls, test systems, cars" },
  ],
} as const;
