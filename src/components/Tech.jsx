import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import reactimg from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import node from '../assets/node.png'
import github from "../assets/github.png"

const Tech = () => {
  const techs = [
    {
      id: 1,
      scr: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      scr: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      scr: tailwind,
      title: 'Tailwindl',
      style: 'shadow-sky-500'
    },
    {
      id: 4,
      scr: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 5,
      scr: reactimg,
      title: 'React Js',
      style: 'shadow-blue-600'
    },
    {
      id: 7,
      scr: node,
      title: 'Node Js',
      style: 'shadow-green-500'
    },
    {
      id: 6,
      scr: nextjs,
      title: 'Next Js',
      style: 'shadow-white'
    },
    {
      id: 8,
      scr: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
  ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen py-5"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the Technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {
          techs.map(({ id, scr, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img className="w-20 mx-auto" src={scr} alt="" />
              <p >{title}</p>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default Tech