import React, {useState,useContext} from 'react';
import { addDoc , collection } from "firebase/firestore";
import { db } from "../../firebase";
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

const AddItemContainer = ()=> {
    const { TotalPriceGuardar , Ordencart ,cart, vaciarCarrito, TotalPrice , CantidadProductos } = useContext(CartContext);

    const [name,setName] =useState("");
    const [phone,setPhone] =useState("");
    const [mail,setMail] =useState("");
    const [mail2,setMail2] =useState("");
    const [flag,setFlag]=useState(false);
    const [IdCompra,setIdCompra]=useState('');


    const handleNameChange = event => setName(event.target.value);
    const handlePhoneChange = event => setPhone(event.target.value);
    const handleMailChange = event => {
        setMail(event.target.value);
    }
    const handleMail2Change = event => {
        if(mail === event.target.value){
            setMail2(event.target.value);
        }else{
            setMail2('');
        }

    }
    const onSubmit= async (event) => {

            console.log('entra')
            event.preventDefault();
            if(![name,phone,mail]!==""){
                
                const itemcollection = collection(db,"userCart")
                
                const newUser = {buyer:{name:name,
                    phone:phone,
                    mail:mail},
                    items: Ordencart,
                    date: Date.now(),
                    total:TotalPriceGuardar
                }
                addDoc(itemcollection, newUser).then((doc) =>{
                    setIdCompra(doc.id);
                })
            }
            setFlag(true);
            vaciarCarrito();
    }
 
    return(
        <div className="container sm-6">
            { !flag?(<>
                <div>
            <div className="titlecard">
                <h1>Tu Carrito</h1>           
            </div>
        {cart.length === 0 ? (<>
                <h2>Aun no hay productos</h2>
                <Link to='/'>Home</Link>     
            </>) :
            (<>
            <div className="actions">
                <h3>Cantidad de Items a comprar: {CantidadProductos}</h3>
                <h3>Total: ${TotalPrice}US</h3>       
            </div>
            <div className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
            {cart.map((product)=>(
                <tbody  key={product.id}>
                    <tr>
                        <td><img src={product.img} alt={product.title}/></td>
                        <th scope="row">{product.cantidad}</th>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        </tr>
                </tbody>
            ))}
            </div>             
            </>)
        }
        </div>
            <h1>Ingrese Orden de correcta</h1>
            <form onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                    <input name="name" type="text" className="form-control" id="floatingInput" placeholder="Name" onChange={handleNameChange}/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="phone" type="text" className="form-control" id="floatingInput" placeholder="phone" onChange={handlePhoneChange}/>
                    <label htmlFor="floatingInput">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="email" onChange={handleMailChange}/>
                    <label htmlFor="floatingInput">email</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="email2" type="email" className="form-control" id="floatingInput" placeholder="repetir mail" onChange={handleMail2Change}/>
                    <label htmlFor="floatingInput">Confirmacion email</label>
                </div>
                { mail2!=='' ? <>
                <div className="col-mb-3">
                    <button type="submit" className="btn btn-dark">Enviar</button>
                </div>
                </>:<>
                    <p>El correo no esta verificado, fijese en tener el mismo correo</p>
                </>}
            </form>
            </>
            ):<>
            { ! IdCompra ? <>
                <p>Agregando Orden, espera un momento ...</p>
            </>:<>
                <div> 
                    <p>Tu id de compra es: {IdCompra}</p>
                    <Link to='/'>
                        <p>Ir al home</p>
                    </Link>
                </div>
            </>}
            </>
        }
    </div>
    )
}

export default AddItemContainer;