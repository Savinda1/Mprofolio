import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // Fixed import

function Card() {
  const cards = [
    {
      id: 1,
      name: "First Day (Team Lumina)",
      image: "https://res.cloudinary.com/drripqsdg/image/upload/v1763226645/WhatsApp_Image_2025-11-15_at_10.28.55_PM_v02vh3.jpg",
      location: "Pulathisipura National College of Education",
    },
    {
      id: 2,
      name: "Second Day (Team Lumina)",
      image: "https://res.cloudinary.com/drripqsdg/image/upload/v1763226766/WhatsApp_Image_2025-11-15_at_10.29.02_PM_wd5kjk.jpg",
      location: "Pulathisipura National College of Education",
    },
    {
      id: 3,
      name: "Third day (Team Lumina)",
      image: "https://res.cloudinary.com/drripqsdg/image/upload/v1763228757/WhatsApp_Image_2025-11-15_at_10.38.32_PM_orw5xq.jpg",
      location: "Pulathisipura National College of Education",
    },
    {
      id: 4,
      name: "fourth day (Team Lumina)",
      image: "https://res.cloudinary.com/drripqsdg/image/upload/v1763271384/WhatsApp_Image_2025-11-15_at_11.21.39_PM_pn4cmw.jpg",
      location: "Pulathisipura National College of Education",
    },
       {
      id: 5,
      name: "SWOT Analysis",
      image: "https://res.cloudinary.com/drripqsdg/image/upload/v1763272311/SWOT_Blank_Labels_V1.1_oafkva.png",
      location: "Pulathisipura National College of Education",
    },
        {
      id: 6,
      name: "Day Five (Team Lumina)",
      image: "https://res.cloudinary.com/drripqsdg/image/upload/v1763275267/coming_ujuoki.webp",
      location: "Pulathisipura National College of Education",
    },
    
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-[#e8f5ff] via-[#d6edff] to-[#bfe4ff] text-gray-900">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-12">
        English Week
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group bg-white rounded-3xl shadow-2xl p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={card.image}
                alt={card.name}
                className="object-cover w-full h-full absolute group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold text-lg text-gray-900">{card.name}</h3>

              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                <span>{card.location}</span>
              </div>

              {/* Details Button with Link */}
              <Link
                to={`/day/${card.id}`}
                className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;