
'use client'
import { useState } from "react";
import GlobalButton from "./Globalbutton";

export default function Research() {
  const researchItems = [
    {
      category: "Health",
      date: "Oct 27,2023",
      title: "Maternity Bond",
      description:
        "The Formation of family bonds conditions the future health of the individuals and appears to be a central element in their psychic development",
      imageUrl: "/featured research/mother-with-daughter-airport.png",
    },
    {
      category: "Beauty",
      date: "Oct 22,2024",
      title: "Beauty Treatments",
      description:
      "The Formation of family bonds conditions the future health of the individuals and appears to be a central element in their psychic development",
      imageUrl: "/featured research/cosmetology-doctor-patien.png",
    },
    {
      category: "Health",
      date: "Oct 22,2024",
      title: "Mental Relief",
      description:
      "The Formation of family bonds conditions the future health of the individuals and appears to be a central element in their psychic development",      imageUrl: "/featured research/man-enjoying-rural-surroundings.png",
    },
    {
      category: "Treatments",
      date: "Oct 22,2024",
      title: "Skin Treatments",
      description:
      "The Formation of family bonds conditions the future health of the individuals and appears to be a central element in their psychic development",      imageUrl: "/featured research/couple-hugging-looking-city-from-balcony.png",
    },
    {
      category: "Medical Cases",
      date: "Oct 22,2024",
      title: "Fertility Solutions",
      description:
      "The Formation of family bonds conditions the future health of the individuals and appears to be a central element in their psychic development",      imageUrl: "/featured research/happy-couple-talking-while-using-laptop-their-new-apartment.png",
    },
    {
      category: "Diseases",
      date: "Oct 22,2024",
      title: "Cardiovascular Diseases",
      description:
      "The Formation of family bonds conditions the future health of the individuals and appears to be a central element in their psychic development",      imageUrl: "/featured research/smiley-colleagues-chatting-work-full-shot.png",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-6 mb-4">
      <div className="bg-[#1bbf7d] flex w-full py-6  justify-center items-center">
        <h1 className="text-4xl font-bold text-white mb-6 ">
          Featured Research
        </h1>
      </div>
      <main className="w-full flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {researchItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] w-3/4 shadow-lg rounded-lg relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-96 object-cover rounded-t-lg"
              />
              {hoveredIndex === index && (
                <div className="p-4 absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                  <div className="text-white text-center">
                    <div className="flex justify-between">
                      <span className="text-lg text-green-600 font-semibold">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h2 className="text-lg md:text-2xl font-bold text-gray-300 mt-2">
                      {item.title}
                    </h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <GlobalButton bgColor="[#f5f5f5]" textColor="[#1bbf7d]" text="Discover more" />

    </div>
  );
}