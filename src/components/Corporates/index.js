import "./index.css";
import AboutIcons from "../AboutIcons";

import Marquee from "react-fast-marquee";

import { FaCheck } from "react-icons/fa";

/*.........*/
import tata from "../../Images/tata.png";
import target from "../../Images/Target.png";
import orange from "../../Images/orange.png";
import hcl from "../../Images/hcl.png";
import cgi from "../../Images/cgi.png";
import skillsoft from "../../Images/Skillsoft.png";
import vvdn from "../../Images/vvdn.png";
import wipro from "../../Images/wipro.png";
import labservice from "../../Images/labservices.png";
import deployment from "../../Images/deployment.png";

/*.......svgicons......*/
import workshop from "../../Images/workshop.png";
import training from "../../Images/training.png";
import poclab from "../../Images/poclab.png";
import classroom from "../../Images/classroom.png";
import labs from "../../Images/labs.png";
import consulting from "../../Images/consulting.png";
import video from "../../Images/video.png";
import time from "../../Images/time.png";
import test from "../../Images/test.png";
import design from "../../Images/design.png";
import db from "../../Images/db.png";
import implement from "../../Images/implement.png";

const aboutData = [
  {
    id: 0,
    icons: workshop,
    text: "Virtual Workshops",
  },
  {
    id: 1,
    icons: training,
    text: "Training Pods for Classroom Training Use",
  },
  {
    id: 2,
    icons: poclab,
    text: "PoC Labs",
  },
  {
    id: 3,
    icons: classroom,
    text: "Classroom Workshops",
  },
  {
    id: 4,
    icons: labs,
    text: "Advanced Learnings Labs",
  },
  {
    id: 5,
    icons: consulting,
    text: "Consulting",
  },
  {
    id: 6,
    icons: video,
    text: "Video On Demand",
  },
  {
    id: 7,
    icons: time,
    text: "Foundational Learning Labs",
  },
  {
    id: 8,
    icons: test,
    text: "Engineering Test Beds",
  },
  {
    id: 9,
    icons: design,
    text: "Design/PoC/PoV Demos",
  },
  {
    id: 10,
    icons: db,
    text: "Virtual Sandboxes",
  },
  {
    id: 11,
    icons: implement,
    text: "Implementation",
  },
];

const Corporates = () => {
  return (
    <div className="corporate_bg_container">
      {/*..................banner bg container..........*/}
      <div className="image_about_bg_container">
        <h1 className="banner_image_head">
          Accelerate your Business
          <br /> with Learnedze Labs
        </h1>
        <p className="banner_image_description">
          For Learning, Classroom Training, PoC, Sandboxing, Demos.
        </p>
      </div>

      {/*..............About container.............*/}
      <div className="about_bg_container">
        <h1 className="about_header">About LearnEdze</h1>
        <hr className="hr_line_about" />
        <p className="about_description">
          Learnedze Networks is an ed-tech company based out of India. Learnedze
          provides on-demand labs as a service to organizations in the
          networking industry. Focusing on technology learning labs, sandbox
          labs, proof of concept labs & demos, training & consulting on
          networking technologies.
        </p>

        <div className="about_icons_containers">
          {aboutData.map((each) => (
            <AboutIcons each={each} key={each.id} />
          ))}
        </div>
      </div>
      {/*...........projects delivered.,,,,,,,,,...*/}
      <div className="projects_delivered_container">
        <div className="project_content">
          <h1 className="project_delivered_header">Projects delivered</h1>
          <hr className="hr_line_projects_delivered" />
          <p className="projects_delivered_description">
            We have experience of delivering 30+ projects across the globe on
            the areas of SD-WAN, Enterprise LAN, Data center that includes
            trainings, Labs as a Service for learning, Engineering Test Beds,
            PoC, Pilot and Implementation.
          </p>
          <div className="company_images_container">
            <Marquee speed={50} pauseOnHover>
              <div className="companys">
                <img src={tata} alt="" className="tata_image" />
                <img src={target} alt="" className="tata_image" />
                <img src={orange} alt="" className="orange_image" />
                <img src={hcl} alt="" className="hcl_image" />
                <img src={cgi} alt="" className="cgi_image" />
                <img src={skillsoft} alt="" className="skillsoft_image" />
                <img src={vvdn} alt="" className="vvdn_image" />
                <img src={wipro} alt="" className="wipro_image" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      {/*............top svg.....................*/}
      <div className="top_svg_corporates">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="cop_svg_top"
        >
          <path
            fill="#edf1f8"
            fill-opacity="1"
            d="M0,192L80,170.7C160,149,320,107,480,117.3C640,128,800,192,960,197.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/*.............proffesional services.........*/}
      <div className="professional_services_container">
        <h1 className="services_head">Lab as a Service for Learning and PoC</h1>
        <div className="services_container">
          <div className="services_details_container">
            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco SD-WAN</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Umbrella</p>
            </div>

            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Firepower</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Nexus (Nx-OS)</p>
            </div>

            <div className="each_one_container">
              <div className="pink_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Routing and Switching</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Thousand Eyes</p>
            </div>

            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Arista Networking</p>
            </div>

            <div className="each_one_container">
              <div className="pink_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Arista Cloud Vision</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Fortinet</p>
            </div>

            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">F5</p>
            </div>

            <div className="each_one_container">
              <div className="pink_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Aruba</p>
            </div>
          </div>
          <img
            src={labservice}
            alt="labservice_image"
            className="labservice_image"
          />
        </div>
        <p className="services_note">
          Note: We can host any other Vendor/Technology labs on our Lab hosting
          Platform based on the requirement. Contact us for more information
        </p>
      </div>
      {/*...............bottom svg..................*/}
      <div className="bottom_svg_corporates">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="cop_bottom_svg"
        >
          <path
            fill="#edf1f8"
            fill-opacity="1"
            d="M0,288L80,256C160,224,320,160,480,133.3C640,107,800,117,960,144C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/*..............deployment services..........*/}
      <div className="deployment_bg_container">
        <h1 className="deployment_head">
          Professional services (PoC, Pilot and deployment)
        </h1>
        <div className="deployment_container">
          <img
            src={deployment}
            alt="deployment_image"
            className="deployment_image"
          />
          <div className="deployment_details_container">
            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco SD-WAN</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Umbrella</p>
            </div>

            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Firepower</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Nexus (Nx-OS)</p>
            </div>

            <div className="each_one_container">
              <div className="pink_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Routing and Switching</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Cisco Thousand Eyes</p>
            </div>

            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Arista Networking</p>
            </div>

            <div className="each_one_container">
              <div className="pink_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Arista Cloud Vision</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Fortinet</p>
            </div>
            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">F5</p>
            </div>

            <div className="each_one_container">
              <div className="pink_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Aruba</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Sales Force</p>
            </div>

            <div className="each_one_container">
              <div className="blue_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">VMware</p>
            </div>

            <div className="each_one_container">
              <div className="yellow_icon_container">
                <FaCheck className="each_check_icon_yellow" />
              </div>
              <p className="each_check_details">Extreme Networks</p>
            </div>
          </div>
        </div>
        <p className="deployment_description">
          * We serve other vendors in above technologies based on request
        </p>
      </div>
    </div>
  );
};
export default Corporates;
