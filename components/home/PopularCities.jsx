import React from "react";

const PopularCities = () => {
  return (
    <div className="w-full">
      {/* Explore Popular Cities Section */}
      <div className="flex flex-col items-center w-full h-full py-20">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-[#1C2B38] text-5xl font-bold">
            Explore Popular Cities
          </h1>
          <p className="text-[#1C2B38] mt-5 max-w-lg mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-wrap justify-center mt-10 space-x-4">
          <button className="border border-[#1C2B38] text-[#1C2B38] px-6 py-2 rounded-full hover:bg-[#96c2cb] hover:border-[#96c2cb] hover:text-white">
            New York
          </button>
          <button className="border border-[#1C2B38] text-[#1C2B38] px-6 py-2 rounded-full hover:bg-[#96c2cb] hover:border-[#96c2cb] hover:text-white">
            California
          </button>
          <button className="border border-[#1C2B38] text-[#1C2B38] px-6 py-2 rounded-full hover:bg-[#96c2cb] hover:border-[#96c2cb] hover:text-white">
            Alaska
          </button>
          <button className="border border-[#1C2B38] text-[#1C2B38] px-6 py-2 rounded-full hover:bg-[#96c2cb] hover:border-[#96c2cb] hover:text-white">
            Sidney
          </button>
          <button className="border border-[#1C2B38] text-[#1C2B38] px-6 py-2 rounded-full hover:bg-[#96c2cb] hover:border-[#96c2cb] hover:text-white">
            Dubai
          </button>
          <button className="border border-[#1C2B38] text-[#1C2B38] px-6 py-2 rounded-full hover:bg-[#96c2cb] hover:border-[#96c2cb] hover:text-white">
            London
          </button>
          <button className="border border-[#1C2B38] text-[#1C2B38] px-6 py-2 rounded-full hover:bg-[#96c2cb] hover:border-[#96c2cb] hover:text-white">
            Tokyo
          </button>
          <button className="border border-[#1C2B38] text-[#1C2B38] px-6 py-2 rounded-full hover:bg-[#1C2B38] hover:text-white">
            Delhi
          </button>
        </div>
      </div>

      {/* Alaska Section */}
      <div className="relative w-full h-[600px] px-48">
        <img
          src="https://www.visittheusa.com/sites/default/files/styles/state_hero_l/public/images/hero_media_image/2023-05/0d851f7d-2da0-46af-93f6-4fd06781511a_0.jpeg?h=e770e010&itok=CELGhf0T"
          alt="Alaska"
          className="w-full h-full rounded-xl"
        />
        <div className="absolute bottom-10 left-10 bg-white p-5 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-[#1C2B38]">Alaska</h1>
          <p className="text-[#1C2B38] mt-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              Public Transportations
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Nature & Adventure
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              Private Transportations
            </span>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              Business Tours
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Local Visit
            </span>
          </div>
        </div>
      </div>

      {/* Tours Section */}
      <div className="w-full flex justify-center items-center p-10 bg-gray-50 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Tour Card 1 */}
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Tour 1"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-[#1C2B38] mt-4">
              Alaska: Westminster to Greenwich River Thames
            </h2>
            <p className="text-gray-500 mt-2">Duration 2 hours</p>
            <p className="text-gray-500">Transport Facility</p>
            <p className="text-gray-500">Family Plan</p>
            <p className="text-[#1C2B38] font-bold mt-2">$35.00 per person</p>
            <div className="flex mt-2">
              <span className="text-yellow-400">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <span className="text-gray-500 ml-2">(584 reviews)</span>
            </div>
          </div>
          {/* Additional Tour Cards */}
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c"
              alt="Tour 2"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-[#1C2B38] mt-4">
              Alaska: Vintage Double Decker Bus Tour & Thames
            </h2>
            <p className="text-gray-500 mt-2">Duration 2 hours</p>
            <p className="text-gray-500">Transport Facility</p>
            <p className="text-gray-500">Family Plan</p>
            <p className="text-[#1C2B38] font-bold mt-2">$35.00 per person</p>
            <div className="flex mt-2">
              <span className="text-yellow-400">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <span className="text-gray-500 ml-2">(584 reviews)</span>
            </div>
          </div>
          {/* Repeat the above Tour Card code block for more cards */}
        </div>
      </div>
    </div>
  );
};

export default PopularCities;
