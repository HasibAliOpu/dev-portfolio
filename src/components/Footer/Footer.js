import React from "react";
import facebook from "../../assets/icon/facebook.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import github from "../../assets/icon/github.svg";

const Footer = () => {
  return (
    <div>
      <footer class="footer items-center p-4 bg-black text-neutral-content">
        <div class="items-center grid-flow-col">
          <p className="text-xs font-mono">
            Copyright © 2022 - All right reserved by Hasib Ali || Portfolio.
          </p>
        </div>
        <div class="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/hasib-ali-opu-7b8886226/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img
              className="scale-100 hover:scale-125 ease-in duration-300 w-7"
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
              className="scale-100 hover:scale-125 ease-in duration-300 w-7"
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
              className="scale-100 hover:scale-125 ease-in duration-300 w-7"
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
