import React from "react";
import { useParams, useNavigate } from "react-router-dom";

/* ---------------- SAMPLE DATA WITH IMAGES + VIDEOS ---------------- */
const projectData = [
  {
    id: 1,
    name: "First Day ",
    title: "supervision:",
    image:
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226645/WhatsApp_Image_2025-11-15_at_10.28.55_PM_v02vh3.jpg",
    location: "Pulathisipura National College of Education",
    description:
      "Today I realized the importance of confidence when speaking in public. Watching others deliver powerful speeches made me feel inspired. I also noticed my own fear of speaking, which I want to overcome. From now on, I will try to participate more in class discussions to build my confidence.  I understood that I need to improve my vocabulary and stay updated. I will now spend more time reading English articles and books.",
    tenImages: [
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226554/WhatsApp_Image_2025-11-15_at_10.28.50_PM_jmhsyx.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226590/WhatsApp_Image_2025-11-15_at_10.28.53_PM_ff2klz.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226628/WhatsApp_Image_2025-11-15_at_10.28.54_PM_n4t17d.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226676/WhatsApp_Image_2025-11-15_at_10.28.56_PM_1_chnogm.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226688/WhatsApp_Image_2025-11-15_at_10.28.57_PM_1_p685m1.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226705/WhatsApp_Image_2025-11-15_at_10.28.57_PM_2_yhb6im.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226731/WhatsApp_Image_2025-11-15_at_10.28.59_PM_cybgz5.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226608/WhatsApp_Image_2025-11-15_at_10.28.54_PM_2_wbige8.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226795/WhatsApp_Image_2025-11-15_at_10.29.03_PM_2_srklor.jpg",
    ],
    tenVideos: [
      "https://res.cloudinary.com/drripqsdg/video/upload/v1763226829/WhatsApp_Video_2025-11-15_at_10.28.50_PM_tbdw7s.mp4",
    ],
  },

  {
    id: 2,
    name: "Second Day ",
    title: "supervision:",
    image:
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763226766/WhatsApp_Image_2025-11-15_at_10.29.02_PM_wd5kjk.jpg",
    location: "Pulathisipura National College of Education",
    description:
      "The quiz reminded me that learning English is not only about grammar, but also about general knowledge and teamwork. I understood that I need to improve my vocabulary and stay updated. I will now spend more time reading English articles and books.",
    tenImages: [
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269849/WhatsApp_Image_2025-11-15_at_10.38.30_PM_2_mi7rqr.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763228757/WhatsApp_Image_2025-11-15_at_10.38.32_PM_orw5xq.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269824/WhatsApp_Image_2025-11-15_at_10.38.29_PM_kdn9f5.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269838/WhatsApp_Image_2025-11-15_at_10.38.30_PM_1_mfoo8k.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269862/WhatsApp_Image_2025-11-15_at_10.38.30_PM_bcey5t.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269874/WhatsApp_Image_2025-11-15_at_10.38.31_PM_1_lrmegj.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269888/WhatsApp_Image_2025-11-15_at_10.38.31_PM_dlcdqj.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269920/WhatsApp_Image_2025-11-15_at_10.38.32_PM_2_ucdzoq.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269937/WhatsApp_Image_2025-11-15_at_10.38.33_PM_vxyso2.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269953/WhatsApp_Image_2025-11-15_at_10.38.34_PM_1_bhavhl.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269961/WhatsApp_Image_2025-11-15_at_10.38.34_PM_egwmpm.jpg",
    ],
    tenVideos: [
      "https://res.cloudinary.com/drripqsdg/video/upload/v1763269994/WhatsApp_Video_2025-11-15_at_10.38.33_PM_hzwwcb.mp4",
    ],
  },

  {
    id: 3,
    name: "Third Day ",
    title: "supervision:",
    image:
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763270793/WhatsApp_Image_2025-11-15_at_11.18.08_PM_jg8ckb.jpg",
    location: "",
    description:
      "Acting in English helped me express emotions better and understand the value of pronunciation and tone. I made some mistakes on stage, but I learned that mistakes are part of learning. I will practice more to improve fluency and stage presence.",
    tenImages: [
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763270752/WhatsApp_Image_2025-11-15_at_11.18.06_PM_1_tw31kt.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763270767/WhatsApp_Image_2025-11-15_at_11.18.06_PM_l6oidc.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763270780/WhatsApp_Image_2025-11-15_at_11.18.07_PM_ddjwdy.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763270793/WhatsApp_Image_2025-11-15_at_11.18.08_PM_jg8ckb.jpg",
    ],
    tenVideos: [
      "https://res.cloudinary.com/drripqsdg/video/upload/v1763270896/WhatsApp_Video_2025-11-15_at_11.18.05_PM_sq98bm.mp4",
    ],
  },

  {
    id: 4,
    name: "Fourth Day",
    title: "supervision:",
    image:
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763271384/WhatsApp_Image_2025-11-15_at_11.21.39_PM_pn4cmw.jpg",
    location: "Pulathisipura National College of Education",
    description: (
      <>
        <strong>1. For my teaching journey:</strong>
        <br />
        Through English Week, I get the opportunity to improve my teaching
        skills by enhancing students’ language abilities.
        <br />
        <br />
        <strong>2. For current improvement:</strong>
        <br />
        By identifying and correcting mistakes, I can better manage my classes
        and build stronger relationships with my students.
        <br />
        <br />
        <strong>3. For my future:</strong>
        <br />
        The experience gained from organizing English Week helps me explore new
        ideas and practical approaches in education, laying a foundation for my
        professional growth.
      </>
    ),
    tenImages: [
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763271459/WhatsApp_Image_2025-11-15_at_11.21.27_PM_pdys2e.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763271449/WhatsApp_Image_2025-11-15_at_11.21.38_PM_1_xy3qf3.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763271430/WhatsApp_Image_2025-11-15_at_11.21.38_PM_knbhe7.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763271412/WhatsApp_Image_2025-11-15_at_11.21.39_PM_1_u6qgni.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763271384/WhatsApp_Image_2025-11-15_at_11.21.39_PM_pn4cmw.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763271355/WhatsApp_Image_2025-11-15_at_11.21.40_PM_d1xxjd.jpg",
    ],
    tenVideos: [
      "https://res.cloudinary.com/drripqsdg/video/upload/v1763271334/WhatsApp_Video_2025-11-15_at_11.21.37_PM_bzf6mh.mp4",
    ],
  },

  {
    id: 5,
    name: "SWOT Analysis",
    title: "",
    image:
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763272311/SWOT_Blank_Labels_V1.1_oafkva.png",
    location: "",
    description: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-700 mb-2">
          English Week SWOT Analysis
        </h3>

        <div>
          <strong className="text-blue-800">S – Strengths:</strong>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Students' interest in the English language.</li>
            <li>Active participation of supportive and enthusiastic teachers.</li>
            <li>Creative programs such as drama, quizzes, and speeches.</li>
            <li>Improved student confidence through group activities.</li>
          </ul>
        </div>

        <div>
          <strong className="text-blue-800">W – Weaknesses:</strong>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Language anxiety among some students.</li>
            <li>Limited time causing challenges in program planning.</li>
            <li>Minor imbalance in skill levels among students.</li>
          </ul>
        </div>

        <div>
          <strong className="text-blue-800">O – Opportunities:</strong>
          <ul className="list-disc ml-6 text-gray-800">
            <li>Development of students' speaking and writing skills.</li>
            <li>Generation of new ideas for future programs.</li>
            <li>Preparing students for international competitions.</li>
            <li>Exposure to new experiences through ICT and media use.</li>
          </ul>
        </div>

        <div>
          <strong className="text-blue-800">T – Threats:</strong>
          <ul className="list-disc ml-6 text-gray-800">
            <li>
              Interruptions due to regular school activities (exams, annual
              functions).
            </li>
            <li>Divided student attention due to overlapping programs.</li>
            <li>Lack of proper initial planning or organizing capacity.</li>
          </ul>
        </div>
      </div>
    ),
    tenImages: [
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269824/WhatsApp_Image_2025-11-15_at_10.38.29_PM_kdn9f5.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269838/WhatsApp_Image_2025-11-15_at_10.38.30_PM_1_mfoo8k.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269862/WhatsApp_Image_2025-11-15_at_10.38.30_PM_bcey5t.jpg",
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763269874/WhatsApp_Image_2025-11-15_at_10.38.31_PM_1_lrmegj.jpg",
    ],
    tenVideos: ["https://res.cloudinary.com/drripqsdg/image/upload/v1763275267/coming_ujuoki.webp"
],
  },
   {
    id: 6,
    name: "Day Five ",
    title: "ComingSoon",
    image:
      "https://res.cloudinary.com/drripqsdg/image/upload/v1763275267/coming_ujuoki.webp",
    location: "",
    description:
      "",
    tenImages: [
"https://res.cloudinary.com/drripqsdg/image/upload/v1763275267/coming_ujuoki.webp"
    ],
    tenVideos: [
"https://res.cloudinary.com/drripqsdg/image/upload/v1763275267/coming_ujuoki.webp"
    ],
  },
];

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Project not found.
      </div>
    );
  }

  // ------------- NEXT DAY FUNCTION ----------------
  const goToNextDay = () => {
    const nextId =
      Number(id) + 1 > projectData.length ? 1 : Number(id) + 1;
    navigate(`/day/${nextId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="backdrop-blur-xl bg-white/30 shadow-2xl rounded-3xl p-10 border border-white/40 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 text-transparent bg-clip-text mb-6">
            {project.name}
          </h1>

          <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-3 text-lg text-gray-800">
            <p>
              <span className="font-semibold text-blue-900">
                {project.title}
              </span>{" "}
              {project.description}
            </p>
          </div>
        </div>

        {/* Photo Gallery */}
        <h2 className="text-3xl font-semibold text-blue-900 mb-5">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {project.tenImages.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white/20 shadow-lg border border-white/30 backdrop-blur-lg"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Video Gallery */}
        <h2 className="text-3xl font-semibold text-blue-900 mt-10 mb-5">
          Video Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.tenVideos.map((video, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white/20 shadow-lg border border-white/30 backdrop-blur-lg"
            >
              <video
                src={video}
                controls
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              ></video>
            </div>
          ))}
        </div>

        {/* NEXT DAY BUTTON */}
        <button
          onClick={goToNextDay}
          className="mt-10 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-lg transition"
        >
          Next Day →
        </button>
      </div>
    </div>
  );
}
