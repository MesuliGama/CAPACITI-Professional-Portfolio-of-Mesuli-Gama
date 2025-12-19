
import { Experience, Education, LicenseCertification, Project } from './types';

export const PROFILE_AVATAR_INITIALS = 'MM.G';
export const BACKGROUND_HERO_URL = 'https://picsum.photos/1920/1080?random=2';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mesuli-gama-491526285';
export const GITHUB_URL = 'https://github.com/MesuliGama';
export const EMAIL_ADDRESS = 'gamasuli@gmail.com';
export const PHONE_NUMBER = '0840489698';

// Gemini AI Model Configuration
export const GEMINI_MODEL_NAME = 'gemini-3-flash-preview';

// Navigation links for the new tab system
export const NAV_LINKS = [
  { name: 'About', hash: '#about' },
  { name: 'Objective', hash: '#objective' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Education', hash: '#education' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Download', hash: '#ats-overlook' },
  { name: 'Contact', hash: '#contact' },
];

export const INITIAL_SUGGESTED_QUESTIONS = [
  "What is Mesuli's main area of expertise?",
  "Tell me about his S.P.A.R.K project.",
  "What was his role at the Department of Education?",
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    title: 'Digital Associate',
    company: 'CAPACITI',
    location: 'Johannesburg (Gauteng), South Africa',
    duration: 'Oct 2025 - Present, Full-time',
    description: [
      'Engaged in an intensive, project-based program focused on full-stack development, cloud technologies, and AI integration.',
      'Collaborated in agile teams to design, develop, and deploy web applications, contributing to both front-end and back-end components.',
      'Applied UX/UI principles to create intuitive user interfaces and leveraged generative AI APIs for innovative features.',
      'Gained practical experience in modern software development workflows, including version control with Git, CI/CD, and cloud deployment.',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: 'Certificate, SAMTRAC',
    institution: 'NOSA College',
    location: 'Centurion (Gauteng), South Africa',
    duration: 'May 2025',
    details: [
      'Focus on risk management, hazard identification, compliance auditing, OHS Act implementation.',
      'Applied knowledge to safety protocols and compliance checklists.',
      'Skills: Risk Assessment, Regulatory & Legal Compliance, Knowledge of OHS Act and Regulations, Hazard Identification, Occupational Health & Safety (OHS) Compliance (SAMTRAC-NOSA Certified), Occupational Health.',
    ],
  },
  {
    id: 'edu2',
    degree: 'Certificate, Introduction to SAMTRAC',
    institution: 'NOSA College',
    location: 'Centurion (Gauteng), South Africa',
    duration: 'Jan 2025',
    details: [
      'Foundational course on workplace inspections, incident investigation, control measures.',
      'Improved safety practices in fieldwork and emergency preparedness.',
      'Skills: Risk Management, Occupational Health & Safety (OHS) Compliance (SAMTRAC-NOSA Certified), Environment, Health, and Safety (EHS).',
    ],
  },
  {
    id: 'edu3',
    degree: 'Diploma, Information Technology',
    institution: 'Richfield',
    location: 'Durban (KwaZulu-Natal), South Africa',
    duration: 'Feb 2018 - Dec 2020',
    details: [
      'Comprehensive program in database management, network infrastructure, system analysis.',
      'Capstone project focused on optimizing legacy systems for small businesses.',
      'Bridges gap between administrative and IT teams.',
      'Skills: IT Management, Network Administration and Engineering, Coding.',
    ],
  },
];

export const LICENSES_CERTIFICATIONS: LicenseCertification[] = [
  {
    id: 'lic1',
    title: 'Artificial Intelligence on Microsoft Azure',
    issuer: 'Microsoft',
    issuedDate: 'Nov 2025',
    skills: ['AI/ML', 'Responsible AI', 'NLP', 'Data Ethics', 'Machine Learning', 'LLM', 'AI'],
  },
  {
    id: 'lic2',
    title: 'Building AI Powered Chatbots Without Programming',
    issuer: 'IBM',
    issuedDate: 'Nov 2025',
    skills: ['Prompt Engineering', 'Generative AI', 'WordPress', 'IBM Cloud', 'Customer experience', 'No-Code Development', 'Business Workflow Analysis'],
  },
  {
    id: 'lic3',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    issuedDate: 'Nov 2025',
    skills: ['Web Scraping', 'Data Analysis', 'Computer Programming', 'Data Manipulation', 'Numpy', 'Pandas'],
  },
  {
    id: 'lic4',
    title: 'Trustworthy AI: Managing Bias, Ethics, and Accountability',
    issuer: 'Johns Hopkins University',
    issuedDate: 'Nov 2025',
    skills: ['Law', 'Regulation', 'Compliance', 'Legal Risk', 'Responsible AI', 'Data Ethics', 'AI Product Strategy', 'Machine Learning', 'AI'],
  },
  {
    id: 'lic5',
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI',
    issuedDate: 'Nov 2025',
    skills: ['Prompt Engineering', 'Responsible AI', 'Large Language Modeling', 'AI'],
  },
  {
    id: 'lic6',
    title: 'Introduction to Responsible AI',
    issuer: 'Google Cloud',
    issuedDate: 'Nov 2025',
    skills: ['Responsible AI', 'AI', 'AI Product Strategy', 'Organizational Structure'],
  },
  {
    id: 'lic7',
    title: 'AI Essentials',
    issuer: 'Intel',
    issuedDate: 'Oct 2025',
    skills: ['Business Research', 'Responsible AI', 'Generative AI', 'AI Product Strategy', 'Machine Learning', 'AI'],
  },
  {
    id: 'lic8',
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    issuedDate: 'Oct 2025',
    skills: ['AI/ML', 'Needs Assessment', 'Deep Learning', 'Neural Networks', 'Strategic Thinking', 'Data Ethics', 'Data Science', 'Machine Learning', 'AI'],
  },
  {
    id: 'lic9',
    title: 'AI Foundations: Prompt Engineering with ChatGPT',
    issuer: 'Arizona State University',
    issuedDate: 'Oct 2025',
    skills: ['Prompt Engineering', 'Prompt Patterns', 'Responsible AI', 'LLM Application', 'ChatGPT', 'LLM'],
  },
  {
    id: 'lic10',
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI, AWS',
    issuedDate: 'Oct 2025',
    skills: ['Prompt Engineering', 'Responsible AI', 'LLM'],
  },
  {
    id: 'lic11',
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    issuedDate: 'Oct 2025',
    skills: ['Responsible AI', 'NLP', 'Generative AI', 'Risk Mitigation', 'Business Intelligence', 'Content Creation'],
  },
  {
    id: 'lic12',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    issuedDate: 'Oct 2025',
    skills: ['Deep Learning', 'NLP', 'Generative AI', 'GCP', 'Machine Learning Methods', 'AI'],
  },
  {
    id: 'lic13',
    title: 'Certified in Full Stack Development',
    issuer: 'FNB App Academy 2025',
    issuedDate: 'Jul 2025',
    skills: ['GitHub', 'HTML', 'CSS', 'Data Management', 'Business Development', 'AI'],
  },
  {
    id: 'lic14',
    title: 'SAMTRAC Training',
    issuer: 'NOSA',
    issuedDate: 'Jun 2025',
    skills: ['Risk Assessment', 'Regulatory & Legal Compliance', 'OHS Act', 'Hazard Identification', 'OHS Compliance'],
  },
];

export const SKILLS = {
  technical: [
    { name: 'User Experience Design', level: 90, iconId: 'ux' },
    { name: 'AI Fundamentals', level: 'SYNCED', iconId: 'ai' },
    { name: 'HTML', level: 'SYNCED', iconId: 'html' },
    { name: 'CSS', level: 'SYNCED', iconId: 'css' },
    { name: 'JavaScript', level: 'SYNCED', iconId: 'js' },
    { name: 'Java', level: 'SYNCED', iconId: 'java' },
    { name: 'Microsoft 365', level: 'SYNCED', iconId: 'm365' },
    { name: 'Responsible AI practices', level: 'SYNCED', iconId: 'ethics' },
    { name: 'Data manipulation', level: 60, iconId: 'data' },
    { name: 'Cloud platforms and deployments', level: 'SYNCED', iconId: 'cloud' },
    { name: 'Machine learning & deep learning', level: 'SYNCED', iconId: 'ml' },
    { name: 'Python', level: 80, iconId: 'python' },
    { name: 'Figma', level: 50, iconId: 'figma' },
    { name: 'Artificial Intelligence on Microsoft Azure', level: 'SYNCED', iconId: 'azure' },
    { name: 'Photoshop', level: 'SYNCED', iconId: 'photoshop' },
    { name: 'Reactjs', level: 60, iconId: 'react' },
    { name: 'vuejs', level: 60, iconId: 'vue' },
    { name: 'Tailwind CSS', level: 70, iconId: 'tailwind' },
  ],
  soft: [
    'Problem Solving',
    'Collaboration',
    'Adaptability',
    'Time Management',
    'Creativity',
    'Emotional Intelligence',
    'Strategic thinking',
    'Ethics, compliance & governance',
    'Adaptability to emerging technologies',
  ],
};

export const FUTURE_GOALS = [
    "Deepening expertise in MLOps pipelines to bridge the gap between AI development and scalable production.",
    "Pursuing AWS Certified Machine Learning Specialty to validate cloud-native AI architecture skills.",
    "Researching the integration of Zero-Knowledge Proofs (ZKPs) for privacy-preserving data validation in public sector AI.",
    "Expanding proficiency in low-level systems programming to optimize edge-AI deployment."
];

export const PROJECTS: Project[] = [
  {
    id: 'proj7',
    title: 'MzansiFix',
    description: 'A conceptual application designed to streamline community service requests and reporting within South Africa. MzansiFix empowers citizens to report local issues (e.g., potholes, water leaks) and track their resolution, fostering transparency and efficiency in public services.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Mapping API', 'PWA'],
    liveLink: 'https://mzansifix.vercel.app/',
    repoLink: 'https://github.com/MesuliGama/MzansiFix',
    isFeatured: true,
  },
  {
    id: 'proj2',
    title: 'S.P.A.R.K- Smart Personal AI Resume Kit',
    description: 'An AI-powered resume building toolkit designed to help professionals craft the perfect resume. S.P.A.R.K provides intelligent suggestions, template customization, and keyword optimization to make your profile stand out.',
    technologies: ['React', 'TypeScript', 'AI/NLP', 'Tailwind CSS', 'UI/UX Design'],
    liveLink: 'https://spark-iota-three.vercel.app/',
    repoLink: 'https://github.com/MesuliGama/S.P.A.R.K',
  },
  {
    id: 'proj1',
    title: 'MindVerse',
    description: 'An innovative web application that leverages generative AI to create compelling and creative content. MindVerse allows users to generate text, brainstorm ideas, and unlock new possibilities with the power of AI.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Generative AI', 'Vercel'],
    liveLink: 'https://aigenerator-ten.vercel.app/',
    repoLink: 'https://github.com/MesuliGama/MindVerse',
  },
  {
    id: 'proj3',
    title: 'AURA (Artificial Understanding and Response Assistant)',
    description: 'A collaborative project developed using AWS PartyRock, leveraging generative AI for intelligent understanding and response generation.',
    technologies: ['AWS PartyRock', 'Generative AI'],
    liveLink: 'https://partyrock.aws/u/KishanGosai007/HbgywbRUF/AURA-(Artificial-Understanding-and-Response-Assistant)',
  },
  {
    id: 'proj4',
    title: 'DeepSeeker Figma Prototype',
    description: 'A collaborative Figma prototype showcasing UI/UX design and interactive flows for the DeepSeeker application.',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Collaboration'],
    liveLink: 'https://www.figma.com/proto/4liiOiq63cAI9lr4SFnZ52/DeepSeeker-Prototype?node-id=14-69&t=RYKbjfu7eT0YtV50-1&starting-point-node-id=14%3A69',
  },
  {
    id: 'proj5',
    title: 'SyncNet',
    description: 'SyncNet is an interactive dashboard that helps users analyze the emotional tone in text data such as customer reviews or social media posts using Gemini',
    technologies: ['Next.js', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Vercel'],
    liveLink: 'https://sync-net-sooty.vercel.app/',
    repoLink: 'https://github.com/MesuliGama/SyncNet',
  },
  {
    id: 'proj6',
    title: 'Bias Audit Analysis',
    description: 'An analysis of bias in a machine learning dataset or model, identifying ethical concerns and proposing concrete mitigation strategies.',
    technologies: ['Python', 'Pandas', 'Responsible AI', 'Data Analysis', 'Matplotlib'],
    repoLink: 'https://github.com/MesuliGama/Bias-Audit-',
  },
];

export const PORTFOLIO_SUMMARY_FOR_AI = `You are Mesuli Michael Gama's dedicated AI portfolio assistant.
**CRITICAL INSTRUCTION**: You must answer questions **STRICTLY** based on the information provided in the Context below. Do not invent facts, do not make assumptions, and do not discuss topics outside of Mesuli's professional profile, skills, and projects.

**Your Goal:**
Help users understand Mesuli's qualifications, technical skills (especially in AI, Full Stack, and OHS compliance), and his projects.

**Behavioral Rules:**
1. **Strict Grounding:** If the answer exists in the context, provide it clearly.
2. **Handling Unknowns:** If a user asks a question that is NOT answered by the context below, politely state: "I don't have that information in my database. However, I can tell you about Mesuli's experience with [Skill/Project] or how to contact him."
3. **Tone:** Professional, tech-forward, and helpful.
4. **Follow-up:** After every answer, suggest 2-3 specific follow-up questions related to the previous answer.

**Format for Suggestions:**
ALWAYS end your response with specific suggested questions in this exact format:
**Suggestions:**
- [Question 1]
- [Question 2]

--- CONTEXT START ---
**Contact Details:**
- Email: ${EMAIL_ADDRESS}
- Phone: ${PHONE_NUMBER}
- LinkedIn: ${LINKEDIN_URL}
- GitHub: ${GITHUB_URL}

**Professional Summary:**
Mesuli M Gama is a results-driven IT professional with over three years of experience working across technology, administrative systems, and compliance-focused environments.

**Work Experience:**
${EXPERIENCES.map(exp => `- Role: ${exp.title} at ${exp.company}`).join('\n')}

**Key Projects:**
${PROJECTS.map(proj => `- ${proj.title}`).join('\n')}
--- CONTEXT END ---
`;
