"use client";

import Image from "next/image";
import { useState } from "react";
import GlobalButton from "./Globalbutton";

export const MedicalCases = () => {
    const [selected, setSelected] = useState(0);

    const handleClick = (index) => {
        setSelected(index);
      };
    
return (
<div className="w-full h-full ">
      <div className="flex justify-center gap-12 py-4 ">
        <a
          className={`p-2 ${
            selected === 0 ? "bg-[#e6f8f1]" : ""
          } flex rounded-xl items-center gap-2 cursor-pointer`}
          onClick={() => handleClick(0)}
        >
          <Image src={"/emergency.svg"} width={40} height={40} alt="test" />{" "}
          <p className={` text-sm md:text-lg ${
            selected === 0 ? "text-[#1bbf7d]" : "text-[#8e8e8e]"
          }`}>Health Care</p>
        </a>
        <a
          className={`p-2 ${
            selected === 1 ? "bg-[#e6f8f1]" : ""
          } text-sm md:text-lg  flex items-center rounded-xl gap-2 cursor-pointer`}
          onClick={() => handleClick(1)}
        >
          <Image src={"/stethoscope.svg"} width={40} height={40} alt="test" />{" "}
          <p className={` ${
            selected === 1 ? "text-[#1bbf7d]" : "text-[#8e8e8e]"
          }`}>Medical Cases</p>

        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-10 justify-items-center">
            <div className="flex flex-col gap-3 cursor-pointer">
              <Image
                src={"/healthcare tab/doctor-nurse-discussing-digital-tablet.png"}
                alt="1"
                width={600}
                height={446}
                objectFit="cover"
              />{" "}
             
              <p className="text-lg lg:text-3xl text-black font-bold w-full md:w-1/2">
                Social Connection Can Help Recover From Stress
              </p>
              <p className="text-md lg:text-2xl text-gray-200">Oct 23,2023</p>
            </div>
            <div className="flex flex-col gap-3 cursor-pointer">
              <Image
                src={"/healthcare tab/doctors-giving-their-opinion.png"}
                alt="1"
                width={600}
                height={333}
                objectFit="cover"
              />{" "}
             
              <p className="text-lg lg:text-3xl text-black font-bold w-full md:w-1/2">
                5 Ways Sports Can Transform Your Health
              </p>
              <p className="text-md lg:text-2xl text-gray-200">Oct 23,2023</p>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-10 justify-items-center">
            <div className="flex flex-col gap-3 cursor-pointer">
              <Image
                src={"/healthcare tab/back-view-doctor-senior-woman-walking.png"}
                alt="1"
                width={462}
                height={446}
                objectFit="cover"
              />{" "}
             
              <p className="text-lg lg:text-3xl text-black font-bold w-full md:w-1/2">
                Social Connection Can Help Recover From Stress
              </p>
              <p className="text-md lg:text-2xl text-gray-200">Oct 23,2023</p>
            </div>
            <div className="flex flex-col gap-3 cursor-pointer">
              <Image
                src={"/healthcare tab/group-people-westminister-bridge.png"}
                alt="1"
                width={460}
                height={333}
                objectFit="cover"
              />{" "}
             
              <p className="text-lg lg:text-3xl text-black font-bold w-full md:w-1/2">
                5 Ways Sports Can Transform Your Health
              </p>
              <p className="text-md lg:text-2xl text-gray-200">Oct 23,2023</p>
            </div>
            <div className="flex flex-col gap-3 cursor-pointer">
              <Image
                src={"/healthcare tab/college-students-hall.png"}
                alt="1"
                width={460}
                height={333}
                objectFit="cover"
              />{" "}
             
              <p className="text-lg lg:text-3xl text-black font-bold w-full md:w-1/2">
                5 Ways Sports Can Transform Your Health
              </p>
              <p className="text-md lg:text-2xl text-gray-200">Oct 23,2023</p>
            </div>
            </div>
            <GlobalButton bgColor="[#f5f5f5]" textColor="[#1bbf7d]" text="Explore" />

</div>
);

}