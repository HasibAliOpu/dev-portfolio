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
            className="lg:max-w-lg  rounded-3xl shadow-2xl"
            alt=""
          />
          <div className="text-white">
            <h1 className="text-3xl lg:text-8xl font-bold">Welcome!</h1>
            <p className="py-6 lg:text-6xl font-bold">
              My name is Hasib Ali, and I'm junior Front-end Developer !
            </p>

            <button className="btn btn-primary">
              <a href={resume} download>
                Download Resume
              </a>
            </button>
            <button className="btn btn-secondary ml-3">
              <a href="https://www.linkedin.com/in/hasib-ali-opu-7b8886226/">
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
