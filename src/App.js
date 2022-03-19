import './App.css';
import Logo from './Components/Logo/Logo';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {Routes, Route, Link} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './Components/Cart/Cart';
import AddItemContainer from './Components/UserItemContainer/UserItemContainer'
import ItemCount from './Components/ItemListContainer/ItemCount'


function App() {
  return (
  <CartContextProvider>
    <div>
      { /* El header va a quedar fijo */ }
      <header>
        <div className='desktop-container'> { /* Esto es JSX no es HTML! */ } 
          <div className='logo-container'>
            <Link to="/" className='mi-clase-personalizada'>
              <Logo />

            </Link>
          </div>
          <NavBar />
        </div>
      </header>
      <main></main>

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
          <Route path="/count"
          element={<ItemCount/>} />
        </Routes>


      </div>
  </div>
</CartContextProvider>

  );
}

export default App;
