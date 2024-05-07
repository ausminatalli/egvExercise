// components/SearchComponent.js
"use client";
import Image from "next/image";
import React, { useState } from "react";

// components/SearchComponent.js

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search button clicked. Search query:", searchQuery);
  };

  const handleAlphabetClick = (letter) => {
    // Append the clicked letter to the search query
    setSearchQuery((prevQuery) => prevQuery + letter);
  };

  return (
    <div className="w-full bg-[#f8f8f8]">
      <div className="bg-green-600 flex w-full py-6 opacity-75  justify-center items-center">
        <h1 className="text-2xl font-bold text-white mb-6 bg-green-600">
          Search For Diseases & Conditions
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:p-0 p-2">
        <div className="p-4 rounded-lg m-4 w-full md:w-1/2">
          <div className="flex items-center mb-4 w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search Here"
              value={searchQuery}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#1bbf7d]"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 bg-[#1bbf7d] text-white rounded-md hover:bg-[#1bcf7d] focus:outline-none focus:ring focus:ring-[#1bcf7d]"
            >
              Search
            </button>
          </div>

          <div className="mb-3 text-[#00205b] font-semibold">
            <h3>Or search by Letter</h3>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 26 }, (_, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAlphabetClick(String.fromCharCode(65 + index))
                }
                className="px-3 py-2 border bg-white border-gray-300 rounded-md hover:bg-[#1bbf7d] hover:text-white focus:outline-none focus:ring focus:ring-[#1bbf7d]"
              >
                {String.fromCharCode(65 + index)}
              </button>
            ))}
            <button
              onClick={() => handleAlphabetClick("#")}
              className="px-3 py-2 border border-white-300 rounded-md hover:bg-white focus:outline-none focus:ring focus:ring-[#1bbf7d]"
            >
              #
            </button>
          </div>
        </div>

        <div className="rounded-[4.5rem] bg-[#e6e6e6] px-0 md:px-5  border-2 relative">
          <Image
            src={"/search/mother-with-daughter-airport.png"}
            width={500}
            height={500}
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

export default SearchComponent;
