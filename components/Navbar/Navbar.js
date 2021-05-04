import React from "react";
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto grid grid-cols-4 py-6 items-center px-4 sm:px-10">
        <div className="logo col-span-1 sm:col-span-2"> 
          <h1 className="font-extrabold text-6xl text-primary hover:text-secondary animate-bounce">M</h1>
        </div>
        <nav className="float-right col-span-3 sm:col-span-2" data-aos="fade-left">
          <ul className="flex float-right">
          <li className="mr-5 sm:mr-20 cursor-pointer">
              <Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000}>Skills</Link>
            </li>

            <li className="mr-5 sm:mr-20 cursor-pointer">
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link>
            </li>
           
            <li className="mr-5 sm:mr-20 cursor-pointer">
              <Link activeClass="active" to="blogs" spy={true} smooth={true} duration={1000}>Blog</Link>
            </li>
            <li className="sm:mr-0 cursor-pointer">
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
