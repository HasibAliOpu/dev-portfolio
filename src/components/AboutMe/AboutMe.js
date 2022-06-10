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
        <div className="bg-orange-400 h-full lg:w-8/12 ">
          <div className="max-w-sm lg:w-full bg-[#023047] rounded-md shadow-2xl my-10 mx-4 md:mx-auto lg:mx-0 lg:ml-40 xl:ml-56 lg:mt-36">
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
              <p style={{ fontFamily: "monospace" }} className="uppercase">
                junior front-end Developer
              </p>
            </div>
            <div className="bg-white h-10 rounded-bl-md rounded-br-md">
              <span className="flex justify-center items-center gap-6 py-1">
                <a
                  href="https://www.linkedin.com/in/hasib-ali-opu-7b8886226/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <img
                    className="scale-100 hover:scale-125 ease-in duration-300 w-7"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </a>
                <a
                  href="https://github.com/HasibAliOpu"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <img
                    className="scale-100 hover:scale-125 ease-in duration-300 w-7"
                    src={Github}
                    alt="github"
                  />
                </a>
                <a
                  href="https://www.facebook.com/tonmoy.opu.77"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <img
                    className="scale-100 hover:scale-125 ease-in duration-300 w-7"
                    src={Facebook}
                    alt="facebook"
                  />
                </a>
                <a href="mailto:hasib.dev75@gmail.com">
                  <img
                    className="scale-100 hover:scale-125 ease-in duration-300 w-7"
                    src={Email}
                    alt="mail"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="px-5 py-10">
          <div>
            <h1 className="text-7xl text-primary">Hello!</h1>

            <p className="text font-mono my-4">
              I am a junior front-end web developer. I love to use my creativity
              and make something new. That's why I love to work with React.js
              and TailwindCSS. Over the last 6 month, I gather knowledge in
              various parts of web development through the Programming Hero
              course. My ultimate goal is to become an awesome full-stack web
              developer who can make beautiful UIs and also can handle the
              back-end smoothly.
            </p>
          </div>
          <div className="lg:px-8">
            <h1 className="text-center text-info font-bold text-2xl mb-3">
              <span className="border-b-2 px-4 pb-0.5 border-teal-300">
                My Skills
              </span>
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
