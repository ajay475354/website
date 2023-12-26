import "./index.css";

const AboutIcons = (props) => {
  const { each } = props;
  const { icons, text } = each;
  return (
    <div className="card_container_about">
      <img src={icons} alt="about_icon" className="about_icon" />

      <p className="about_title">{text}</p>
    </div>
  );
};

export default AboutIcons;
