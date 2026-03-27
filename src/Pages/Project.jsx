import Projectcard from "../components/Projectcard";
import React from "react";
import video from "../assets/video.mp4";

const Projects = () => {
  return (
    <section className= "bg-gradient-to-br from-black via-neutral-900 to-black text-white text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mb-14">
          A selection of real-world applications I’ve built using the MERN stack.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          <Projectcard
          video={video}
            title="Multi-Tenant Institute Management System"
            description="A scalable SaaS platform that allows multiple institutes to manage their operations independently while sharing a single codebase."
            features={[
              "Multi-tenant architecture",
              "Institute-based data isolation",
              "Role-based authentication",
              "JWT security",
              "Student & staff management",
              "Admin dashboards",
            ]}
            tech={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
              "Tailwind CSS",
            ]}
          />


          {/* You can add more cards later */}
        </div>
      </div>
    </section>
  );
};

export default Projects;