import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitText from "../SplitText";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container mx-auto px-4 grid sm:grid-cols-3 gap-5">
        <div className="sm:col-span-2">
          <h1
            className="text-4xl sm:text-7xl md:text-8xl font-bold"
            aria-label="Text"
          >
            <SplitText copy="Hi," role="heading" />
            <br />
            <SplitText copy="I'm" role="heading" />
            <SplitText copy="Mijan," role="heading" />
            <br />
            <SplitText copy="Web" role="heading" />
            <SplitText copy="Developer" role="heading" />
          </h1>
          <p className="text-2xl my-6">Front-end React Developer</p>

          <ul className="mb-8">
            <li class="inline-block mr-5 text-2xl text-secondary hover:text-secondary_hover hover:animate-bounce">
              <a href="https://github.com/mijankarim" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li class="inline-block mr-5 text-2xl text-secondary hover:text-secondary_hover hover:animate-bounce">
              <a href="https://www.linkedin.com/in/mijankarim/" target="_blank">
                <FaLinkedin />
              </a>
            </li>
            <li class="inline-block mr-5 text-2xl text-secondary hover:text-secondary_hover hover:animate-bounce">
              <a href="https://twitter.com/mkatbd" target="_blank">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>

          <Link href="https://drive.google.com/uc?export=download&id=1AIXRv10_fzfX8OGMm8KkgMnJv2z5MDtp">
            <button className="bg-bg_color hover:bg-secondary text-secondary hover:text-bg_color py-2 px-4 border border-secondary shadow">
              Download Resume
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/developer.png"
            layout="responsive"
            width="16"
            height="16"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
