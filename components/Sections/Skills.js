import SplitText from "../SplitText";
import {
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiNextDotJs,
  SiMongodb,
  SiTailwindcss,
  SiCss3,
  SiWordpress,
  SiShopify,
  SiBootstrap,
  SiNodeDotJs,
  SiReact
} from "react-icons/si";

const skillsData = [
    {
        id:1,
        title:'JavaScript',
        icon:<SiJavascript/>
    },
    {
        id:2,
        title:'React.Js',
        icon:<SiReact/>
    },
    {
        id:3,
        title:'Redux',
        icon:<SiRedux/>
    }
    ,
    {
        id:4,
        title:'Next.Js',
        icon:<SiNextDotJs/>
    }
    ,
    {
        id:5,
        title:'HTML',
        icon:<SiHtml5/>
    },
    {
        id:6,
        title:'CSS',
        icon:<SiCss3/>
    },
    {
        id:7,
        title:'Tailwind CSS',
        icon:<SiTailwindcss/>
    },
    {
        id:8,
        title:'Bootstrap',
        icon:<SiBootstrap/>
    },
    {
        id:9,
        title:'WordPress',
        icon:<SiWordpress/>
    },
    {
        id:10,
        title:'Shopify',
        icon:<SiShopify/>
    },
    {
        id:11,
        title:'Node.js',
        icon:<SiNodeDotJs/>
    },
    {
        id:12,
        title:'MongoDB',
        icon:<SiMongodb/>
    }
]

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold my-10 py-5 text-secondary">
          <SplitText copy="My" role="heading" />
          <SplitText copy="Skills" role="heading" />
        </h2>
        <p className="mb-8">Here are a few technologies I've been working with recently</p>
        <div className="my-6 flex flex-wrap">
            {
                skillsData.map(skill => (
                    <div className="flex flex-col items-center  mr-3 sm:mr-5 mb-5" key={skill.id}>
                    <span className="leading-custom text-xl sm:text-5xl text-secondary hover:text-secondary_hover">{skill.icon}</span> 
                    <span className="text-base sm:text-base mt-3">{skill.title}</span>
                  </div> 
                ))
            } 
        </div>
      </div>
    </section>
  );
};

export default Skills;
