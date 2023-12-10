import "./index.css";
import EachCard from "../EachCard/index";

const weOfferData = [
  {
    id: 0,
    url: "https://stage.learnedze.com/laptop.svg",
    text: "Vitual Workshop",
  },
  {
    id: 1,
    url: "https://stage.learnedze.com/peers.svg",
    text: "Training Pods",
  },
  {
    id: 2,
    url: "https://stage.learnedze.com/desktop.svg",
    text: "PoC Labs",
  },
  {
    id: 3,
    url: "https://stage.learnedze.com/classroom.svg",
    text: "Classroom Workshops",
  },
  {
    id: 4,
    url: "https://stage.learnedze.com/chemical.svg",
    text: "Advanced Learnings Labs",
  },
  {
    id: 5,
    url: "https://stage.learnedze.com/consulting.svg",
    text: "Consulting",
  },
  {
    id: 6,
    url: "https://stage.learnedze.com/videoOnDemand.svg",
    text: "Video On Demand",
  },
  {
    id: 7,
    url: "https://stage.learnedze.com/time.svg",
    text: "Foundational Learning Labs",
  },
  {
    id: 8,
    url: "https://stage.learnedze.com/chemicalTwo.svg",
    text: "Engineering Test Beds",
  },
  {
    id: 9,
    url: "https://stage.learnedze.com/flowchart.svg",
    text: "Design/PoC/PoV Demos",
  },
  {
    id: 10,
    url: "https://stage.learnedze.com/database.svg",
    text: "Virtual Sandboxes",
  },
  {
    id: 11,
    url: "https://stage.learnedze.com/flowchart.svg",
    text: "Implementation",
  },
];

const About = () => {
  return (
    <div className="about_bg_container">
      <div className="abot_details_container">
        <div className="abou_details">
          <h1 className="about_head_1">Learnedze</h1>
          <h1 className="about_head_2">Networks!</h1>
          <p className="about_desc">
            <span className="span_head_1">Learnedze</span>{" "}
            <span className="span_head_2">Networks</span> is an ed-tech company
            based out of India. Learnedze provides{" "}
            <span className="span_abot">on-demand labs</span> as a service to
            organizations in the networking industry. Focusing on{" "}
            <span className="span_abot">
              technology learning labs, sandbox labs, proof of concept labs &
              demos, training & consulting
            </span>
            on networking technologies.
          </p>
        </div>
        <div className="about_imges_container">
          <div className="bg_image_1"></div>
          <div className="bg_image_2"></div>
          <img
            src="https://stage.learnedze.com/3d-business-man-and-woman-working-with-laptop.png"
            alt="about_images"
            className="about_images"
          />
        </div>
      </div>

      {/*............we offer.........*/}
      <div className="offer_bg_container">
        <div className="we_offer_details_container">
          <div className="offer_head_container">
            <h1 className="we_offer_head">What We Offer ?</h1>
          </div>
          <div className="offer_items_container">
            {weOfferData.map((each) => (
              <EachCard each={each} key={each.id} />
            ))}
          </div>
        </div>
      </div>

      {/*............feedback........*/}
      <div className="customer_feedback_bg_container">
        <div className="feedback_container">
          <div className="offer_head_container">
            <h1 className="we_offer_head">What We Offer ?</h1>
          </div>
          <div className="details_feedback_container">
            <h1 className="feedback_head">CGI Information Systems</h1>
            <p className="feedback_para">
              The trainer is good. Great presentation by him and explained every
              topic very well also helped us if we faced any issue during lab
              and resolve every query. Srikanth is very good in presentation and
              has knowledge of the subject. Very informative while discussing
              with him.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
