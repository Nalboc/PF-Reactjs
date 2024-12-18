import CardProduct from "./CardProduct";
import FlexContainer from "./FlexContainer";
import getAsyncData from "../data/getAsyncData";
import { useState, useEffect } from "react";
export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  console.log("render de itemlist");
  useEffect(() => {
    const respuestaPromise = getAsyncData();
    console.log(respuestaPromise);
    respuestaPromise
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => alert(error));
  }, []);
  const list = products.map((prod) => (
    <CardProduct
      key={prod.id}
      title={prod.title}
      price={prod.price}
      text={prod.category}
      img={prod.img}
    />
  ));
  return (
    <div>
      <FlexContainer>{list}</FlexContainer>
    </div>
  );
}
