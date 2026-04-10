import React from "react";
import { motion } from "framer-motion";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";
import avatar from "../assets/avatar.png";


function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >

          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <img
              src={avatar}
              alt="Avatar"
              className="w-32 h-28 shadow-lg"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            I do code and <br />
            make content{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              about it!
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm md:text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-8"
          >
            I am a seasoned full-stack software engineer, specializing in MERN
            stack development and building scalable, production-ready
            applications.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1-kWe3c64Rsxg5ZewFVydXt_aFwDB9V-M/view"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center m-1 px-5 py-3 bg-gradient-to-r from-indigo-400 to-pink-500 rounded-2xl shadow-lg"
          >
            Download Resume
          </motion.a>

        </motion.div>
      </section>

      {/* Animated Sections */}
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="min-h-screen"
>
  <About />
</motion.section>
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="min-h-screen"
>
  <Project />
</motion.section>
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="min-h-screen"
>
  <Contact />
</motion.section>
    
    </>
  );
}

export default Home;