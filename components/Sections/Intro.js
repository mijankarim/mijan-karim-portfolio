import React from "react";
import Link from "next/link";
import SplitText from "../SplitText";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold" aria-label="Text">
          <SplitText copy="Hi," role="heading" /><br/>
          <SplitText copy="I'm" role="heading" />
          <SplitText copy="Mijan," role="heading" /><br/>
          <SplitText copy="Web" role="heading" />
          <SplitText copy="Developer" role="heading" />
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
