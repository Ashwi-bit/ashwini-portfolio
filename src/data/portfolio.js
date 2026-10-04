export const profile = {
  name: "Ashwini Koli",
  title: "Aspiring Software Engineer",
  subtitle: "Final Year B.Tech CSE Student",
  location: "Kolhapur, Maharashtra",
  phone: "8149503180",
  email: "kolashwini20may@gmail.com",
  linkedin: "https://linkedin.com/in/ashwini-koli-aa2148307",
  github: "https://github.com/Ashwi-bit",
  objective:
    "Final year B.Tech CSE student with a strong foundation in Data Structures & Algorithms, Object-Oriented Design, and DBMS, backed by hands-on project and internship experience across Java, Spring Boot, React.js, and SQL. A quick learner and self-starter who enjoys breaking down ambiguous problems and communicating technical trade-offs clearly.",
};

export const skills = [
  { category: "Core CS", items: "Data Structures & Algorithms, Object-Oriented Design, DBMS, Complexity Analysis" },
  { category: "Languages", items: "Java, JavaScript (ES6+), Python (Basic)" },
  { category: "Web Development", items: "React.js, HTML5, CSS3, REST APIs, Spring Boot" },
  { category: "Databases", items: "SQL, Firebase, MongoDB (basic)" },
  { category: "Tools", items: "Git, GitHub, VS Code, Postman, Docker" },
];

export const experience = [
  {
    role: "Internshala Student Partner",
    company: "Internshala",
    period: "2026 – Present",
    points: [
      "Selected as a campus ambassador to represent Internshala at Sharad Institute of Technology.",
      "Drive student engagement with Internshala's training programs and internships on campus.",
      "Promote skill-development initiatives and mentor peers on career opportunities.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "INFOYASHONAND Pvt. Ltd., Sangli",
    period: "June – July 2025",
    points: [
      "Built a Swiggy-inspired website using HTML, CSS, and JavaScript with a responsive, interactive UI.",
      "Developed a responsive jewelry website; collaborated with the team on features and problem-solving.",
    ],
  },
];

export const projects = [
  {
    name: "Payment Router",
    stack: "Java 21, Spring Boot 3.4, H2, Docker, Render",
    description:
      "A mini payment orchestration service that routes transactions across 3 gateways using real-time EMA success scores, with automatic fallback and idempotent transactions (DB-enforced, no double charges).",
    highlight: "Improved simulated success from 70.5% → 98.2% across 1,000 payments",
    links: [
      { label: "Live Stats", url: "https://payment-router-jv3x.onrender.com/stats" },
      { label: "Code", url: "https://github.com/Ashwi-bit/payment-router" },
    ],
    featured: true,
  },
  {
    name: "Complaint Management System",
    stack: "Python, Streamlit, SQLite",
    description:
      "Role-based complaint system: students submit complaints without login; admins log in to view and manage all complaints in a dashboard. Built for a college technical event.",
    highlight: "Deployed on Streamlit Cloud with live demo",
    links: [
      { label: "Live Demo", url: "https://complaint-management-system-yasa7zj2eh96orwp9pfs9w.streamlit.app/" },
      { label: "Code", url: "https://github.com/Ashwi-bit/complaint-management-system" },
    ],
  },
  {
    name: "Billing System",
    stack: "Spring Boot, React, SQL",
    description:
      "Full-stack billing system with a Spring Boot REST API backend and React frontend. SQL schema for invoices, transactions, and stock; full CRUD operations.",
    links: [],
  },
  {
    name: "Megha — IoT Gas & Fire Detection",
    stack: "ESP32, React, Firebase, MQ2, DHT11, Flame Sensor",
    description:
      "Real-time IoT monitoring system with an ESP32 + sensors + Firebase backend and a React dashboard visualizing live gas, temperature, humidity, and fire alerts. ML integration for leak-trend prediction.",
    links: [],
  },
  {
    name: "Chanting App",
    stack: "HTML5, CSS3, JavaScript",
    description:
      "A lightweight web app for counting and tracking chanting sessions — responsive UI, no frameworks, runs entirely in the browser.",
    links: [
      { label: "Code", url: "https://github.com/Ashwi-bit/chanting_app" },
    ],
  },
  {
    name: "Criminal Face Detection System",
    stack: "Python, Streamlit, OpenCV, InsightFace",
    description:
      "AI facial recognition system with a Streamlit interface to match uploaded images against stored criminal records.",
    links: [],
  },
];

export const education = [
  {
    institution: "Sharad Institute of Technology College of Engineering, Yadrav",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2024 – Present",
    score: "CGPA: 7.34",
  },
  {
    institution: "Walchand College of Engineering, Sangli",
    degree: "Diploma, Industrial Electronics",
    period: "2021 – 2024",
    score: "81.83%",
  },
  {
    institution: "S.B. Mane Education Trust, Haroli",
    degree: "Secondary School (SSC)",
    period: "2021",
    score: "93.80%",
  },
];

export const certifications = [
  "Internshala Student Partner — 2026",
  "Python Programming — Udemy",
  "JavaScript — Simplilearn",
  "Participated in Hack The Vibe Hackathon",
  "Google Gemini Student Ambassador Music Night",
];