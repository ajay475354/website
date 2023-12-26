import { useHistory } from "react-router-dom";
import "./index.css";

import { BsArrowRight } from "react-icons/bs";

const Courses = () => {
  const history = useHistory();
  return (
    <div className="bg_container_courses">
      <h1 className="courses_header">Trending Courses</h1>
      <div className="courses_container">
        <div
          className="cisco_course_container"
          onClick={() => {
            history.push("/ciscosdwan");
          }}
        >
          <img
            src="https://res-console.cloudinary.com/dbmxh23dy/thumbnails/v1/image/upload/v1702290322/U0RfV0FOX2RxdXFuYw==/grid_landscape"
            alt="cisco_image"
            className="cisco_image"
          />
          <h1 className="cisco_header">Cisco SD-WAN Viptela Training</h1>
          <p className="cisco_description">
            This set of on-demand courses will help grow your technical skills
            for deploying, managing, and and SD-WAN will be the best way to
            guide traffic across multiple transport types. Overall, enterprises
            will have more freedom than ever before.
          </p>
        </div>

        <div
          className="ccna_container"
          onClick={() => {
            history.push("/ccna");
          }}
        >
          <img
            src="https://res-console.cloudinary.com/dbmxh23dy/thumbnails/v1/image/upload/v1702292106/Y2NuYV9kb2V0b2s=/grid_landscape"
            alt="ccna_image"
            className="ccna_image"
          />
          <h1 className="ccna_header">Cisco Certified Network Associate</h1>
          <p className="ccna_description">
            The CCNA—which stands for Cisco Certified Network Associate—is an
            entry-level information technology (IT) certification issued by
            networking hardware company Cisco.The CCNA is designed to validate
            your knowledge on fundamental networking concepts often requested in
            networking roles in IT positions.
          </p>
        </div>
      </div>

      {/*..............enroll card......*/}

      <div className="enroll_bg_container">
        <img
          src="https://letsmovetocloud.com/wp-content/uploads/2023/09/contact-us.png"
          alt="enroll_image"
          className="enroll_image"
        />
        <div className="enroll_details_container">
          <h1 className="enroll_head">Enroll in our couses now!</h1>
          <button
            type="button"
            className="enroll_button"
            onClick={() => {
              history.push("/contact");
            }}
          >
            Get Started <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
