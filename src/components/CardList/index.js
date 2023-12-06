import "./index.css";

const CardList = (props) => {
  const { each } = props;
  const { url, text } = each;
  return (
    <div className="items_container">
      <img src={url} alt="item_image" className="item_image" />
      <p>{text}</p>
    </div>
  );
};
export default CardList;
