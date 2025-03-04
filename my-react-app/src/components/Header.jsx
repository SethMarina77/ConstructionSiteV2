import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="pt-3 pb-3 fixed top-0 left-0 right-0 z-50 bg-black ">
      <ul
        onMouseLeave={() => setPosition({ ...position, opacity: 0 })}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
        <NavLink
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault(); // Prevent reloading the page
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
            } //if the location is already at the home page it will scroll to the top of the page
          }}
        >
          <Tab setPosition={setPosition}>Home</Tab>
        </NavLink>

        <button
          onClick={() => {
            document.getElementById("whatweDo").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Tab setPosition={setPosition}>What we do</Tab>
        </button>

        <button
          onClick={() => {
            document.getElementById("readMore").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Tab setPosition={setPosition}>
            <p>our mission</p>
          </Tab>
        </button>
        <button
          onClick={() => {
            document.getElementById("whyChooseUs").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Tab setPosition={setPosition}>
            <p>WHy choose us</p>
          </Tab>
        </button>

        <NavLink to="/about">
          <Tab setPosition={setPosition}>About</Tab>
        </NavLink>
<NavLink to="/contact">
        <Tab setPosition={setPosition}>
          <p>COntact us</p>
        </Tab>
</NavLink>
        <Cursor position={position} />
      </ul>
    </div>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);
  //this is the size and design of each tab individually letting us change them all at once if needed or reuse them
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  //this is the cursor that follows the mouse
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    ></motion.li>
  );
};

export default Header;
