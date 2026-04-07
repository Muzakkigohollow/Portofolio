export interface SkillCategory {
  title: string;
  index: string;
  skills: string[];
  code?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    index: "01",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
    code: `// Frontend Architecture
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Component = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modern-ui-container"
    >
      {/* UI Implementation */}
    </motion.div>
  );
};`
  },
  {
    title: "BACKEND",
    index: "02",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    code: `// Express API Implementation
import express from 'express';
import { db } from './database';

const app = express();
app.use(express.json());

app.get('/api/resource', async (req, res) => {
  try {
    const data = await db.query('SELECT * FROM data');
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`
  },
  {
    title: "DATABASE",
    index: "03",
    skills: ["MySQL"],
    code: `-- Database Schema Example
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);`
  },
  {
    title: "TOOLS & OTHERS",
    index: "04",
    skills: ["Git & GitHub", "Postman", "Linux", "Docker"],
    code: `# Dockerfile Example
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
  }
];

export const mobileSlideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.95,
  }),
};

export const experienceData = [
  {
    company: "SMK Prakarya International",
    role: "Student \u2013 PPLG (Software & Game Development)",
    period: "Present",
    desc: `I am currently studying Software and Game Development. I focus on developing my skills in web technologies, solving real-world programming problems, and expanding my knowledge of building structured full-stack architectures.

Key Activities:
\u2022 Learning front-end technologies such as HTML, CSS, JavaScript, and Tailwind CSS.
\u2022 Exploring backend programming using Node.js and Express.js.
\u2022 Integrating MySQL databases to create functional web applications.
\u2022 Building personal projects to prepare for a career in tech.`
  }
];
