import React from "react";
import proj1 from "../assets/proj/road.png";
import proj2 from "../assets/proj/shopify.png";
import proj3 from "../assets/proj/paytm.png";
import proj4 from "../assets/proj/visual.png";
import proj6 from "../assets/proj/saas.png";
import proj5 from "../assets/proj/creativity.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: proj1,
      demo: "https://rode-clone-site-project.netlify.app/",
      code: "https://github.com/Ritammishra/Rode-clone-site/tree/master",
    },
    {
      id: 2,
      src: proj2,
      demo: "https://shopify-clone-projects.netlify.app/",
      code: "https://github.com/Ritammishra/shopify.com-clone",
    },
    {
      id: 3,
      src: proj3,
      demo: "https://paytm-clone-tailwind-projects.netlify.app/",
      code: "",
    },
    {
      id: 4,
      src: proj4,
      demo: "https://visual-designer-project.netlify.app/",
      code: "https://github.com/Ritammishra/Project-15-Visual-Designer",
    },
    {
      id: 5,
      src: proj5,
      demo: "https://project-creativity-14.netlify.app/",
      code: "https://github.com/Ritammishra/Project-14-Creativity",
    },
    {
      id: 6,
      src: proj6,
      demo: "https://project-13-saas-business.netlify.app/",
      code: "https://github.com/Ritammishra/Project-13-Saas-Business",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my proudest projects that highlight my skills and creativity.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {portfolio.map(({ id, src, demo, code }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                key={id}
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
