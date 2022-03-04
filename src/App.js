import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
// import CartWidget from './Components/CartWidget/CartWidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {useParams} from 'react-router-dom';
import {useContext} from 'react';
import CartContextProvider from './context/CartContext';
import Cart from './Components/Cart/Cart';
import AddItemContainer from './Components/UserItemContainer/UserItemContainer'


function App() {
  return (

     <CartContextProvider>
      <NavBar />
      <div style={{textAlign: 'center'}}>

        <Routes>
          <Route path="/category/:category"
          element={<ItemListContainer greetings="Armucura" />}/>
          <Route path="/" 
          element={<ItemListContainer greetings="Armucura" />} />
          <Route path='/producto/:id'
          element={<ItemDetailContainer/>}/>
          <Route path='/cart'
          element={<Cart/>}/>
          <Route path="/item/add"
          element={<AddItemContainer/>} />
          <Route path="/checkout"
          element={<AddItemContainer/>} />
        </Routes>


      </div>
    </CartContextProvider>


  );
}

export default App;
