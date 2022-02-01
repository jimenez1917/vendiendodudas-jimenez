import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
// import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  return (
     <><NavBar />
     <div>
      <h3>Productos</h3>
      <ItemListContainer productos="Finanzas Crypto" />
      <ItemCount stock = {3} inicial={1}></ItemCount>
      <ItemListContainer productos="Enseñar Consciencia" />
      <ItemCount stock = {5} inicial={2}></ItemCount>
      <ItemListContainer productos="Sale de la Dualidad" />
      <ItemCount stock = {8} inicial={3}></ItemCount>
    </div>

    </>


  );
}

export default App;
