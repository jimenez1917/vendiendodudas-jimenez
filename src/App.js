import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
// import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {useParams} from 'react-router-dom';




function App() {
  return (
     <div>
      <NavBar />
      <div style={{textAlign: 'center'}}>

        <Routes>
          <Route path="/category/:category"
          element={<ItemListContainer greetings="Armucura" />}/>
          <Route path="/" 
          element={<ItemListContainer greetings="Armucura" />} />
          <Route path='/producto/:id'
          element={<ItemDetailContainer/>}/>
        </Routes>


      </div>
    </div>

  );
}

export default App;
