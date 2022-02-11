import "./footer.css";
import Socials from "../socials";
import { AiTwotoneMail } from "react-icons/ai";

const footer = () => {
  return (
    <div className="footer">
      <footer>
        <div class="footer__content">
          <h3>Contact</h3>
          <p>Let's Talk</p>
          <ul class="socials">
            <li>
              <p>Reach me on</p>
              <Socials />
            </li>
            <li>
              <p>Email me at</p>
              <a href="" target="_blank">
                <AiTwotoneMail />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__bottom">
          <p>
            Made by <span>Karthik V</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
