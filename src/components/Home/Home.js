import React from "react";
import banner from "../../assets/banner/LinkedIn-Banner.png";

const Home = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} class="max-w-lg rounded-3xl shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Welcome!</h1>
            <p class="py-6">My name is Hasib Ali,</p>
            <p>I'm Front-end Developer</p>
            <button class="btn btn-primary">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
