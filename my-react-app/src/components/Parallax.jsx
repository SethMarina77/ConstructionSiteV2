import React from "react";

const Parallax = () => {
  return (
    <div
      id="whyChooseUs"
      className="relative h-[300vh] bg-zinc-950"
    >
      <Display />
    </div>
  );
};

const Display = () => {
  return (
    <div className="w-full h-full">
      <div className="h-[50vh] bg-black w-full flex items-center justify-center text-white sticky top-0">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default Parallax;
