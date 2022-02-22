import {createContext, useState} from 'react';

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [TotalPrice, setTotalPrice] = useState(0);
    const [CantidadProductos,setCantidadProductos] = useState(0);
    //Crear items al carrito
    const addItem = (cantidad, items) =>{
        if(isOnCart(items.id)){
            sumarCantidad(cantidad,items);         
        }else{
            setCart([...cart, {...items, cantidad }]);
            // SumarPrecio(items);
        }
        let newCantidad=CantidadProductos+cantidad;
        console.log(newCantidad);
        setCantidadProductos(newCantidad);
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
    const SumarPrecio = (price) =>{
        const PrecioTotal = TotalPrice+price
        setTotalPrice(PrecioTotal);
    }

    const vaciarCarrito= ()=>{
         setCart([]);
         setCantidadProductos(0);
    }

    const deleteItemId = (id,cantidad)=>{
        setCart(cart.filter((producto)=>producto.id !== id));
        const can=cart.filter((producto)=>producto.id !==id);
        if(can.length>0){
            setCantidadProductos(CantidadProductos-cantidad);
        }else{
            setCantidadProductos(0);
        }

    }
    

    return <CartContext.Provider value ={{cart, 
                                        addItem,
                                        vaciarCarrito,
                                        deleteItemId,
                                        TotalPrice,
                                        SumarPrecio,
                                        CantidadProductos
                                    }}>{children}</CartContext.Provider>
};

export default CartContextProvider;