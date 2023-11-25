import React from "react";
import img from "../assets/hero.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:pt-14 ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
          Crafting Seamless Digital Experiences with Code Magic.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            className="rounded mx-auto w-2/3 md:w-2/3"
            src={img}
            alt="myimage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
