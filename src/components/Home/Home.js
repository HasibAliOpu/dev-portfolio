import React from "react";
import banner from "../../assets/banner/LinkedIn-Banner.png";

const Home = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} class="max-w-lg rounded-3xl shadow-2xl" alt="" />
          <div>
            <h1 class="text-5xl font-bold">Welcome!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
