// Central content file for the portfolio — edit text, links and levels here.
// Content follows Adhya's resume (server/assets/resume/Adhya_Mittal_Resume.pdf).
// NOTE: projects without their own repo yet link to the GitHub profile — swap in repo URLs once uploaded.

export const GITHUB_USER = 'aadhya-git';
export const GITHUB_PROFILE = `https://github.com/${GITHUB_USER}`;
export const PORTFOLIO_REPO = `${GITHUB_PROFILE}/fullstack-assignment-2024btech015`;

export const contact = {
  email: 'aadhyamittal2@gmail.com',
  linkedin: 'https://linkedin.com/in/adhya-mittal-995447369'
};

export const profile = {
  name: 'Adhya Mittal',
  roles: ['CSE Undergraduate', 'Aspiring Developer', 'Dance Club Chair', 'Student Creator', 'Visual Storyteller'],
  location: 'JK Lakshmipat University, Jaipur',
  status: 'B.Tech CSE Student (2024 – present)',
  photo: '/images/hero_portrait.jpg'
};

export const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'JavaScript', level: 68 },
      { name: 'CSS', level: 70 },
      { name: 'React.js (learning)', level: 50 }
    ]
  },
  {
    category: 'Backend & Languages',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 72 },
      { name: 'C', level: 70 },
      { name: 'MySQL', level: 65 },
      { name: 'Node.js & Express (learning)', level: 45 },
      { name: 'MongoDB (learning)', level: 45 }
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: '🧰',
    skills: [
      { name: 'Pandas', level: 65 },
      { name: 'NumPy', level: 62 },
      { name: 'Matplotlib', level: 65 },
      { name: 'Git & GitHub', level: 55 },
      { name: 'VS Code', level: 75 }
    ]
  },
  {
    category: 'Soft Skills',
    icon: '🎤',
    skills: [
      { name: 'Public Speaking', level: 88 },
      { name: 'Debate', level: 85 },
      { name: 'Team Management', level: 88 },
      { name: 'Leadership', level: 90 }
    ]
  }
];

export const projects = [
  {
    slug: 'female-unemployment-analysis',
    title: 'Analysis of Female Unemployment Index',
    status: 'Ongoing',
    image: '/images/58509.jpg',
    description:
      'Analyzes female unemployment data using Python and statistical tools to identify trends and patterns, helping explain how female unemployment rates vary across different periods.',
    details: [
      'Data cleaning and transformation with Pandas & NumPy',
      'Trend and pattern analysis across time periods',
      'Charts and visual summaries built with Matplotlib'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    github: GITHUB_PROFILE,
    live: null
  },
  {
    slug: 'transportation-management-system',
    title: 'Transportation Management System',
    status: 'November 2025',
    image: '/images/58524.jpg',
    description:
      'Simplifies bus management by moving the entire operation online — making complex scheduling and tracking tasks effortless and improving efficiency across the board. Developed collaboratively with team members.',
    details: [
      'Web interface for managing buses, routes and schedules',
      'Built as a team project — collaboration on design and features',
      'Written in JavaScript and HTML'
    ],
    tech: ['JavaScript', 'HTML'],
    github: GITHUB_PROFILE,
    live: null
  },
  {
    slug: 'mern-portfolio',
    title: 'MERN Personal Portfolio',
    status: 'October 2026',
    image: '/images/58528.jpg',
    description:
      'This very website — an animated, scrapbook-styled portfolio with dark mode, a MongoDB-backed contact form and resume downloads (PDF + DOCX) served from an Express API.',
    details: [
      'React SPA with React Router, scroll-reveal animations and a typewriter hero',
      'Express REST API with rate-limited contact route and Mongoose validation',
      'Optional Nodemailer notification on every new message',
      'Frontend on Vercel, backend on Render, database on MongoDB Atlas'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS'],
    github: PORTFOLIO_REPO,
    live: 'https://adhya-mittal.vercel.app'
  },
  {
    slug: 'moodboard-canvas',
    title: 'Interactive Moodboard Canvas',
    status: 'October 2026',
    image: '/images/58513.jpg',
    description:
      'A browser moodboard for creators: doodle with brush and eraser tools, stamp text in three fonts, pin stickers and upload your own photos onto a checked canvas.',
    details: [
      'HTML5 Canvas drawing with mouse + touch support',
      'Canvas content preserved across window resizes',
      'Photo uploads read client-side with FileReader — nothing leaves the browser'
    ],
    tech: ['React', 'JavaScript', 'CSS'],
    github: PORTFOLIO_REPO,
    live: 'https://adhya-mittal.vercel.app/#moodboard'
  }
];

export const timeline = [
  {
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    org: 'JK Lakshmipat University, Jaipur',
    period: '2024 – Present',
    description: 'CGPA: 5.95 / 10.0. Building a foundation in programming, databases and software development.'
  },
  {
    type: 'experience',
    title: 'Chair, Dance Club',
    org: 'Student Council, JKLU',
    period: '2025 – 26 (Present)',
    description: 'Leading the Dance Club and overseeing cultural activities on campus.'
  },
  {
    type: 'experience',
    title: 'Co-Chair, Dance Club',
    org: 'Student Council, JKLU',
    period: '2024 – 25',
    description: 'Led the organization and execution of the Dandiya event on campus.'
  },
  {
    type: 'education',
    title: 'Class 12th — CBSE Board',
    org: 'Senior Secondary',
    period: '2024',
    description: 'Scored 84%.'
  },
  {
    type: 'education',
    title: 'Class 10th — CBSE Board',
    org: 'Secondary',
    period: '2022',
    description: 'Scored 85%.'
  }
];

// Add a `link` (verified certificate URL) to show a "View Certificate" button
export const certifications = [
  {
    title: 'C Programming Certification Course',
    issuer: 'Certification Course',
    year: 'Completed',
    icon: '💻',
    link: null
  }
];

export const achievements = [
  { title: 'Best Female Dancer — Cultural Dance Competition', year: 'Award', icon: '🏆' },
  { title: 'Chair, Dance Club — Student Council', year: '2025–26', icon: '💃' },
  { title: 'Organised the campus Dandiya event', year: '2024–25', icon: '🪔' },
  { title: 'Languages: English & Hindi', year: '', icon: '🗣️' }
];
