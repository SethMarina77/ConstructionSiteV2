import React, { useState, useEffect } from "react";
import firstVideo from "../construction pictures/hScroll.mp4";
import secondVideo from "../construction pictures/bScroll.mp4";
import fourthVideo from "../construction pictures/cScroll.mp4";
import thirdVideo from "../construction pictures/dScroll.mp4";
import HomeMovingDisplay from "../components/HomeMovingDisplay";
import Parallax from "../components/parallax";
import ReadMore from "../components/ReadMore";
import Carousel from "../components/Carousel";

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(firstVideo);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const videos = [firstVideo, secondVideo, thirdVideo, fourthVideo];
    let currentIndex = 0;

    const switchVideo = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % videos.length;
        setCurrentVideo(videos[currentIndex]);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1500);
      }, 1000);
    };

    const interval = setInterval(switchVideo, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="relative h-screen">
        <video
          key={currentVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
            isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div className="relative z-10 flex flex-col justify-center h-full text-white">
          <div className="bg-black/40 p-8 rounded-lg mx-auto max-w-3xl backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-center md:text-6xl bebas-neue font-bebas">
              Welcome to Hernandez Construction
            </h1>
            <p className="text-center mt-4 volkhov font-volkhov">
              <i>Building Dreams, One Home at a Time</i> At{" "}
              <i>Hernandez Construction</i>, we bring your vision to life with
              expert craftsmanship and attention to detail. Whether you're
              building a brand-new home or upgrading your current space with
              custom modifications and additions, our team ensures quality and
              reliability every step of the way. Let's create something
              exceptional—together.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black h-screen" id="whatweDo">
        <HomeMovingDisplay />
      </section>
      <section id="readMore" className="h-screen bg-black">
        <ReadMore />
        <Carousel />
      </section>
      <section id="whyChooseUs">
        <Parallax />
      </section>
      <section className="bg-zinc-950 h-screen"></section>
    </div>
  );
};

export default Home;
