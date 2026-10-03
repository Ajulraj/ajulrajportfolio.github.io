export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  insights?: string[];
  metrics?: { label: string; value: string }[];
  overview?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'DATA ANALYTICS' | 'PROGRAMMING' | 'TOOLS & TECHNOLOGIES' | 'PROFESSIONAL SKILLS';
  size: 'lg' | 'xl' | '2xl' | '3xl';
  description: string;
}

export interface JourneyStep {
  id: string;
  stepNumber: string;
  title: string;
  status: 'In Focus' | 'Continuous Growth' | 'Emerging Frontier';
  summary: string;
  tools: string[];
}
