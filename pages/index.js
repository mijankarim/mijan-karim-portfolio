import React, {useEffect} from 'react';
import Head from 'next/head'
import Blogs from '../components/Sections/Blogs'
import Contact from '../components/Sections/Contact'
import Intro from '../components/Sections/Intro'
import Projects from '../components/Sections/Projects'
import Skills from '../components/Sections/Skills'
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <Head>
        <title>Mijan Karim Portfolio</title>
        <meta name="description" content="Frontend React Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Intro/>
        <Skills/>
        <Projects/>
        <Blogs/>
        <Contact/>
      </div>

    </div>
  )
}
