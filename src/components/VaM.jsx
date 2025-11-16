import React from "react";
import { Eye, Flag } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-blue-50 to-blue-100" id="vision-mission">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-12">
          Vision & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <Eye className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
            “To inspire a generation of confident English communicators who embrace language as a bridge to global opportunities.”
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <Flag className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
         “To create a supportive and engaging environment where students can explore, enjoy, and enhance their English language skills through creative activities, teamwork, and real-life application.”
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
