import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl md:mt-20'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          iusto architecto saepe voluptates harum quaerat quam id voluptatem
          iure, numquam ipsa, possimus explicabo ducimus earum? Facere
          praesentium dicta aspernatur laborum a eius earum sint, nulla, dolor
          est, assumenda voluptas deserunt? Nulla magnam dolor soluta impedit
          sequi harum ab quis temporibus.
        </p>
        <br />
        <p className='text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit
          dolore quasi expedita ab possimus fugiat hic temporibus enim, facere
          odit voluptates nesciunt quae consectetur ipsam facilis odio iusto
          exercitationem quod quisquam assumenda dolorum? Laudantium, delectus
          cumque minima, eligendi porro nemo esse libero iusto voluptas, aliquid
          eveniet recusandae ipsum reiciendis?
        </p>
      </div>
    </div>
  );
}

export default About