import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
// import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
     <div>
      <NavBar />
      <div style={{textAlign: 'center'}}>
        <h3>Armucura</h3>
        <ItemListContainer greetings="Finanzas Crypto" />
        {/* <ItemDetailContainer></ItemDetailContainer> */}

      </div>

    </div>


  );
}

export default App;
