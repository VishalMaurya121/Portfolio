import React from "react";
import {
  FaGlobe,
  FaMobileScreenButton,
  FaMicrochip,
  FaArrowUpRightFromSquare,
  FaReact,
  FaNodeJs,
  FaCode,
  FaTerminal,
  FaLink,
  FaLayerGroup,
} from "react-icons/fa6";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const services = [
  {
    id: "01",
    title: "Web Development",
    icon: <FaGlobe className="h-5 w-5" />,
    status: "Available Now",
    description:
      "High-performance full-stack applications built with scalable architecture and modern engineering standards.",
    stack: [
      {
        name: "React",
        icon: <FaReact className="h-3 w-3" />,
        link: "https://react.dev/",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="h-3 w-3" />,
        link: "https://nodejs.org/",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="h-3 w-3" />,
        link: "https://www.mongodb.com/",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="h-3 w-3" />,
        link: "https://tailwindcss.com/",
      },
    ],
    active: true,
  },
  {
    id: "02",
    title: "App Development",
    icon: <FaMobileScreenButton className="h-5 w-5" />,
    status: "Upcoming",
    description:
      "Developing intuitive cross-platform mobile experiences that deliver seamless performance across all devices.",
    stack: [
      {
        name: "React Native",
        icon: <FaReact className="h-3 w-3" />,
        link: "https://reactnative.dev/",
      },
      {
        name: "UI Systems",
        icon: <FaLayerGroup className="h-3 w-3" />,
        link: "https://www.adobe.com/products/xd.html",
      },
      {
        name: "API Integration",
        icon: <FaLink className="h-3 w-3" />,
        link: "https://www.postman.com/",
      },
    ],
    active: false,
  },
  {
    id: "03",
    title: "VLSI Design",
    icon: <FaMicrochip className="h-5 w-5" />,
    status: "Upcoming",
    description:
      "Specialized digital design and RTL development focused on hardware optimization and system efficiency.",
    stack: [
      {
        name: "Verilog",
        icon: <FaCode className="h-3 w-3" />,
        link: "https://en.wikipedia.org/wiki/Verilog",
      },
      {
        name: "RTL Design",
        icon: <FaMicrochip className="h-3 w-3" />,
        link: "https://en.wikipedia.org/wiki/Register-transfer_level",
      },
      {
        name: "Simulation",
        icon: <FaTerminal className="h-3 w-3" />,
        link: "https://www.edaplayground.com/",
      },
      {
        name: "FPGA Flow",
        icon: <FaLayerGroup className="h-3 w-3" />,
        link: "https://www.xilinx.com/products/design-tools/vivado.html",
      },
    ],
    active: false,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0c] text-white flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
        <div className="flex flex-col items-center border-b border-white/10 pt-14 pb-14 text-center">
          <div className="w-full">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Precision Engineering for{" "}
              <span className="text-yellow-400">Modern</span> Solutions
            </h2>

         <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              At{" "}
              <span className="text-yellow-400 font-semibold">
                Coding Gallery
              </span>
              , we offer a wide range of technical services, including fast and
              reliable web development, user-friendly mobile apps, and seamless
              hardware-software integration for modern engineering needs.
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          {services.map((service) => (
            <article
              key={service.id}
              className={`group rounded-4xl border transition-all duration-300 ${
                service.active
                  ? "border-yellow-400/25 bg-yellow-500/5"
                  : "border-white/10 bg-white/3"
              } hover:border-yellow-400/30 hover:bg-white/5`}
            >
              <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[120px_1fr_auto] lg:items-start">
                <div className="flex items-center justify-between lg:block lg:text-left">
                  <p className="text-sm font-medium tracking-[0.2em] text-gray-500">
                    {service.id}
                  </p>

                  <div className="mt-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-yellow-400 lg:mt-8">
                    {service.icon}
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {service.title}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${
                        service.active
                             ? "border border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
                          : "border border-white/10 bg-white/4 text-gray-300"
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>

                  <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300 lg:mx-0">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                    {service.stack.map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-2 text-xs uppercase tracking-[0.16em] text-gray-300 transition-all hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-white"
                      >
                        <span className="text-yellow-400/80">{item.icon}</span>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center lg:h-full lg:justify-end">
                  <a
                    href={
                      service.active
                        ? "https://github.com/VishalMaurya121"
                        : "#"
                    }
                    target={service.active ? "_blank" : "_self"}
                    rel={service.active ? "noopener noreferrer" : ""}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-medium transition sm:w-auto lg:px-4 lg:py-3 ${
                      service.active
                        ? "bg-yellow-500 text-black hover:bg-yellow-400"
                        : "border border-white/10 bg-white/4 text-white hover:bg-white/8"
                    }`}
                  >
                    {service.active ? "Explore" : "Soon"}
                    <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
