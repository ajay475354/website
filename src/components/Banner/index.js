import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import "./index.css";

const Banner = () => {
  return (
    <Marquee className="bg_container" pauseOnHover={true} speed={50}>
      <Link to="/Contact" className="marqueelink">
        <div className="marquee_container">
          <p className="marquee_description">
            Festive Offer! Get upto 25% discount on Cisco SD-WAN, CCNA and other
            courses. Offer valid until 17 Jan 2024. Contact info@learnedze.com
          </p>
        </div>
      </Link>
    </Marquee>
  );
};

export default Banner;
