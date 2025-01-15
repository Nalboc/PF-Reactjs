import FlexContainer from "./FlexContainer";

export function ItemDetail(props) {
  const { price, title, category, text, img } = props;
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
          <button>comprar</button>
        </div>
      </div>
    </FlexContainer>
  );
}
