import "./index.css";

import ccnaImage from "../../Images/ccna.png";

import { FaCheck } from "react-icons/fa";

const CcnaCourse = () => {
  return (
    <div className="ccna_bg_course_container">
      {/*.............head_hour_imge_ccna.............*/}
      <div className="ccna_head_image_hours_container">
        <h1 className="ccna_head">Cisco Certified Network Associate (CCNA)</h1>
        <p className="ccna_hours">COURSE DURATION: 65 HOURS</p>
        <img src={ccnaImage} alt="ccna_image" className="ccna_image_content" />
      </div>
      {/*.................svg..........................*/}
      <div className="over_view_svg_container_top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="overview_svg_top"
        >
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,224L80,208C160,192,320,160,480,170.7C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/*...............over_view_details.............*/}
      <div className="over_view_details_container">
        <div className="over_view_details">
          <h1 className="over_view_head">Course Overview:</h1>
          <p className="over_view_description">
            CCNA exam covers networking fundamentals, IP services, security
            fundamentals, automation and programmability. Designed for agility
            and versatility, CCNA validates that you have the skills required to
            manage and optimize today's most advanced networks.
          </p>
        </div>
        <img
          src="https://www.itrainu.in/wp-content/uploads/2018/11/CCNA-course-img.jpg"
          alt="over_view_image"
          className="over_view_image"
        />
      </div>

      {/*...............svg_bottom.....................*/}
      <div className="svg_over_view_bottom_container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,53.3C640,32,800,32,960,69.3C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      {/*...............you learn these core skills........*/}
      <div className="core_skills_container_ccna">
        <h1 className="core_skills_head">You'll Learn These Core Skills:</h1>
        <div className="each_one_container">
          <div className="pink_icon_container">
            <FaCheck className="each_check_icon_yellow" />
          </div>
          <p className="each_check_details_ccna">
            Build simple LANs, perform basic configurations for routers and
            switches, and implement IPv4 and IPv6 addressing schemes.
          </p>
        </div>
        <div className="each_one_container">
          <div className="blue_icon_container">
            <FaCheck className="each_check_icon_yellow" />
          </div>
          <p className="each_check_details_ccna">
            Configure routers, switches, and end devices to provide access to
            local and remote network resources and to enable end-to-end
            connectivity between remote devices.
          </p>
        </div>
        <div className="each_one_container">
          <div className="pink_icon_container">
            <FaCheck className="each_check_icon_yellow" />
          </div>
          <p className="each_check_details_ccna">
            Develop critical thinking and problem-solving skills using real
            equipment and Cisco Packet Tracer.
          </p>
        </div>
        <div className="each_one_container">
          <div className="blue_icon_container">
            <FaCheck className="each_check_icon_yellow" />
          </div>
          <p className="each_check_details_ccna">
            Configure and troubleshoot connectivity a small network using
            security best practices.
          </p>
        </div>
      </div>
      {/*................Is CCNA, a Good Career Choice ?.......*/}
      <div className="career_choice_container">
        <img
          src="https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2015_12_CCNA-Is-it-the-righ-choice-1.jpg"
          alt="choice_image"
          className="choice_image"
        />
        <div className="career_choice_details">
          <h1 className="choice_head">Is CCNA, a Good Career Choice ?</h1>
          <p className="choice_description">
            The training course and exam will provide you with the foundation to
            upscale your career in networking. CCNA certified professionals are
            considered to be the standard that most businesses recognize and
            trust to meet their requirements.
          </p>
        </div>
      </div>
      {/*.................CCNA Certification?...................*/}
      <div className="certified_container_ccna">
        <div className="certified_details_container">
          <h1 className="certified_head_ccna">
            Should You Pursue a CCNA Certification?
          </h1>
          <p className="certified_another_head">
            Seven Major Benefits of CCNA Certifications.
          </p>

          <div className="each_one_container">
            <div className="blue_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details_ccna">
              Gain New and Up-to-Date Skills.
            </p>
          </div>

          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details_ccna">Receive a Higher Salary.</p>
          </div>

          <div className="each_one_container">
            <div className="blue_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details_ccna">Skip Entry-Level Jobs.</p>
          </div>

          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details_ccna">Easy Job Hunt.</p>
          </div>

          <div className="each_one_container">
            <div className="blue_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details_ccna">Earn a Promotion.</p>
          </div>

          <div className="each_one_container">
            <div className="pink_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details_ccna">
              Endless Career Opportunities.
            </p>
          </div>

          <div className="each_one_container">
            <div className="blue_icon_container">
              <FaCheck className="each_check_icon_yellow" />
            </div>
            <p className="each_check_details_ccna">Easy Job Hunt.</p>
          </div>
        </div>
        <img
          src="https://images.credly.com/size/340x340/images/683783d8-eaac-4c37-a14d-11bd8a36321d/ccna_600.png"
          className="certified_ccna_image"
          alt="certified_ccna_image"
        />
      </div>
      {/*..................Is CCNA Good for freshers............*/}
      <div className="good_for_freshers_container">
        <div className="fresher_details">
          <h1 className="fresher_head">Is CCNA Good for freshers?</h1>
          <p className="freser_description">
            The candidates enjoy numerous opportunities as compared to other
            courses. After CCNA certification, aspirants can work as entry-level
            IT professionals or cyber security professionals and explore other
            jobs related to networking technologies.
          </p>
        </div>
      </div>
      {/*..................ccna modules.......................*/}
      <div className="modules_container"></div>
    </div>
  );
};
export default CcnaCourse;
