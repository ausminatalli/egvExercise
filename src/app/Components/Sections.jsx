"use client";
import React, { useState } from "react";
import Image from "next/image";

export const Sections = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="w-full h-full bg-[#f5f5f5]">
      <div className="flex justify-center gap-12 py-4 ">
        <a
          className={`p-2 ${
            selected === 0 ? "bg-white" : ""
          } flex rounded-xl items-center gap-2 cursor-pointer`}
          onClick={() => handleClick(0)}
        >
          <Image src={"/heart.svg"} width={40} height={40} alt="test" />{" "}
          <p className="text-sm md:text-lg">Well-Being</p>
        </a>
        <a
          className={`p-2 ${
            selected === 1 ? "bg-white" : ""
          } text-sm md:text-lg  flex items-center rounded-xl gap-2 cursor-pointer`}
          onClick={() => handleClick(1)}
        >
          <Image src={"/flower.svg"} width={30} height={30} alt="test" />{" "}
          <p>Beauty</p>
        </a>
      </div>
      <div className="flex flex-col lg:flex-row justify-center w-full mt-12 text-[#00205b] ">
        <div className="flex flex-col w-full lg:w-1/2 gap-3 mb-4">
          <h3 className=" text-xl  md:text-3xl font-bold w-3/5">
            Low-Calorie Mediterranean Diet Can Help You Lose Belly Fat And
            Reduce Health Risks.
          </h3>
          <p className="text-md md:text-lg md:w-3/5">
            Rich in colorful fruits and vegetables, healthy fats and lean
            proteins, a Mediterranean style of eating consistently earns
            accolades for its looking list of health benefits, including the
            prevention of heart disease and diabetes. Now, new research from
            Spain shows this way of eating,when combined with regular exercise
            and fewer calories, can slash dangerous belly fat in older folks
            while helping to preserve their muscle mass.
          </p>
          <div className="flex gap-4">
            <button
              className="py-2 px-6 bg-[#1bbf7d] rounded-lg shadow-xl

text-white"
            >
              Explore
            </button>
            <button className="p-3 bg-white rounded-lg shadow-sm text-white flex gap-3 items-center">
              <Image src={"/play.svg"} width={20} height={20} alt="play"/>
              <p className="text-[#00205b] font-bold">Watch Video</p>
            </button>
          </div>
        </div>
        <div className="rounded-[4.5rem] bg-[#e6e6e6] px-0 md:px-5  border-2 relative">
          <Image
            src={"/well-being tab/cosmetology-doctor-patien.png"}
            width={500}
            height={500}
            alt="cosmetology-doctor-patien"
          />
          <div className="bg-white  border rounded-2xl absolute bottom-1 right-0 md:bottom-52 md:right-96 w-2/6 md:w-2/5 px-1 py-2 md:p-4 font-semibold">
            <Image
              src={"/greenyoutube.svg"}
              className="w-2/6 md:w-2/5"
              width={60}
              height={60}
              alt="magnifier"
            />
            <p className="text-xl md:text-4xl mt-2  p-2">+12K</p>
            <p className="text-sm md:text-md">
              Medical Conditions & Diseases Results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
