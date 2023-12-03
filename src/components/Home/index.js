import CardList from "../CardList";
import "./index.css";

const data = [
  {
    id: 0,
    imageUrl: "https://stage.learnedze.com/laptop.svg",
    text: "Virtual Workshop",
  },
  {
    id: 1,
    imageUrl: "https://stage.learnedze.com/peers.svg",
    text: "Virtual Workshop",
  },
  {
    id: 2,
    imageUrl: "https://stage.learnedze.com/desktop.svg",
    text: "Virtual Workshop",
  },
  {
    id: 3,
    imageUrl: "https://stage.learnedze.com/classroom.svg",
    text: "Virtual Workshop",
  },
  {
    id: 4,
    imageUrl: "https://stage.learnedze.com/chemical.svg",
    text: "Virtual Workshop",
  },
  {
    id: 5,
    imageUrl: "https://stage.learnedze.com/consulting.svg",
    text: "Virtual Workshop",
  },
  {
    id: 6,
    imageUrl: "https://stage.learnedze.com/videoOnDemand.svg",
    text: "Virtual Workshop",
  },
  {
    id: 7,
    imageUrl: "https://stage.learnedze.com/time.svg",
    text: "Virtual Workshop",
  },
  {
    id: 8,
    imageUrl: "https://stage.learnedze.com/chemicalTwo.svg",
    text: "Virtual Workshop",
  },
  {
    id: 9,
    imageUrl: "https://stage.learnedze.com/flowchart.svg",
    text: "Virtual Workshop",
  },
  {
    id: 10,
    imageUrl: "https://stage.learnedze.com/database.svg",
    text: "Virtual Workshop",
  },
];

const Home = () => {
  return (
    <div className="bg_container">
      <div className="home_details">
        {/*...........content coontainer....................*/}
        <div className="home_content_container">
          <h1 className="home_header_style">Learnedze</h1>
          <h1 className="home_header_style_1">Networks!</h1>
          <p className="home_header_descr_style">
            <span className="span_title_style">Learnedze </span>
            <span className="span_title_style_1">Networks</span> is an ed-tech
            company based out of India. Learnedze provides{" "}
            <span className="span_style">on-demand labs</span> as a service to
            organizations in the networking industry. Focusing on
            <span className="span_style">
              technology learning labs, sandbox labs, proof of concept labs &
              demos, training & consulting
            </span>
            on networking technologies.
          </p>
        </div>
        {/*......................................*/}

        <div className="image_container">
          <div className="bg_cards"></div>
          <div className="bg_cards_1"></div>
          <img
            src="https://stage.learnedze.com/3d-business-man-and-woman-working-with-laptop.png"
            alt="home_image"
            className="home_image"
          />
        </div>
      </div>
      <div className="offer_container">What we offer?</div>
      <div className="items_view_container">
        {data.map((each) => (
          <CardList key={each.id} each={each} />
        ))}
      </div>
      <div className="offer_container">Customer Feedback</div>

      <div className="customer_feedback_container">
        <h2 className="feed_header">CGI Information Systems</h2>
        <p className="feed_description">
          The trainer is good. Great presentation by him and explained every
          topic very well also helped us if we faced any issue during lab and
          resolve every query. Srikanth is very good in presentation and has
          knowledge of the subject. Very informative while discussing with
          him11.
        </p>
      </div>
    </div>
  );
};

export default Home;
