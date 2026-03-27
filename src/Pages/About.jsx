import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens } from 'react-icons/si';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center bg-black text-white py-24 px-6">
      
      {/* Left Side: Text */}
      <div className="md:w-1/2 flex flex-col justify-center mb-12 md:mb-0 md:pr-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h2>

        <p className="text-gray-400 max-w-xl mb-6">
          A brief introduction about my background, skills, and recent experience.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          I’m <span className="text-white font-semibold">Muhammad Hamza</span>, a passionate <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">MERN Stack Developer</span> with a strong interest in building scalable, user-focused web applications.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Recently, I completed my internship as a <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent font-medium">MERN Stack Developer at Geni Teams</span>, where I gained hands-on experience with APIs, database design, authentication, and collaborative workflows.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I’m continuously learning and improving my skills, focusing on writing clean code, following best practices, and building production-ready applications.
        </p>
      </div>

      {/* Right Side: Tech Icons Grid */}
      <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { icon: <FaReact className="text-4xl text-blue-400" />, label: "React.js" },
          { icon: <FaNodeJs className="text-4xl text-green-400" />, label: "Node.js" },
          { icon: <SiExpress className="text-4xl text-gray-300" />, label: "Express.js" },
          { icon: <SiMongodb className="text-4xl text-green-600" />, label: "MongoDB" },
          { icon: <SiTailwindcss className="text-4xl text-blue-500" />, label: "Tailwind CSS" },
          { icon: <SiJsonwebtokens className="text-4xl text-yellow-400" />, label: "JWT" },
          { icon: <FaGitAlt className="text-4xl text-red-400" />, label: "Git" },
          { icon: <FaDatabase className="text-4xl text-gray-400" />, label: "SQL" },
        ].map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 p-6 bg-white/5 rounded-xl hover:bg-gradient-to-r from-indigo-400/95 to-pink-500/95 transition"
          >
            {tech.icon}
            <span className="text-gray-300 text-sm">{tech.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;