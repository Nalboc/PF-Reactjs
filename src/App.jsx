import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer text = "Bienvenido, esto es una tienda de bicicletas."></ItemListContainer>
    </>
  )
}

export default App
