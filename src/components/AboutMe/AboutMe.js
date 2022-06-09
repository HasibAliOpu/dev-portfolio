import React from "react";
import Portfolio from "../../assets/images/portfolio.jpg";
import Linkedin from "../../assets/icon/linkedin.svg";
import Github from "../../assets/icon/github.svg";
import Email from "../../assets/icon/mail.svg";
import Facebook from "../../assets/icon/facebook.svg";
import { SkillBar } from "react-skills";

const AboutMe = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white h-screen lg:w-8/12 ">
          <div className="max-w-sm lg:w-full bg-base-100 shadow-2xl mt-20 mx-2 lg:mx-0 lg:ml-56">
            <figure>
              <div className="avatar">
                <div className="w-1/2 mx-auto mt-5 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                  <img src={Portfolio} alt="profile" />
                </div>
              </div>
            </figure>
            <div className="card-body text-center">
              <h2 className="text-3xl font-bold font-mono uppercase">
                Hasib Ali
              </h2>
              <p
                style={{ fontFamily: "'Roboto', sans-serif" }}
                className="uppercase"
              >
                front-end Developer
              </p>
            </div>
            <div className="bg-white h-10">
              <span className="flex justify-center gap-6 mt-1">
                <img
                  className="scale-100 hover:scale-150 ease-in duration-500 w-7"
                  src={Linkedin}
                  alt=""
                />
                <img
                  className="scale-100 hover:scale-150 ease-in duration-500"
                  src={Github}
                  alt=""
                />
                <img
                  className="scale-100 hover:scale-150 ease-in duration-500"
                  src={Facebook}
                  alt=""
                />
                <img
                  className="scale-100 hover:scale-150 ease-in duration-500"
                  src={Email}
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
        <div className="px-5 py-10">
          <div>
            <h1 className="text-7xl">Hello!</h1>

            <p className="text font-mono my-4">
              I am a front-end web developer. I love to use my creativity and
              make something new. That's why I love to work with React.js and
              TailwindCSS. Over the last 6 month, I gather knowledge in various
              parts of web development through the Programming Hero course. My
              ultimate goal is to become an awesome full-stack web developer who
              can make beautiful UIs and also can handle the back-end smoothly.
            </p>
          </div>
          <div className="lg:px-8">
            <h1 className="text-center font-bold font-mono text-xl">
              My Skills
            </h1>
            <div className="scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="HTML" level={99} color="#f77f00" />
            </div>
            <div className="py-1 scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="CSS" level={88} color="#219ebc" />
            </div>
            <div className="pb-1 scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="JavaScript" level={90} color="#ffea00" />
            </div>
            <div className="pb-1 scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="React.JS" level={85} color="#70d6ff" />
            </div>
            <div className="pb-1 scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="Bootstrap" level={75} color="#5a189a" />
            </div>
            <div className="pb-1 scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="Tailwind" level={90} color="#219ebc" />
            </div>
            <div className="pb-1 scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="Node.JS" level={75} color="#7cb518" />
            </div>
            <div className="pb-1 scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="Express.JS" level={70} color="#081c15" />
            </div>
            <div className="scale-100 hover:scale-105 ease-in duration-300">
              <SkillBar name="MongoDB" level={80} color="#4c956c" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
