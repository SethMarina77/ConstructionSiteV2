import React, { useEffect, useRef } from "react";
import backgroundImage from "../construction pictures/backgroundImage.jpg";



const HomeMovingDisplay = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us build your
              <strong className="block font-extrabold text-white">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              **summary type about me stuff will go here**
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                onClick={() => {
                  document.getElementById("whyChooseUs").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="block w-full rounded-sm bg-black px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeMovingDisplay

