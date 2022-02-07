import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
// import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  return (
     <div>
      <NavBar />
      <div style={{textAlign: 'center'}}>
        <h3>Armucura</h3>
        <ItemListContainer greeetings="Finanzas Crypto" />

      </div>

    </div>


  );
}

export default App;
