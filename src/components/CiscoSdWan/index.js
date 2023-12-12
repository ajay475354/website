import { useHistory } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import "./index.css";

const CiscoSdWan = () => {
  const history = useHistory();
  return (
    <div className="ciscosdwan_bg_container">
      <h1 className="cisco_header_">Cisco SD-WAN Viptela Training</h1>
      <p className="cisco_hours">COURSE DURATION: 65 HOURS</p>
      <img
        src="https://res-console.cloudinary.com/dbmxh23dy/thumbnails/v1/image/upload/v1702290322/U0RfV0FOX2RxdXFuYw==/grid_landscape"
        alt="cisco_image"
        className="cisco_image_content"
      />

      <div className="cisco_overview_container">
        <h1 className="cisco_card_description_header">
          Cisco SD-WAN Viptela Training
        </h1>
        <hr className="cisco_hr_line" />
        <h2 className="cisco_over_view">Overview:</h2>
        <p className="cisco_overview_description_1">
          Cisco SD-WAN Cloud Interconnect uses a cloud agnostic backbone to
          connect from site to site and site to multiple clouds. This Cloud
          OnRamp solution automates on-demand connectivity between multiple
          sites and to the world's leading cloud provider networks directly from
          your SD-WAN controller.
        </p>
        <p className="cisco_overview_description_2">
          Cisco SD-WAN solution is a cloud-delivered Wide Area Network (WAN)
          overlay architecture that extends the principles of software-defined
          networking (SDN) into the WAN. The solution is broken up into four
          planes: data, control, management and orchestration.
        </p>
      </div>

      {/*...........use and advantage...............*/}
      <div className="use_and_advantage_cisco_container">
        <h1 className="use_head_cisco">Why Use CISCO SD WAN:</h1>
        <hr className="cisco_hr_line" />
        <p className="use_description_cisco">
          Cisco SD-WAN gives users the ability to manage connectivity across
          their WANs from a single dashboard. It also lets them connect to cloud
          platforms with greater speed, reliability, and efficiency.
        </p>
        <h2 className="advantage_head_cisco">
          What is the advantage of SD WAN:
        </h2>
        <hr className="cisco_hr_line" />
        <p className="advantage_cisco_description">
          SD-WAN is more cost-effective and operationally agile than MPLS.
          SD-WAN reduces capex and opex while also simplifying WAN management
          and scalability.
        </p>
      </div>

      {/*....................svg.................*/}
      <div className="svg_cisco_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg_cisco"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,192L60,213.3C120,235,240,277,360,293.3C480,309,600,299,720,250.7C840,203,960,117,1080,117.3C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/*...................certification..........*/}

      <div className="certification_cisco_container">
        <div className="certification_details_container">
          <h1 className="certification_cisco_head">
            CISCO SD WAN Certification Job/Market Scope
          </h1>
          <hr className="cisco_hr_line" />
          <p className="certification_cisco_description">
            the Cisco SD-WAN certification is extremely valuable in today's
            quickly changing networking market. The demand for dependable and
            efficient software-defined wide area networks has increased as
            organisations continue to embrace digital transformation and
            cloud-based services.
          </p>
        </div>
        <img
          src="https://res-console.cloudinary.com/dbmxh23dy/thumbnails/v1/image/upload/v1702356373/Q2lzY28tU0QtV0FOLTMwMC00MTVfcWZzdXRm/grid_landscape"
          alt="certication_cisco_image"
          className="certication_cisco_image"
        />
      </div>
      {/*....................svg.................*/}
      <div className="svg_cisco_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg_cisco"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,224L80,192C160,160,320,96,480,69.3C640,43,800,53,960,74.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/*...................future...............*/}
      <div className="future_cisco_container">
        <h1 className="future_cisco_head">Is CISCO SD WAN, the Future</h1>
        <hr className="cisco_hr_line" />
        <p className="future_cisco_description">
          In the future, control, and data planes will be moved to the cloud to
          increase software performance, and SD-WAN will be the best way to
          guide traffic across multiple transport types. Overall, enterprises
          will have more freedom than ever before
        </p>
      </div>
      {/*..................shedule_cisco_container....*/}
      <div className="shedule_cisco_container">
        <h1 className="shedule_cisco_head">
          Schedules for the forthcoming Training
        </h1>
        <p className="shedule_cisco_description">
          Dec 3rd-7th, Timings-5pm-9 pm Indian Standard time.
        </p>
        <button
          className="shedule_cisco_button"
          type="button"
          onClick={() => {
            history.push("/contact");
          }}
        >
          Enroll Now
        </button>
      </div>
      {/*...............svg..........................*/}
      <div className="svg_cisco_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg_cisco"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,74.7C672,96,768,128,864,133.3C960,139,1056,117,1152,90.7C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/*.................benfits of training.........*/}

      <div className="benfits_cisco_container">
        <div className="benfits_cisco_details">
          <h1 className="benfits_cisco_head">Benefits of the training:</h1>
          <hr className="cisco_hr_line" />
          <div className="benfits_content_card">
            <BsArrowRightShort className="benfits_icon" />
            <p className="benfits_cisco_description">
              End-to-end visibility into applications and infrastructure across
              the entire SD-WAN fabric.
            </p>
          </div>
          <div className="benfits_content_card">
            <BsArrowRightShort className="benfits_icon" />
            <p className="benfits_cisco_description">
              Real-time information for failure correlation, cross-customer
              benchmarking, and application performance scores.
            </p>
          </div>
          <div className="benfits_content_card">
            <BsArrowRightShort className="benfits_icon" />
            <p className="benfits_cisco_description">
              What-if scenarios for performance forecasting.
            </p>
          </div>
        </div>
      </div>

      {/*..........SVG...............*/}
      <div className="svg_cisco_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="svg_cisco_benfits"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,74.7C672,96,768,128,864,133.3C960,139,1056,117,1152,90.7C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/*..................contact...........*/}
      <div className="contact_cisco_details">
        <p className="contact_cisco_description">
          For more details please contact-Info@learnedze.com or
          Sudeepta@learnedze.com You can also reach out to us at 9873343507 or
          8971752675.
        </p>
      </div>
    </div>
  );
};

export default CiscoSdWan;
