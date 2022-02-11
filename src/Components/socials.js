import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const socials = () => {
  return (
    <div class="social-container">
      <a href="" target="_blank">
        <FaFacebook />
      </a>
      <a href="" target="_blank">
        <BsInstagram />
      </a>
      <a href="" target="_blank">
        <BsLinkedin />
      </a>
      <a href="" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://github.com/Karthik-v29" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default socials;
