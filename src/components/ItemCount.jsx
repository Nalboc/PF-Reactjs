import { useState } from "react";

export default function ItemCount() {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    setCount(count < 10 ? count + 1 : count);
  };
  const handleSubstract = () => {
    setCount(count > 1 ? count - 1 : count);
  };
  return (
    <div>
      <button onClick={handleSubstract}>➖</button>
      <span>{count}</span>
      <button onClick={handleAdd}>➕</button>
    </div>
  );
}
