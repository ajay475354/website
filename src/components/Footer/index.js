import { Link } from "react-router-dom";
import {
  FaRegCopyright,
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare,
} from "react-icons/fa";
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import "./index.css";

const linkdinUrl = "https://www.linkedin.com/in/learnedze-networks-45a8861a6/";
const fbLink = "https://www.facebook.com/profile.php?id=100039627850282";
const twitter = "https://twitter.com/home";

const Footer = () => {
  return (
    <footer className="footer_bg_container">
      {/*............footer_first_container..............*/}
      <div className="footer_logo_links_container">
        <img
          src="https://learnedze.netlify.app/images/logo.png"
          alt="footer_logo"
          className="footer_logo"
        />
        <div className="links_container">
          <Link to="/" className="footer_link_boarder">
            Home
          </Link>
          <Link to="/courses" className="footer_link_boarder">
            Courses
          </Link>
          <Link to="/corporates" className="footer_link_boarder">
            Corporates
          </Link>
          <Link to="/about" className="footer_link_boarder_about">
            About
          </Link>
        </div>
        <div className="footer_copyrigt_container">
          <FaRegCopyright className="footer_copy_right_image" />
          <p className="footer_copyright_description">
            Learnedze All Rights Reserved
          </p>
        </div>
      </div>

      {/*..........footer_second_container.............*/}
      <div className="footer_courses_container">
        <h1 className="footer_header_courses">Courses</h1>
        <Link to="/CiscoSdWan" className="footer_course_link">
          Cisco SD-WAN
        </Link>
        <Link to="/ccna" className="footer_course_link">
          Cisco Certified Network Associate(CCNA)
        </Link>
      </div>

      {/*..........footer_third_container............*/}
      <div className="footer_contact_container">
        <h1 className="footer_contact_header">Contact</h1>
        <div className="footer_contact_details_container">
          <BsEnvelopeFill className="footer_icon" />
          <p className="footer_contact_info">Info@learnedze.com</p>
        </div>
        <div className="footer_contact_details_container">
          <BsFillTelephoneFill className="footer_icon" />
          <p className="footer_contact_info">91+ 9873343507</p>
        </div>
        <div className="social_web_site_icon_containers">
          <a
            href={linkdinUrl}
            target="_blank"
            rel="noreferrer"
            className="social_icons_style"
          >
            <FaLinkedin className="social_icons" />
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noreferrer"
            className="social_icons_style"
          >
            <FaTwitterSquare className="social_icons" />
          </a>
          <a
            href={fbLink}
            target="_blank"
            rel="noreferrer"
            className="social_icons_style"
          >
            <FaFacebook className="social_icons" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
