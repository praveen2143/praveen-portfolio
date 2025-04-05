import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Simon Game",
    description: "A memory-based game designed to sharpen focus and reflexes.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/praveen2143/Simon-Game",
    live: "https://praveen2143.github.io/Simon-Game/",
    image: "https://source.unsplash.com/800x600/?technology,game",
  },
  {
    title: "Note Taking App",
    description: "A sleek and efficient note manager built with React.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/praveen2143/React-Note-Taking-App",
    live: "https://react-note-app-demo.vercel.app/",
    image: "https://source.unsplash.com/800x600/?notes,productivity",
  },
  {
    title: "Plant Seedlings Classifier",
    description: "AI-powered image classifier for identifying plant seedlings.",
    tech: ["Python", "Machine Learning", "OpenCV"],
    github: "https://github.com/praveen2143/Plant-Seedlings-Classifier",
    live: "#",
    image: "https://source.unsplash.com/800x600/?ai,plants",
  },
];

const skills = [
  "React.js", "JavaScript", "TypeScript", "Java", "Spring Boot", "Angular", "Node.js", "MongoDB", "MySQL", "Git", "REST APIs"
];

const experience = [
  {
    title: "Systems Engineer",
    company: "Tata Consultancy Services",
    duration: "May 2021 - Present",
    description: "Led agile development of enterprise systems, improved performance by 30%, and implemented scalable microservices using Spring Boot and React.js."
  },
  {
    title: "Software Developer Intern",
    company: "Virtusa",
    duration: "Jan 2021 - Apr 2021",
    description: "Built web apps using Angular and .NET, streamlined APIs, and collaborated in sprints for high-quality feature delivery."
  }
];

const hobbies = ["Space Exploration", "AI Research", "Chess", "Cycling", "Photography"];

const achievements = [
  "Top 1% in HackerRank Java Certification",
  "Presented research on AI in Agriculture at ICACSE 2021",
  "Developed award-winning AR application for plant care",
  "First place in TCS DevHackathon 2022"
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Issued Jan 2024",
    credential: "https://www.credly.com/badges/example-link"
  },
  {
    title: "Java Spring Boot Professional Certificate",
    issuer: "Coursera",
    date: "Issued Oct 2023",
    credential: "https://www.coursera.org/account/accomplishments/example"
  },
  {
    title: "Frontend Development with React",
    issuer: "Meta",
    date: "Issued Sep 2023",
    credential: "https://coursera.org/verify/example"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10 space-y-32 font-sans">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-green-400">Hi, I'm Praveen</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">Creative Full Stack Developer with a passion for building futuristic digital experiences. Based in India. Driven by innovation, guided by curiosity.</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:praveen@example.com"><Mail className="text-green-400 hover:scale-110 transition" /></a>
          <a href="https://github.com/praveen2143"><Github className="text-green-400 hover:scale-110 transition" /></a>
          <a href="https://linkedin.com/in/praveen2143"><Linkedin className="text-green-400 hover:scale-110 transition" /></a>
          <a href="/resume.pdf" download><Download className="text-green-400 hover:scale-110 transition" /></a>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-5xl font-bold text-center text-green-400 mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-green-800 px-4 py-2 rounded-full text-sm shadow-lg">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-5xl font-bold text-center text-green-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl overflow-hidden border border-green-500"
              whileHover={{ scale: 1.02 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold text-green-300">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-green-400">
                  {project.tech.map((tech, t) => <span key={t}>#{tech}</span>)}
                </div>
                <div className="flex space-x-4 pt-2">
                  <a href={project.github} className="text-sm underline text-green-400">GitHub</a>
                  <a href={project.live} className="text-sm underline text-green-400">Live</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-5xl font-bold text-center text-green-400 mb-10">Experience</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-green-300">{job.title}</h3>
              <p className="text-sm text-gray-400">{job.company} | {job.duration}</p>
              <p className="text-gray-300 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-5xl font-bold text-center text-green-400 mb-10">Achievements</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto text-gray-300 space-y-2">
          {achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
        </ul>
      </section>

      {/* Hobbies Section */}
      <section>
        <h2 className="text-5xl font-bold text-center text-green-400 mb-10">Hobbies</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-300">
          {hobbies.map((hobby, i) => (
            <span key={i} className="bg-gray-800 px-4 py-2 rounded-xl border border-green-400">{hobby}</span>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="space-y-10">
        <h2 className="text-5xl font-bold text-center text-green-400">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-green-500 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-green-300">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
              <a
                href={cert.credential}
                target="_blank"
                className="text-green-400 hover:underline text-sm"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-green-400">Let's Connect</h2>
        <p className="text-gray-400">Interested in collaborating or hiring? Reach out via email or connect on social platforms.</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:praveen@example.com"><Mail className="text-green-400 hover:scale-110 transition" /></a>
          <a href="https://github.com/praveen2143"><Github className="text-green-400 hover:scale-110 transition" /></a>
          <a href="https://linkedin.com/in/praveen2143"><Linkedin className="text-green-400 hover:scale-110 transition" /></a>
        </div>
      </section>
    </div>
  );
}
