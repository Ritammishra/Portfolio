import React from "react";
import img from "../assets/hero.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white ">
        <div className="mt-28 md:mt-0 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold">
            I'm a Full stack Developer
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iste
            omnis quia aperiam. Dignissimos quod alias ducimus incidunt atque
            laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maxime, saepe. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi beatae accusamus repudiandae doloribus, magni unde.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl mx-auto w-2/4 md:w-3/4"
            src={img}
            alt="myimage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
