import React from "react";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Nilmini Nawoda. All Rights Reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/savinda1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-red-500 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
