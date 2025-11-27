export interface Achievement {
  id: number;
  title: string;
  event: string;
  position: string;
  year: number;
  description?: string;
  image?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "SLIoT Challenge 2025",
    event: "SLIoT Challenge",
    position: "Finalists",
    year: 2025,
    description: "Qualified as finalists in the Sri Lanka IoT Challenge 2025",
    image: "/achievements/sliot.jpg"
  },
  {
    id: 2,
    title: "HackElite 1.0",
    event: "HackElite Hackathon",
    position: "2nd Runner Up",
    year: 2024,
    description: "Secured 2nd runner-up position in HackElite 1.0 hackathon",
    image: "/achievements/hackelite.jpg"
  },
  {
    id: 3,
    title: "AlgoXplore 1.0",
    event: "AlgoXplore Competition",
    position: "Top 15",
    year: 2024,
    description: "Ranked among top 15 participants in AlgoXplore 1.0",
    image: "/achievements/algoxplore.jpg"
  },
  {
    id: 4,
    title: "Hackmoral 7.0",
    event: "Hackmoral Hackathon",
    position: "Rank 7",
    year: 2024,
    description: "Achieved 7th position in Hackmoral 7.0 hackathon",
    image: "/achievements/hackmoral.jpg"
  }
];
