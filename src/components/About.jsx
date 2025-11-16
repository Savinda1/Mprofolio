import React from "react";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
<section className="w-full min-h-screen bg-gradient-to-br from-[#e8f5ff] via-[#d6edff] to-[#bfe4ff] text-gray-900 flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 shadow-lg overflow-hidden">
  <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/images/p1.jpg"
          alt="Profile"
          className="w-[260px] sm:w-[360px] md:w-[450px] lg:w-[500px] rounded-2xl shadow-2xl object-cover border-4 border-blue-200"
        />
      </div>
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800">
          About Me
        </h2>

        <p className="text-lg leading-relaxed max-w-xl font-medium">
          I am Nilmini Nawoda, a student at the Pulathisipura National College of Education.
I am studying Agriculture, Science, English, and Information Technology (IT).
My goal is to become a dedicated teacher in Sri Lanka and serve in a leading school in the country.
        </p>

        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-2">
            <CheckCircle size={22} className="text-blue-600" /> Agriculture
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={22} className="text-blue-600" />  Science
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={22} className="text-blue-600" /> IT
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle size={22} className="text-blue-600" />  English
          </li>
        </ul>
      </div>

      {/* ⭐ RIGHT SIDE IMAGE */}
    

    </section>
  );
}
