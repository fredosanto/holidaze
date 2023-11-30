import { Link } from "react-router-dom";
import {
  FacebookIcon,
  YoutubeIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../../icons/index.mjs";
function Footer() {
  return (
    <footer className="flex flex-col bg-red text-black p-5 md:p-10">
      <div className="">
        <div className="flex flex-col items-center md:flex-row gap-5 md:justify-evenly md:items-start">
          <div className="flex flex-col gap-1 w-48 text-center">
            <h4 className="font-medium uppercase underline">Company</h4>
            <p>Contact</p>
            <p>About</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-1 w-48 text-center">
            <h4 className="font-medium uppercase underline">Our Office</h4>
            <p>Somewhere st. 23</p>
            <p>1234 1234, City</p>
            <p>Country</p>
          </div>
          <div className="flex flex-col gap-1 w-48 text-center items-center">
            <h4 className="font-medium uppercase underline">Chanels</h4>
            <div className="flex gap-1">
              <FacebookIcon />
              <InstagramIcon />
            </div>
            <div className="flex gap-1">
              <LinkedinIcon />
              <YoutubeIcon />
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col justify-center items-center">
          <div>
            <Link to="/">
              <span id="logo" className="text-4xl font-bold">
                Holidaze
              </span>
            </Link>
          </div>
          <div>
            <a
              href="https://github.com/fredosanto/holidaze"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              by Fredo &copy; 2023
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
