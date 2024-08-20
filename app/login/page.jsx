"use client";
import { Eye, User } from "lucide-react";
import { FaFacebook, FaGooglePlus, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds((prevCreds) => ({
      ...prevCreds,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const login = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3001/login",
      data: creds,
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Login successful");
          router.push("/home");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          alert("Password or Email is incorrect");
        } else {
          alert("An error occurred during login");
        }
      });
  };

  return (
    <div
      className="flex w-full justify-center items-center min-h-screen font-edu bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://mrwallpaper.com/images/hd/travel-4k-volcano-ynlmn2hmts0n7gsw.jpg')",
      }}
    >
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
          <form className="flex w-full h-full" onSubmit={login}>
            <div className="flex flex-col items-center justify-center w-full py-10 lg:py-0 px-4">
              <div className="relative inline-block text-white px-4 py-4 text-4xl ">
                <h1 className="relative z-10 font-semibold">
                  Start{" "}
                  <span className="font-semibold text-[#EA920D]">
                    Travelling
                  </span>
                </h1>
                <div className="absolute top-0 left-0 w-8 border-t-[3px] rounded-lg border-[#EA920D]"></div>
                <div className="absolute top-0 left-0 h-8 border-l-[3px] rounded-lg border-[#EA920D]"></div>
                <div className="absolute bottom-0 right-0 w-8 border-b-[3px] rounded-lg border-[white]"></div>
                <div className="absolute bottom-0 right-0 h-8 border-r-[3px] rounded-lg border-white"></div>
              </div>
              {/* Socials */}
              <div className="flex pt-12 gap-8">
                <FaGooglePlus className="text-white text-4xl hover:text-[#EA920D] hover:scale-110 transition-transform duration-300" />
                <FaFacebook className="text-white text-4xl hover:text-[#EA920D] hover:scale-110 transition-transform duration-300" />
                <FaLinkedin className="text-white text-4xl hover:text-[#EA920D] hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex items-center border-b-2 border-[#EBEEF3] w-full lg:w-3/4 mt-12 lg:mt-28 focus-within:border-[#EA920D]">
                <input
                  type="text"
                  name="email"
                  value={creds.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full p-2 bg-transparent placeholder-white focus:outline-none focus:shadow-md"
                />
                <User className="text-white mr-2" />
              </div>
              <div className="flex items-center border-b-2 border-[#EBEEF3] w-full lg:w-3/4 mt-5 focus-within:border-[#EA920D]">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={creds.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full p-2 bg-transparent placeholder-white focus:outline-none focus:shadow-md"
                />
                <Eye
                  className="text-white mr-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <p className="flex justify-end w-full lg:w-3/4 mt-4 text-white underline underline-offset-2 font-semibold">
                Forget your password?
              </p>
              <button
                type="submit"
                className="bg-white text-[#161929] w-full lg:w-3/4 p-2 mt-5 uppercase font-bold text-xl border-[1px] rounded-full hover:bg-[#EA920D] hover:text-white transition-colors duration-300"
              >
                Enter
              </button>
              <p className="flex justify-center lg:justify-start lg:mr-28 mt-4 text-white font-semibold">
                Don't have an account?{" "}
                <a
                  href="register"
                  className="text-[#EA920D] font-semibold ml-2 hover:underline"
                >
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

export default Page;
