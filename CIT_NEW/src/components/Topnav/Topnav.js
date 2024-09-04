import React, { useState } from "react";

const Topnav = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-100 select-none  justify-betweenlg:items-stretch z-10 px-2">
      <div
        className="lg:flex justify-between align items-center	 h-12"
        style={{ textShadow: "1px 2px 2px skyblue" }}
      >
        <a
          href="#"
          className="text-xs text-blue-900  px-4 md:text-sm font-bold"
        >
          <i className="fa-solid fa-phone "></i>
          &nbsp; +91 98298 04013
        </a>

        <a
          href="#"
          className="text-xs text-blue-900 px-4 md:text-sm font-bold "
        >
          <i className="fa-solid fa-envelope"></i>
          &nbsp; citaburoad@gmail.com
        </a>
        <a
          href="#"
          className="text-xs text-blue-900  px-4 md:text-sm font-bold"
        >
          <i className="fa-solid fa-user"></i>
          &nbsp; Admission Enquiry Open 2024
        </a>
        <a
          href="#"
          className="text-xs text-blue-900  px-4 md:text-sm font-bold"
        >
          <i className="fa-solid fa-address-book"></i>
          &nbsp; Apply for Admission
        </a>
      </div>
    </nav>
  );
};

export default Topnav;
