import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
// import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
     <><NavBar />
     <div>
      <h3>Productos</h3>
      <ItemListContainer productos="Finanzas Crypto" />
      <ItemListContainer productos="Enseñar Consciencia" />
      <ItemListContainer productos="Sale de la Dualidad" />
    </div>
    </>


  );
}

export default App;
