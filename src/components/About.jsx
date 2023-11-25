import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl md:mt-20">
          Hello, I'm Ritam Mishra, a passionate frontend developer with a flair
          for creating engaging and user-friendly digital experiences. My
          journey in the world of web development has been driven by a love for
          coding and a commitment to delivering top-notch solutions.
        </p>
        <br />
        <p className="text-xl">
          I thrive on turning ideas into reality through clean, efficient code.
          With a keen eye for design and a focus on user experience, I bring
          websites to life that not only look great but also function
          seamlessly.
        </p>
      </div>
    </div>
  );
}

export default About