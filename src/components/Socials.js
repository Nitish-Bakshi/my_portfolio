import React from "react";
// import icons
import { ImTwitter, ImInstagram, ImLinkedin, ImGithub } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4 items-center">
        <li>
          <a href="https://www.twitter.com/nitishbakshi001" target="_blank">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nitishbakshi001" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nitish-bakshi-b2368a271
"
            target="_blank"
          >
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/Nitish-Bakshi
"
            target="_blank"
          >
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
