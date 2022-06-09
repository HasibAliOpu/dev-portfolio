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
      style={{ fontFamily: "cursive" }}
      className="my-10 mx-5 lg:mx-0 text-white fnt-serif"
    >
      <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-primary rounded-md shadow-md ">
        <h2 className="text-3xl font-semibold text-center ">Get in touch</h2>
        <p className="mt-3 text-center">
          HELLO!! Feel free to communicate with me for any enquiry,
          collaboration or jobs. I will be more than glad to hear from you.
          Regards.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
          <Link
            to="/contact"
            className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <img src={Location} className="w-10" alt="" />
            <span className="mt-2">Rajshahi, Bangladesh</span>
          </Link>

          <Link
            to="/contact"
            className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <img src={Phone} alt="" />

            <span className="mt-2">+8801303082261</span>
          </Link>

          <a
            href="mailto:hasib.dev75@gmail.com"
            className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <img src={Email} className="w-10" alt="" />

            <span className="mt-2">hasib.dev75@gmail.com</span>
          </a>
        </div>

        <div className="mt-6">
          <form onSubmit={sendEmail}>
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <input
                  className="w-full px-4 py-2 text-gray-700 bg-white  border rounded-xl dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-xl"
                  type="text"
                  required
                  name="name"
                  placeholder="Your Name"
                />
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-xl dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-xl"
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <textarea
                className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-xl dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 text-lg"
                name="message"
                required
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <input
                type="submit"
                value="Send Message"
                className="px-4 py-2 text-white text-xl transition-colors duration-200 transform bg-secondary  rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
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
