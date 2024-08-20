import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[783px] font-Inter ">
      <img
        src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-[#1c2b38]">
        <h1 className="text-5xl font-bold mb-4">
          We Find The Best Tours For You
        </h1>
        <p className="text-lg mb-8 max-w-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit{" "}
          <span className="text-[#FFDA32]">hello my</span>
        </p>
      </div>

      {/* Bottom Form */}
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 flex items-center justify-between w-[90%] max-w-[1200px]">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              placeholder="Search For A Destination"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Guests
            </label>
            <input
              type="number"
              placeholder="How many Guests?"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button className="bg-[#FFDA32] text-black font-semibold px-6 py-2 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
