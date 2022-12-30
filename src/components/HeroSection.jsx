import React from "react";

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md: text-4xl mb-1 md: mb-3 text-indigo-600 font-semibold dark:text-indigo-500">
          Hi; i am tatiana
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <a
          href="#works"
          className="inline-block px-8 py3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover: bg-indigo-700 md: text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
