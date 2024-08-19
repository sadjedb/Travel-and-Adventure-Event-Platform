import React from "react";

export default function HomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}
      <div className="flex-grow">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
