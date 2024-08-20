import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import PopularCities from "@/components/home/PopularCities";
import React from "react";

export default function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <PopularCities />
      <div className="flex-grow">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
