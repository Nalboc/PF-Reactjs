import { useEffect, useState } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import Loader from "./Loader";
export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);
  if (product) return <ItemDetail {...product} />;
  else return <Loader />;
}
