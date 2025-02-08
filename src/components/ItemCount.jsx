import { useState } from "react";
import "./FlexItemDetail.css";

export default function ItemCount(props) {
  const [count, setCount] = useState(1);
  const { onSubmitCount } = props;
  const handleAdd = () => {
    setCount(count < 10 ? count + 1 : count);
  };
  const handleSubstract = () => {
    setCount(count > 1 ? count - 1 : count);
  };
  return (
    <div>
      <div className="ItemCount">
        <button onClick={handleSubstract}>➖</button>
        <span>{count}</span>
        <button onClick={handleAdd}>➕</button>
      </div>
      <div>
        <button
          onClick={() => {
            onSubmitCount(count);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
//TODO: EL MAX == STOCK DE ITEM
