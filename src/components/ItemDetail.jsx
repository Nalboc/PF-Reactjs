import "./FlexItemDetail.css";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { Link } from "react-router-dom";

export function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { id, price, title, category, text, img } = props;
  const { addItem } = useContext(cartContext);
  function handleAddToCart(count) {
    console.log(`Agregaste ${count} ${title}`);
    addItem({ id, price, title, count, img });
    setIsAddedToCart(true);
  }
  return (
    <div className="card">
      <img src={img} alt="product img" />
      <div className="descripcion">
        <h3>{title}</h3>
        <div>
          <p>{price}</p>
        </div>
        <p>{category}</p>
      </div>
      <div className="buttons">
        {isAddedToCart ? (
          <Link to={"/Cart"}>
            <button>Ver carrito</button>
          </Link>
        ) : (
          <ItemCount onSubmitCount={handleAddToCart}></ItemCount>
        )}
      </div>
    </div>
  );
}
