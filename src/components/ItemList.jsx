import FlexContainer from "./FlexContainer";
import Item from "./Item";
export default function ItemList(props) {
  return (
    <FlexContainer>
      {props.products.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          img={item.img}
        />
      ))}
    </FlexContainer>
  );
}
