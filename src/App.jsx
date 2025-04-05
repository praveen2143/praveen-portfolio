import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  // {
  //   title: "Simon Game",
  //   description: "A memory-based game designed to sharpen focus and reflexes.",
  //   tech: ["JavaScript", "HTML", "CSS"],
  //   github: "https://github.com/praveen2143/Simon-Game",
  //   live: "https://praveen2143.github.io/Simon-Game/",
  //   image: "https://source.unsplash.com/800x600/?technology,game",
  // }
];

const skills = [
  "React.js", "JavaScript", "TypeScript", "Java", "Spring Boot", "Angular JS", "MySQL", "Git", "REST APIs"
];

const experience = [
  {
    title: "Software Engineer",
    company: "Mavens-i",
    duration: "Sept 2023 - Present",
    description: "Worked in FORD projects , Experince working in ReactJS and Springboot"
  },
  {
    title: "Software Engineer",
    company: "Globallogic - A Hitachi Company",
    duration: "April 2022 - Jun 2023",
    description: "Worked in Projects Informatica and iCIMS . Worked in technologies using Java, Spring boot, React JS, Java, Jenkins, UTF framework."
  },
  {
    title: "Software Engineer",
    company: "Yali Infotech",
    duration: "March 2020 - MArch 2022",
    description: "Worked as a Fullstack Developer, working in technologies C#.NET MVC, MySQL, AngularJS,AWS, SVN"
  },
  {
    title: "Junior Software Engineer",
    company: "InTimeTec Visionsoft PVT LTD",
    duration: "JAN 2019 - May 2019",
    description: "Worked as a Devops Engineer. Expeience in using GIT, AWS, Jenkins"
  },
];

const hobbies = ["Badminton", "Cricket", "Reading", "Movies", "Table Tennis"];

// const achievements = [
//   "Top 1% in HackerRank Java Certification",
//   "Presented research on AI in Agriculture at ICACSE 2021",
//   "Developed award-winning AR application for plant care",
//   "First place in TCS DevHackathon 2022"
// ];

const certifications = [
  {
    title: "Python Essentials Certification",
    issuer: "Linkedin",
    date: "Issued Jan 2024",
    credential: "https://www.credly.com/badges/example-link"
  },
  {
    title: "AMCAT Certified Software Development Trainee",
    issuer: "AMCAT",
    date: "Issued Oct 2023",
    credential: "https://www.coursera.org/account/accomplishments/example"
  },
  {
    title: "AMCAT Certified Software Engineer Product and IT Services.",
    issuer: "AMCAT",
    date: "Issued Sep 2023",
    credential: "https://coursera.org/verify/example"
  },
  {
    title: "C#.NET Development Course",
    issuer: "Refinement Technologies",
    date: "Issued Sep 2023",
    credential: "https://coursera.org/verify/example"
  },
  {
    title: "AMCAT Certified Data Processing Specialist.",
    issuer: "AMCAT",
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
        <p className="text-lg text-gray-300 max-w-xl mx-auto">Creative Software Engineer with a passion for building digital experiences. Based in India. Driven by innovation, guided by curiosity.</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:praveensakthivel07@gmail.com"><Mail className="text-green-400 hover:scale-110 transition" /></a>
          <a href="https://github.com/praveen2143"><Github className="text-green-400 hover:scale-110 transition" /></a>
          <a href="www.linkedin.com/in/praveen-sakthivel07"><Linkedin className="text-green-400 hover:scale-110 transition" /></a>
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

      {/* Projects Section
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
      </section> */}

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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-green-400">Let's Connect</h2>
        <p className="text-gray-400">Interested in collaborating or hiring? Reach out via email or connect on social platforms.</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:praveensakthivel07@gmail.com"><Mail className="text-green-400 hover:scale-110 transition" /></a>
          <a href="https://github.com/praveen2143"><Github className="text-green-400 hover:scale-110 transition" /></a>
          <a href="www.linkedin.com/in/praveen-sakthivel07"><Linkedin className="text-green-400 hover:scale-110 transition" /></a>
        </div>
      </section>
    </div>
  );
}
