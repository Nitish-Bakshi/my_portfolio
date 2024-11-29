import React from "react";
// import icons
import { ImTwitter, ImInstagram, ImLinkedin, ImGithub } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4 items-center">
        <li>
          <a
            href="https://www.twitter.com/nitishbakshi001"
            target="_blank"
            rel="noreferrer"
          >
            <ImTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nitishbakshi001"
            target="_blank"
            rel="noreferrer"
          >
            <ImInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nitish-bakshi-b2368a271
"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/Nitish-Bakshi
"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
