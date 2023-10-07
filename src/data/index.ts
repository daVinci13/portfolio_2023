export interface HeadMeta {
  description: string;
  openGraph: {
    basic: {
      title: string;
      type: string;
      url: string;
      image: string;
    };
    image: {
      alt: string;
      width: number;
      height: number;
    };
  };
  twitter: {
    creator: string;
    site: string;
    card: string;
  };
}

export const headMeta: HeadMeta = {
  description:
    "Cyber Security Professional",
  openGraph: {
    basic: {
      title:
        "Nemanja Djurcic is a cyber security professional.",
      type: "website",
      url: "https://nemanjadjurcic.com",
      image: "https://nemanjadjurcic.com/og.png",
    },
    image: {
      alt: "Nemanja Djurcic",
      width: 792,
      height: 382,
    },
  },
  twitter: {
    creator: "@imnip10",
    site: "https://nemanjadjurcic.com",
    card: "summary_large_image",
  },
};

export interface PersonalInfo {
  name: string;
}

export const personalInfo: PersonalInfo = {
  name: "Nemanja Djurcic",
};

//export interface Work {
//name: string;
//location: string;
//  startDate: string;
//  endDate: string;
//  about: string;
//  role: string;
//  summary: string;
//  description: string[];
//  techStackAndTools: string[];
//}
//
//export const work: Work[] = [
//  {
//    name: "Replai",
//    location: "Portugal/US",
//    startDate: "Jan 2022",
//    endDate: "Present",
//    role: "Software Engineer",
//    about:
//      "The creative intelligence platform fuelling marketing performance - Replai helps mobile companies build successful creative strategies with computer vision AI",
//    summary:
//      "Full-stack role with emphasis on front-end. Focus on delivering new features and improving the product.",
//    description: [
//      "Built intuitive user interfaces and screens for the web application, improving user engagement and satisfaction",
//      "Developed and maintained back-end services, ensuring smooth and reliable performance for users",
//      "Collaborated with the design team to create a cohesive design system and components library, improving usability and consistency across the application",
//      "Worked closely with the product team to define and prioritize product roadmap and features",
//      "Ensured the quality and functionality of the application through the implementation of unit and end-to-end tests",
//    ],
//    techStackAndTools: [
//      "React",
//      "Redux",
//      "TypeScript",
//      "Styled Components",
//      "Storybook",
//      "React Testing Library",
//      "Cypress",
//      "NodeJS",
//      "AWS",
//      "Serverless",
//      "PostgreSQL",
//      "Git",
//      "Agile",
//      "Jira",
//      "Figma",
//    ],
//  },
//  {
//    name: "Hostelworld",
//    location: "Portugal",
//    startDate: "Apr 2021",
//    endDate: "Sep 2021",
//    role: "Front-end Developer (Contractor)",
//    about:
//      "Hostelworld is the world's leading hostel booking platform, with over 35,000 properties in 180 countries.",
//    summary:
//      'Worked on the <a class="dark:text-indigo-300" href="https://design.hostelworld.com/6d86fdcac/p/688c6f-wanderlust-design-system" target="_blank" rel="noopener">Wanderlust Design System</a>, a design system built with web-components (Stencil) used by multiple Hostelworld applications.',
//    description: [
//      "Built reusable components for the design system using StencilJS and SASS, improving consistency and efficiency across teams and applications",
//      "Created intuitive and user-friendly screens and user interface components for the core web application",
//      "Improved the overall look and feel of the application through the use of modern design techniques and tools",
//    ],
//    techStackAndTools: [
//      "StencilJS",
//      "SASS",
//      "Storybook",
//      "Vue",
//      "BitBucket",
//      "Git",
//    ],
//  },
//  {
//    name: "Beeyard",
//    location: "Portugal",
//    startDate: "Out 2020",
//    endDate: "Jan 2022",
//    role: "Software Engineer / Tech Lead",
//    about:
//      "A remote monitoring solution for beehives with the aim of improving productivity in the honey production and pollination operations",
//    summary:
//      "All-rounder in a pre-seed startup, from developing the product to managing the team.",
//    description: [
//      "Built intuitive and user-friendly screens and components for the web application, improving user engagement and satisfaction",
//      "Developed and maintained back-end services, ensuring smooth and reliable performance for users",
//      "Created engaging and functional screens and components for the mobile application, improving usability and accessibility on mobile devices",
//      "Developed desktop application for hardware configuration, improving the process by 10x resulting in faster production",
//      "Led and managed a team of 3 developers and 1 designer, ensuring alignment with the product roadmap and user needs",
//      "Implemented a payment and billing system, subscription flow, and user management, streamlining these processes and improving the overall user experience",
//      "Set up and maintained continuous integration and delivery pipelines using GitHub Actions and AWS, resulting in faster and more reliable updates and new features for users",
//    ],
//    techStackAndTools: [
//      "Angular",
//      "RXJS",
//      "TypeScript",
//      "SASS",
//      "Jest",
//      "Cypress",
//      "NodeJS",
//      "Express",
//      "PostgreSQL",
//      "MongoDB",
//      "Electron",
//      "React",
//      "Ionic",
//      "CI/CD",
//      "AWS",
//      "Git",
//      "Stripe",
//      "Agile",
//      "Jira",
//      "Figma",
//    ],
//  },
//  {
//    name: "Wegho",
//    location: "Portugal",
//    startDate: "Apr 2019",
//    endDate: "Out 2020",
//    role: "Software Engineer",
//    about:
//      "Digital Transformation of Home Cleaning and Facility Services that allows on-demand booking",
//    summary:
//      "Full-stack role with emphasis on front-end. My first experience in a startup (seed) environment.",
//    description: [
//      "Built intuitive and user-friendly screens for the web application, improving user engagement and satisfaction",
//      "Developed and maintained back-end services, ensuring smooth and reliable performance for users",
//      "Built engaging and functional screens and components for the mobile application, improving usability and accessibility on mobile devices",
//      "Developed a progressive web application that is optimized for offline use",
//      "Implemented a comprehensive payment and billing system, subscription flow, and user management, streamlining these processes and improving the overall user experience",
//      "Set up and maintained continuous integration and delivery pipelines, ensuring timely and efficient deployments",
//    ],
//    techStackAndTools: [
//      "ASP.NET",
//      "C#",
//      "React",
//      "JavaScript",
//      "SQL Server",
//      "PWA",
//      "Ionic",
//      "Git",
//      "Stripe",
//      "Agile",
//      "Azure DevOps",
//      "Sketch",
//    ],
//  },
//];
//

export interface Certification {
  name: string;
  provider: string;
  description?: string[];
  url?: string;
}

export const certification: Certification[] = [
  {
    name: "CompTIA Security+",
    provider: "CompTIA",
    url: "https://github.com/daVinci13/Certs/blob/main/CompTIA%20Security%2B%20ce%20certificate.pdf",
  },
  {
    name: "OCI 2023 Certified Security Professional",
    provider: "Oracle",
    url: "https://github.com/daVinci13/Certs/blob/main/OCI%20Security%20Professional.pdf",
  },
  {
    name: "Junior Cybersecurity Analyst Career Path",
    provider: "Cisco",
    url: "https://github.com/daVinci13/Certs/blob/main/Junior%20Cybersecurity%20Analyst%20Career%20Path.pdf",
  },
  {
    name: "OCI 2023 Certified DevOps Professional",
    provider: "Oracle",
    url: "https://github.com/daVinci13/Certs/blob/main/OCI%20DevOps%20Professional.pdf",
  },
  {
    name: "Cyber Threat Management",
    provider: "Cisco",
    url: "https://github.com/daVinci13/Certs/blob/main/Cyber%20Threat%20Management.pdf",
  },
  {
    name: "Palo Alto Networks Micro-Credential for Kubernetes Network Security Administrator",
    provider: "Palo Alto Networks",
    url: "https://github.com/daVinci13/Certs/blob/main/Palo%20Alto%20Networks%20Micro-Credential%20for%20Kubernetes%20Network%20Security%20Administrator%20certificate.pdf",
  },
  {
    name: "Endpoint Security",
    provider: "Cisco",
    url: "https://github.com/daVinci13/Certs/blob/main/Endpoint%20Security.pdf",
  },
  {
    name: "Palo Alto Networks Micro-Credential for Remote Network Administrator",
    provider: "Palo Alto Networks",
    url: "https://github.com/daVinci13/Certs/blob/main/Palo%20Alto%20Networks%20Micro-Credential%20Remote%20network%20Administrator%20certificate.pdf",
  },
  {
    name: "Network Defense",
    provider: "Cisco",
    url: "https://github.com/daVinci13/Certs/blob/main/Network%20Defense.pdf",
  },
  {
    name: "Palo Alto Networks Micro-Credential for Virtual Network Security Administrator",
    provider: "Palo Alto Networks",
    url: "https://github.com/daVinci13/Certs/blob/main/Palo%20Alto%20Networks%20Micro-Credential%20for%20Virtual%20Network%20Security%20Administrator%20certificate.pdf",
  },
  {
    name: "Introduction to Cybersecurity",
    provider: "Cisco",
    url: "https://github.com/daVinci13/Certs/blob/main/Introduction%20to%20Cybersecurity.pdf",
  },
  {
    name: "Palo Alto Networks Micro-Credential for Cloud NGFW Administrator",
    provider: "Palo Alto Networks",
    url: "https://github.com/daVinci13/Certs/blob/main/Palo%20Alto%20Networks%20Micro-Credential%20for%20Cloud%20NGFW%20Administrator%20certificate.pdf",
  },
  {
    name: "Advanced Kubernetes Operators",
    provider: "IBM",
    url: "https://github.com/daVinci13/Certs/blob/main/Advanced%20Kubernetes%20Operators.pdf",
  },
  {
    name: "Palo Alto Networks Micro-Credential for Remote User Administrator",
    provider: "Palo Alto Networks",
    url: "https://github.com/daVinci13/Certs/blob/main/Palo%20Alto%20Networks%20Micro-Credential%20Remote%20user%20Administrator%20certificate.pdf",
  },
  {
    name: "Python for Data Science",
    provider: "IBM",
    url: "https://github.com/daVinci13/Certs/blob/main/Python%20for%20Data%20Science.pdf",
  },
  {
    name: "Data Science for Business",
    provider: "IBM",
    url: "https://github.com/daVinci13/Certs/blob/main/Data%20Science%20for%20Business.pdf",
  },
  {
    name: "Python Essentials 2",
    provider: "Cisco",
    url: "https://github.com/daVinci13/Certs/blob/main/Python%20Essentials%202.pdf",
  },
];

export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Firewall and Network Security",
    skills: [
      { name:"Containerized Firewall"},
      { name:"Firewall Configuration"},
      { name:"Host-based Intrusion Prevention"},
      { name:"Next Generation Firewall"},
      { name:"NGFW"},
      { name:"Virtual Firewall"},
      { name:"Network Infrastructure Security"},
      { name:"Network Security"},
      { name:"Threat Protection"},
      { name:"Zone Security"},
      { name:"Inbound traffic"},
      { name:"Outbound traffic"},
    ],
  },
  {
    category: "Cloud and Virtualization",
    skills: [
      { name:"AWS"},
      { name:"OCI (Oracle Cloud Infrastructure)"},
      { name:"Azure"},
      { name:"Cloud NGFW"},
      { name:"Kubernetes"},
      { name:"Kubernetes Operators"},
      { name:"Virtualization and Cloud Services"},
    ],
  },
  {
    category: "Security Operations and Incident Response",
    skills: [
      { name:"Security Operations"},
      { name:"Incident Response"},
      { name:"Evaluating Alerts"},
      { name:"The Cyber Kill Chain"},
      { name:"Evidence Handling And Attack Attribution"},
    ],
  },
  {
    category: "Security Policies and Compliance",
    skills: [
      { name:"Security Policies/Regulations/Standards"},
      { name:"Security Policies"},
      { name:"Data Privacy"},
      { name:"Data Security"},
    ],
  },
  {
    category: "Network and System Hardening",
    skills: [
      { name:"Defending Systems And Devices"},
      { name:"Defense-in-Depth"},
      { name:"Mitigating Common Network Attacks"},
      { name:"Network Hardening"},
      { name:"Physical Security"},
      { name:"Securing WLANs"},
      { name:"System And Endpoint Protection"},
      { name:"System And Network Defense"},
      { name:"Windows Security"},
      { name:"Wireless And Mobile Device Attacks"},
    ],
  },
  {
    category: "Cybersecurity Tools and Technologies",
    skills: [
      { name:"GlobalProtect"},
      { name:"Panorama"},
      { name:"Prisma Access"},
      { name:"Prisma SASE"},
      { name:"Prisma SD-WAN"},
      { name:"WildFire"},
      { name:"Cisco Devices"},
      { name:"Cisco IOS"},
      { name:"DHCP (Dynamic Host Configuration Protocol)"},
      { name:"DNS (Domain Name System)"},
      { name:"Wireless Access"},
      { name:"Access Control"},
      { name:"Cryptography"},
      { name:"Cyber Forensics"},
      { name:"Malware Identification"},
      { name:"Mobile Device Security"},
      { name:"Security Configuration"},
      { name:"Threat Analysis"},
      { name:"Threat Detection"},
    ],
  },
  {
    category: "Network Protocols and Design",
    skills: [
      { name:"IPv4 Subnetting"},
      { name:"Network Layer Protocols"},
      { name:"Transport Layer Protocols"},
      { name:"Network Media"},
      { name:"Network Types"},
      { name:"Protocols Standards"},
    ],
  },
  {
    category: "Log Management and Security Analysis",
    skills: [
      { name:"End Device Logs"},
      { name:"Hashing"},
      { name:"Integrity And Authenticity"},
      { name:"Network Logs"},
      { name:"Public Key Cryptography"},
    ],
  },
  {
    category: "Network and System Administration",
    skills: [
      { name:"Network And Server Profiling"},
      { name:"Penetration Testing"},
      { name:"Risk Assessment"},
      { name:"Risk Management"},
      { name:"Secure Device Management"},
      { name:"Security Assessments"},
      { name:"Security Controls"},
    ],
  },
  {
    category: "Programming Languages",
    skills: [{ name:"Python"}, { name:"Go"}, { name:"Rust"}, { name:"Nim"},],
  },
  {
    category: "Infrastructure as Code and Containers",
    skills: [{ name:"Ansible"}, { name:"Terraform"}, { name:"Docker"},],
  },
  {
    category: "Operating Systems",
    skills: [{ name:"Windows"}, { name:"Linux"},],
  },
];

export interface Project {
  name: string;
  description: string[];
  techStackAndTools: string[];
}

export const projects: Project[] = [
  {
    name: "Docker and Kubernetes Application Deployment",
    description: ["Managed and deployed applications using Docker and Kubernetes, showcasing strong skills in system administration and security."],
    techStackAndTools: [
    "Docker",
    "Kubernetes",
    "System Administration",
    "Security",
    ],
    },
    {
    name: "Python Script Automation",
    description: ["Developed scripts in Python for automating tasks and enhancing operational efficiency in a self-hosted environment."],
    techStackAndTools: [
    "Python",
    "Automation",
    "Scripting",
    "Operational Efficiency",
    ],
    },
    {
    name: "Palo Alto Networks Network Security",
    description: ["Implemented Palo Alto Networks solutions to design a secure network architecture, demonstrating practical understanding of network security."],
    techStackAndTools: [
    "Palo Alto Networks",
    "Network Security",
    "Architecture Design",
    "Practical Implementation",
    ],
    },
];

export interface Languages {
  name: string;
  description: string;
}

export const spokenLanguages: Languages[] = [
  {
    name: "Serbian",
    description: "I can navigate a kafana menu like a pro and debate the best way to grill cevapi! 🍖🍻"
    },{
    name: "English",
    description: " I'm fluent in English, I can talk the talk, walk the walk, and even rock the accent. 🚶‍♂️🗣️"
    },{
    name: "German",
    description: " I can speak it, but... Give me a couple of weeks and I'll be ordering schnitzel and bratwurst like a pro! 🥩🥓🌭"
    },{
    name: "Spanish",
    description: "¡Hablo un poco de español! I might not be fluent, but I can follow the dramatic twists of ‘La Casa de Papel’ with ease. 🏦💰"
    },
];

export interface SocialProfile {
  name: string;
  url: string;
  iconSvg: string;
}

export const socialMediaProfiles: SocialProfile[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nemanjadjurcic/",
    iconSvg: "linkedinSvg",
  },
  {
    name: "GitHub",
    url: "https://github.com/daVinci13",
    iconSvg: "githubSvg",
  },
  {
    name: "Email",
    url: "nemanjadjurcic@protonmail.ch",
    iconSvg: "instagramSvg",
  },
];
