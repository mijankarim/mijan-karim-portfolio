import React from "react";
import SplitText from "../SplitText";

const blogsData = [
  {
    id: 1,
    title: "How to setup Tailwind CSS in Next.js",
    content:
      "Coming soon...",
    link: "#"
  },
  {
    id: 1,
    title: "How to add Google Fonts to Next.js",
    content:
      "Coming soon..",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="container mx-auto px-4 sm:px-10">
        <h2 className="text-5xl md:text-6xl font-bold my-10 py-5 text-secondary" data-aos="zoom-in-left">
        <SplitText copy="Blog" role="heading"/>
            </h2>
        <div className="blog-container grid md:grid-cols-2 gap-10">
          {blogsData.map((blog) => (
            <div className="blog mb-12" key={blog.id} data-aos="zoom-in-right">
              <h3 className="text-4xl font-bold text-primary duration-500 hover:text-secondary mb-5">{blog.title}</h3>
              <p className="mb-3">{blog.content}</p>
              <a href="#" className="text-secondary hover:text-secondary_hover">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
