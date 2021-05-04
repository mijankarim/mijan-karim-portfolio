import React from "react";
import Link from 'next/link';
import SplitText from "../SplitText";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold my-10 py-5 text-secondary">
          <SplitText copy="Get" role="heading" />
          <SplitText copy="In" role="heading" />
          <SplitText copy="Touch" role="heading" />
        </h2>
        <p className="mb-8">
          I am interested in Remote React Developer Role. However, If you have
          other request or question, don't hesitate to contact me.
        </p>
        <Link href="mailto:mkatbd@gmail.com">
            <button className="bg-bg_color hover:bg-secondary text-secondary hover:text-bg_color py-2 px-4 border border-secondary shadow">
              Say Hello
            </button>
          </Link>
      </div>
    </section>
  );
};

export default Contact;
