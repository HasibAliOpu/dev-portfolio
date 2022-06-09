import React from "react";
import Portfolio from "../../assets/images/portfolio.jpg";
import Linkedin from "../../assets/icon/linkedin.svg";
import Github from "../../assets/icon/github.svg";
import Email from "../../assets/icon/email.png";
import Facebook from "../../assets/icon/facebook.svg";
const AboutMe = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-white h-screen w-8/12 ">
          <div class="w-96 bg-base-100 shadow-2xl mt-20 ml-56">
            <figure>
              <div class="avatar">
                <div class="w-1/2 mx-auto mt-5 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2">
                  <img src={Portfolio} alt="profile" />
                </div>
              </div>
            </figure>
            <div class="card-body text-center">
              <h2 class="text-3xl font-bold font-mono uppercase">Hasib Ali</h2>
              <p
                style={{ fontFamily: "'Roboto', sans-serif" }}
                className="uppercase"
              >
                front-end Developer
              </p>
            </div>
            <div class="bg-white h-10">
              <span className="flex justify-center gap-6 mt-1">
                <img
                  className="scale-100 hover:scale-150 ease-in duration-500"
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
        <div className="flex items-center px-5">
          <div>
            <h1 className="text-7xl">Hello!</h1>

            <p className="text-2xl my-4">
              I am a front-end web developer. I love to use my creativity and
              make something new. That's why I love to work with React.js and
              TailwindCSS. Over the last 6 month, I gather knowledge in various
              parts of web development through the Programming Hero course. My
              ultimate goal is to become an awesome full-stack web developer who
              can make beautiful UIs and also can handle the back-end smoothly.
            </p>
            <div className="">
              <button className="btn btn-primary mr-5">Resume</button>
              <button className="btn btn-secondary">Projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
