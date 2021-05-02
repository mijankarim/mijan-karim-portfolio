import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container mx-auto">
        <h1 className="text-8xl font-bold transform hover:-rotate-1 duration-500">
          Hi,
          <br />
          I'm Mijan,
          <br />
          Web Developer
        </h1>
        <p className="text-2xl my-8 border-solid">Front-end React Developer</p>
        <Link href="/contact">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Contact
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
