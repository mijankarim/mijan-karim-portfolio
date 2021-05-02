import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto grid md:grid-cols-2 py-6 items-center">
        <div className="logo">
          <h1 className="font-extrabold text-6xl text-primary hover:text-secondary">M</h1>
        </div>
        <nav className="float-right" >
          <ul className="flex float-right">
            <li className="mr-20">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="mr-20">
              <Link href="/#blogs">Blogs</Link>
            </li>
            <li className="mr-0">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
