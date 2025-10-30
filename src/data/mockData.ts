// Mock data for AURA platform

export const skillGapsData = [
  { skill: 'Machine Learning', current: 65, target: 90 },
  { skill: 'Cloud Computing', current: 45, target: 85 },
  { skill: 'Data Analysis', current: 70, target: 95 },
  { skill: 'DevOps', current: 50, target: 80 },
  { skill: 'UI/UX Design', current: 60, target: 85 },
];

export const aiRecommendations = [
  {
    id: 1,
    title: 'Advanced Machine Learning with Python',
    description: 'Master deep learning algorithms and neural networks to close your ML skill gap',
    duration: '6 weeks',
    level: 'Advanced',
  },
  {
    id: 2,
    title: 'AWS Cloud Architecture Fundamentals',
    description: 'Build scalable cloud infrastructure and earn AWS certification',
    duration: '4 weeks',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Data Visualization with Tableau',
    description: 'Create compelling data stories and interactive dashboards',
    duration: '3 weeks',
    level: 'Beginner',
  },
  {
    id: 4,
    title: 'Kubernetes & Container Orchestration',
    description: 'Deploy and manage containerized applications at scale',
    duration: '5 weeks',
    level: 'Advanced',
  },
];

export const credentials = [
  {
    id: 1,
    name: 'B.Sc. Computer Science',
    issuer: 'Stanford University',
    issueDate: '2024-06-15',
    verified: true,
  },
  {
    id: 2,
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: '2024-09-20',
    verified: true,
  },
  {
    id: 3,
    name: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    issueDate: '2024-08-10',
    verified: true,
  },
  {
    id: 4,
    name: 'Full Stack Web Development',
    issuer: 'Meta',
    issueDate: '2024-07-05',
    verified: true,
  },
];

export const credentialStatusData = [
  {
    id: 1,
    studentName: 'Nguyen Van A',
    credentialTitle: 'B.Sc. Computer Science',
    issueDate: '2024-06-15',
    status: 'Issued',
  },
  {
    id: 2,
    studentName: 'Tran Thi B',
    credentialTitle: 'Data Science Certificate',
    issueDate: '2024-08-20',
    status: 'Issued',
  },
  {
    id: 3,
    studentName: 'Le Van C',
    credentialTitle: 'AI Engineering Diploma',
    issueDate: '2024-07-10',
    status: 'Issued',
  },
  {
    id: 4,
    studentName: 'Pham Thi D',
    credentialTitle: 'Web Development Certificate',
    issueDate: '2024-05-05',
    status: 'Revoked',
  },
  {
    id: 5,
    studentName: 'Hoang Van E',
    credentialTitle: 'Cloud Architecture Certificate',
    issueDate: '2024-09-12',
    status: 'Issued',
  },
];

export const jobMatches = [
  {
    id: 1,
    title: 'Senior ML Engineer',
    company: 'TechCorp Vietnam',
    match: 85,
    location: 'Ho Chi Minh City',
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    company: 'Global IT Services',
    match: 72,
    location: 'Hanoi',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Startup Hub',
    match: 68,
    location: 'Da Nang',
  },
];

export const portfolioData = {
  personalInfo: {
    name: 'Nguyen Minh Khoa',
    age: 28,
    email: 'khoa.nguyen@email.com',
    phone: '+84 901 234 567',
    location: 'Ho Chi Minh City, Vietnam',
    linkedin: 'linkedin.com/in/nguyenminhkhoa',
    github: 'github.com/nguyenminhkhoa',
    website: 'khoa-nguyen.dev',
    bio: 'Passionate software engineer with 5+ years of experience in AI/ML and cloud computing. Dedicated to continuous learning and building impactful technology solutions.',
  },
  careerPath: [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Vietnam',
      location: 'Ho Chi Minh City',
      startDate: '2022-01',
      endDate: null,
      current: true,
      description: 'Leading AI/ML initiatives and mentoring junior developers. Built scalable machine learning pipelines serving 1M+ users.',
      skills: ['Python', 'TensorFlow', 'AWS', 'Kubernetes'],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Global IT Services',
      location: 'Hanoi',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      description: 'Developed cloud-native applications and microservices architecture. Improved system performance by 40%.',
      skills: ['Node.js', 'Docker', 'MongoDB', 'React'],
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Startup Hub',
      location: 'Da Nang',
      startDate: '2019-06',
      endDate: '2020-02',
      current: false,
      description: 'Started career building full-stack web applications. Contributed to 5+ successful product launches.',
      skills: ['JavaScript', 'Vue.js', 'PostgreSQL', 'Git'],
    },
  ],
  topSkills: [
    { name: 'Machine Learning', level: 90, category: 'Technical' },
    { name: 'Cloud Architecture', level: 85, category: 'Technical' },
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'Leadership', level: 80, category: 'Soft Skills' },
    { name: 'Data Analysis', level: 88, category: 'Technical' },
    { name: 'Communication', level: 85, category: 'Soft Skills' },
  ],
  projects: [
    {
      id: 1,
      name: 'AI-Powered Recommendation Engine',
      description: 'Built a personalized recommendation system using collaborative filtering and deep learning',
      technologies: ['Python', 'TensorFlow', 'AWS SageMaker', 'Redis'],
      impact: '30% increase in user engagement',
      year: '2024',
    },
    {
      id: 2,
      name: 'Real-time Analytics Dashboard',
      description: 'Developed a scalable analytics platform processing 100K+ events per second',
      technologies: ['Node.js', 'Apache Kafka', 'Elasticsearch', 'React'],
      impact: 'Reduced data processing time by 60%',
      year: '2023',
    },
    {
      id: 3,
      name: 'Automated CI/CD Pipeline',
      description: 'Designed and implemented DevOps infrastructure for multi-cloud deployment',
      technologies: ['Kubernetes', 'Jenkins', 'Terraform', 'Docker'],
      impact: 'Deployment time reduced from 2 hours to 15 minutes',
      year: '2023',
    },
  ],
  achievements: [
    {
      id: 1,
      title: 'AWS Solutions Architect Certification',
      issuer: 'Amazon Web Services',
      date: '2024-09',
      icon: 'award',
    },
    {
      id: 2,
      title: 'Best Innovation Award',
      issuer: 'TechCorp Vietnam',
      date: '2024-06',
      icon: 'trophy',
    },
    {
      id: 3,
      title: 'Published Research Paper',
      issuer: 'IEEE Conference on AI',
      date: '2023-11',
      icon: 'file',
    },
  ],
};
