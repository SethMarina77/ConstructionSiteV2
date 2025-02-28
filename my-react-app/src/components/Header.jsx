import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="pt-3 pb-3 fixed top-0 left-0 right-0 z-50 bg-black">
      <ul
        onMouseLeave={() => setPosition({ ...position, opacity: 0 })}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
        <NavLink to="/">
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
        <Tab setPosition={setPosition}>
          <p>WHy choose us</p>
        </Tab>

        <Tab setPosition={setPosition}>
          <p>our mission</p>
        </Tab>
        <NavLink to="/about">
          <Tab setPosition={setPosition}>About</Tab>
        </NavLink>

        <Tab setPosition={setPosition}>
          <p>COntact us</p>
        </Tab>
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
