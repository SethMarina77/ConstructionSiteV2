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
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl mt-24">
              Let us build your
              <strong className="block font-extrabold text-white mb-6">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>
            <div className="bg-black/40 p-8 rounded-lg mx-auto max-w-3xl backdrop-blur-xs">
              <p className="mt-4 max-w-lg text-white sm:text-base/relaxed">
                At Hernandez Construction, we believe that a home isn’t just a
                structure—it’s the heart of your family’s story. That’s why we
                put care, craftsmanship, and a personal touch into every project
                we take on. Whether you’re looking to build your dream home from
                the ground up, add space for a growing family, or bring new life
                to an existing structure, we’re here to make it happen. We
                specialize in: 🏡 New Home Construction – From cozy cottages to
                spacious forever homes, we build houses designed to fit your
                lifestyle, needs, and budget. 🏗 Home Additions & Expansions –
                Need more room? Whether it’s an extra bedroom, a sunroom, or a
                second story, we seamlessly blend new spaces into your existing
                home. 🔨 Custom Projects & Renovations – Your home should grow
                with you. We handle everything from garage conversions to
                complete remodels, always with attention to detail and quality.
                With years of experience, a hardworking team, and a commitment
                to honesty and integrity, we’re more than just builders—we’re
                neighbors, problem solvers, and passionate craftsmen. Let’s
                build something special together. ✨ Your vision. Our expertise.
                A home built with heart. ✨
              </p>
            </div>
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

