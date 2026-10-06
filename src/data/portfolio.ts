export const personalInfo = {
  name: 'Sinalo Mvo',
  title: 'Aspiring Communications Practitioner',
  tagline: 'I support meaningful communication through thoughtful coordination, digital content, and people-focused administration.',
  shortBio:
    'Aspiring Communications Practitioner with a Bachelor of Arts in Communication Sciences at the University of South Africa. Experienced in special projects, social media engagement, event and campaign coordination, administrative support, and educational assistance.',
  location: 'Johannesburg, South Africa',
  email: 'mvosinalo@gmail.com',
  phone: '063 078 6504',
  github: '',
  linkedin: 'https://www.linkedin.com/in/sinalo-mvo-78b751431',
  available: true,
};

export const aboutContent = {
  paragraphs: [
    'I am an aspiring Communications Practitioner currently completing a Bachelor of Arts in Communication Sciences through the University of South Africa.',
    'My experience includes supporting special projects, coordinating events and campaigns, preparing communication materials, managing social media communication, and maintaining organised project records on Salesforce.',
    'I also bring hands-on experience as an Education Assistant, where I supported educators and learners through lesson planning, classroom activities, academic support, administration, and clear communication with school leadership.',
  ],
  highlights: [
    { label: 'Current Qualification', value: 'BA' },
    { label: 'Communication Focus', value: 'Digital' },
    { label: 'Work Experience', value: '2 Roles' },
    { label: 'Community Focus', value: 'Youth' },
  ],
};

export type Skill = { name: string; level: number };

export const technicalSkills: Skill[] = [
  { name: 'Microsoft Office', level: 88 },
  { name: 'Social Media Management', level: 84 },
  { name: 'Written Communication', level: 88 },
  { name: 'Oral Communication', level: 84 },
  { name: 'Event Coordination', level: 80 },
  { name: 'Data & Record Management', level: 78 },
  { name: 'Mailchimp', level: 72 },
  { name: 'Salesforce Records', level: 70 },
];

export const softSkills = [
  { name: 'Adaptability', icon: 'Shuffle' },
  { name: 'Problem Solving', icon: 'Lightbulb' },
  { name: 'Learning Agility', icon: 'BookOpen' },
  { name: 'Relationship Building', icon: 'Users' },
  { name: 'Teamwork', icon: 'Handshake' },
  { name: 'Strong Work Ethic', icon: 'CheckCircle2' },
];

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  link: string;
  github: string;
  featured: boolean;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: 'Special Projects & Campaign Support',
    description: 'Communication and coordination support for events, campaigns, and internal projects.',
    longDescription:
      'Supported the planning and coordination of events, campaigns, and internal projects by preparing reports, presentations, and communication materials, coordinating with different departments, and helping project activities run smoothly.',
    technologies: ['Campaign Coordination', 'Event Support', 'Presentations', 'Internal Communication'],
    link: '',
    github: '',
    featured: true,
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    title: 'Digital Communication & Social Media',
    description: 'Social media and audience engagement support across key digital channels.',
    longDescription:
      'Managed and maintained social media communication across Instagram, Facebook, and LinkedIn, while supporting audience engagement through digital communication and social media activities.',
    technologies: ['Instagram', 'Facebook', 'LinkedIn', 'Audience Engagement'],
    link: '',
    github: '',
    featured: true,
    gradient: 'from-accent-500 to-accent-700',
  },
  {
    title: 'Project Records & Administration',
    description: 'Organised project information and administrative support for effective delivery.',
    longDescription:
      'Recorded and maintained project data on Salesforce, prepared documents and records, and supported administrative processes so project information stayed accurate, accessible, and organised.',
    technologies: ['Salesforce', 'Microsoft Office', 'Data Capture', 'Record Management'],
    link: '',
    github: '',
    featured: false,
    gradient: 'from-emerald-500 to-teal-700',
  },
  {
    title: 'Education & Learner Support',
    description: 'Classroom and administrative support that helps educators and learners succeed.',
    longDescription:
      'Supported educators with lesson planning, classroom management, and learner activities; identified learners requiring academic support; captured learner information; and provided administrative assistance to the school management team.',
    technologies: ['Lesson Planning', 'Classroom Support', 'Learner Activities', 'Administration'],
    link: '',
    github: '',
    featured: false,
    gradient: 'from-amber-500 to-orange-700',
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Arts in Communication Sciences',
    institution: 'University of South Africa',
    period: 'In progress',
    description:
      'Building knowledge across communication, media, digital communication, and the practical skills needed to support effective communication work.',
  },
  {
    degree: 'National Senior Certificate (Grade 12)',
    institution: 'Freedom Park Secondary School',
    period: '2019',
    description: 'Completed secondary education and developed a foundation for continued academic and professional growth.',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
};

export const certifications: Certification[] = [];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export const workExperience: ExperienceItem[] = [
  {
    role: 'Special Projects Intern',
    company: 'Phakamani Young Minds Academy (NGO)',
    period: 'July 2025 — February 2026',
    location: 'Johannesburg, South Africa',
    description:
      'Supported special projects, communication activities, event and campaign coordination, and organised project administration.',
    achievements: [
      'Supported the planning and coordination of events, campaigns, and internal projects.',
      'Developed reports, presentations, and communication materials for project activities and internal communication.',
      'Collaborated with different departments to coordinate activities and ensure effective execution.',
      'Recorded and maintained accurate project data on Salesforce.',
      'Managed social media communication across Instagram, Facebook, and LinkedIn.',
      'Supported audience engagement through digital communication and social media activities.',
    ],
  },
  {
    role: 'Education Assistant',
    company: 'Freedom Primary School',
    period: 'May 2023 — July 2024',
    location: 'South Africa',
    description:
      'Provided classroom, learner, and administrative support to educators and the School Management Team.',
    achievements: [
      'Supported educators with lesson planning, classroom management, and learner activities.',
      'Identified learners requiring academic support and provided additional assistance.',
      'Captured learner information, maintained academic records, and reported relevant information to school leadership.',
      'Provided administrative support including document preparation, printing, filing, and record management.',
      'Worked closely with educators and learners while developing strong interpersonal communication.',
    ],
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work Samples', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
