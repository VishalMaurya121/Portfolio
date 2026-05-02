import React from "react";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaArrowRight,
  FaCode,
  FaMicrochip,
} from "react-icons/fa6";

const projects = [
  {
    id: "01",
    title: "Full Stack Blog Platform",
    category: "MERN Stack",
    status: "Live Project",
    icon: <FaCode className="h-5 w-5" />,
    description:
      "A production-ready blog platform built with the MERN stack, featuring authentication, CRUD operations, responsive UI, and deployment on Render.",
    highlights: [
      "JWT authentication",
      "Create, edit, and manage posts",
      "Responsive Tailwind interface",
      "Deployed full-stack workflow",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveLink: "https://my-blog-app-five-alpha.vercel.app",
    githubLink: "https://github.com/VishalMaurya121",
    featured: true,
  },
  {
    id: "02",
    title: "Digital Logic Design with Verilog",
    category: "Hardware Design",
    status: "Upcoming",
    icon: <FaMicrochip className="h-5 w-5" />,
    description:
      "A Verilog-based digital design project focused on logic modeling, simulation workflows, and hardware-oriented problem solving for efficient circuit behavior.",
    highlights: [
      "RTL-based circuit design",
      "Simulation and verification flow",
      "Digital systems concepts",
      "FPGA-oriented understanding",
    ],
    tech: ["Verilog", "ModelSim", "Vivado", "Digital Logic"],
    liveLink: "",
    githubLink: "https://github.com/VishalMaurya121",
    featured: false,
  },
  {
    id: "03",
    title: "IoT Based Monitoring System",
    category: "Embedded Systems",
    status: "In Development",
    icon: <FaMicrochip className="h-5 w-5" />,
    description:
      "An integrated IoT solution for real-time sensor data monitoring, utilizing microcontroller interfacing and cloud-based data logging for industrial applications.",
    highlights: [
      "Microcontroller interfacing",
      "Real-time data visualization",
      "Cloud integration (MQTT/HTTP)",
      "Sensor calibration & accuracy",
    ],
    tech: ["Arduino/ESP32", "C++", "MQTT", "Node-RED"],
    liveLink: "",
    githubLink: "https://github.com/VishalMaurya121",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0c] text-white flex flex-col justify-center py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.1),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center border-b border-white/10 pb-16 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Engineering solutions that <span className="text-yellow-400">drive</span> innovation
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Explore the <span className="text-yellow-400 font-semibold">Coding Gallery</span>, where software precision meets electronics engineering. From full-stack applications to hardware modeling, witness the fusion of code and hardware.
          </p>
        </div>

        <div className="mt-20 space-y-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group overflow-hidden rounded-4xl border transition-all duration-300 ${
                project.featured
                  ? "border-yellow-400/25 bg-yellow-500/5"
                  : "border-white/10 bg-white/3"
              } hover:border-yellow-400/30 hover:bg-white/5`}
            >
              <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[110px_1fr] lg:gap-10">
                <div className="flex items-start justify-between lg:block">
                  <p className="text-sm font-medium tracking-[0.2em] text-gray-500">
                    {project.id}
                  </p>

                  <div className="mt-0 lg:mt-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-yellow-400">
                    {project.icon}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-yellow-400">
                      {project.category}
                    </span>

                    <span className={`flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${
                      project.status === "Live Project"
                        ? "border-green-500/20 bg-green-500/10 text-green-400"
                        : project.status === "Upcoming"
                        ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                        : "border-blue-500/20 bg-blue-500/10 text-blue-400"
                    }`}>
                      {project.status === "Live Project" && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                      )}
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-gray-300">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/2.5 px-4 py-3"
                      >
                        <span className="h-2 w-2 rounded-full bg-yellow-400" />
                        <span className="text-sm text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/3 px-3 py-2 text-xs uppercase tracking-[0.16em] text-gray-300 transition-colors hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-yellow-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
                      >
                        Live Demo
                        <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/8"
                      >
                        <FaGithub className="h-4 w-4" />
                        Source Code
                      </a>
                    )}

                    {!project.liveLink && !project.githubLink && (
                      <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-5 py-3 text-sm font-medium text-gray-300">
                        Engineering Project
                        <FaArrowRight className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
