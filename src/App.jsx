import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCount from "./components/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <section>
                <ItemListContainer>Tienda de bicicletas</ItemListContainer>
              </section>
              <section>
                <ItemCount />
              </section>
            </div>
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route
          path="/category/:catid"
          element={<ItemListContainer>Catalogo filtrado</ItemListContainer>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
