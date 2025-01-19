function CenterFlexContainer(props) {
  const styleFlex = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    gap: "15px",
    minHeigh: "100vh",
    width: "50%",
    justifySelf: "center",
    alignContent: "center",
    textAlign: "center",
    border: "10px solid black",
    backgroundColor: "grey",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default CenterFlexContainer;
