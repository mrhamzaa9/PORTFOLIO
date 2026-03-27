import React from "react"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Project from "../Pages/Project"
import avatar from "../assets/avatar.png"


function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">

          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <img
              src={avatar}
              alt="Avatar"
              className="w-32 h-28  shadow-lg"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            I do code and <br />
            make content{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              about it!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-8">
            I am a seasoned full-stack software engineer 
            experience, specializing in MERN stack development and building
            scalable, production-ready applications.
          </p>

          {/* CTA */}
          <a
            href="https://drive.google.com/file/d/1EWa32-ksLW7tHIMn-i4BLzZGOSxlh99q/view"
            download
            className="inline-flex items-center justify-center m-1 px-5 py-3 bg-gradient-to-r from-indigo-400 to-pink-500  rounded-2xl hover shadow-lg"
          >
            Download Resume
          </a>

        </div>
      </section>
      <About/>
      <Project />
      <Contact />
    </>
  );
}

export default Home;