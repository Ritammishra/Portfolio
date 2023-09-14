import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
              Linkedin <FaLinkedin size={25}/>
            </>
            ),
            href: 'https://www.linkedin.com/in/ritam-mishra/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
              GitHub <FaGithub size={25}/>
            </>
            ),
            href: 'https://github.com/Ritammishra',
        },
        {
            id: 13,
            child: (
                <>
              Mail <HiMail size={25}/>
            </>
            ),
            href: 'mailto:mishraritam935@gmail.com',
        },
        {
            id: 13,
            child: (
                <>
              Resume <BsFillPersonLinesFill size={25}/>
            </>
            ),
            href: 'https://drive.google.com/file/d/1b_dcatQx4V0clfxyBmcASY2mccw19zCo/view?usp=sharing',
            style: 'rouned-br-md',
            download: true,
        },
    ]


  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-400 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks