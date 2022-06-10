import React from "react";
import banner from "../../assets/banner/LinkedIn-Banner.png";
import resume from "../../assets/resume/resume.pdf";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className=" lg:max-w-lg xl:max-w-xl rounded-3xl shadow-2xl"
            alt=""
          />
          <div className="text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#fca311]">
              Welcome!
            </h1>
            <p className="py-6 md:text-2xl lg:text-4xl xl:text-5xl text-[#edf2f4] font-bold">
              My name is Hasib Ali, and I'm junior Front-end Developer !
            </p>

            <button className="btn bg-[#fe7f2d] hover:bg-[#f06000] text-white scale-100 hover:scale-105 ease-in duration-300">
              <a href={resume} download>
                Download Resume
              </a>
            </button>
            <button className="btn bg-[#4cc9f0] hover:bg-[#1cc0f1] scale-100 hover:scale-105 ease-in duration-300 text-white ml-3">
              <a
                href="https://www.linkedin.com/in/hasib-ali-opu-7b8886226/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
