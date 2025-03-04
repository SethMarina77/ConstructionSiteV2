import React from "react";
import { motion } from "framer-motion";
import img1 from "../carPhotos/img1.jpg";
import img2 from "../carPhotos/img2.jpg";
import img3 from "../carPhotos/img3.jpg";
import img4 from "../carPhotos/img4.jpg";
import img5 from "../carPhotos/img5.jpg";
import img6 from "../carPhotos/img6.jpg";
import img7 from "../carPhotos/img7.jpg";
import img8 from "../carPhotos/img8.jpg";
import img9 from "../carPhotos/img9.jpg";
import img10 from "../carPhotos/img10.jpg";
import img11 from "../carPhotos/img11.jpg";

//image carousel, should scroll infinitely and is not interrupted by "click" or "drag" because that crap was so annoying

const CarouselItem = ({ image }) => {
  return (
    <motion.div className="flex-shrink-0 mx-4" whileHover={{ scale: 1.05 }}>
      <img
        src={image}
        alt={`Car ${image}`}
        className="w-[600px] h-[400px] object-cover rounded-sm"
      />
    </motion.div>
  );
};

const Carousel = () => {
  const carouselImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  return (
    <div className="overflow-hidden w-full relative mt-20">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{
          x: "-100%",
          transition: {
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        whileHover={{
          transition: {
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...carouselImages, ...carouselImages, ...carouselImages].map(
          (image, index) => (
            <CarouselItem key={`${image}-${index}`} image={image} />
          )
        )}
      </motion.div>
    </div>
  );
};

export default Carousel;
