import type { Media, Section } from "./experience";

export type Metric = { label: string; value: string };

export type Project = {
  slug: string;
  order: number;
  title: string;
  subtitle?: string;
  org: string;
  dates: string;
  summary: string;
  tags: string[];
  card: Media;
  gallery: Media[];
  sections: Section[];
  metrics?: Metric[];
  video?: { src: string; poster?: string; caption?: string };
  extraVideo?: {
    src: string;
    poster?: string;
    caption?: string;
    description?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sfu-rover-communications",
    order: 1,
    title: "Communications Team Lead",
    subtitle: "SFU Polaris Rover",
    org: "SFU Satellite Rover Project · Canadian International Rover Challenge 2027",
    dates: "Apr 2026 to Present",
    summary:
      "Keeping command, telemetry, and video alive over rough terrain when the rover is hundreds of meters away and out of line of sight.",
    tags: [
      "RF systems",
      "900 MHz and 2.4 GHz",
      "System design",
      "BOM and budget",
      "Team leadership",
    ],
    card: {
      src: "/images/sfu-rover-communications/01-card.jpg",
      alt: "SFU Polaris rover with six wheels on sandy terrain",
    },
    gallery: [
      {
        src: "/images/sfu-rover-communications/01-card.jpg",
        alt: "SFU Polaris rover with six wheels on sandy terrain",
        caption: "Polaris rover during field testing.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "I lead communications for SFU's Polaris rover team as we prepare for CIRC. The job is to keep command, telemetry, and video alive over rough terrain when the rover is hundreds of meters away and not always in line of sight.",
          "We specified a dual-link architecture: 900 MHz for command and telemetry, and 2.4 GHz for video, targeting about 500 m non-line-of-sight. That means aligning with electrical, software, mechanical, and controls on power budgets, antenna placement, interfaces, and field-test constraints. I also recruited and onboarded new teammates so the subteam could start design and research quickly, and built a full system BOM inside a $2,500 CAD budget that includes a low-cost ESP32 prototype path.",
        ],
      },
    ],
  },
  {
    slug: "notion-learning-system",
    order: 2,
    title: "Personal Notion Workspace and Learning System",
    org: "Personal project",
    dates: "Sep 2024 to Present",
    summary:
      "One workspace for courses, assignments, tests, and projects, with active recall and spaced repetition built into the daily flow.",
    tags: [
      "Notion",
      "Active recall",
      "Spaced repetition",
      "Automation",
      "Systems thinking",
    ],
    card: {
      src: "/images/notion-learning-system/02-calendar.jpg",
      alt: "Notion calendar view of a term schedule",
    },
    gallery: [
      {
        src: "/images/notion-learning-system/02-calendar.jpg",
        alt: "Notion calendar view showing a term schedule of lectures, labs, and exams",
        caption: "Calendar view for a term of lectures, labs, and exams.",
      },
      {
        src: "/images/notion-learning-system/03-assignments.jpg",
        alt: "Notion assignments table tracking courses, dates, and progress",
        caption: "Assignments table with course, due date, and progress.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "School, co-ops, and club work pile up fast. I built a Notion workspace so courses, assignments, tests, and projects live in one place instead of three different apps and a messy downloads folder.",
          "Calendar and board views show deadlines and workload for each term. Templates cover meeting notes, project logs, and a daily journal so decisions and open issues do not get lost when I jump between teams. I also set up active recall and spaced repetition automations that schedule review sessions on evidence-based intervals, which helps technical material stick without eating the time I need for builds and labs.",
        ],
      },
    ],
  },
  {
    slug: "plc-bottling-plant",
    order: 3,
    title: "PLC Automated Bottling Plant",
    org: "Academic course project · LogixPro / RSLogix 500 simulation",
    dates: "Apr 2026 to Oct 2026",
    featured: true,
    summary:
      "Ladder logic for a simulated bottling line with conveyors, sensors, fill and cap stations, and scrap routing that still behaves when something goes wrong.",
    tags: [
      "Ladder logic",
      "RSLogix 500",
      "HMI counters",
      "Simulation",
      "Debugging",
    ],
    card: {
      src: "/images/plc-bottling-plant/01-card-plant.jpg",
      alt: "Bottle line simulation screen with conveyor, fill stations, and counters",
    },
    gallery: [
      {
        src: "/images/plc-bottling-plant/06-ladder-logic.png",
        alt: "Main ladder logic with line run and station subroutines",
        caption: "Main ladder (LAD 2) with line run and station subroutines.",
      },
      {
        src: "/images/plc-bottling-plant/02-counters.png",
        alt: "Counter and HMI related logic",
        caption: "Counters and HMI-related logic.",
      },
      {
        src: "/images/plc-bottling-plant/03-user-logic.png",
        alt: "Additional user logic screenshot",
        caption: "Additional user logic.",
      },
      {
        src: "/images/plc-bottling-plant/04-fill-sequence.png",
        alt: "Fill sequence rungs from the logic PDF",
        caption: "Fill sequence rungs.",
      },
      {
        src: "/images/plc-bottling-plant/05-sort-sequence.png",
        alt: "Sort sequence rungs from the logic PDF",
        caption: "Sort sequence rungs.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "This project was about making a simulated bottling line behave like a real plant: conveyors, sensors, fill and cap stations, and scrap routing that still makes sense when something goes wrong.",
          "I wrote ladder logic that coordinates conveyor movement with sensor inputs and actuator outputs across the production sequence. Timers, counters, and data instructions track bottle size and condition so intact and broken bottles take different paths. The program is organized with subroutines for fill, cap, sort, scrap, and HMI counters instead of one giant rung list.",
          "Debugging meant validating the sequence against 25 functional requirements in simulation: start and stop behavior, conveyor interlocks, fill and cap timing, and live production counts. When a station finished late or a counter drifted, the modular structure made it easier to isolate the fault without rewriting everything.",
        ],
      },
    ],
  },
  {
    slug: "smart-glasses",
    order: 4,
    title: "LENZ Smart Running Glasses",
    subtitle: "Team LENZ President · Capstone project",
    org: "SFU Mechatronic Systems Engineering Capstone · sponsored by FORM Swim",
    dates: "Jan 2026 to Sep 2026",
    summary:
      "Running glasses that find your cadence, pace, and stride from head motion alone. Put them on. Go run.",
    featured: true,
    tags: [
      "Wearables",
      "BLE and IMU",
      "Signal processing",
      "Machine learning",
      "Systems integration",
    ],
    metrics: [
      { label: "Wearable weight", value: "~36 g" },
      { label: "Battery life", value: "12+ h" },
      {
        label: "Hardware cost",
        value: "$110 to $120",
      },
      { label: "Speed error", value: "~0.16 mph avg" },
      { label: "Step accuracy", value: "~97%" },
      { label: "Result", value: "Best Industry Sponsored Project" },
    ],
    card: {
      src: "/images/smart-glasses/00-card.jpg",
      alt: "LENZ running glasses with a 3D-printed sensor mount on the temple",
    },
    video: {
      src: "/videos/lenz/lenz-ad.mp4",
      poster: "/images/smart-glasses/01-ad-poster.jpg",
      caption: "The 54-second LENZ showcase video.",
    },
    gallery: [
      {
        src: "/images/smart-glasses/02-timing.png",
        alt: "LENZ web app timing screen showing lap, split, ground contact time, and flight time",
        caption: "Timing screen: lap, split, ground contact, and flight time.",
      },
      {
        src: "/images/smart-glasses/03-cadence.png",
        alt: "LENZ web app workout screen showing live cadence and a coaching tip",
        caption: "Workout screen: live cadence with a coaching tip.",
      },
      {
        src: "/images/smart-glasses/04-team-expo.jpg",
        alt: "Team LENZ at the Capstone Expo booth",
        caption: "Team LENZ at the Capstone Expo.",
      },
      {
        src: "/images/smart-glasses/05-award.jpg",
        alt: "Best Industry Sponsored Project award for LENZ",
        caption: "Best Industry Sponsored Project award.",
      },
    ],
    extraVideo: {
      src: "/videos/lenz/lenz-skeleton-gait.mp4",
      poster: "/images/smart-glasses/06-skeleton-poster.jpg",
      caption: "Skeleton tracking used to study gait.",
      description:
        "Side-by-side skeleton tracking and treadmill footage used to line head motion up with each foot strike.",
    },
    sections: [
      {
        heading: "The gap we saw",
        paragraphs: [
          "Smart glasses have gotten really good. They play music, take photos and video, answer questions with AI, and some even put a display in front of your eye. But they were mostly showing someone else's data. We could not find head-mounted tech that was truly built for sport and could find the data on its own.",
          "Running is everywhere and needs no gym, no team, and no special place, yet nobody owns running glasses. Most runners also train alone, with no coach watching how they move. A common habit is overstriding, when the foot lands too far out in front of the body. Each step acts a little like a brake, and that extra strain is linked to running injuries.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "LENZ is a pair of running glasses that finds all of your running metrics from the glasses themselves. One small motion sensor on the arm of the glasses feels every bounce and turn of your head. From that motion alone, LENZ works out your cadence, pace, and stride length in real time, along with speed, distance, and step count. Cadence is simply how many steps you take per minute. No watch. No foot pod.",
          "We started with Goodr running glasses straight off the shelf and designed a small 3D-printed clip that holds the sensor in the middle of the arm. The finished glasses weigh about 36 grams, compared with about 66 grams for the Oakley Meta Vanguard. The sensor runs for more than 12 hours on a charge, and all the parts together cost around $110 to $120.",
          "The sensor sends its data over Bluetooth to a phone, tablet, or laptop, where our software turns the motion into numbers and shows them in a companion app. Your metrics update live, cadence changes color to show whether you are in a good range, and after about 15 seconds of running the app gives short coaching tips of ten words or less based on your own recent runs.",
        ],
      },
      {
        heading: "The hard part",
        paragraphs: [
          "The biggest problem was that head motion is not foot motion. A watch can use GPS to know where you are and how fast you are going. Our glasses have no GPS. They only know how your head moves, and every head tilt and glance shows up in the data as noise.",
          "So we learned how head motion connects to what your legs are doing. We ran on treadmills at known speeds from a slow walk up to a fast run over several days, recording video from behind and from the side and lining up a skeleton model with what the sensor felt. Counting steps came first, since every step lifts and drops your head a little and the rhythm of that bounce is your cadence.",
        ],
      },
      {
        heading: "How well it worked",
        paragraphs: [
          "Our goal was to stay within 10 percent of the true values. On our test runs the speed estimate was off by about 0.16 mph on average, and step counts were about 97 percent accurate. There are real limits: the speed model was trained for one runner, so a new runner would need a short calibration run first, and most testing was on treadmills rather than outdoors. LENZ is a training aid, not a medical device.",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I was the president of Team LENZ. Part of the job was keeping four people with very different skills moving in the same direction: setting timelines, splitting work across mechanical design, signal processing, and machine learning, and making sure deliverables landed on time. I also planned the budget. The hardest stretch was the end, when the hardware, the models, and the app all had to come together for a live demo in front of a room full of people.",
          "The other part was hands on. With Zakhar I built the Bluetooth link that pulls raw motion data off the sensor. From there I led systems integration, getting the sensor, the Bluetooth link, the backend, and the app to work as one product. I built the algorithm that smooths the signal and estimates cadence reliably, and I worked out ground contact time and flight time by finding the moment the foot strikes within each stride. I also built the companion app, from the workout flow to the live metrics screen, coaching tips, and workout history.",
        ],
      },
      {
        heading: "The team",
        paragraphs: [
          "That team was Laith Allawy, Emiliano Cigarroa Aguilar, and Zakhar Vozovik. Laith worked on mechanical design and filmed and edited our video ad. Emiliano built the speed model. Zakhar built the activity model and led much of our data collection. Our supervisor, Dr. Farid Golnaraghi, pushed us to take real risks and held us to a high standard the whole way.",
          "At SFU's 2026 MSE Capstone Event we gave our talk, played the video ad, and ran a live demo at our booth. LENZ won Best Industry Sponsored Project.",
        ],
      },
    ],
  },
  {
    slug: "calligraphy-robot-arm",
    order: 5,
    title: "Calligraphy Robot Arm (3-DOF)",
    org: "Academic robotics project · SFU MSE429",
    dates: "Jan 2026 to Apr 2026",
    featured: true,
    summary:
      "A three-degree-of-freedom arm designed in SolidWorks with kinematics and trajectory work in MATLAB, built to draw continuous strokes rather than a handful of points.",
    tags: [
      "SolidWorks",
      "Robot kinematics",
      "MATLAB",
      "Trajectory planning",
      "Harmonic drives",
    ],
    card: {
      src: "/images/calligraphy-robot-arm/01-card-arm.jpg",
      alt: "CAD render of a three-link robot arm over a wooden table",
    },
    gallery: [
      {
        src: "/images/calligraphy-robot-arm/06-assembly-full-table.jpg",
        alt: "Full arm assembly CAD render on the table workspace",
        caption: "Full arm assembly on the table workspace.",
      },
      {
        src: "/images/calligraphy-robot-arm/02-solidworks-link.jpg",
        alt: "SolidWorks link part on a workstation",
        caption: "Link part in SolidWorks.",
      },
      {
        src: "/images/calligraphy-robot-arm/03-isometric-sketch.jpg",
        alt: "Notebook isometric sketch of the link and end effector",
        caption: "Notebook isometric view with the end effector.",
      },
      {
        src: "/images/calligraphy-robot-arm/04-inverse-kinematics.jpg",
        alt: "Inverse kinematics solution diagram",
        caption: "Inverse kinematics solution.",
      },
      {
        src: "/images/calligraphy-robot-arm/05-cad-to-matlab.jpg",
        alt: "CAD geometry visualized in MATLAB",
        caption: "CAD geometry brought into MATLAB.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "The brief was a small manipulator that could draw, not just move to points. We needed a 3-DOF arm with enough workspace and control to trace continuous strokes, including the letter A.",
          "I designed the arm in SolidWorks: custom links, motor and drive selection, encoders, and an end effector meant for drawing. Early sketches locked the isometric link layout and where harmonic drives would sit. In MATLAB I derived forward and inverse kinematics, built the Jacobian for velocity control, and generated continuous-point trajectories so the tip could follow a calligraphy path instead of a handful of waypoints. We also moved CAD geometry into MATLAB so simulation and the mechanical model stayed aligned.",
        ],
      },
    ],
  },
  {
    slug: "fan-speed-controller",
    order: 6,
    title: "Fan Speed Controller (8051 MCU)",
    org: "Embedded systems and electronics course project",
    dates: "Oct 2025 to Dec 2025",
    summary:
      "A closed-loop fan controller: simulated in Proteus, built on a breadboard around an 8051, and proven on a scope instead of trusting the simulation alone.",
    tags: [
      "8051",
      "Embedded C",
      "PID control",
      "PWM",
      "Proteus",
      "Oscilloscope",
    ],
    card: {
      src: "/images/fan-speed-controller/01-hero-breadboard.jpg",
      alt: "Breadboard and 8051 board with a live RPM display",
    },
    gallery: [
      {
        src: "/images/fan-speed-controller/02-scope-debug.jpg",
        alt: "Oscilloscope probes on the running circuit",
        caption: "Scope probes on the running circuit.",
      },
      {
        src: "/images/fan-speed-controller/03-wiring-detail.jpg",
        alt: "Close view of wiring and the transistor drive section",
        caption: "Wiring and transistor drive section.",
      },
      {
        src: "/images/fan-speed-controller/04-setup-top-view.jpg",
        alt: "Top view of the setup from the project report",
        caption: "Top view of the setup.",
      },
      {
        src: "/images/fan-speed-controller/05-wiring-closeup.jpg",
        alt: "Breadboard close-up from the project report",
        caption: "Breadboard close-up.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "I wanted a closed-loop fan controller I could fully own: simulate it, breadboard it, tune it, and prove it on a scope instead of trusting the simulation alone.",
          "I designed and simulated the circuit in Proteus, then built it on a breadboard around an 8051 MCU, DIP-switch setpoints, a MOSFET PWM drive, and a 3-digit RPM display. Firmware in C reads tachometer interrupts, runs a PID loop with Ziegler-Nichols tuning, and updates the display while holding speed. Validation used an oscilloscope on the tach square wave and PWM drive, plus DMM checks on DC rails to the fan and MCU. Gain tuning focused on cutting overshoot and settling time when the load changed.",
        ],
      },
    ],
  },
  {
    slug: "widget-assembly-line",
    order: 7,
    title: "Automated Widget Assembly Line",
    org: "SFU MSE310 Sensors and Actuators · LabVIEW",
    dates: "Sep 2025 to Dec 2025",
    summary:
      "A state-based LabVIEW line that sorts good widgets from bad in real time and keeps its production counts across a power loss.",
    tags: [
      "LabVIEW",
      "State machines",
      "Sensors",
      "CSV logging",
      "Recovery",
    ],
    card: {
      src: "/images/widget-assembly-line/01-hero-sorting-logic.jpg",
      alt: "LabVIEW sorting and dropper logic block diagram",
    },
    gallery: [
      {
        src: "/images/widget-assembly-line/02-labview-detail.jpg",
        alt: "Additional LabVIEW block diagram detail",
        caption: "Additional LabVIEW block detail.",
      },
      {
        src: "/images/widget-assembly-line/03-file-recovery.jpg",
        alt: "LabVIEW record and load file recovery loops",
        caption: "Record and load file recovery loops.",
      },
      {
        src: "/images/widget-assembly-line/04-report-page2.jpg",
        alt: "Report page with system context",
        caption: "Report page with system context.",
      },
      {
        src: "/images/widget-assembly-line/05-report-page3.jpg",
        alt: "Report page with control diagrams",
        caption: "Report page with control diagrams.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "The lab line had to sort good widgets from bad ones in real time using laser and capacitive sensing, then keep counting even if someone killed power mid-run.",
          "I built a state-based LabVIEW controller that ties sensors to solenoid actuators for sorting and defect rejection. A counter-based queue tracks true material efficiency while separating valid and defective outputs, with failure detection held at 100 percent in our test cases. CSV logging and startup recovery preserve production counts and system state across shutdowns so a restart does not wipe the shift's numbers.",
        ],
      },
    ],
  },
  {
    slug: "vehicle-restoration",
    order: 8,
    title: "Vehicle Restoration",
    subtitle: "Ford Escape hybrid rebuild",
    org: "Personal / self-directed",
    dates: "Jul 2022 to Oct 2024",
    summary:
      "A multi-year rebuild of a hybrid Ford Escape on a tracked $10,000 budget: mechanical work, body repair, and high-voltage battery recovery.",
    featured: true,
    tags: [
      "Automotive",
      "HV battery",
      "Suspension",
      "Bodywork",
      "Budgeting",
    ],
    metrics: [
      { label: "Budget", value: "$10,000 tracked" },
      { label: "HV battery", value: "~40% vs pack replacement" },
      { label: "Duration", value: "2+ years" },
    ],
    card: {
      src: "/images/vehicle-restoration/01-card-undercarriage.jpg",
      alt: "Coated rear undercarriage on a lift with red calipers",
    },
    gallery: [
      {
        src: "/images/vehicle-restoration/02-engine-bay.jpg",
        alt: "Front of the Escape with the hood open in the shop",
        caption: "Front of the Escape with the hood open.",
      },
      {
        src: "/images/vehicle-restoration/03-brake-detail.jpg",
        alt: "Rotor and red caliper detail",
        caption: "Rotor and caliper detail.",
      },
      {
        src: "/images/vehicle-restoration/04-suspension-work.jpg",
        alt: "Hub and suspension work with the caliper pulled",
        caption: "Suspension work with the caliper pulled.",
      },
      {
        src: "/images/vehicle-restoration/05-bumper-bodywork.jpg",
        alt: "Bumper sanded and filled for refinish",
        caption: "Bumper sanded and filled for refinish.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "This was a multi-year rebuild of a hybrid Ford Escape on a tracked $10,000 budget. The car needed mechanical work, body repair, and high-voltage battery recovery, not just a weekend oil change.",
          "I used an Excel system to track spend and parts so delays did not sneak up through missing inventory. The hybrid HV battery would not respond, so I set up a proper HV charge path, brought it back online, and avoided a full pack replacement, saving about 40 percent on that line item. Around the chassis I rebuilt and integrated suspension, HVAC, body, and emissions work with power and hand tools: control arms and bushings, an A/C compressor and lines for better battery cooling, undercarriage rust removal and undercoating, brakes, fluids, and an evaporative leak repair that avoided a large labour bill.",
        ],
      },
    ],
  },
  {
    slug: "building-pc",
    order: 9,
    title: "Building PC",
    org: "Personal / self-directed",
    dates: "May 2023 to Oct 2023",
    summary:
      "A desktop built to stay cool under long engineering workloads, with custom 3D-printed GPU support so the card would not sag on the PCIe slot.",
    tags: [
      "Airflow planning",
      "Cable management",
      "3D printing",
      "SolidWorks",
    ],
    card: {
      src: "/images/building-pc/01-card.jpg",
      alt: "White PC case with an RTX graphics card, AIO cooler, and cable routing",
    },
    gallery: [
      {
        src: "/images/building-pc/02-parts-haul.jpg",
        alt: "Parts laid out before the build",
        caption: "Parts before the build.",
      },
    ],
    sections: [
      {
        paragraphs: [
          "I built a desktop that could stay cool under long engineering workloads without turning the case into a cable nest.",
          "Airflow was the main constraint. I planned radiator placement and fan paths so heat from the GPU and CPU had a clear exit, then dressed the build for stable long sessions. For a heavy GPU I designed and 3D-printed support brackets in SolidWorks so the card would not sag on the PCIe slot.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
