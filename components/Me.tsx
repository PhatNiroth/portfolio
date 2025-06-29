"use client";

import Image from "next/image";
import DownloadCv from "./DownloadCv";

const Me = () => {
  const icons = [
    { icon: "home", targetId: "home" },
    { icon: "user", targetId: "about" },
    { icon: "briefcase", targetId: "experience" },
    { icon: "envelope", targetId: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full flex items-center justify-center min-h-screen relative px-6 bg-gray-100"
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/mee.jpg"
            alt="Profile picture"
            width={400}
            height={400}
            priority
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I'm a Full Stack Developer
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m passionate about building <strong>fast</strong>, <strong>scalable</strong>, and{" "}
            <strong>user-friendly</strong> web applications. My work focuses on clean code, elegant
            design, and seamless user experience from backend logic to frontend visuals.
          </p>
          <div className="mt-2">
            <DownloadCv />
          </div>
        </div>
      </div>

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
  {icons.map(({ icon, targetId }, index) => (
    <div
      key={index}
      onClick={() => scrollToSection(targetId)}
      className="group relative p-3 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors cursor-pointer shadow-md flex justify-center items-center"
    >
      {/* Icon */}
      <i className={`fa fa-${icon} text-white text-xl`} />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2">
        <div className="relative bg-gray-600 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200 shadow-lg whitespace-nowrap">
          {targetId.charAt(0).toUpperCase() + targetId.slice(1)}

          {/* Chevron (arrow) */}
          <div className="absolute top-1/2 left-full -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-gray-600"></div>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Me;
