import {createContext, useState} from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    //Crear items al carrito
    const addItem = (cantidad, items) =>{
        if(isOnCart(items.id)){
            sumarCantidad(cantidad,items);
        }else{
            setCart([...cart, {...items, cantidad }]);
        }
    }
    // console.log(cart);

    //revisar si esta en el carrot
    const isOnCart=(id)=>{
        const resp = cart.some((prod)=>prod.id === id);
        return resp;    
    }

    const sumarCantidad = (cantidad,items) =>{
        const copia = [...cart]
        copia.forEach((producto)=>{
            if(producto.id === items.id){
                producto.cantidad += cantidad;
            }
        })
    }

    const vaciarCarrito= ()=>{
         setCart([]);
    }

    const deleteItemId = (id)=>{
        console.log(id);
        setCart(cart.filter((producto)=>producto.id !== id));
    }
    

    console.log(cart);
    return <CartContext.Provider value ={{cart, addItem, vaciarCarrito , deleteItemId}}>{children}</CartContext.Provider>
};

export default CartContextProvider;