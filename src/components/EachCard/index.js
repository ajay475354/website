import "./index.css";

const EachCard = (props) => {
  const { each } = props;
  const { url, text } = each;
  return (
    <div className="we_offer_card">
      <img src={url} alt="image_we_offer" className="image_we_offer" />
      <p className="we_offer_card_text">{text}</p>
    </div>
  );
};

export default EachCard;
