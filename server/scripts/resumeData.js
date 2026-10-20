// Content of Adhya's resume (mirrors assets/resume/Adhya_Mittal_Resume.pdf).
// The PDF is Adhya's original file; run `npm run generate:resume` to rebuild the Word (.docx) version from this data.
export default {
  name: 'Adhya Mittal',
  contact: [
    { label: 'LinkedIn: AdhyaMittal', link: 'https://linkedin.com/in/adhya-mittal-995447369' },
    { label: 'aadhyamittal2@gmail.com', link: 'mailto:aadhyamittal2@gmail.com' },
    { label: '(+91) 9024405295' }
  ],
  summary:
    'Computer Science and Engineering undergraduate with a developing foundation in programming, databases, and software development. ' +
    'Gaining hands-on experience through practical projects and actively involved in co-curricular and collaborative activities that ' +
    'strengthen communication, teamwork, and leadership skills. Brings a balanced academic approach with growing technical proficiency ' +
    'and a willingness to learn and improve.',
  projects: [
    {
      heading: 'Analysis of Female Unemployment Index',
      date: 'Ongoing',
      text:
        'Analyzes female unemployment data using Python and statistical tools to identify trends and patterns. ' +
        'The analysis helps in understanding variations in female unemployment rates across different periods.',
      techLabel: 'Tools',
      tech: 'Python (Pandas, NumPy, Matplotlib)'
    },
    {
      heading: 'Transportation Management System',
      date: 'November 2025',
      text:
        'Simplify bus management by moving your entire operation online. Our platform makes complex tasks effortless, ' +
        'and efficiency across the board. (Developed collaboratively with team members.)',
      techLabel: 'Languages',
      tech: 'Javascript, HTML'
    }
  ],
  education: [
    { period: '2024 - present', text: 'B.Tech CSE at ', bold: 'JK Lakshmipat University, Jaipur', score: '(CGPA: 5.95/10.0)' },
    { period: '2024', text: 'Class 12th CBSE Board', score: '(84%)' },
    { period: '2022', text: 'Class 10th CBSE Board', score: '(85%)' }
  ],
  skills: [
    { group: 'Languages', items: 'Python, C, Javascript, HTML' },
    { group: 'Database', items: 'MySQL' },
    { group: 'Soft Skills', items: 'Public Speaking, Debate, Team Management, Leadership' }
  ],
  positions: [
    { heading: 'Chair, Dance Club | Student Council 2025–26', note: ' (Present)', text: 'Leading the Dance Club and overseeing cultural activities' },
    { heading: 'Co-Chair, Dance Club | Student Council 2024–25', note: '', text: 'Led the organization and execution of the Dandiya event on campus' }
  ],
  achievements: ['Completed C Programming Certification Course', 'Best Female Dancer in Cultural Dance Competition'],
  languages: 'English & Hindi',
  updated: 'Last updated: December 27, 2025'
};
