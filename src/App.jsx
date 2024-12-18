import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <section>
        <ItemListContainer></ItemListContainer>
      </section>
      <section>
        <ItemCount />
      </section>
    </>
  );
}

export default App;
