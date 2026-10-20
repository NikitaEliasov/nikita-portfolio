import type { Media, Section } from "./experience";

export type Project = {
  slug: string;
  order: number;
  title: string;
  kind: string;
  subtitle?: string;
  org: string;
  dates: string;
  summary: string;
  shortVersion: string;
  highlight?: string;
  tags: string[];
  card: Media;
  video?: { src: string; poster?: string; caption?: string };
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: "sfu-rover-communications",
    order: 3,
    kind: "Club",
    title: "Communications Team Lead",
    subtitle: "SFU Polaris Rover",
    org: "SFU Satellite Rover Project · Canadian International Rover Challenge 2027",
    dates: "Apr 2026 to Present",
    summary:
      "Keeping command, telemetry, and video alive over rough terrain when the rover is hundreds of meters away and out of line of sight.",
    shortVersion:
      "I lead communications for SFU's Polaris rover team ahead of the Canadian International Rover Challenge. The rover needs command, telemetry, and video at roughly 500 m without line of sight, so I set a dual-link architecture and built the plan around it.",
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
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "The rover has to stay connected over rough terrain, dust, and distance. A dropped command link can stop a run, and a dropped video link can hide what the rover is doing.",
        ],
      },
      {
        heading: "The plan",
        paragraphs: [
          "We specified a dual-link architecture: 900 MHz for command and telemetry, and 2.4 GHz for video, targeting about 500 m non-line-of-sight. That means aligning with electrical, software, mechanical, and controls on power budgets, antenna placement, interfaces, and field-test constraints.",
          "I also recruited and onboarded new teammates so the subteam could start design and research quickly, and built a full system BOM inside a $2,500 CAD budget that includes a low-cost ESP32 prototype path.",
        ],
      },
    ],
  },
  {
    slug: "notion-learning-system",
    order: 5,
    kind: "Personal",
    title: "Personal Notion Workspace and Learning System",
    org: "Personal project",
    dates: "Sep 2024 to Present",
    summary:
      "One workspace for courses, assignments, tests, and projects, with active recall and spaced repetition built into the daily flow.",
    shortVersion:
      "I built a Notion workspace to run a full engineering term in one place: courses, assignments, tests, projects, meeting notes, and review sessions. It replaced a pile of separate apps and made the next action visible each day.",
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
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "School, co-ops, and club work pile up fast. Before this, course info, deadlines, and project notes lived in separate places, and the next action was not always obvious.",
        ],
      },
      {
        heading: "The system",
        paragraphs: [
          "Calendar and board views show deadlines and workload for each term. Templates cover meeting notes, project logs, and a daily journal so decisions and open issues do not get lost when I jump between teams.",
          "I also set up active recall and spaced repetition automations that schedule review sessions on evidence-based intervals, which helps technical material stick without eating the time I need for builds and labs.",
        ],
        media: [
          {
            src: "/images/notion-learning-system/03-assignments.jpg",
            alt: "Notion assignments table tracking courses, dates, and progress",
            caption: "Assignments",
          },
        ],
      },
    ],
  },
  {
    slug: "plc-bottling-plant",
    order: 4,
    kind: "Course",
    title: "PLC Automated Bottling Plant",
    org: "Academic course project · LogixPro / RSLogix 500 simulation",
    dates: "Apr 2026 to Aug 2026",
    summary:
      "Ladder logic for a simulated bottling line with conveyors, sensors, fill and cap stations, and scrap routing that still behaves when something goes wrong.",
    shortVersion:
      "A simulated bottling line with conveyors, fill and cap stations, and scrap routing. I wrote modular ladder logic and validated the sequence against 25 functional requirements, including what happens when a station finishes late or a counter drifts.",
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
    sections: [
      {
        heading: "The line",
        paragraphs: [
          "A bottling line fails in small ways: a bottle arrives early, a cap station lags, a counter drifts. The logic has to handle those cases without stopping the whole line.",
        ],
        media: [
          {
            src: "/images/plc-bottling-plant/06-ladder-logic.png",
            alt: "Main ladder logic with line run and station subroutines",
            caption: "Main Ladder Logic",
          },
        ],
      },
      {
        heading: "The logic",
        paragraphs: [
          "I wrote ladder logic that coordinates conveyor movement with sensor inputs and actuator outputs across the production sequence. Timers, counters, and data instructions track bottle size and condition so intact and broken bottles take different paths. The program is organized with subroutines for fill, cap, sort, scrap, and HMI counters instead of one giant rung list.",
        ],
        media: [
          {
            src: "/images/plc-bottling-plant/04-fill-sequence.png",
            alt: "Fill sequence rungs from the logic PDF",
            caption: "Fill Sequence",
          },
          {
            src: "/images/plc-bottling-plant/05-sort-sequence.png",
            alt: "Sort sequence rungs from the logic PDF",
            caption: "Sort Sequence",
          },
        ],
      },
      {
        heading: "Debugging",
        paragraphs: [
          "Debugging meant validating the sequence against 25 functional requirements in simulation: start and stop behavior, conveyor interlocks, fill and cap timing, and live production counts. When a station finished late or a counter drifted, the modular structure made it easier to isolate the fault without rewriting everything.",
        ],
        media: [
          {
            src: "/images/plc-bottling-plant/02-counters.png",
            alt: "Counter and HMI related logic",
            caption: "Counters and HMI",
          },
          {
            src: "/images/plc-bottling-plant/03-user-logic.png",
            alt: "Additional user logic screenshot",
            caption: "User Logic",
          },
        ],
      },
    ],
  },
  {
    slug: "smart-glasses",
    order: 1,
    kind: "Capstone",
    title: "LENZ Smart Running Glasses",
    subtitle: "Team LENZ President",
    org: "SFU Mechatronic Systems Engineering Capstone · sponsored by FORM Swim",
    dates: "Jan 2026 to Sep 2026",
    summary:
      "Running glasses that find your cadence, pace, and stride from head motion alone. Put them on. Go run.",
    shortVersion:
      "Runners want feedback without breaking stride. LENZ puts one motion sensor on a pair of running glasses and turns head motion into cadence, pace, and stride in real time. I led the four-person team and built the Bluetooth link, integration, and companion app.",
    highlight: "Best Industry Sponsored Project",
    tags: [
      "Wearables",
      "BLE and IMU",
      "Signal processing",
      "Machine learning",
      "Systems integration",
    ],
    card: {
      src: "/images/smart-glasses/00-card.jpg",
      alt: "LENZ running glasses with a 3D-printed sensor mount on the temple",
    },
    video: {
      src: "/videos/lenz/lenz-ad.mp4",
      poster: "/images/smart-glasses/01-ad-poster.jpg",
      caption: "LENZ Product Presentation",
    },
    sections: [
      {
        heading: "The gap",
        paragraphs: [
          "Smart glasses already play music, take photos, and show messages. Most of them only showed data from a phone or watch. We could not find a pair built for running that found its own metrics.",
          "Running is everywhere, and most runners train alone. A common habit is overstriding, where the foot lands too far in front of the body. Each step acts like a brake, and the extra strain is linked to injury. A coach would spot it. Most runners never have one.",
        ],
      },
      {
        heading: "What we built",
        paragraphs: [
          "LENZ is a pair of running glasses that finds cadence, pace, and stride length from the glasses themselves. One small motion sensor on the arm feels every bounce and turn of the head. From that motion alone, the software works out speed, distance, step count, and ground contact time. No watch. No foot pod.",
          "We started with Goodr frames and designed a 3D-printed clip that holds the sensor in the middle of the arm. The finished glasses weigh about 36 grams, run for more than 12 hours, and cost about $110 to $120 in parts.",
        ],
        media: [
          {
            src: "/images/smart-glasses/00-card.jpg",
            alt: "LENZ running glasses with a 3D-printed sensor mount on the temple",
            caption: "LENZ Glasses",
          },
          {
            src: "/images/smart-glasses/01-hero-glasses.jpg",
            alt: "Close view of the black IMU mount on the glasses temple",
            caption: "IMU Mount",
          },
        ],
      },
      {
        heading: "The hard part",
        paragraphs: [
          "Head motion is not foot motion. A watch can use GPS. Our glasses have no GPS, so every head tilt and glance shows up as noise.",
          "We ran on treadmills at known speeds, from a slow walk to a fast run, and recorded video from behind and the side. Then we lined a skeleton model up with what the sensor felt. Counting steps came first: every step lifts and drops the head a little, and that rhythm is cadence. Speed was harder. Emiliano trained a model on the treadmill runs until it could predict speed from head motion.",
        ],
        video: {
          src: "/videos/lenz/lenz-skeleton-gait.mp4",
          poster: "/images/smart-glasses/06-skeleton-poster.jpg",
          caption: "Gait Analysis",
        },
      },
      {
        heading: "How well it worked",
        paragraphs: [
          "Our goal was to stay within 10 percent of the true values. On test runs, speed was off by about 0.16 mph on average, and step counts were about 97 percent accurate. The limits are real: the speed model was trained on one runner, and most testing happened on a treadmill. LENZ is a training aid, not a medical device.",
        ],
        media: [
          {
            src: "/images/smart-glasses/02-timing.png",
            alt: "LENZ web app timing screen showing lap, split, ground contact time, and flight time",
            caption: "Timing Screen",
          },
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I was president of Team LENZ. I set timelines, split work across mechanical design, signal processing, and machine learning, and planned the budget. The last month was the hard part: the hardware, models, and app all had to work in one live demo.",
          "With Zakhar, I built the Bluetooth link that pulls raw motion off the sensor. I led systems integration and built the algorithm that smooths the signal and estimates cadence. I also worked out ground contact and flight time, and built the companion app from the workout flow to the live metrics screen.",
        ],
        media: [
          {
            src: "/images/smart-glasses/03-cadence.png",
            alt: "LENZ web app workout screen showing live cadence and a coaching tip",
            caption: "Workout Screen",
          },
        ],
      },
      {
        heading: "The team",
        paragraphs: [
          "Laith Allawy designed the mechanical parts and filmed and edited the product video. Emiliano Cigarroa Aguilar built the speed model. Zakhar Vozovik built the activity model and led much of the data collection. Dr. Farid Golnaraghi supervised the project and held us to a high standard.",
          "At SFU's 2026 MSE Capstone Event we gave our talk, played the video, and ran a live demo. LENZ won Best Industry Sponsored Project.",
        ],
        media: [
          {
            src: "/images/smart-glasses/04-team-expo.jpg",
            alt: "Team LENZ at the Capstone Expo booth",
            caption: "Capstone Expo",
          },
          {
            src: "/images/smart-glasses/05-award.jpg",
            alt: "Best Industry Sponsored Project award for LENZ",
            caption: "Best Industry Sponsored Project",
          },
        ],
      },
    ],
  },
  {
    slug: "calligraphy-robot-arm",
    order: 6,
    kind: "Course",
    title: "Calligraphy Robot Arm (3-DOF)",
    org: "Academic robotics project · SFU MSE429",
    dates: "Jan 2026 to Apr 2026",
    summary:
      "A three-degree-of-freedom arm designed in SolidWorks with kinematics and trajectory work in MATLAB, built to draw continuous strokes rather than a handful of points.",
    shortVersion:
      "A 3-DOF robot arm designed to draw continuous strokes instead of moving between points. I designed the links in SolidWorks, derived the kinematics in MATLAB, and built the trajectory planning around a calligraphy path.",
    tags: [
      "SolidWorks",
      "MATLAB",
      "Forward and inverse kinematics",
      "Jacobian",
      "Trajectory planning",
      "Harmonic drives",
    ],
    card: {
      src: "/images/calligraphy-robot-arm/01-card-arm.jpg",
      alt: "CAD render of a three-link robot arm over a wooden table",
    },
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "The brief was a small manipulator that could draw, not just move to points. We needed a 3-DOF arm with enough workspace and control to trace continuous strokes, including the letter A.",
        ],
        media: [
          {
            src: "/images/calligraphy-robot-arm/03-isometric-sketch.jpg",
            alt: "Notebook isometric sketch of the link and end effector",
            caption: "Isometric Sketch",
          },
        ],
      },
      {
        heading: "Design",
        paragraphs: [
          "I designed the arm in SolidWorks: custom links, motor and drive selection, encoders, and an end effector meant for drawing. Early sketches locked the isometric link layout and where harmonic drives would sit.",
        ],
        media: [
          {
            src: "/images/calligraphy-robot-arm/02-solidworks-link.jpg",
            alt: "SolidWorks link part on a workstation",
            caption: "SolidWorks Link",
          },
          {
            src: "/images/calligraphy-robot-arm/06-assembly-full-table.jpg",
            alt: "Full arm assembly CAD render on the table workspace",
            caption: "Arm Assembly",
          },
        ],
      },
      {
        heading: "Kinematics",
        paragraphs: [
          "In MATLAB I derived forward and inverse kinematics, built the Jacobian for velocity control, and generated continuous-point trajectories so the tip could follow a calligraphy path instead of a handful of waypoints. We also moved CAD geometry into MATLAB so simulation and the mechanical model stayed aligned.",
        ],
        media: [
          {
            src: "/images/calligraphy-robot-arm/04-inverse-kinematics.jpg",
            alt: "Inverse kinematics solution diagram",
            caption: "Inverse Kinematics",
          },
          {
            src: "/images/calligraphy-robot-arm/05-cad-to-matlab.jpg",
            alt: "CAD geometry visualized in MATLAB",
            caption: "CAD to MATLAB",
          },
        ],
      },
    ],
  },
  {
    slug: "fan-speed-controller",
    order: 7,
    kind: "Course",
    title: "Fan Speed Controller (8051 MCU)",
    org: "Embedded systems and electronics course project",
    dates: "Oct 2025 to Dec 2025",
    summary:
      "A closed-loop fan controller: simulated in Proteus, built on a breadboard around an 8051, and proven on a scope instead of trusting the simulation alone.",
    shortVersion:
      "A closed-loop fan controller built around an 8051. I simulated the circuit, built it on a breadboard, tuned a PID loop with Ziegler-Nichols, and validated the result on a scope instead of trusting the simulation.",
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
    sections: [
      {
        heading: "The build",
        paragraphs: [
          "I designed and simulated the circuit in Proteus, then built it on a breadboard around an 8051 MCU, DIP-switch setpoints, a MOSFET PWM drive, and a 3-digit RPM display.",
        ],
        media: [
          {
            src: "/images/fan-speed-controller/03-wiring-detail.jpg",
            alt: "Close view of wiring and the transistor drive section",
            caption: "Wiring Detail",
          },
          {
            src: "/images/fan-speed-controller/02-scope-debug.jpg",
            alt: "Oscilloscope probes on the running circuit",
            caption: "Scope Debug",
          },
        ],
      },
      {
        heading: "Control and validation",
        paragraphs: [
          "Firmware in C reads tachometer interrupts, runs a PID loop with Ziegler-Nichols tuning, and updates the display while holding speed.",
          "Validation used an oscilloscope on the tach square wave and PWM drive, plus DMM checks on DC rails to the fan and MCU. Gain tuning focused on cutting overshoot and settling time when the load changed.",
        ],
        media: [
          {
            src: "/images/fan-speed-controller/04-setup-top-view.jpg",
            alt: "Top view of the setup from the project report",
            caption: "Test Setup",
          },
          {
            src: "/images/fan-speed-controller/05-wiring-closeup.jpg",
            alt: "Breadboard close-up from the project report",
            caption: "Breadboard",
          },
        ],
      },
    ],
  },
  {
    slug: "widget-assembly-line",
    order: 8,
    kind: "Course",
    title: "Automated Widget Assembly Line",
    org: "SFU MSE310 Sensors and Actuators · LabVIEW",
    dates: "Sep 2025 to Dec 2025",
    summary:
      "A state-based LabVIEW line that sorts good widgets from bad in real time and keeps its production counts across a power loss.",
    shortVersion:
      "A LabVIEW line that sorts good widgets from bad in real time and keeps its production counts across a power loss. I built the state machine, sensor and actuator logic, CSV logging, and startup recovery.",
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
    sections: [
      {
        heading: "The line",
        paragraphs: [
          "The line used laser and capacitive sensing to find good and bad widgets, then fired solenoids to route them. The catch was keeping production counts alive when the app restarted.",
        ],
        media: [
          {
            src: "/images/widget-assembly-line/02-labview-detail.jpg",
            alt: "Additional LabVIEW block diagram detail",
            caption: "LabVIEW Detail",
          },
        ],
      },
      {
        heading: "Sorting",
        paragraphs: [
          "I built a state-based LabVIEW controller that ties sensors to solenoid actuators for sorting and defect rejection. A counter-based queue tracks true material efficiency while separating valid and defective outputs, with failure detection held at 100 percent in our test cases.",
        ],
        media: [
          {
            src: "/images/widget-assembly-line/05-report-page3.jpg",
            alt: "Report page with control diagrams",
            caption: "Control Diagrams",
          },
        ],
      },
      {
        heading: "Recovery and reporting",
        paragraphs: [
          "CSV logging and startup recovery preserve production counts and system state across shutdowns so a restart does not wipe the shift's numbers.",
        ],
        media: [
          {
            src: "/images/widget-assembly-line/03-file-recovery.jpg",
            alt: "LabVIEW record and load file recovery loops",
            caption: "File Recovery",
          },
          {
            src: "/images/widget-assembly-line/04-report-page2.jpg",
            alt: "Report page with system context",
            caption: "System Context",
          },
        ],
      },
    ],
  },
  {
    slug: "vehicle-restoration",
    order: 2,
    kind: "Personal",
    title: "Vehicle Restoration",
    subtitle: "Ford Escape hybrid rebuild",
    org: "Personal / self-directed",
    dates: "Jul 2022 to Oct 2024",
    summary:
      "A multi-year rebuild of a hybrid Ford Escape on a tracked $10,000 budget: mechanical work, body repair, and high-voltage battery recovery.",
    shortVersion:
      "A multi-year rebuild of a hybrid Ford Escape on a tracked $10,000 budget. I brought the high-voltage battery back online instead of replacing the pack, and rebuilt the suspension, brakes, body, and cooling systems.",
    tags: [
      "Automotive",
      "HV battery",
      "Suspension",
      "Bodywork",
      "Budgeting",
    ],
    card: {
      src: "/images/vehicle-restoration/01-card-undercarriage.jpg",
      alt: "Coated rear undercarriage on a lift with red calipers",
    },
    sections: [
      {
        heading: "The plan",
        paragraphs: [
          "The car came in as a project, not a runner. It needed mechanical work, body repair, and a high-voltage battery that would not respond.",
          "I used an Excel system to track spend and parts so delays did not sneak up through missing inventory.",
        ],
        media: [
          {
            src: "/images/vehicle-restoration/02-engine-bay.jpg",
            alt: "Front of the Escape with the hood open in the shop",
            caption: "Engine Bay",
          },
        ],
      },
      {
        heading: "Battery and chassis",
        paragraphs: [
          "The hybrid HV battery would not respond, so I set up a proper HV charge path, brought it back online, and avoided a full pack replacement, saving about 40 percent on that line item.",
          "Around the chassis I rebuilt and integrated suspension, HVAC, body, and emissions work with power and hand tools: control arms and bushings, an A/C compressor and lines for better battery cooling, undercarriage rust removal and undercoating, brakes, fluids, and an evaporative leak repair that avoided a large labour bill.",
        ],
        media: [
          {
            src: "/images/vehicle-restoration/04-suspension-work.jpg",
            alt: "Hub and suspension work with the caliper pulled",
            caption: "Suspension Work",
          },
          {
            src: "/images/vehicle-restoration/03-brake-detail.jpg",
            alt: "Rotor and red caliper detail",
            caption: "Brake Detail",
          },
        ],
      },
      {
        heading: "Bodywork",
        paragraphs: [
          "The bumper and lower panels needed sanding, filler, and prep before refinish. I worked through that by hand before the car went back together.",
        ],
        media: [
          {
            src: "/images/vehicle-restoration/05-bumper-bodywork.jpg",
            alt: "Bumper sanded and filled for refinish",
            caption: "Bodywork",
          },
        ],
      },
    ],
  },
  {
    slug: "building-pc",
    order: 9,
    kind: "Personal",
    title: "Building PC",
    org: "Personal / self-directed",
    dates: "May 2023 to Oct 2023",
    summary:
      "A desktop built to stay cool under long engineering workloads, with custom 3D-printed GPU support so the card would not sag on the PCIe slot.",
    shortVersion:
      "A desktop built to stay cool under long engineering workloads. I planned the airflow, dressed the build, and designed a 3D-printed GPU support so the card would not sag on the PCIe slot.",
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
    sections: [
      {
        heading: "The build",
        paragraphs: [
          "Airflow was the main constraint. I planned radiator placement and fan paths so heat from the GPU and CPU had a clear exit, then dressed the build for stable long sessions.",
          "For a heavy GPU I designed and 3D-printed support brackets in SolidWorks so the card would not sag on the PCIe slot.",
        ],
        media: [
          {
            src: "/images/building-pc/02-parts-haul.jpg",
            alt: "Parts laid out before the build",
            caption: "Parts Haul",
          },
        ],
      },
    ],
  },
];

// Keep the home grid and the previous/next links in the same order.
projects.sort((a, b) => a.order - b.order);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
