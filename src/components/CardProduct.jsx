import "./CardProduct.css";
export default function CardProduct(props) {
  const { price, title, text, img, id } = props;
  return (
    <div className="card">
      <img src={img} width="150" height="150" alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
      <p className="card-price">${price}</p>
    </div>
  );
}
