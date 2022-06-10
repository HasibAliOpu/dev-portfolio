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
const images5 = [
  "https://i.ibb.co/n6bFsdz/Screenshot-138.png",
  "https://i.ibb.co/bL3YK80/Screenshot-139.png",
  "https://i.ibb.co/rp1dZS9/Screenshot-140.png",
  "https://i.ibb.co/bKCq1kD/Screenshot-141.png",
];

const Projects = () => {
  return (
    <div className="my-10 text-white ">
      <h1 className="text-center text-6xl uppercase lg:font-bold mb-16">
        <span className="border-b-4 border-primary hover:border-white hover:text-primary pb-1">
          Proj
        </span>
        <span className="border-b-4 text-primary  hover:border-primary hover:text-white pb-1">
          ects
        </span>
      </h1>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-1 lg:grid-cols-2 mb-10 px-7 lg:px-10 "
      >
        <div>
          <h1 className="text-xl text-info font-bold lg:text-2xl pb-1">
            Auto-Motive [Parts Manufacturer(Full-stack)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              It's a car parts manufacturer website, we have some of car parts
              in the home page i build a simple navbar,banner, some information,
              showing part on the card, business summary, discount shipping
              details, user review, and the last footer.
            </li>
            <li>
              you can purchase the parts on click the card (purchase) btn it go
              purchase page and give some detail and can purchase it.
            </li>
            <li>if user login he/she can see the dashboard route,</li>
            <li>
              on dashboard route user can see har/his orders, give review and my
              profile to save or update her/his details,
            </li>
            <li>
              on myOrders route user can pay for her/his order or user can
              cancel the order, but if order was paid than user can't cancel the
              order
            </li>
            <li>
              if user was admin, then he/she can see 5 more route on dashboard.
              myProfile, manageOrders, manageProducts, addProduct, and make
              admin.
            </li>
            <li>
              on manageOrders route admin can see all user orders, if user paid
              the order it's show pending and admin can shipped the order on
              press the pending btn, if checked is show (shipped)and disabled
              the btn. admin cancel user order if isn't paid.
            </li>
            <li>
              manageProducts - admin can delete the product, if admin want to
              add a new product then he/she go the addProduct route. and the
              make admin route, admin can promoted user to admin.
            </li>
          </ul>
          <h1 className="text-warning font-bold font-mono">
            Used Technologies: React, React-router, Tailwind, daisyUI, Firebase,
            React-Firebase-Hook, Axios, React-Query, React-Hook-Form,
            React-Toastify, FontAwesome, sweetalert2, stripe, Node, Express,
            Cors, Dotenv, jsonwebtoken, MongoDB.
          </h1>
          <div className="my-5">
            <button className="btn  btn-sm rounded-full text-white btn-primary">
              <a
                href="https://automotive-1d44c.web.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm rounded-full text-white mx-1 bg-info hover:bg-sky-600">
              <a
                href="https://github.com/HasibAliOpu/Auto-Motive"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Client side
              </a>
            </button>
            <button className="btn btn-sm rounded-full text-white bg-success hover:bg-green-700 mt-1 lg:mt-0">
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

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-1 lg:grid-cols-2 px-7 lg:px-10 my-10  "
      >
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
          <h1 className="text-xl text-info font-bold lg:text-2xl pb-1">
            Tech-World [Warehouse Management(Full-stack)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              In this website you can see many kind of gadgets and gears. it's a
              warehouse website so you can't buy or sell the items. but you can
              increase/decrease the item quantity on the ItemDetails Route,
            </li>
            <li>
              On the home page, you can see the simple navbar, banner-carousel,
              some discount banner and info, delivery details, top-6 items ,
              spacial discount of drones, and the footer. At the bottom of the
              items card you can see the (update) button.
            </li>
            <li>
              if you click the button it lets you go to the itemDetails route,
              it's a private route, so you must be login to go the itemDetails
              route. on the itemDetails route you can see the item details and 1
              simple form and a (delivered)btn, on the form you can increase the
              item quantity and the decrease the quantity. on that route you
              have a more (manage inventories)btn, the same btn have the home
              route.
            </li>
            <li>
              {" "}
              This btn will take you the manage inventory route. on that route
              you see the all items, on each item you have 2 btn ,1: update btn,
              2 delete btn. If you want to delete any item press the (delete)
              btn, it's will remove for client-side and the database.
            </li>
            <li>
              On the manage Inventory route i have lot of items thats way i
              implement the pagination. each page you see 12 item. On the bottom
              of this route you see the btn, it's see(add new item).
            </li>
            <li>
              This btn take you the addItem route, the route have a simple form.
              you must full-fill the all input to add the item. if it's add it's
              give you a simple success toast.
            </li>
            <li>
              On the myItem route, you can see the your added items. The Blogs
              route, it's a Q&A page. I have given a answer to some questions.{" "}
            </li>
            <li>
              On login route, i implement a simple login form to
              [react-hook-form] , you can login with Email/Password or google. i
              give a forget password authentication..if you want to change you
              password click the forget password then you got a roast and a
              email on you device/desktop.
            </li>
            <li>
              If you new at tech world ...then you go to register, in this route
              i implement tailwind form it's different to login form. i setup a
              extra feature at register and login form, that is the (eye)btn,if
              you click the btn you can see you password.
            </li>
            <li>
              If you new at tech world ...then you go to register, in this route
              i implement tailwind form it's different to login form. i setup a
              extra feature at register and login form, that is the (eye)btn,if
              you click the btn you can see you password.
            </li>
          </ul>
          <h1 className="text-warning font-bold font-mono">
            Used Technologies: React, React-router, Router Active Link,
            Tailwind, Tailwind-Elements, Firebase, React-Firebase-Hook, AOS,
            Axios, React-Hook-Form, React-Toastify, FontAwesome, Node, Express,
            Cors, Dotenv, jsonwebtoken, MongoDB.
          </h1>
          <div className="my-5">
            <button className="btn btn-sm rounded-full text-white btn-primary">
              <a
                href="https://tech-world-c48c2.web.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm rounded-full text-white bg-info hover:bg-sky-600  mx-1">
              <a
                href="https://github.com/HasibAliOpu/tech-world-client-side"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Client side
              </a>
            </button>
            <button className="btn btn-sm rounded-full text-white bg-success hover:bg-green-600  mt-1 lg:mt-0">
              <a
                href="https://github.com/HasibAliOpu/tech-world-server-side"
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

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-1 lg:grid-cols-2 px-7 lg:px-10 my-10"
      >
        <div className="lg:px-10">
          <h1 className="text-xl text-info lg:text-2xl  font-bold pb-1">
            Dr-Physiologists [Service Provider(Front-End)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              On the home page, you can see the carousel
              banner/doctor-info/Services. At the bottom of the doc-info also
              see the (Check out) button..
            </li>
            <li>
              if you click the button it lets you go to the check Out route,
              it's a private route, first of all you have to login then you go
              to the check out route.
            </li>
            <li>
              on the check out route you can see the 2 item, (1)Selected service
              details and (2) a patient information form. if you submit the form
              then you see the roast(Thank you for booking)
            </li>
            <li>
              on the Blogs page, it's a Q&A page. I have given an answer to some
              questions. and the about page, the About route. On this page, you
              can see some details about me.
            </li>
            <li>
              on login route, we have a simple login form, you can login with
              EmailandPassword or github/google we have a forget password
              authentication..if you click the forget password then you got a
              roast and a email
            </li>
            <li>
              if you don't have user id...then you go to register route and
              register your user id, login and register almost similar.
            </li>
            <li>
              on the footer i build the navigate system..so you can navigate the
              route on the footer and I also created a 404 page...on this page,
              you can see a funny 404 error image.
            </li>
          </ul>
          <h1 className="text-warning font-bold font-mono">
            Used Technologies: React, React-router, Router Active Link,
            Tailwind, Tailwind-Elements, Firebase, React-Firebase-Hook,
            React-Toastify, FontAwesome.
          </h1>
          <div className="my-5">
            <button className="btn mr-1 btn-sm rounded-full bg-blue-500 hover:bg-blue-700 text-blue-100">
              <a
                href="https://dr-physiologists.web.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm rounded-full bg-purple-600 hover:bg-purple-800  text-purple-100">
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

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-1 lg:grid-cols-2 px-7 lg:px-10 my-10"
      >
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
          <h1 className="text-xl text-info lg:text-2xl font-bold pb-1">
            JBL-Charge-4 [Product Review(Front-End)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              On the home page, you can see the product img/details and some
              review.
            </li>
            <li>
              At the bottom of the Home page also see the (See All Reviews)
              button.
            </li>
            <li>
              if you click the button it lets you go to the Reviews route and
              you can see all reviews.
            </li>
            <li>
              on the Dashboard page, you see the 2 charts. The first one was a
              monthly sell chart and the second is comparing Investment and
              revenue.
            </li>
            <li>
              on the Blogs page, it's a Q&A page. I have given an answer to some
              questions.
            </li>
            <li>
              and the last page, the About route. On this page, you can see some
              features of the product.
            </li>
            <li>
              and I also created a 404 page...on this page, you can see a (404
              error) image.
            </li>
          </ul>
          <h1 className="text-warning font-bold font-mono">
            Used Technologies: React.js, React-router, Router Active
            Link,Recharts.js, TailwindCSS, Heroicons.
          </h1>
          <div className="mt-5">
            <button className="btn btn-sm rounded-full bg-info hover:bg-sky-600 text-cyan-50 mr-1">
              <a
                href="https://jbl-charge-4.netlify.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm text-orange-100 rounded-full bg-[#fca311] hover:bg-[#c07a00] ">
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
      <hr className="mx-10" />

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="grid grid-cols-1 lg:grid-cols-2 px-7 lg:px-10 my-10"
      >
        <div className="lg:px-10">
          <h1 className="text-xl text-info lg:text-2xl font-bold pb-1">
            The Wedding Centre [Convention center(single page)]
          </h1>
          <ul className="list-disc list-outside">
            <li>
              it's a simple wedding centre booking single page website, on home
              section you see a carousel and a button for booked your center,
              and added simple toast on the bottom of carousel.
            </li>
            <li>
              next section was packages section, you can see some packages.
            </li>
            <li>
              next was FAQ section, on this section showing some Question answer
              and some general information.
            </li>
            <li>
              on the bottom of page, have have some information about another
              convention center and bottom have simple footer.
            </li>
          </ul>
          <h1 className="text-warning font-bold font-mono">
            Used Technologies: HTML, CSS, Bootstrap.
          </h1>
          <div className="mt-5">
            <button className="btn btn-sm rounded-full btn-secondary mr-1">
              <a
                href="https://the-convention-center.netlify.app/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                visit Website
              </a>
            </button>
            <button className="btn btn-sm rounded-full text-white bg-[#1fe287] hover:bg-[#1eb86b] ">
              <a
                href="https://github.com/HasibAliOpu/convention-center"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Client side
              </a>
            </button>
          </div>
        </div>
        <div className="pb-3 mt-2 lg:pb-0 lg:px-20">
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
            {images5.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
