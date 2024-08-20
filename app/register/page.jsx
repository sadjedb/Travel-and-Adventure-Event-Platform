"use client";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { FaFacebook, FaGooglePlus, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account.password !== account.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Submitting registration with data:", account);

    try {
      const res = await axios.post("http://localhost:3001/register", account, {
        withCredentials: true,
      });
      console.log(res);
      router.push("/login");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(
        err.response?.data?.message || "An error occurred during registration"
      );
    }
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
                <FaGooglePlus className="flex text-white text-4xl hover:text-[#EA920D] hover:scale-110 transition-transform duration-300" />
                <FaFacebook className="flex text-white text-4xl hover:text-[#EA920D] hover:scale-110 transition-transform duration-300" />
                <FaLinkedin className="flex text-white text-4xl hover:text-[#EA920D] hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex items-center border-b-2 border-[#EBEEF3] w-full lg:w-3/4 mt-12 lg:mt-28 focus-within:border-[#EA920D]">
                <input
                  type="text"
                  placeholder="Username"
                  autoComplete="off"
                  className="w-full p-2 bg-transparent placeholder-white focus:outline-none focus:shadow-md placeholder:opacity-60 text-white"
                  name="username"
                  value={account.username}
                  onChange={handleChange}
                />
                <User className="text-white mr-2" />
              </div>
              <div className="flex items-center border-b-2 border-[#EBEEF3] w-full lg:w-3/4 mt-5 focus-within:border-[#EA920D]">
                <input
                  type="text"
                  placeholder="Email"
                  autoComplete="off"
                  className="w-full p-2 bg-transparent placeholder-white focus:outline-none focus:shadow-md placeholder:opacity-60 text-white"
                  name="email"
                  value={account.email}
                  onChange={handleChange}
                />
                <Mail className="text-white mr-2" />
              </div>
              <div className="flex items-center border-b-2 border-[#EBEEF3] w-full lg:w-3/4 mt-5 focus-within:border-[#EA920D]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="off"
                  className="w-full p-2 bg-transparent placeholder-white focus:outline-none focus:shadow-md  placeholder:opacity-60 text-white"
                  name="password"
                  value={account.password}
                  onChange={handleChange}
                />
                {!showPassword ? (
                  <Eye
                    className="text-white mr-2"
                    onClick={handleClickShowPassword}
                  />
                ) : (
                  <EyeOff
                    className="text-white mr-2"
                    onClick={handleClickShowPassword}
                  />
                )}
              </div>
              <div className="flex items-center border-b-2 border-[#EBEEF3] w-full lg:w-3/4 mt-5 focus-within:border-[#EA920D]">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  className="w-full p-2 bg-transparent placeholder-white focus:outline-none focus:shadow-md placeholder:opacity-60 text-white"
                  name="confirmPassword"
                  value={account.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-white text-[#161929] w-full lg:w-3/4 p-2 mt-5 uppercase font-bold text-xl border-[1px] rounded-full hover:bg-[#EA920D] hover:text-white transition-colors duration-300"
              >
                enter
              </button>
              <p className="flex justify-center lg:justify-start lg:mr-28 mt-4 text-white font-semibold">
                You already have an account ?
                <a
                  href="login"
                  className="flex text-[#EA920D] font-semibold ml-2 hover:underline"
                >
                  Login
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
