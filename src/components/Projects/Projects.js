import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

const images1 = [
  "https://i.ibb.co/PNpVZ5S/Screenshot-124.png",
  "https://i.ibb.co/rdf1Tmc/Screenshot-129.png",
  "https://i.ibb.co/FhvNp7v/Screenshot-126.png",
  "https://i.ibb.co/N38K8GG/Screenshot-127.png",
  "https://i.ibb.co/WxQYgdp/Screenshot-128.png",
];
const images2 = [
  "https://i.ibb.co/Jd9M369/Screenshot-130.png",
  "https://i.ibb.co/2SqLcsH/Screenshot-131.png",
  "https://i.ibb.co/SxZQcPy/Screenshot-134.png",
  "https://i.ibb.co/GJ1RdZG/Screenshot-109.png",
  "https://i.ibb.co/fkRJvd7/Screenshot-132.png",
];
const images3 = [
  "https://i.ibb.co/56Wrbyd/Screenshot-105.png",
  "https://i.ibb.co/2W3CpCW/Screenshot-107.png",
  "https://i.ibb.co/N11Tmq3/Screenshot-108.png",
];
const images4 = [
  "https://i.ibb.co/6PvS74y/Screenshot-110.png",
  "https://i.ibb.co/tQBRs28/Screenshot-111.png",
  "https://i.ibb.co/68yJX2q/Screenshot-112.png",
];

const Projects = () => {
  return (
    <div className="my-10 text-white ">
      <h1 className="text-center text-6xl lg:font-bold mb-10">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 px-7 lg:px-10 ">
        <div>
          <h1 className="text-xl lg:text-2xl pb-1">
            Auto-Motive [Parts Manufacturer(Full-stack)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              Users can order parts on the purchase page, it's a protected route
              so the user has to log in.
            </li>
            <li>
              There is a dashboard route, it's also a protected route, so the
              user has to log in On the dashboard there are three nested
              routes(my profile, my orders and add a review) for normal users
              and 5 nested routes(my profile, add product, manage products,
              manage orders and make admin) for admin.
            </li>
            <li> On my orders route, users can pay using a credit card.</li>
          </ul>
          <div className="my-5">
            <button className="btn  btn-sm rounded-full btn-primary">
              <a
                href="https://automotive-1d44c.web.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm rounded-full mx-1 btn-info ">
              <a
                href="https://github.com/HasibAliOpu/Auto-Motive"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Client side
              </a>
            </button>
            <button className="btn btn-sm rounded-full btn-success  mt-1 lg:mt-0">
              <a
                href="https://github.com/HasibAliOpu/Auto-Motive-Server"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Server side
              </a>
            </button>
          </div>
        </div>
        <div className="lg:px-20">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {images1.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <hr className="mx-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 px-7 lg:px-10 my-10  ">
        <div className="pb-3 lg:pb-0 lg:px-20">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {images2.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:px-10">
          <h1 className="text-xl font-bold lg:text-2xl pb-1">
            Tech-World [Warehouse Management(Full-stack)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              It's a warehouse website that's why users can add or remove the
              product. Users can also increase or decrease the quantity of the
              product on the update page.
            </li>
            <li>
              For the add/remove/update or see all product on manageItems page
              user need to login/register first. Also adding pagination on
              manageItems page.
            </li>
            <li>
              {" "}
              User login/register with email/password and google, If the user
              login then sees some route and one of them that calls myItem
              route, in this route, it shows user-added items
            </li>
          </ul>
          <div className="my-5">
            <button className="btn btn-sm rounded-full btn-primary">
              <a
                href="https://automotive-1d44c.web.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm rounded-full btn-info  mx-1">
              <a
                href="https://tech-world-c48c2.web.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Client side
              </a>
            </button>
            <button className="btn btn-sm rounded-full btn-success  mt-1 lg:mt-0">
              <a
                href="https://github.com/HasibAliOpu/tech-world-client-side"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Server side
              </a>
            </button>
          </div>
        </div>
      </div>
      <hr className="mx-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 px-7 lg:px-10 my-10">
        <div className="lg:px-10">
          <h1 className="text-xl lg:text-2xl  font-bold pb-1">
            Dr-Physiologists [Service Provider(Front-End)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              Users see provided treatment on the home page, To book the
              treatment first of all users need to log in to go to the checkout
              page.
            </li>
            <li>
              On the checkout, page user has two think, (1)treatment details,
              and (2) the booking form.
            </li>
            <li>
              {" "}
              Users can log in or Register with email/password, Google, or
              Github.
            </li>
          </ul>
          <div className="my-5">
            <button className="btn mr-1 btn-sm rounded-full btn-primary">
              <a
                href="https://dr-physiologists.web.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm rounded-full btn-info ">
              <a
                href="https://github.com/HasibAliOpu/Dr-Physiologists"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Client side
              </a>
            </button>
          </div>
        </div>
        <div className="lg:px-20">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {images3.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <hr className="mx-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 px-7 lg:px-10 my-10">
        <div className="pb-3 lg:pb-0 lg:px-20">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {images4.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:px-10">
          <h1 className="text-xl lg:text-2xl font-bold pb-1">
            JBL-Charge-4 [Product Review(Front-End)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              it's a simple review website, on the home page user see the
              product information and 3 customer review.
            </li>
            <li>
              On the bottom of home user have a button it's call(see All
              Reviews), it's take you to reviews page, and user see all the
              reviews.
            </li>
            <li>
              There was 2 chart on the dashboard page. First chart is based by
              monthly sell, and the second one was comparing INVESTMENT with
              REVENUE.
            </li>
          </ul>
          <div className="mt-5">
            <button className="btn btn-sm rounded-full btn-primary mr-1">
              <a
                href="https://jbl-charge-4.netlify.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm rounded-full bg-[#fca311] hover:bg-[#c07a00] ">
              <a
                href="https://github.com/HasibAliOpu/JBL-Charge-4"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Client side
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
