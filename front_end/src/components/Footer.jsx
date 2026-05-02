import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#0b0b0c] py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          
          {/* Brand */}
          <div>
            <p className="text-xs text-gray-600">
              © {currentYear} Coding Gallery. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Designed & Developed by{" "}
              <span className="text-gray-400">Vishal Maurya</span>
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/VishalMaurya121"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-400"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-maurya-5204482a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:vishalmaurya8459@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-400"
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;