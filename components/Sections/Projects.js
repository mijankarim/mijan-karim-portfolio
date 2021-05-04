import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SplitText from "../SplitText";

const projectsData = [
  {
    id: 1,
    type: "Featured Project",
    title: "City Electric",
    description:
      "City Electric is a MERN stack single page web app where users can book the services. Users can leave reviews on services from the dashboard. Admin can add new services and can manage the services from the dashboard. Admin can also add a new user as an admin. Admin can see all orders booked by the user and able to change the order status from the dashboard.",
    image: "city-electric.png",
    website: "https://city-electric.web.app",
    github: "https://github.com/mijankarim/City-Electric-Client",
    tech: [
      "Node.Js",
      "Express",
      "MongoDB",
      "React.Js",
      "Bootstrap",
      "Firebase",
    ],
  },
  {
    id: 2,
    type: "Featured Project",
    title: "Food Market",
    description:
      "Food Market is a MERN stack single page app where user can order the products . Admin can add new products from dashboard and can manage all products from Dashboard.",
    image: "food-market.png",
    website: "https://food-market-ccf50.web.app",
    github: "https://github.com/mijankarim/food-market-client",
    tech: [
      "Node.Js",
      "Express",
      "MongoDB",
      "React.Js",
      "Bootstrap",
      "Firebase",
    ],
  },
  {
    id: 3,
    type: "Featured Project",
    title: "City Riders",
    description:
      "A react app with firebase authentication, react-router where users can book rides.",
    image: "city-riders.png",
    website: "https://city-riders-6515a.web.app",
    github: "https://github.com/mijankarim/city-riders",
    tech: ["React.Js", "Bootstrap", "Firebase", "React-Router"],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container mx-auto px-4 sm:px-10">
        <h2 className="text-5xl md:text-6xl font-bold my-10 py-5 text-secondary">
          <SplitText copy="Projects" role="heading" />
        </h2>
        {projectsData.map((project) => (
          <div
            className="project grid md:grid-cols-5 gap-10 mb-12"
            key={project.id}
          >
            <div className="md:col-span-2">
              <Image
                src={`/${project.image}`}
                width="1000"
                height="483"
                layout="responsive"
                className="transform hover:scale-125 hover:rotate-2 duration-500 ease-in-out"
              />
            </div>
            <div className="md:col-span-3">
              <p className="text-primary">{project.type}</p>
              <h3 className="text-4xl mt-2 font-bold text-secondary duration-500 hover:text-secondary_hover">
                {project.title}
              </h3>
              <p className="py-5">{project.description}</p>
              <ul className="ml-0 pl-0 mb-7">
                {project.tech.map((t) => (
                  <li className="inline-block mr-4 text-secondary" key={t}>{t}</li>
                ))}
              </ul>

              <a
                href={`${project.website}`} target="_blank"
                className="inline-block mr-5 text-xl transform hover:scale-125 duration-500 animate-bounce text-secondary hover:text-secondary_hover"
              >
                <FiExternalLink />
              </a>
              <a
                href={`${project.github}`} target="_blank"
                className="inline-block mr-5 text-xl transform hover:scale-125 duration-500 animate-bounce text-secondary hover:text-secondary_hover"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
