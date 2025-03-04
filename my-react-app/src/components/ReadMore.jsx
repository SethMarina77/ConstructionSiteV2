import React from "react";

const ReadMore = () => {
  return (
    <div className="h-2/5 flex justify-center items-center bg-black px-6">
      <div className="flex justify-center items-center gap-6 w-full max-w-5xl">
        
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-1/3 text-center">
          <h2 className="text-lg font-bold mb-3">Our Mission</h2>
          <p className="text-sm">
            At Hernandez Construction, we are committed to building with
            integrity, precision, and excellence. We prioritize quality and
            safety in every project we take.
          </p>
        </div>

        
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-1/3 text-center">
          <h2 className="text-lg font-bold mb-3">Our Vision</h2>
          <p className="text-sm">
            Our vision is to shape communities with innovative construction
            solutions that stand the test of time. We aim to set new industry
            standards in durability and efficiency.
          </p>
        </div>

        
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-1/3 text-center">
          <h2 className="text-lg font-bold mb-3">Our Commitment</h2>
          <p className="text-sm">
            We are dedicated to delivering exceptional craftsmanship and
            customer satisfaction, ensuring each project meets and exceeds
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
