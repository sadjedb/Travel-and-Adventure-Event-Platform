import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[90px] bg-transparent flex items-center justify-between px-4 font-Inter font-medium z-10">
      {/* image div */}
      <div>
        <img
          // src="https://africaviewfacts.com/media/opinions/img/AlgeriaDesert.jpg"
          alt=""
          className="w-[200px] h-[90px] object-cover"
        />
      </div>
      {/* nav links */}
      <div className="text-black flex w-full">
        <ul className="flex w-full flex-row gap-4 justify-end items-center mr-10 text-white">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Popular Events</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <button className="flex items-center justify-center bg-[#FFDA32] text-black font-semibold w-[140px] h-[50px] rounded-lg">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
