export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo?: string;
  github?: string;
  featured?: boolean;
  period?: string;
  contributions?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "HarvestSoftware – Farm-to-Market Trading Platform",
    description: "A comprehensive farm-to-market trading platform developed as a group project with 99x mentoring. Features include merchant dashboard, live bidding system, and responsive UI/UX.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Auth0"],
    image: "/projects/harvest.jpg",
    github: "#",
    liveDemo: "#",
    featured: true,
    period: "Aug 2024 – June 2025",
    contributions: [
      "Merchant dashboard development",
      "Live bidding system implementation",
      "Search and filter functionality",
      "Homepage UI design",
      "Responsive UI/UX implementation"
    ]
  },
  {
    id: 2,
    title: "Healthcare Queue & Appointment System",
    description: "An ongoing individual project featuring a barcode-based hospital queue management and appointment scheduling system with real-time updates using WebSockets.",
    technologies: ["React", "Node.js", "Express", "MySQL", "WebSockets"],
    image: "/projects/healthcare.jpg",
    github: "#",
    featured: true,
    period: "Ongoing",
    contributions: [
      "Barcode-based queue management",
      "Real-time appointment system",
      "WebSocket integration"
    ]
  },
  {
    id: 3,
    title: "GoMate – Travel Companion App",
    description: "A React Native mobile application designed as a travel companion, featuring transport discovery, listings management, and booking functionality with state management using Redux Toolkit.",
    technologies: ["React Native", "TypeScript", "Redux Toolkit"],
    image: "/projects/gomate.jpg",
    github: "#",
    featured: true,
    contributions: [
      "Transport discovery feature",
      "Listings management",
      "Booking system implementation"
    ]
  },
  {
    id: 4,
    title: "Vehicle Rental Web Application",
    description: "A Laravel-based vehicle rental platform with comprehensive REST API, authentication system, route protection, and modern UI built with Tailwind CSS.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "REST API"],
    image: "/projects/vehicle-rental.jpg",
    github: "#",
    contributions: [
      "REST API development",
      "Authentication system",
      "Route protection implementation",
      "UI development"
    ]
  },
  {
    id: 5,
    title: "NovaNex – Automated Weighing & Packing System",
    description: "An embedded system project integrating hardware components for automated weighing and packing. Features system integration with Arduino, load cells, stepper motors, and GSM modules.",
    technologies: ["Arduino Mega", "Load Cell", "Stepper Motors", "GSM Module", "C++"],
    image: "/projects/novanex.jpg",
    github: "#",
    contributions: [
      "System integration",
      "Calibration implementation",
      "UI development",
      "Relay control system"
    ]
  }
];
