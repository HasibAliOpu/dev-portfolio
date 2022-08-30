import React from "react";
import facebook from "../../assets/icon/facebook.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import github from "../../assets/icon/github.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-black text-neutral-content">
        <div className="items-center grid-flow-col">
          <p className="text-xs font-mono">
            Copyright © {new Date().getFullYear()} - All right reserved by Hasib
            Ali || Portfolio!
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/hasib-ali-opu-7b8886226/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              className="scale-100 hover:-translate-y-2 ease-in-out duration-500 w-7"
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/HasibAliOpu"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              className="scale-100 hover:-translate-y-2 ease-in-out duration-500 w-7"
              src={github}
              alt="github"
            />
          </a>
          <a
            href="https://www.facebook.com/tonmoy.opu.77"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              className="scale-100  hover:-translate-y-2 ease-in-out duration-500 w-7"
              src={facebook}
              alt="facebook"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
