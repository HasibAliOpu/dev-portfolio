import React from "react";
import banner from "../../assets/banner/LinkedIn-Banner.png";

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
              My name is Hasib Ali, and I'm junior Front-end Developer
            </p>

            <button className="btn btn-primary">
              <a
                href="https://drive.google.com/file/d/1RCSz6jRhd_r_HU_CBuJElOBzkDbAgU6o/view"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
