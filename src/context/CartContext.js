import {createContext, useState} from 'react';
//cloudinary

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [TotalPrice, setTotalPrice] = useState(0);
    const [CantidadProductos,setCantidadProductos] = useState(0);
    const [ Ordencart , setOrdenCart] = useState([]);
    const [ TotalPriceGuardar , setTotalPriceGuardar] = useState(0);
    const [ NewStock , setStock] = useState(0);
    
    //Crear items al carrito
    const addItem = (cantidad, items) =>{
        console.log(items.id);
        if(isOnCart(items.id)){
            console.log('entra');
            sumarCantidad(cantidad,items);         
        }else{
            setCart([...cart, {...items, cantidad }]);
            // SumarPrecio(items);
        }
        let newCantidad=CantidadProductos+cantidad;
        console.log(newCantidad);
        setCantidadProductos(newCantidad);
    }
    // console.log(cart);s

    //revisar si esta en el carrot
    const isOnCart=(id)=>{
        console.log(id);
        const resp = cart.some((prod)=>prod.id === id);
        console.log(resp);
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
    const SumarPrecio = (price,cantidad) =>{
        console.log(cantidad);
        const PrecioTotal = TotalPrice+(price*cantidad);
        setTotalPrice(PrecioTotal);
    }
    const vaciarCarrito= ()=>{
         setCart([]);
         setCantidadProductos(0);
         setTotalPrice(0);
    }
    const deleteItemId = (id,cantidad,price)=>{
        setCart(cart.filter((producto)=>producto.id !== id));
        const can=cart.filter((producto)=>producto.id !==id);
        if(can.length>0){
            setCantidadProductos(CantidadProductos-cantidad);
            let newTotalPrice=TotalPrice-(cantidad*price);
            console.log(newTotalPrice);
            setTotalPrice(newTotalPrice);
        }else{
            setCantidadProductos(0);
            console.log(TotalPrice);
            setTotalPrice(0);
        }

    }

    const OrdenDeCompra = (ordenCart,totalPrice,stock)=>{
        setOrdenCart(ordenCart);
        setTotalPriceGuardar(totalPrice);
        // setStock(stock);
    }
    

    return <CartContext.Provider value ={{cart, 
                                        addItem,
                                        vaciarCarrito,
                                        deleteItemId,
                                        TotalPrice,
                                        SumarPrecio,
                                        CantidadProductos,
                                        OrdenDeCompra,
                                        Ordencart,
                                        TotalPriceGuardar,
                                        NewStock
                                    }}>{children}</CartContext.Provider>
};

export default CartContextProvider;