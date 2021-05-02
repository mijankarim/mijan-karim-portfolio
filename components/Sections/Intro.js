import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container mx-auto">
        <h1 className="text-8xl font-bold transform hover:-rotate-1 duration-500 hover:text-secondary">
          Hi,
          <br />
          I'm Mijan,
          <br />
          Web Developer
        </h1>
        <p className="text-2xl my-8 border-solid">Front-end React Developer</p>
        <Link href="/contact">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-10">
            Contact Me
          </button>
        </Link>

        <Link href="https://drive.google.com/uc?export=download&id=1AIXRv10_fzfX8OGMm8KkgMnJv2z5MDtp">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Download Resume
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
