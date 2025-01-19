import FlexContainer from "./FlexContainer";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";

export function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { id, price, title, category, text, img } = props;
  const { addItem } = useContext(cartContext);
  function handleAddToCart(count) {
    console.log(`Agregaste ${count}`);
    addItem({ id, price, title, count, img });
    setIsAddedToCart(true);
  }
  return (
    <FlexContainer>
      <div>
        <img src={img} alt="product img" />
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
          <div>
            <p>{price}</p>
          </div>
          <p>{category}</p>
        </div>
        <div>
          {isAddedToCart ? (
            <button>Ver carrito</button>
          ) : (
            <ItemCount onSubmitCount={handleAddToCart}></ItemCount>
          )}
        </div>
      </div>
    </FlexContainer>
  );
}
