import { Children, createContext, useState } from "react";

const cartContext = createContext("carrito");

export function CartContextProvider(props) {
  const [cartItems, setCardItems] = useState([{ item: 1, count: 30 }]);
  function removeItem(id) {
    const newCartState = cartItems.filter((item) => item.id !== id);
    setCardItems(newCartState);
  }
  function addItem({ id, price, title, count, img }) {
    const copyCartItems = cartItems.map((item) => item);
    copyCartItems.push({
      id: id,
      price: price,
      title: title,
      count: count,
      img: img,
    });
    setCardItems(copyCartItems);
  }
  function countItemsInCart() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count;
    });
    return total;
  }
  return (
    <cartContext.Provider
      value={{
        cartItems: [],
        name: "carrito",
        countItemsInCart,
        addItem,
        removeItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
export default cartContext;
