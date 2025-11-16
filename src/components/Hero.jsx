import {
  School,
  Laptop2, // Changed from LaptopCode
  BrainCircuit,
  Leaf,
  FlaskConical,
  Languages,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/drripqsdg/image/upload/v1763279719/b3_dywlnu.jpg"
        alt="Ekanayaka Spices"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      {/* Content */}
      <div className="relative text-center max-w-2xl bg-white/70 backdrop-blur-md rounded-xl p-10 shadow-lg">
  <img
        src="https://res.cloudinary.com/drripqsdg/image/upload/v1763279643/b4_rvuznf.jpg"
        alt="logo"
        className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
      />




          <h1 className="text-5xl font-bold text-gray-900">
          Hi, I'm <span className="text-blue-600">Nilmini Nawoda</span>
        </h1>
        

        {/* Tagline with Icons */}
        <p className="mt-4 text-lg text-gray-700 flex flex-wrap justify-center gap-4">
          <span className="flex items-center gap-2">
            <School size={20} /> School Teacher
          </span>
         
          <span className="flex items-center gap-2">
            <Leaf size={20} /> Agriculture
          </span>
          <span className="flex items-center gap-2">
            <FlaskConical size={20} /> Science
          </span>
          <span className="flex items-center gap-2">
            <Languages size={20} /> English
          </span>
          <span className="flex items-center gap-2">
            <BookOpen size={20} /> IT
          </span>
        </p>

          <Link to="/day/1">

        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          View English Week
        </button>
</Link>
       <svg
          className="animate-bounce w-12 h-12 bg-blue-600 rounded-full mt-8 mx-auto p-2"
          fill="none"
          stroke="blue"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 48"
        >
          <path d="M12 4v40M6 34l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
