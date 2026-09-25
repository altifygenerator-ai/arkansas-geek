export type SeoSection = {
  title: string;
  text: string;
  points?: string[];
};

export type SeoPage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  image: string;
  highlights: string[];
  sections: SeoSection[];
};

export const computerServicePages: SeoPage[] = [
  {
    slug: "hardware-repair",
    title: "Computer Hardware Repair",
    shortTitle: "Hardware Repair",
    metaDescription:
      "Computer hardware repair and practical diagnosis through Arkansas Geek for desktops and laptops. Start with the symptoms before buying parts.",
    eyebrow: "Computer Repair Service",
    heading: "Fix the hardware problem, not the guess.",
    intro:
      "Hardware problems can look like software problems, power problems, bad connections, failed parts, or a mix of several things. Arkansas Geek starts with the symptoms and what changed before recommending a repair or replacement part.",
    image: "/images/pc-1.jpg",
    highlights: [
      "Hardware-first troubleshooting",
      "Replacement parts and repair questions",
      "$55/hr typical labor",
    ],
    sections: [
      {
        title: "Start with what the computer is actually doing.",
        text:
          "A computer that will not start, shuts down, behaves differently after an upgrade, or suddenly loses a device can have several possible causes. Send the symptoms, computer type, recent changes, and anything already tried so the problem can be narrowed down first.",
      },
      {
        title: "Practical repair before unnecessary replacement.",
        text:
          "The goal is to understand whether the issue points to a failed component, a loose or bad connection, an upgrade problem, or something else before money is spent on the wrong part.",
        points: [
          "Desktop and laptop hardware questions",
          "Failed or questionable components",
          "Upgrade-related issues",
          "Replacement-part guidance",
          "Build and repair troubleshooting",
        ],
      },
      {
        title: "The repair request is the first step.",
        text:
          "Send the device type, symptoms, when the problem started, any error messages, and what changed recently. A short follow-up may be enough to decide what should happen next.",
      },
    ],
  },
  {
    slug: "troubleshooting",
    title: "Computer Troubleshooting",
    shortTitle: "Troubleshooting",
    metaDescription:
      "Computer troubleshooting through Arkansas Geek for hardware issues, confusing symptoms, failed upgrades, and practical repair questions in Arkansas.",
    eyebrow: "Computer Repair Service",
    heading: "Start with the symptom. Work toward the cause.",
    intro:
      "Good troubleshooting is less about guessing and more about ruling things out in the right order. Arkansas Geek brings more than two decades of IT and systems experience to computer repair questions and hardware-focused diagnosis.",
    image: "/images/pc-3.jpg",
    highlights: [
      "24+ years of IT background",
      "Hardware and systems troubleshooting",
      "Questions before unnecessary work",
    ],
    sections: [
      {
        title: "Describe the problem in plain language.",
        text:
          "You do not need to know the technical name for the issue. Explain what the computer is doing, what you expected it to do, when the problem started, and anything that happened right before it changed.",
      },
      {
        title: "Details make diagnosis faster.",
        text:
          "Useful information includes error messages, unusual noises, power behavior, recent upgrades, replaced parts, disconnected cables, operating-system changes, and what has already been attempted.",
        points: [
          "Startup and power behavior",
          "Hardware detection problems",
          "Recent upgrade problems",
          "Unexpected shutdowns or failures",
          "General repair questions",
        ],
      },
      {
        title: "Some problems can be narrowed down before a visit.",
        text:
          "A quick follow-up may point to a simple check, a likely parts problem, or the need for hands-on repair. The goal is to avoid wasting time and money when a few questions can clarify the next step.",
      },
    ],
  },
  {
    slug: "upgrades",
    title: "Computer Upgrades",
    shortTitle: "Upgrades",
    metaDescription:
      "Computer upgrade help through Arkansas Geek for practical hardware changes, replacement parts, troubleshooting, and upgrade-related repair questions.",
    eyebrow: "Computer Repair Service",
    heading: "Upgrade what makes sense. Skip what does not.",
    intro:
      "An upgrade should solve a real problem or improve the machine in a useful way. Arkansas Geek can help with hardware upgrades, replacement parts, and troubleshooting when an upgrade does not go the way it should.",
    image: "/images/pc-2.jpg",
    highlights: [
      "Upgrade questions and planning",
      "Replacement hardware",
      "Post-upgrade troubleshooting",
    ],
    sections: [
      {
        title: "Start with what you want the computer to do better.",
        text:
          "The useful question is not just what part can be replaced. It is what problem you are trying to solve. Send the computer type, current hardware if you know it, and what you want to improve.",
      },
      {
        title: "Upgrades can create their own troubleshooting work.",
        text:
          "When a machine stops behaving correctly after a part change, the new hardware, connection, compatibility, setup, or an unrelated failure may all need to be considered.",
        points: [
          "Hardware upgrade questions",
          "Replacement-part decisions",
          "Build and compatibility questions",
          "Troubleshooting after upgrades",
        ],
      },
      {
        title: "Get the direction before buying more parts.",
        text:
          "If you are not sure what failed or what should be upgraded, send the details first. A repair request gives Arkansas Geek enough context to ask the right follow-up questions.",
      },
    ],
  },
  {
    slug: "custom-pc-builds",
    title: "Custom PC Builds",
    shortTitle: "PC Builds",
    metaDescription:
      "Custom PC build help through Arkansas Geek, including build questions, hardware selection guidance, upgrades, and troubleshooting for new or existing systems.",
    eyebrow: "Computer Repair Service",
    heading: "Build it around what the machine actually needs to do.",
    intro:
      "Arkansas Geek handles computer builds and build-related questions alongside repair work. Whether the system is new, partly assembled, or giving trouble after a build, start with the hardware and the goal.",
    image: "/images/pc-2.jpg",
    highlights: [
      "Build questions",
      "Hardware and compatibility thinking",
      "Troubleshooting after assembly",
    ],
    sections: [
      {
        title: "A useful build starts with the job, not the parts list.",
        text:
          "Explain what the computer will be used for, what hardware you already have, and whether you are starting from scratch or working with an existing system.",
      },
      {
        title: "Build problems are still troubleshooting problems.",
        text:
          "If a new or rebuilt machine will not start correctly, does not recognize hardware, or behaves unexpectedly, the repair process starts the same way: symptoms, recent changes, and a methodical look at the hardware.",
        points: [
          "New build questions",
          "Existing system rebuilds",
          "Upgrade planning",
          "Post-build troubleshooting",
        ],
      },
      {
        title: "Send the build details before scheduling anything.",
        text:
          "A repair request can include the current parts, what is already assembled, what is not working, and what you are trying to finish. That makes the next conversation much more useful.",
      },
    ],
  },
];

export const serviceAreaPages = [
  { slug: "hot-springs-ar", city: "Hot Springs", state: "AR" },
  { slug: "malvern-ar", city: "Malvern", state: "AR" },
  { slug: "arkadelphia-ar", city: "Arkadelphia", state: "AR" },
  { slug: "glenwood-ar", city: "Glenwood", state: "AR" },
  { slug: "benton-ar", city: "Benton", state: "AR" },
  { slug: "little-rock-ar", city: "Little Rock", state: "AR" },
] as const;

export const vwServicePages: SeoPage[] = [
  {
    slug: "brake-work",
    title: "Air-Cooled VW Brake Work",
    shortTitle: "VW Brake Work",
    metaDescription:
      "Case-by-case air-cooled Volkswagen brake work through Arkansas Geek for smaller repair needs. Start with the year, model, symptoms, and photos if helpful.",
    eyebrow: "Air-Cooled Volkswagen",
    heading: "Air-cooled VW brake work, reviewed case by case.",
    intro:
      "Brake-related work is one of the smaller air-cooled Volkswagen jobs Arkansas Geek may consider. The first step is not scheduling. It is sending the year, model, symptoms, and what has already been done so the job can be reviewed.",
    image: "/images/bug-3.jpg",
    highlights: [
      "Case-by-case VW work",
      "Smaller brake-related jobs",
      "$55/hr typical labor",
    ],
    sections: [
      {
        title: "Send the vehicle details first.",
        text:
          "Include the year, model, whether the Volkswagen runs and drives, what the brakes are doing, any recent brake work, and photos if they help explain the condition.",
      },
      {
        title: "Smaller work is the current lane.",
        text:
          "Arkansas Geek is not presenting itself as a full restoration shop. The Volkswagen side is focused on smaller jobs and maintenance-type needs that make sense on a case-by-case basis.",
      },
      {
        title: "The repair request helps decide fit.",
        text:
          "The form gives enough information to ask follow-up questions and decide whether the job fits the current Volkswagen work Arkansas Geek is taking on.",
      },
    ],
  },
  {
    slug: "suspension-work",
    title: "Air-Cooled VW Suspension Work",
    shortTitle: "VW Suspension Work",
    metaDescription:
      "Case-by-case air-cooled Volkswagen suspension work through Arkansas Geek for smaller repair and maintenance needs in Arkansas.",
    eyebrow: "Air-Cooled Volkswagen",
    heading: "Smaller air-cooled VW suspension work, without overselling the shop.",
    intro:
      "Suspension-related work is another area Arkansas Geek may review for air-cooled Volkswagens. The focus stays on smaller jobs rather than major restoration projects or large rebuilds.",
    image: "/images/bug-4.jpg",
    highlights: [
      "Suspension-related questions",
      "Smaller repair needs",
      "Vehicle details before scheduling",
    ],
    sections: [
      {
        title: "Start with the year, model, and what the car is doing.",
        text:
          "Describe the issue, any noises or changes you have noticed, recent work, whether the car is currently drivable, and anything else that may help explain the problem.",
      },
      {
        title: "Case by case means exactly that.",
        text:
          "Some smaller suspension-related jobs may be a fit and some may not. Sending the details first keeps expectations clear before time or money is committed.",
      },
      {
        title: "Major projects are not the current focus.",
        text:
          "Large restorations and major rebuilds are outside the lane Arkansas Geek is advertising right now. This page is for smaller air-cooled VW repair questions and work that can be evaluated realistically.",
      },
    ],
  },
  {
    slug: "minor-repairs-maintenance",
    title: "Air-Cooled VW Minor Repairs & Maintenance",
    shortTitle: "VW Minor Repairs",
    metaDescription:
      "Air-cooled Volkswagen minor repair and maintenance help through Arkansas Geek, handled case by case for smaller jobs rather than major rebuilds.",
    eyebrow: "Air-Cooled Volkswagen",
    heading: "Minor repairs and maintenance-type VW work when the job makes sense.",
    intro:
      "Arkansas Geek keeps the Volkswagen side intentionally narrow: smaller air-cooled VW repair needs, maintenance-type work, and practical questions that can be reviewed from the details first.",
    image: "/images/bug-5.jpg",
    highlights: [
      "Minor repair questions",
      "Maintenance-type work",
      "No major rebuild focus",
    ],
    sections: [
      {
        title: "Not every classic VW job needs to become a full project.",
        text:
          "If you have a smaller repair or maintenance need, send the year, model, current condition, what you want done, and any useful photos. The goal is to decide whether the work is a practical fit.",
      },
      {
        title: "Clear scope matters with older cars.",
        text:
          "Air-cooled Volkswagens can turn a simple symptom into a bigger diagnosis. Starting with the vehicle history and what has already been changed helps set a better direction.",
      },
      {
        title: "Large restoration and major rebuild work is not the focus.",
        text:
          "Arkansas Geek is keeping this service honest and limited to the type of smaller work currently being considered. The repair request is the best way to see if your Volkswagen fits that lane.",
      },
    ],
  },
];
