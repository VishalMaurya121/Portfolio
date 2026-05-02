import React from "react";
import profileImg from "../assets/hero.jpeg";
import {
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaMicrochip,
  FaCode,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBullseye,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { MapPin, Mail, Phone } from "lucide-react";
import { SiMongodb, SiTailwindcss, SiArduino } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="h-4 w-4" /> },
  { name: "Node.js", icon: <FaNodeJs className="h-4 w-4" /> },
  { name: "MongoDB", icon: <SiMongodb className="h-4 w-4" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" /> },
  { name: "Java / C / C++", icon: <FaMicrochip className="h-4 w-4" /> },
  { name: "Verilog", icon: <FaCode className="h-4 w-4" /> },
  { name: "Arduino", icon: <SiArduino className="h-4 w-4" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="h-4 w-4" /> },
];

const expertise = [
  "Hardware-Software Integration",
  "Full Stack Development (MERN)",
  "Digital Circuit Optimization",
  "Embedded Systems & IoT",
  "REST API Design & Deployment",
];

const AboutMe = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Content */}
          <div className="space-y-14">
            {/* Intro */}
            <div className="border-b border-white/10 pb-10">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
                About Me
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Vishal <span className="text-yellow-400">Maurya</span>
              </h1>

              <p className="mt-4 text-lg text-gray-300">
                Electronics & Communication Engineering student, developer, and
                technology enthusiast focused on building scalable software and
                hardware-integrated solutions.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400">
                I am currently pursuing B.Tech in Electronics and Communication
                Engineering at Madan Mohan Malaviya University of Technology.
                My interests lie at the intersection of full-stack development,
                digital electronics, embedded systems, and modern problem-solving.
                Through <span className="font-semibold text-yellow-400">Coding Gallery</span>,
                I aim to create meaningful real-world solutions with both software
                and hardware.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://github.com/VishalMaurya121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/vishal-maurya-12188b326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-gray-200 transition hover:bg-white/10"
                >
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>

              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  Gorakhpur, UP, India
                </div>
                <a
                  href="mailto:vishalmaurya8459@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Mail className="h-4 w-4 text-yellow-400" />
                  vishalmaurya8459@gmail.com
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  +91 8459588922
                </div>
              </div>
            </div>

            {/* Education */}
            <section>
              <div className="mb-8 flex items-center gap-3">
                <FaGraduationCap className="h-5 w-5 text-yellow-400" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>

              <div className="space-y-8 border-l border-white/10 pl-6">
                <div className="relative">
                  <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-yellow-400" />
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                    2024 — Present
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    B.Tech in Electronics & Communication Engineering
                  </h3>
                  <p className="mt-1 text-gray-300">
                    Madan Mohan Malaviya University of Technology
                  </p>
                  <p className="mt-3 leading-7 text-gray-400">
                    Focused on digital electronics, signal processing, and systems
                    thinking while strengthening software development skills.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-white/30" />
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">
                    2023 — 2024
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">Intermediate</h3>
                  <p className="mt-1 text-gray-300">
                    Mahatma Gandhi Intermediate College, Gorakhpur, UP
                  </p>
                  <p className="mt-3 leading-7 text-gray-400">
                    Built a strong academic foundation in physics, chemistry,
                    and mathematics with emphasis on analytical thinking.
                  </p>
                </div>
              </div>
            </section>

            {/* Goals */}
            <section>
              <div className="mb-8 flex items-center gap-3">
                <FaBullseye className="h-5 w-5 text-yellow-400" />
                <h2 className="text-2xl font-semibold">Vision & Goals</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Coding Gallery
                  </h3>
                  <p className="mt-3 leading-7 text-gray-400">
                    Building Coding Gallery into a platform for impactful,
                    practical, and innovative digital solutions.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    VLSI & Advanced Electronics
                  </h3>
                  <p className="mt-3 leading-7 text-gray-400">
                    Exploring efficient computing hardware, modern electronics,
                    and future-ready embedded technologies.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111214] p-4">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={profileImg}
                  alt="Vishal Maurya"
                  className="h-[420px] w-full object-cover"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Profile Preview
                </p>
              </div>
            </div>

            <section className="rounded-4xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-5 text-xl font-semibold">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-3">
                {skills.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <div className="text-yellow-400">{icon}</div>
                    <span className="text-sm text-gray-200">{name}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-4xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-5 text-xl font-semibold">Core Expertise</h2>
              <div className="flex flex-wrap flex-col gap-4">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;