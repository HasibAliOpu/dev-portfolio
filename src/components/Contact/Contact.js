import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Email from "../../assets/icon/mail.svg";
import Location from "../../assets/icon/location.svg";
import Phone from "../../assets/icon/phone.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3rab1rq",
        "template_ob7w2fn",
        e.target,
        "1a4Vo2nzaQcfacsg4"
      )
      .then(
        (result) => {
          if (result.text) {
            toast("Message Send!!");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      style={{ fontFamily: "cursive" }}
      className="my-10 mx-5 lg:mx-0 text-white"
    >
      <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-info rounded-md shadow-md ">
        <h2 className="text-3xl font-semibold text-center">Get in touch</h2>
        <p className="mt-3 text-center">
          HELLO!! Feel free to communicate with me for any enquiry,
          collaboration or jobs. I will be more than glad to hear from you.
          Regards.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
          <Link
            to="/contact"
            className="flex flex-col items-center px-4 py-3 text-white transition-colors duration-200 transform rounded-md hover:bg-[#bb3358]"
          >
            <img src={Location} className="w-10" alt="location" />
            <span className="mt-2">Rajshahi, Bangladesh</span>
          </Link>

          <Link
            to="/contact"
            className="flex flex-col items-center px-4 py-3 text-white transition-colors duration-200 transform rounded-md  hover:bg-green-400 "
          >
            <img src={Phone} alt="phone" />

            <span className="mt-2">+8801303082261</span>
          </Link>

          <a
            href="mailto:hasib.dev75@gmail.com"
            className="flex flex-col items-center px-4 py-3 text-white transition-colors duration-200 transform rounded-md hover:bg-blue-500"
          >
            <img src={Email} className="w-10" alt="email" />

            <span className="mt-2">hasib.dev75@gmail.com</span>
          </a>
        </div>

        <div className="mt-6">
          <form onSubmit={sendEmail}>
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <input
                  className="w-full px-4 py-2 text-gray-700 bg-white shadow-lg rounded-xl  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-xl"
                  type="text"
                  required
                  name="name"
                  placeholder="Your Name"
                />
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white shadow-lg rounded-xl  focus:border-violet-400 focus:ring-violet-300 focus:outline-none focus:ring focus:ring-opacity-40 text-xl"
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <textarea
                className="block w-full h-40 px-4 py-2 text-gray-700 bg-white shadow-lg rounded-xl  focus:border-purple-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-40 text-lg"
                name="message"
                required
                placeholder="Write your message..."
              />
            </div>
            <div className="flex justify-center mt-6">
              <input
                type="submit"
                value="Send Message"
                className="px-4 py-2 text-white text-xl  bg-gradient-to-r from-purple-500 to-pink-500 rounded-md  hover:from-pink-500 hover:to-purple-500 hover:scale-105 ease-in-out duration-500"
              ></input>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
