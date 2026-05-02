import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/hero.jpeg";

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b0c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.13),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-14 px-6 pb-14 pt-28 md:px-10 lg:flex-row lg:items-center lg:gap-10 lg:px-15">
        {/* Left */}
        <div className="flex-1">
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-500">
            Hello, I’m Vishal Maurya
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            I build reliable digital products with{" "}
            <span className="text-yellow-400">clean code</span> and engineering
            precision.
          </h1>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-500 px-6 py-2 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              Know More
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-2 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-1 items-center justify-center">
          <div className="group relative w-full max-w-97.5">
            <div className="absolute -inset-5 rounded-[2.25rem] bg-linear-to-br from-yellow-500/20 via-yellow-300/10 to-transparent blur-2xl transition duration-500 group-hover:scale-105" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-3 shadow-2xl backdrop-blur-xl">
              <img
                src={img}
                alt="Vishal Maurya"
                className="h-110 w-full rounded-3xl object-cover transition duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/45 px-4 py-4 ">
                <p className="text-sm font-semibold text-white">
                  Vishal Maurya
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-yellow-400">
                  Building software with engineering precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
