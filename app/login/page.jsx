import { Eye, User } from "lucide-react";
import { FaFacebook, FaGooglePlus, FaLinkedin } from "react-icons/fa";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen font-edu bg-gradient-to-br from-[#ea920dab] to-[#090E1C]">
      <div className="flex flex-col lg:flex-row w-full lg:w-[1200px] xl:w-[1400px] h-auto lg:h-[860px] rounded-3xl overflow-hidden shadow-2xl">
        {/* left section */}
        <div className="lg:flex hidden w-full lg:w-3/5 ">
          <img
            src="https://www.bsr.org/images/heroes/bsr-travel-hero..jpg"
            alt="Travel"
            className="object-cover w-full h-full"
          />
        </div>
        {/* right section */}
        <div className="flex w-full lg:w-2/5 bg-[#161929] bg-opacity-85">
          <form action="submit" className="flex w-full h-full">
            <div className="flex flex-col items-center justify-center w-full py-10 lg:py-0 px-4">
              <div className="relative inline-block text-white px-4 py-4 text-4xl ">
                <h1 className="relative z-10 font-semibold">
                  Start{" "}
                  <span className=" font-semibold text-[#EA920D]">
                    Travelling
                  </span>
                </h1>
                <div className="absolute top-0 left-0 w-8 border-t-[3px] rounded-lg border-[#EA920D]"></div>
                <div className="absolute top-0 left-0 h-8 border-l-[3px] rounded-lg border-[#EA920D]"></div>
                <div className="absolute bottom-0 right-0 w-8 border-b-[3px] rounded-lg border-[white]"></div>
                <div className="absolute bottom-0 right-0 h-8 border-r-[3px] rounded-lg border-white"></div>
              </div>
              {/* socials */}
              <div className="flex pt-12 gap-8">
                <FaGooglePlus className="flex text-white text-4xl" />
                <FaFacebook className="flex text-white text-4xl" />
                <FaLinkedin className="flex text-white text-4xl" />
              </div>
              <div className="flex items-center border-b-2 border-[#EBEEF3] w-full lg:w-3/4 mt-12 lg:mt-28">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-2 bg-transparent placeholder-white focus:outline-none"
                />
                <User className="text-white mr-2" />
              </div>
              <div className="flex items-center border-b-2 border-[#EBEEF3] w-full lg:w-3/4 mt-5">
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full p-2 bg-transparent placeholder-white focus:outline-none"
                />
                <Eye className="text-white mr-2" />
              </div>
              <p className="flex justify-end w-full lg:w-3/4 mt-4 text-white underline underline-offset-2 font-semibold">
                Forget your password?
              </p>
              <button className="bg-white text-[#161929] w-full lg:w-3/4 p-2 mt-5 uppercase font-bold border-[1px] rounded-full">
                enter
              </button>
              <p className="flex justify-center lg:justify-start lg:mr-28 mt-4 text-white font-semibold">
                Don't have an account?{" "}
                <a href="#" className="flex text-[#EA920D] font-semibold ml-2">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
